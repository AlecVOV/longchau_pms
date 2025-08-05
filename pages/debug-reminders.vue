<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Medication Reminder Debug Test</h1>
    
    <div class="space-y-6">
      <!-- Current State -->
      <div class="bg-gray-100 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-3">Current State</h2>
        <button @click="checkCurrentState" class="btn-primary mb-3">
          Check Current State
        </button>
        <pre v-if="currentState" class="bg-white p-3 rounded text-sm overflow-auto">{{ JSON.stringify(currentState, null, 2) }}</pre>
      </div>

      <!-- Create Test Reminder -->
      <div class="bg-blue-50 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-3">Create Test Reminder</h2>
        <button @click="createTestReminder" class="btn-primary mb-3" :disabled="loading">
          {{ loading ? 'Creating...' : 'Create Test Reminder' }}
        </button>
        <pre v-if="createResult" class="bg-white p-3 rounded text-sm overflow-auto">{{ JSON.stringify(createResult, null, 2) }}</pre>
      </div>

      <!-- Load Reminders -->
      <div class="bg-green-50 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-3">Load Reminders</h2>
        <button @click="loadReminders" class="btn-primary mb-3">
          Load Reminders from API
        </button>
        <pre v-if="loadResult" class="bg-white p-3 rounded text-sm overflow-auto">{{ JSON.stringify(loadResult, null, 2) }}</pre>
      </div>

      <!-- Delete Test -->
      <div class="bg-red-50 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-3">Delete Test</h2>
        <div class="flex gap-2 mb-3">
          <input 
            v-model="deleteId" 
            type="number" 
            placeholder="Reminder ID to delete"
            class="form-input flex-1"
          >
          <button @click="deleteTestReminder" class="btn-primary">
            Delete
          </button>
        </div>
        <pre v-if="deleteResult" class="bg-white p-3 rounded text-sm overflow-auto">{{ JSON.stringify(deleteResult, null, 2) }}</pre>
      </div>

      <!-- Console Log -->
      <div class="bg-yellow-50 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-3">Console Log</h2>
        <div class="bg-white p-3 rounded text-sm max-h-40 overflow-auto">
          <div v-for="log in logs" :key="log.id" class="border-b py-1">
            <span class="text-gray-500 text-xs">{{ log.time }}</span> - {{ log.message }}
          </div>
        </div>
        <button @click="clearLogs" class="btn-outline mt-2">Clear Logs</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const loading = ref(false)
const currentState = ref(null)
const createResult = ref(null)
const loadResult = ref(null)
const deleteResult = ref(null)
const deleteId = ref(1)
const logs = ref([])

const addLog = (message) => {
  logs.value.unshift({
    id: Date.now(),
    time: new Date().toLocaleTimeString(),
    message
  })
  console.log(message)
}

const clearLogs = () => {
  logs.value = []
}

const checkCurrentState = async () => {
  try {
    addLog('Checking current state...')
    const response = await $fetch('/api/debug/reminders')
    currentState.value = response
    addLog(`Current state: ${response.debug.totalReminders} reminders`)
  } catch (error) {
    addLog(`Error checking state: ${error.message}`)
    currentState.value = { error: error.message }
  }
}

const createTestReminder = async () => {
  loading.value = true
  try {
    addLog('Creating test reminder...')
    const testData = {
      medicationName: 'Test Medicine ' + Date.now(),
      dosage: '100mg',
      frequency: 'daily',
      timeSlots: ['08:00', '20:00'],
      notes: 'Test reminder for debugging'
    }
    
    addLog(`Test data: ${JSON.stringify(testData)}`)
    
    const response = await $fetch('/api/medication-reminders', {
      method: 'POST',
      body: testData,
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    
    createResult.value = response
    addLog(`✅ Reminder created successfully! ID: ${response.reminder.id}`)
    
    // Check state after creation
    await checkCurrentState()
    
  } catch (error) {
    addLog(`❌ Error creating reminder: ${error.message}`)
    createResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const loadReminders = async () => {
  try {
    addLog('Loading reminders from API...')
    const response = await $fetch('/api/medication-reminders', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    
    loadResult.value = response
    addLog(`✅ Loaded ${response.reminders.length} reminders`)
    
  } catch (error) {
    addLog(`❌ Error loading reminders: ${error.message}`)
    loadResult.value = { error: error.message }
  }
}

const deleteTestReminder = async () => {
  try {
    addLog(`Attempting to delete reminder ID: ${deleteId.value}`)
    
    const response = await $fetch(`/api/medication-reminders/${deleteId.value}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    
    deleteResult.value = response
    addLog(`✅ Reminder deleted successfully!`)
    
    // Check state after deletion
    await checkCurrentState()
    
  } catch (error) {
    addLog(`❌ Error deleting reminder: ${error.message}`)
    deleteResult.value = { error: error.message }
  }
}

// Initial state check
onMounted(() => {
  addLog('Debug page loaded')
  if (!authStore.token) {
    addLog('❌ No auth token found - please login first')
  }
})
</script>
