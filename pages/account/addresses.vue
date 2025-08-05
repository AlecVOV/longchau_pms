<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Shipping Addresses</h1>
              <p class="mt-1 text-sm text-gray-500">Manage your delivery addresses</p>
            </div>
            <button @click="showAddForm = true" 
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Add New Address
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Add/Edit Address Form -->
      <div v-if="showAddForm || editingAddress" class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">
            {{ editingAddress ? 'Edit Address' : 'Add New Address' }}
          </h2>
          <button @click="cancelForm" 
                  class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="saveAddress" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Address Type -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
            <div class="flex space-x-4">
              <label class="flex items-center">
                <input v-model="addressForm.type" type="radio" value="home" class="mr-2">
                <span class="text-sm text-gray-700">Home</span>
              </label>
              <label class="flex items-center">
                <input v-model="addressForm.type" type="radio" value="work" class="mr-2">
                <span class="text-sm text-gray-700">Work</span>
              </label>
              <label class="flex items-center">
                <input v-model="addressForm.type" type="radio" value="other" class="mr-2">
                <span class="text-sm text-gray-700">Other</span>
              </label>
            </div>
          </div>

          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input v-model="addressForm.name" type="text" required
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input v-model="addressForm.phone" type="tel" required
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- Address Line 1 -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Address Line 1 *</label>
            <input v-model="addressForm.line1" type="text" required 
                   placeholder="Street address, P.O. box, company name"
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- Address Line 2 -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
            <input v-model="addressForm.line2" type="text" 
                   placeholder="Apartment, suite, unit, building, floor, etc."
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- City -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">City *</label>
            <input v-model="addressForm.city" type="text" required
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- Postal Code -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label>
            <input v-model="addressForm.zipCode" type="text" required 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- Country -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Country *</label>
            <select v-model="addressForm.country" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="VN">Vietnam</option>
            </select>
          </div>

          <!-- Default Address -->
          <div class="md:col-span-2">
            <label class="flex items-center">
              <input v-model="addressForm.isDefault" type="checkbox" class="mr-2">
              <span class="text-sm text-gray-700">Set as default shipping address</span>
            </label>
          </div>

          <!-- Form Actions -->
          <div class="md:col-span-2 flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button type="button" @click="cancelForm" 
                    class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" :disabled="saving"
                    class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
              {{ saving ? 'Saving...' : (editingAddress ? 'Update Address' : 'Save Address') }}
            </button>
          </div>
        </form>
      </div>

      <!-- Addresses Grid -->
      <div v-if="addresses.length === 0 && !showAddForm" class="bg-white rounded-lg shadow-sm p-12 text-center">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No addresses yet</h3>
        <p class="text-gray-500 mb-6">Add your first shipping address to get started.</p>
        <button @click="showAddForm = true" 
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Add Address
        </button>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="address in addresses" :key="address.id" 
             class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative">
          
          <!-- Default Badge -->
          <div v-if="address.isDefault" 
               class="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Default
          </div>

          <!-- Address Type -->
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <svg v-if="address.type === 'home'" class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <svg v-else-if="address.type === 'work'" class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <svg v-else class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 capitalize">{{ address.type }}</h3>
              <p class="text-sm text-gray-500">{{ address.name }}</p>
            </div>
          </div>

          <!-- Address Details -->
          <div class="text-sm text-gray-600 space-y-1 mb-4">
            <p>{{ address.line1 }}</p>
            <p v-if="address.line2">{{ address.line2 }}</p>
            <p>{{ address.city }}, {{ address.state }} {{ address.zipCode }}</p>
            <p>{{ address.country === 'US' ? 'United States' : address.country }}</p>
            <p class="text-gray-500">{{ address.phone }}</p>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-200">
            <div class="flex space-x-2">
              <button @click="editAddress(address)" 
                      class="text-sm text-blue-600 hover:text-blue-500 font-medium">
                Edit
              </button>
              <button v-if="!address.isDefault" 
                      @click="setAsDefault(address)" 
                      class="text-sm text-blue-600 hover:text-blue-500 font-medium">
                Set Default
              </button>
            </div>
            <button @click="deleteAddress(address)" 
                    class="text-sm text-red-600 hover:text-red-500 font-medium">
              Delete
            </button>
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
  title: 'Shipping Addresses - Long Châu',
  meta: [
    { name: 'description', content: 'Manage your shipping addresses for faster checkout and delivery.' }
  ]
})

const authStore = useAuthStore()

// Reactive data
const showAddForm = ref(false)
const editingAddress = ref(null)
const saving = ref(false)

// Address form
const addressForm = ref({
  type: 'home',
  name: '',
  phone: '',
  line1: '',
  line2: '',
  city: '',
  zipCode: '',
  country: 'VN',
  isDefault: false
})

// Sample addresses - replace with API data
const addresses = ref([
  // Start with empty array - no sample data to avoid persistence issues
])

// Methods
const saveAddress = async () => {
  saving.value = true
  try {
    if (editingAddress.value) {
      // Update existing address
      const index = addresses.value.findIndex(addr => addr.id === editingAddress.value.id)
      if (index !== -1) {
        addresses.value[index] = { ...addressForm.value, id: editingAddress.value.id }
      }
    } else {
      // Add new address
      const newAddress = {
        ...addressForm.value,
        id: Date.now().toString()
      }
      addresses.value.push(newAddress)
    }

    // If this is set as default, remove default from others
    if (addressForm.value.isDefault) {
      addresses.value.forEach(addr => {
        if (addr.id !== (editingAddress.value?.id || addresses.value[addresses.value.length - 1].id)) {
          addr.isDefault = false
        }
      })
    }

    cancelForm()
  } catch (error) {
    console.error('Error saving address:', error)
  } finally {
    saving.value = false
  }
}

const editAddress = (address) => {
  editingAddress.value = address
  addressForm.value = { ...address }
  showAddForm.value = false
}

const deleteAddress = async (address) => {
  if (confirm('Are you sure you want to delete this address?')) {
    try {
      const index = addresses.value.findIndex(addr => addr.id === address.id)
      if (index !== -1) {
        addresses.value.splice(index, 1)
        
        // If deleted address was default and there are remaining addresses, set first one as default
        if (address.isDefault && addresses.value.length > 0) {
          addresses.value[0].isDefault = true
        }
        
        console.log('Address deleted successfully')
      } else {
        console.error('Address not found for deletion')
      }
    } catch (error) {
      console.error('Error deleting address:', error)
      alert('Failed to delete address. Please try again.')
    }
  }
}

const setAsDefault = async (address) => {
  // Remove default from all addresses
  addresses.value.forEach(addr => {
    addr.isDefault = addr.id === address.id
  })
}

const cancelForm = () => {
  showAddForm.value = false
  editingAddress.value = null
  addressForm.value = {
    type: 'home',
    name: '',
    phone: '',
    line1: '',
    line2: '',
    city: '',
    zipCode: '',
    country: 'VN',
    isDefault: false
  }
}

// Initialize form with user data
onMounted(() => {
  if (authStore.user) {
    addressForm.value.name = `${authStore.user.firstName} ${authStore.user.lastName}`.trim()
    addressForm.value.phone = authStore.user.phone || ''
  }
})
</script>
