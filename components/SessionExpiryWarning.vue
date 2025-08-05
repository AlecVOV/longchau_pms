<template>
  <div
    v-if="showWarning"
    class="fixed top-4 right-4 z-50 bg-white border border-yellow-400 rounded-lg shadow-lg p-4 max-w-sm"
  >
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="ml-3 flex-1">
        <h3 class="text-sm font-medium text-gray-900">Session Expiring Soon</h3>
        <p class="mt-1 text-sm text-gray-600">
          Your session will expire in {{ formatTime(timeRemaining) }}.
        </p>
        <div class="mt-3 flex space-x-2">
          <button
            @click="extendSession"
            :disabled="extending"
            class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
          >
            {{ extending ? 'Extending...' : 'Extend Session' }}
          </button>
          <button
            @click="dismissWarning"
            class="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Dismiss
          </button>
        </div>
      </div>
      <div class="ml-4 flex-shrink-0">
        <button
          @click="dismissWarning"
          class="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span class="sr-only">Close</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const showWarning = ref(false)
const timeRemaining = ref(0)
const extending = ref(false)
const dismissed = ref(false)

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

const extendSession = async () => {
  extending.value = true
  try {
    await authStore.extendSession()
    showWarning.value = false
    dismissed.value = false
  } catch (error) {
    console.error('Failed to extend session:', error)
  } finally {
    extending.value = false
  }
}

const dismissWarning = () => {
  showWarning.value = false
  dismissed.value = true
}

// Watch for session expiry warnings
const checkSessionWarning = () => {
  if (!authStore.isLoggedIn || dismissed.value) {
    showWarning.value = false
    return
  }

  const timeLeft = authStore.getSessionTimeRemaining()
  timeRemaining.value = timeLeft

  // Show warning if less than 5 minutes remaining
  if (timeLeft > 0 && timeLeft <= 300 && !showWarning.value) {
    showWarning.value = true
    dismissed.value = false
  } else if (timeLeft > 300) {
    showWarning.value = false
    dismissed.value = false
  }
}

// Check every 30 seconds
let warningInterval = null

onMounted(() => {
  warningInterval = setInterval(checkSessionWarning, 30000)
  checkSessionWarning() // Initial check
})

onUnmounted(() => {
  if (warningInterval) {
    clearInterval(warningInterval)
  }
})

// Watch for auth changes
watch(() => authStore.isLoggedIn, (isLoggedIn) => {
  if (!isLoggedIn) {
    showWarning.value = false
    dismissed.value = false
  }
})
</script>
