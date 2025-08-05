<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Medication Reminders</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Add new reminder form -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-semibold text-neutral-800 mb-4">
              {{ isEditing ? 'Edit Reminder' : 'Add New Reminder' }}
            </h2>
            <form @submit.prevent="addReminder" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Medication Name *</label>
                <input v-model="newReminder.medicationName" type="text" class="input" required placeholder="Enter medication name">
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Dosage</label>
                <input v-model="newReminder.dosage" type="text" class="input" placeholder="e.g., 1 tablet, 5ml">
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Frequency *</label>
                <select v-model="newReminder.frequency" class="input" required>
                  <option value="daily">Daily</option>
                  <option value="twice-daily">Twice Daily</option>
                  <option value="three-times-daily">Three Times Daily</option>
                  <option value="every-8-hours">Every 8 hours</option>
                  <option value="every-12-hours">Every 12 hours</option>
                  <option value="weekly">Weekly</option>
                  <option value="as-needed">As Needed</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Reminder Times</label>
                <div class="space-y-2">
                  <div v-for="(time, index) in newReminder.timeSlots" :key="index" class="flex items-center gap-2">
                    <input v-model="newReminder.timeSlots[index]" type="time" class="input flex-1">
                    <button type="button" @click="removeTimeSlot(index)" class="text-red-500 hover:text-red-700 p-1 rounded border hover:bg-red-50">
                      🗑️
                    </button>
                  </div>
                  <button type="button" @click="addTimeSlot" class="text-sm text-primary-600 hover:text-primary-700">
                    + Add Time
                  </button>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Notes</label>
                <textarea v-model="newReminder.notes" class="input h-20" placeholder="Any additional notes"></textarea>
              </div>
              <div class="flex gap-2">
                <button type="submit" class="btn-primary flex-1" :disabled="loading">
                  <span v-if="loading" class="i-iconify-ph-spinner text-lg animate-spin mr-2"></span>
                  {{ isEditing ? 'Update Reminder' : 'Add Reminder' }}
                </button>
                <button 
                  v-if="isEditing" 
                  type="button" 
                  @click="cancelEdit" 
                  class="btn-outline px-4"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <!-- Current reminders -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="p-6 border-b border-neutral-200">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-neutral-800">Your Active Reminders</h2>
                <div class="flex items-center gap-2">
                  <button 
                    @click="loadReminders"
                    class="btn-outline text-sm px-3 py-1"
                    title="Refresh reminders"
                  >
                    Refresh
                  </button>
                  <button 
                    @click="showActive = true" 
                    :class="showActive ? 'btn-primary' : 'btn-outline'"
                    class="text-sm px-3 py-1"
                  >
                    Active
                  </button>
                  <button 
                    @click="showActive = false" 
                    :class="!showActive ? 'btn-primary' : 'btn-outline'"
                    class="text-sm px-3 py-1"
                  >
                    All
                  </button>
                </div>
              </div>
            </div>
            
            <div v-if="loading" class="p-6 text-center">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
              <p class="text-neutral-500 mt-2">Loading reminders...</p>
            </div>
            
            <div v-else-if="filteredReminders.length === 0" class="p-6 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
                <span class="text-2xl">🔕</span>
              </div>
              <p class="text-neutral-500">{{ showActive ? 'No active reminders set up yet.' : 'No reminders found.' }}</p>
            </div>
            
            <div v-else class="divide-y divide-neutral-100">
              <div v-for="reminder in filteredReminders" :key="reminder.id" class="p-6">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <h3 class="font-semibold text-neutral-900">{{ reminder.medicationName }}</h3>
                      <span 
                        :class="reminder.isActive ? 'bg-success-100 text-success-800' : 'bg-neutral-100 text-neutral-800'"
                        class="px-2 py-1 text-xs rounded-full"
                      >
                        {{ reminder.isActive ? 'Active' : 'Inactive' }}
                      </span>
                    </div>
                    
                    <div class="space-y-1 text-sm text-neutral-600">
                      <p v-if="reminder.dosage" class="flex items-center gap-2">
                        <span class="text-primary-500">💊</span>
                        <span>{{ reminder.dosage }}</span>
                      </p>
                      <p class="flex items-center gap-2">
                        <span class="text-primary-500">⏰</span>
                        <span>{{ formatFrequency(reminder.frequency) }}</span>
                      </p>
                      <div v-if="reminder.timeSlots && reminder.timeSlots.length > 0" class="flex items-center gap-2">
                        <span class="text-primary-500">🔔</span>
                        <span>{{ reminder.timeSlots.join(', ') }}</span>
                      </div>
                      <p v-if="reminder.nextReminder" class="flex items-center gap-2">
                        <span class="text-primary-500">📅</span>
                        <span>Next: {{ formatDate(reminder.nextReminder) }}</span>
                      </p>
                      <p v-if="reminder.notes" class="flex items-start gap-2 mt-2">
                        <span class="text-primary-500 mt-0.5">📝</span>
                        <span>{{ reminder.notes }}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 ml-4">
                    <!-- Pause/Resume Button -->
                    <button 
                      @click="toggleReminder(reminder)"
                      :class="reminder.isActive ? 'text-orange-600 hover:text-orange-700 hover:bg-orange-50' : 'text-green-600 hover:text-green-700 hover:bg-green-50'"
                      class="p-2 rounded-lg transition-colors border border-gray-200 hover:border-current"
                      :title="reminder.isActive ? 'Pause reminder' : 'Resume reminder'"
                    >
                      {{ reminder.isActive ? '⏸️' : '▶️' }}
                      <span class="sr-only">{{ reminder.isActive ? 'Pause' : 'Resume' }}</span>
                    </button>
                    
                    <!-- Edit Button -->
                    <button 
                      @click="editReminder(reminder)"
                      class="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-300"
                      title="Edit reminder"
                    >
                      ✏️
                      <span class="sr-only">Edit</span>
                    </button>
                    
                    <!-- Delete Button -->
                    <button 
                      @click="deleteReminder(reminder.id)"
                      class="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors border border-gray-200 hover:border-red-300"
                      title="Delete reminder"
                    >
                      🗑️
                      <span class="sr-only">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useNotificationsStore } from '~/stores/notifications'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  middleware: 'auth'
})

