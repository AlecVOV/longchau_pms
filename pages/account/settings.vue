<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <h1 class="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p class="mt-1 text-sm text-gray-500">Manage your account preferences and security settings</p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="space-y-8">
        
        <!-- Security Settings -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
          
          <!-- Change Password -->
          <div class="border-b border-gray-200 pb-6 mb-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Password</h3>
                <p class="text-sm text-gray-500">Update your password to keep your account secure</p>
              </div>
              <button @click="showPasswordForm = !showPasswordForm" 
                      class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                {{ showPasswordForm ? 'Cancel' : 'Change Password' }}
              </button>
            </div>

            <!-- Password Change Form -->
            <div v-if="showPasswordForm" class="mt-6">
              <form @submit.prevent="changePassword" class="space-y-4 max-w-md">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input v-model="passwordForm.current" 
                         type="password" 
                         required
                         class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input v-model="passwordForm.new" 
                         type="password" 
                         required
                         minlength="8"
                         class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input v-model="passwordForm.confirm" 
                         type="password" 
                         required
                         minlength="8"
                         class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div class="flex space-x-3">
                  <button type="submit" :disabled="changingPassword"
                          class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
                    {{ changingPassword ? 'Updating...' : 'Update Password' }}
                  </button>
                  <button type="button" @click="showPasswordForm = false"
                          class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Two-Factor Authentication -->
          <div class="border-b border-gray-200 pb-6 mb-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                <p class="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <div class="flex items-center">
                <span class="text-sm text-gray-500 mr-3">
                  {{ twoFactorEnabled ? 'Enabled' : 'Disabled' }}
                </span>
                <button @click="toggleTwoFactor" 
                        :class="twoFactorEnabled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'"
                        class="relative inline-flex items-center h-6 w-11 rounded-full transition-colors">
                  <span :class="twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block w-4 h-4 bg-white rounded-full transition-transform"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Login Sessions -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Active Sessions</h3>
                <p class="text-sm text-gray-500">Manage devices that are signed into your account</p>
              </div>
              <button @click="revokeAllSessions" 
                      class="text-sm text-red-600 hover:text-red-500 font-medium">
                Sign out all devices
              </button>
            </div>
            
            <div class="space-y-3">
              <div v-for="session in activeSessions" :key="session.id" 
                   class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path v-if="session.device === 'desktop'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">{{ session.browser }} on {{ session.os }}</div>
                    <div class="text-sm text-gray-500">{{ session.location }} • {{ session.lastActive }}</div>
                    <div v-if="session.current" class="text-xs text-green-600 font-medium">Current session</div>
                  </div>
                </div>
                <button v-if="!session.current" 
                        @click="revokeSession(session.id)"
                        class="text-sm text-red-600 hover:text-red-500 font-medium">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Privacy Settings -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Privacy Settings</h2>
          
          <div class="space-y-6">
            <!-- Data Usage -->
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Analytics & Cookies</h3>
                <p class="text-sm text-gray-500">Help us improve by sharing usage data</p>
              </div>
              <button @click="privacySettings.analytics = !privacySettings.analytics" 
                      :class="privacySettings.analytics ? 'bg-blue-600' : 'bg-gray-300'"
                      class="relative inline-flex items-center h-6 w-11 rounded-full transition-colors">
                <span :class="privacySettings.analytics ? 'translate-x-6' : 'translate-x-1'"
                      class="inline-block w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>

            <!-- Marketing -->
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Marketing Communications</h3>
                <p class="text-sm text-gray-500">Receive promotional emails and updates</p>
              </div>
              <button @click="privacySettings.marketing = !privacySettings.marketing" 
                      :class="privacySettings.marketing ? 'bg-blue-600' : 'bg-gray-300'"
                      class="relative inline-flex items-center h-6 w-11 rounded-full transition-colors">
                <span :class="privacySettings.marketing ? 'translate-x-6' : 'translate-x-1'"
                      class="inline-block w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>

            <!-- Profile Visibility -->
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Profile Visibility</h3>
                <p class="text-sm text-gray-500">Make your profile visible to other users</p>
              </div>
              <button @click="privacySettings.profileVisible = !privacySettings.profileVisible" 
                      :class="privacySettings.profileVisible ? 'bg-blue-600' : 'bg-gray-300'"
                      class="relative inline-flex items-center h-6 w-11 rounded-full transition-colors">
                <span :class="privacySettings.profileVisible ? 'translate-x-6' : 'translate-x-1'"
                      class="inline-block w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
          
          <div class="space-y-6">
            <!-- Email Notifications -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-sm font-medium text-gray-900">Order Updates</span>
                    <p class="text-sm text-gray-500">Receive emails about your order status</p>
                  </div>
                  <input v-model="notifications.orderUpdates" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded">
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-sm font-medium text-gray-900">Prescription Reminders</span>
                    <p class="text-sm text-gray-500">Get reminded when it's time to refill</p>
                  </div>
                  <input v-model="notifications.prescriptionReminders" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded">
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-sm font-medium text-gray-900">Health Tips</span>
                    <p class="text-sm text-gray-500">Receive weekly health and wellness tips</p>
                  </div>
                  <input v-model="notifications.healthTips" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded">
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-sm font-medium text-gray-900">Special Offers</span>
                    <p class="text-sm text-gray-500">Get notified about discounts and promotions</p>
                  </div>
                  <input v-model="notifications.specialOffers" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded">
                </div>
              </div>
            </div>

            <!-- Push Notifications -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-sm font-medium text-gray-900">Browser Notifications</span>
                    <p class="text-sm text-gray-500">Get notifications in your browser</p>
                  </div>
                  <button @click="togglePushNotifications" 
                          :class="pushNotificationsEnabled ? 'bg-blue-600' : 'bg-gray-300'"
                          class="relative inline-flex items-center h-6 w-11 rounded-full transition-colors">
                    <span :class="pushNotificationsEnabled ? 'translate-x-6' : 'translate-x-1'"
                          class="inline-block w-4 h-4 bg-white rounded-full transition-transform"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Account Actions -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Account Actions</h2>
          
          <div class="space-y-6">
            <!-- Download Data -->
            <div class="flex items-center justify-between border-b border-gray-200 pb-6">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Download Your Data</h3>
                <p class="text-sm text-gray-500">Get a copy of all your account data</p>
              </div>
              <button @click="downloadData" 
                      class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Download
              </button>
            </div>

            <!-- Delete Account -->
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-red-900">Delete Account</h3>
                <p class="text-sm text-red-600">Permanently delete your account and all data</p>
              </div>
              <button @click="showDeleteConfirm = true" 
                      class="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex justify-end">
          <button @click="saveSettings" :disabled="savingSettings"
                  class="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 disabled:opacity-50">
            {{ savingSettings ? 'Saving...' : 'Save Settings' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Account Confirmation Modal -->
    <div v-if="showDeleteConfirm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Delete Account</h3>
        <p class="text-sm text-gray-600 mb-6">
          Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
        </p>
        <div class="flex space-x-3">
          <button @click="showDeleteConfirm = false" 
                  class="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button @click="deleteAccount" 
                  class="flex-1 px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'Account Settings - Long Châu',
  meta: [
    { name: 'description', content: 'Manage your account settings, privacy preferences, and security options.' }
  ]
})

