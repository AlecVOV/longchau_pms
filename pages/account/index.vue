<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">My Account</h1>
              <p class="mt-1 text-sm text-gray-500">Manage your profile and account settings</p>
            </div>
            <div class="flex items-center space-x-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Active Account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Sidebar Navigation -->
        <div class="lg:col-span-1">
          <nav class="bg-white rounded-lg shadow-sm">
            <div class="p-6">
              <!-- User Info -->
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 font-semibold text-lg">
                    {{ userInitials }}
                  </span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ fullName }}</h3>
                  <p class="text-sm text-gray-500">{{ user?.email }}</p>
                </div>
              </div>
              
              <!-- Navigation Menu -->
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/account" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                           :class="$route.path === '/account' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Profile
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/account/orders" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                           :class="$route.path === '/account/orders' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Order History
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/account/prescriptions" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                           :class="$route.path === '/account/prescriptions' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Prescriptions
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/account/medication-reminders" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                           :class="$route.path === '/account/medication-reminders' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM8.5 14C7.12 14 6 12.88 6 11.5S7.12 9 8.5 9 11 10.12 11 11.5 9.88 14 8.5 14z" />
                    </svg>
                    Medication Reminders
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/account/addresses" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                           :class="$route.path === '/account/addresses' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Addresses
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/account/settings" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                           :class="$route.path === '/account/settings' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Account Settings
                  </NuxtLink>
                </li>
                
                <!-- Admin Section -->
                <li v-if="authStore.getUserRole === 'admin'" class="pt-4 mt-4 border-t border-gray-200">
                  <div class="px-3 py-2">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Admin Panel</p>
                  </div>
                </li>
                <li v-if="authStore.getUserRole === 'admin'">
                  <NuxtLink to="/admin/products" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Manage Products
                  </NuxtLink>
                </li>
                <li v-if="authStore.getUserRole === 'admin'">
                  <NuxtLink to="/admin/inventory" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Inventory Management
                  </NuxtLink>
                </li>
                <li v-if="authStore.getUserRole === 'admin'">
                  <NuxtLink to="/admin/categories" 
                           class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Categories
                  </NuxtLink>
                </li>
                
                <li>
                  <button @click="handleLogout"
                          class="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-700 hover:text-red-600 hover:bg-red-50">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Profile Information -->
          <div class="bg-white rounded-lg shadow-sm mb-8">
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-gray-900">Profile Information</h2>
                <button @click="isEditing = !isEditing"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  {{ isEditing ? 'Cancel' : 'Edit Profile' }}
                </button>
              </div>

              <form @submit.prevent="updateProfile" v-if="isEditing">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input v-model="profileForm.firstName" type="text" required
                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input v-model="profileForm.lastName" type="text" required
                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input v-model="profileForm.email" type="email" required
                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input v-model="profileForm.phone" type="tel"
                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  </div>
                </div>
                <div class="flex justify-end space-x-3 mt-6">
                  <button type="button" @click="isEditing = false"
                          class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                  </button>
                  <button type="submit" :disabled="updateLoading"
                          class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
                    {{ updateLoading ? 'Saving...' : 'Save Changes' }}
                  </button>
                </div>
              </form>

              <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-500">First Name</label>
                  <p class="mt-1 text-sm text-gray-900">{{ user?.firstName || 'Not provided' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500">Last Name</label>
                  <p class="mt-1 text-sm text-gray-900">{{ user?.lastName || 'Not provided' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500">Email</label>
                  <p class="mt-1 text-sm text-gray-900">{{ user?.email }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500">Phone</label>
                  <p class="mt-1 text-sm text-gray-900">{{ user?.phone || 'Not provided' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500">Member Since</label>
                  <p class="mt-1 text-sm text-gray-900">{{ memberSince }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500">Account Status</label>
                  <span class="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
              <div v-if="recentOrders.length === 0" class="text-center py-4">
                <svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p class="text-gray-500 text-sm">No orders yet</p>
                <NuxtLink to="/products" class="text-blue-600 hover:text-blue-500 text-sm font-medium">
                  Start Shopping
                </NuxtLink>
              </div>
              <div v-else class="space-y-3">
                <div v-for="order in recentOrders" :key="order.id" 
                     class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p class="font-medium text-gray-900">Order #{{ order.id.slice(-8) }}</p>
                    <p class="text-sm text-gray-500">{{ order.date }}</p>
                  </div>
                  <div class="text-right">
                    <p class="font-medium text-gray-900">${{ order.total.toFixed(2) }}</p>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                          :class="getOrderStatusClass(order.status)">
                      {{ order.status }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <NuxtLink to="/account/orders" 
                         class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
                  View all orders
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Prescription Refills</h3>
              <div v-if="prescriptionsNeedingRefill.length === 0" class="text-center py-4">
                <svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p class="text-gray-500 text-sm">No prescriptions need refilling</p>
              </div>
              <div v-else class="space-y-3">
                <div v-for="prescription in prescriptionsNeedingRefill" :key="prescription.id"
                     class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <p class="font-medium text-gray-900">{{ prescription.medication }}</p>
                    <p class="text-sm text-yellow-700">{{ prescription.daysLeft }} days remaining</p>
                  </div>
                  <button class="px-3 py-1 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700">
                    Refill
                  </button>
                </div>
              </div>
              <div class="mt-4">
                <NuxtLink to="/account/prescriptions" 
                         class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
                  Manage prescriptions
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
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
  title: 'My Account - Long Châu',
  meta: [
    { name: 'description', content: 'Manage your account, view orders, prescriptions, and update your profile information.' }
  ]
})

const authStore = useAuthStore()
const user = computed(() => authStore.user)

// Reactive data
const isEditing = ref(false)
const updateLoading = ref(false)

// Profile form
const profileForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

// Sample data - replace with real API calls
const recentOrders = ref([])
const prescriptionsNeedingRefill = ref([])

// Computed properties
const fullName = computed(() => {
  if (!user.value) return 'User'
  return `${user.value.firstName || ''} ${user.value.lastName || ''}`.trim()
})

const userInitials = computed(() => {
  if (!user.value) return 'U'
  const firstName = user.value.firstName || ''
  const lastName = user.value.lastName || ''
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
})

const memberSince = computed(() => {
  if (!user.value?.createdAt) return 'Unknown'
  return new Date(user.value.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
})

// Methods
const updateProfile = async () => {
  updateLoading.value = true
  try {
    await authStore.updateProfile(profileForm.value)
    isEditing.value = false
    // Show success message
    if (process.client) {
      alert('Profile updated successfully!')
    }
  } catch (error) {
    console.error('Profile update error:', error)
    // Show error message
    if (process.client) {
      const errorMessage = error?.data?.statusMessage || error?.message || 'Failed to update profile'
      alert('Error: ' + errorMessage)
    }
  } finally {
    updateLoading.value = false
  }
}

const handleLogout = async () => {
  await authStore.logout()
  navigateTo('/')
}

const getOrderStatusClass = (status) => {
  const classes = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'processing': 'bg-blue-100 text-blue-800',
    'shipped': 'bg-purple-100 text-purple-800',
    'delivered': 'bg-green-100 text-green-800',
    'cancelled': 'bg-red-100 text-red-800'
  }
  return classes[status.toLowerCase()] || 'bg-gray-100 text-gray-800'
}

// Initialize form with user data
watch(user, (newUser) => {
  if (newUser) {
    profileForm.value = {
      firstName: newUser.firstName || '',
      lastName: newUser.lastName || '',
      email: newUser.email || '',
      phone: newUser.phone || ''
    }
  }
}, { immediate: true })

// Load data
onMounted(async () => {
  // Load recent orders and prescriptions
  // This would be replaced with actual API calls
})
</script>