const notifications = useNotificationsStore()
const authStore = useAuthStore()

const reminders = ref([])
const loading = ref(false)
const showActive = ref(true)
const isEditing = ref(false)
const editingReminderId = ref(null)

const newReminder = ref({
  medicationName: '',
  dosage: '',
  frequency: 'daily',
  timeSlots: ['08:00'],
  notes: ''
})

const filteredReminders = computed(() => {
  let filtered = reminders.value
  if (showActive.value) {
    filtered = reminders.value.filter(r => r.isActive)
  }
  return sortReminders([...filtered])
})

// Load reminders from API
const loadReminders = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/medication-reminders', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    
    console.log('=== LOAD REMINDERS DEBUG ===')
    console.log('API Response:', response)
    console.log('Reminders from API:', response.reminders)
    console.log('Number of reminders loaded:', response.reminders?.length || 0)
    
    // Calculate next reminder times and sort
    const processedReminders = (response.reminders || []).map(reminder => ({
      ...reminder,
      nextReminder: reminder.isActive ? calculateNextReminder(reminder.frequency, reminder.timeSlots) : null
    }))
    
    reminders.value = processedReminders
    console.log('Processed reminders with IDs:', reminders.value.map(r => ({ 
      id: r.id, 
      name: r.medicationName,
      idType: typeof r.id 
    })))
    console.log('=== END LOAD REMINDERS DEBUG ===')
  } catch (error) {
    console.error('Error loading reminders:', error)
    notifications.error('Failed to load medication reminders')
  } finally {
    loading.value = false
  }
}