const authStore = useAuthStore()

// Reactive data
const showPasswordForm = ref(false)
const showDeleteConfirm = ref(false)
const changingPassword = ref(false)
const savingSettings = ref(false)
const twoFactorEnabled = ref(false)
const pushNotificationsEnabled = ref(false)

// Forms
const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

const privacySettings = ref({
  analytics: true,
  marketing: false,
  profileVisible: false
})

const notifications = ref({
  orderUpdates: true,
  prescriptionReminders: true,
  healthTips: false,
  specialOffers: false
})

// Sample active sessions
const activeSessions = ref([
  {
    id: '1',
    browser: 'Chrome',
    os: 'Windows',
    location: 'Ho Chi Minh City, Vietnam',
    lastActive: '2 minutes ago',
    device: 'desktop',
    current: true
  },
])

// Methods
const changePassword = async () => {
  if (passwordForm.value.new !== passwordForm.value.confirm) {
    alert('New passwords do not match')
    return
  }

  changingPassword.value = true
  try {
    // API call to change password
    console.log('Changing password...')
    
    // Reset form
    passwordForm.value = { current: '', new: '', confirm: '' }
    showPasswordForm.value = false
    
    alert('Password changed successfully')
    
    // Redirect back to account page after password change
    await navigateTo('/account')
  } catch (error) {
    console.error('Error changing password:', error)
    alert('Failed to change password')
  } finally {
    changingPassword.value = false
  }
}

const toggleTwoFactor = async () => {
  try {
    twoFactorEnabled.value = !twoFactorEnabled.value
    console.log('Two-factor authentication:', twoFactorEnabled.value ? 'enabled' : 'disabled')
  } catch (error) {
    console.error('Error toggling two-factor authentication:', error)
  }
}

const togglePushNotifications = async () => {
  if (!pushNotificationsEnabled.value) {
    // Request permission
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        pushNotificationsEnabled.value = true
      }
    }
  } else {
    pushNotificationsEnabled.value = false
  }
}

const revokeSession = async (sessionId) => {
  try {
    const index = activeSessions.value.findIndex(session => session.id === sessionId)
    if (index !== -1) {
      activeSessions.value.splice(index, 1)
    }
    console.log('Session revoked:', sessionId)
  } catch (error) {
    console.error('Error revoking session:', error)
  }
}

const revokeAllSessions = async () => {
  if (confirm('Are you sure you want to sign out all devices? You will need to sign in again on all devices.')) {
    try {
      activeSessions.value = activeSessions.value.filter(session => session.current)
      console.log('All sessions revoked')
    } catch (error) {
      console.error('Error revoking all sessions:', error)
    }
  }
}

const downloadData = async () => {
  try {
    // Create a sample data export
    const userData = {
      profile: authStore.user,
      settings: {
        privacy: privacySettings.value,
        notifications: notifications.value
      },
      exportDate: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(userData, null, 2)], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-data-export.json'
    a.click()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error downloading data:', error)
  }
}

const deleteAccount = async () => {
  try {
    console.log('Deleting account...')
    // API call to delete account
    await authStore.logout()
    await navigateTo('/login')
  } catch (error) {
    console.error('Error deleting account:', error)
  }
}

const saveSettings = async () => {
  savingSettings.value = true
  try {
    // API call to save all settings
    console.log('Saving settings...', {
      privacy: privacySettings.value,
      notifications: notifications.value
    })
    
    alert('Settings saved successfully')
    
    // Redirect back to account page after saving
    await navigateTo('/account')
  } catch (error) {
    console.error('Error saving settings:', error)
    alert('Failed to save settings')
  } finally {
    savingSettings.value = false
  }
}
</script>