const addReminder = async () => {
  try {
    loading.value = true
    
    if (!validateReminder()) {
      return
    }

    if (isEditing.value) {
      // Update existing reminder
      const response = await $fetch(`/api/medication-reminders/${editingReminderId.value}`, {
        method: 'PATCH',
        body: newReminder.value,
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      })

      const index = reminders.value.findIndex(r => r.id === editingReminderId.value)
      if (index !== -1) {
        reminders.value[index] = response.reminder
      }
      notifications.success('Medication reminder updated successfully!')
      cancelEdit()
    } else {
      // Add new reminder
      console.log('=== CREATING NEW REMINDER ===')
      console.log('Request data:', newReminder.value)
      console.log('Auth token:', authStore.token ? 'EXISTS' : 'MISSING')
      
      const response = await $fetch('/api/medication-reminders', {
        method: 'POST',
        body: newReminder.value,
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      })

      console.log('✅ CREATE SUCCESS - Response:', response)
      console.log('New reminder received:', response.reminder)
      console.log('Current reminders before adding:', reminders.value.length)
      
      reminders.value.unshift(response.reminder)
      
      console.log('Current reminders after adding:', reminders.value.length)
      console.log('All reminder IDs:', reminders.value.map(r => r.id))
      
      notifications.success('Medication reminder added successfully!')
    }
    
    // Reset form
    resetForm()
  } catch (error) {
    console.error('Error saving reminder:', error)
    notifications.error(`Failed to ${isEditing.value ? 'update' : 'add'} medication reminder`)
  } finally {
    loading.value = false
  }
}

const toggleReminder = async (reminder) => {
  try {
    const response = await $fetch(`/api/medication-reminders/${reminder.id}`, {
      method: 'PATCH',
      body: {
        isActive: !reminder.isActive
      },
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    
    reminder.isActive = response.reminder.isActive
    notifications.success(`Reminder ${reminder.isActive ? 'resumed' : 'paused'} successfully`)
  } catch (error) {
    console.error('Error toggling reminder:', error)
    notifications.error('Failed to update reminder')
  }
}

const deleteReminder = async (reminderId) => {
  console.log('=== DELETE FUNCTION CALLED ===')
  console.log('Raw reminderId parameter:', reminderId)
  console.log('Type of reminderId:', typeof reminderId)
  console.log('Is undefined?', reminderId === undefined)
  console.log('Is null?', reminderId === null)
  
  if (!confirm('Are you sure you want to delete this reminder?')) {
    return
  }

  try {
    // Refresh data first to ensure we have the latest state
    console.log('🔄 Refreshing data before delete...')
    await loadReminders()
    
    console.log('=== DELETE REMINDER DEBUG ===')
    console.log('Attempting to delete reminder:', { 
      id: reminderId, 
      type: typeof reminderId,
      currentReminders: reminders.value.map(r => ({ id: r.id, name: r.medicationName, type: typeof r.id }))
    })
    console.log('Auth token exists:', !!authStore.token)
    console.log('User info:', { userId: authStore.user?.id, email: authStore.user?.email })
    
    // Check if reminderId is valid
    if (reminderId === undefined || reminderId === null) {
      console.log('❌ Invalid reminderId - cannot proceed with delete')
      notifications.error('Invalid reminder ID - cannot delete')
      return
    }
    
    // Check if reminder exists in current list (after refresh)
    const reminderExists = reminders.value.find(r => r.id === reminderId)
    console.log('Reminder exists in current list (after refresh):', !!reminderExists)
    if (reminderExists) {
      console.log('Found reminder to delete:', { 
        id: reminderExists.id, 
        name: reminderExists.medicationName,
        userId: reminderExists.userId 
      })
    } else {
      console.log('❌ Reminder not found in current list even after refresh!')
      console.log('Available reminder IDs:', reminders.value.map(r => r.id))
      console.log('Looking for ID:', reminderId)
      notifications.error('Reminder no longer exists - data refreshed')
      return
    }
    
    const response = await $fetch(`/api/medication-reminders/${reminderId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    
    console.log('Delete response:', response)
    reminders.value = reminders.value.filter(r => r.id !== reminderId)
    notifications.success('Reminder deleted successfully')
  } catch (error) {
    console.error('=== DELETE ERROR ===')
    console.error('Error deleting reminder:', error)
    console.log('Error details:', {
      status: error.status,
      statusCode: error.statusCode,
      statusMessage: error.statusMessage,
      data: error.data
    })
    notifications.error('Failed to delete reminder: ' + (error.data?.statusMessage || error.statusMessage || error.message))
  }
}

const editReminder = (reminder) => {
  isEditing.value = true
  editingReminderId.value = reminder.id
  
  newReminder.value = {
    medicationName: reminder.medicationName,
    dosage: reminder.dosage || '',
    frequency: reminder.frequency,
    timeSlots: [...(reminder.timeSlots || ['08:00'])],
    notes: reminder.notes || ''
  }
  
  // Scroll to form
  window.scrollTo({ top: 0, behavior: 'smooth' })
  notifications.info('Editing reminder - modify details and click "Update Reminder"')
}

const cancelEdit = () => {
  isEditing.value = false
  editingReminderId.value = null
  resetForm()
  notifications.info('Edit cancelled')
}

const resetForm = () => {
  newReminder.value = {
    medicationName: '',
    dosage: '',
    frequency: 'daily',
    timeSlots: ['08:00'],
    notes: ''
  }
}

const validateReminder = () => {
  if (!newReminder.value.medicationName.trim()) {
    notifications.error('Please enter a medication name')
    return false
  }
  
  if (!validateTimeSlots()) {
    return false
  }
  
  return true
}

const validateTimeSlots = () => {
  for (const timeSlot of newReminder.value.timeSlots) {
    if (!timeSlot || !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(timeSlot)) {
      notifications.error('Please enter valid time slots (HH:MM format)')
      return false
    }
  }
  return true
}

const sortReminders = (reminders) => {
  return reminders.sort((a, b) => {
    // Sort by active status first, then by next reminder time
    if (a.isActive !== b.isActive) {
      return b.isActive - a.isActive
    }
    if (a.nextReminder && b.nextReminder) {
      return new Date(a.nextReminder) - new Date(b.nextReminder)
    }
    return a.medicationName.localeCompare(b.medicationName)
  })
}

const calculateNextReminder = (frequency, timeSlots) => {
  if (!timeSlots || timeSlots.length === 0) return null
  
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  
  // Find the next time slot today or tomorrow
  for (const timeSlot of timeSlots.sort()) {
    const [hours, minutes] = timeSlot.split(':').map(Number)
    const reminderTime = new Date(today)
    reminderTime.setHours(hours, minutes, 0, 0)
    
    if (reminderTime > now) {
      return reminderTime
    }
  }
  
  // No more times today, get first time tomorrow
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const [hours, minutes] = timeSlots.sort()[0].split(':').map(Number)
  tomorrow.setHours(hours, minutes, 0, 0)
  
  return tomorrow
}

const addTimeSlot = () => {
  newReminder.value.timeSlots.push('09:00')
}

const removeTimeSlot = (index) => {
  if (newReminder.value.timeSlots.length > 1) {
    newReminder.value.timeSlots.splice(index, 1)
  }
}

const formatFrequency = (frequency) => {
  const frequencies = {
    'daily': 'Once daily',
    'twice-daily': 'Twice daily',
    'three-times-daily': 'Three times daily',
    'every-8-hours': 'Every 8 hours',
    'every-12-hours': 'Every 12 hours',
    'weekly': 'Weekly',
    'as-needed': 'As needed'
  }
  return frequencies[frequency] || frequency
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  loadReminders()
})
</script>