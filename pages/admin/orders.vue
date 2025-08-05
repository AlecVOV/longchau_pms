<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Order Management</h1>
              <p class="mt-1 text-sm text-gray-500">View and manage all customer orders</p>
            </div>
            <div class="flex items-center space-x-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {{ totalOrders }} Total Orders
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select v-model="filters.status" class="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <input 
              v-model="filters.dateFrom" 
              type="date" 
              class="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">To</label>
            <input 
              v-model="filters.dateTo" 
              type="date" 
              class="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div class="flex items-end">
            <button 
              @click="loadOrders"
              :disabled="loading"
              class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {{ loading ? 'Loading...' : 'Apply Filters' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Orders Table -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-if="loading">
                <td colspan="7" class="px-6 py-8 text-center text-gray-500">
                  <div class="flex items-center justify-center space-x-2">
                    <svg class="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Loading orders...</span>
                  </div>
                </td>
              </tr>
              <tr v-else-if="orders.length === 0">
                <td colspan="7" class="px-6 py-8 text-center text-gray-500">
                  No orders found. Try adjusting your filters.
                </td>
              </tr>
              <tr v-else v-for="order in orders" :key="order.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{{ order.id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ order.customerName }}</div>
                  <div class="text-sm text-gray-500">{{ order.customerEmail }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ formatDate(order.createdAt) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ order.itemCount }} items
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ${{ order.total.toFixed(2) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getStatusClass(order.status)" class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                    {{ order.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                    <button @click="viewOrder(order)" class="text-blue-600 hover:text-blue-900">
                      View
                    </button>
                    <button @click="updateOrderStatus(order)" class="text-green-600 hover:text-green-900">
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="bg-gray-50 px-6 py-3 flex items-center justify-between">
          <div class="text-sm text-gray-700">
            Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to {{ Math.min(currentPage * itemsPerPage, totalOrders) }} of {{ totalOrders }} orders
          </div>
          <div class="flex space-x-2">
            <button 
              @click="currentPage--; loadOrders()" 
              :disabled="currentPage === 1 || loading"
              class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
            >
              Previous
            </button>
            <button 
              @click="currentPage++; loadOrders()" 
              :disabled="currentPage * itemsPerPage >= totalOrders || loading"
              class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Details Modal -->
    <div v-if="selectedOrder" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="selectedOrder = null">
      <div class="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-semibold text-gray-900">Order #{{ selectedOrder.id }}</h3>
            <button @click="selectedOrder = null" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Customer Information -->
            <div class="space-y-4">
              <div>
                <h4 class="text-lg font-medium text-gray-900 mb-3">Customer Information</h4>
                <div class="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-700">Name:</span>
                    <span class="text-gray-900">{{ selectedOrder.customerName }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-700">Email:</span>
                    <span class="text-gray-900">{{ selectedOrder.customerEmail }}</span>
                  </div>
                  <div class="flex justify-between" v-if="selectedOrder.customerPhone">
                    <span class="font-medium text-gray-700">Phone:</span>
                    <span class="text-gray-900">{{ selectedOrder.customerPhone }}</span>
                  </div>
                </div>
              </div>

              <!-- Order Information -->
              <div>
                <h4 class="text-lg font-medium text-gray-900 mb-3">Order Information</h4>
                <div class="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-700">Order Date:</span>
                    <span class="text-gray-900">{{ formatDate(selectedOrder.createdAt) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-700">Status:</span>
                    <span :class="getStatusClass(selectedOrder.status)" class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                      {{ selectedOrder.status.toUpperCase() }}
                    </span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-700">Total Items:</span>
                    <span class="text-gray-900">{{ selectedOrder.itemCount }}</span>
                  </div>
                  <div class="flex justify-between" v-if="selectedOrder.trackingNumber">
                    <span class="font-medium text-gray-700">Tracking Number:</span>
                    <span class="text-gray-900 font-mono">{{ selectedOrder.trackingNumber }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Order Items -->
            <div>
              <h4 class="text-lg font-medium text-gray-900 mb-3">Order Items</h4>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="space-y-3">
                  <div v-for="item in selectedOrder.items" :key="item.id" class="flex justify-between items-center p-3 bg-white rounded border">
                    <div class="flex-1">
                      <div class="font-medium text-gray-900">{{ item.name }}</div>
                      <div class="text-sm text-gray-500" v-if="item.manufacturer">{{ item.manufacturer }}</div>
                      <div class="text-sm text-gray-600">Quantity: {{ item.quantity }}</div>
                      <div class="text-sm text-gray-600">Unit Price: ${{ item.price.toFixed(2) }}</div>
                    </div>
                    <div class="text-right">
                      <div class="font-semibold text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-t mt-4 pt-4">
                  <div class="flex justify-between items-center">
                    <span class="text-lg font-semibold text-gray-900">Total:</span>
                    <span class="text-lg font-bold text-gray-900">${{ selectedOrder.total.toFixed(2) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Shipping Address - Full Width -->
          <div v-if="selectedOrder.shippingAddress" class="mb-6">
            <h4 class="text-lg font-medium text-gray-900 mb-3">Shipping Address</h4>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-gray-900 whitespace-pre-line">{{ formatShippingAddress(selectedOrder.shippingAddress) }}</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-end mt-6 pt-6 border-t">
            <button @click="selectedOrder = null" 
                    class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Status Update Modal -->
    <div v-if="showStatusUpdateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="showStatusUpdateModal = false">
      <div class="bg-white rounded-lg max-w-md w-full mx-4" @click.stop>
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-medium text-gray-900">Update Order Status</h3>
            <button @click="showStatusUpdateModal = false" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Order ID</label>
              <input type="text" :value="`#${orderToUpdate?.id}`" readonly 
                     class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Customer</label>
              <input type="text" :value="orderToUpdate?.customerName" readonly 
                     class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Current Status</label>
              <span :class="getStatusClass(orderToUpdate?.status)" 
                    class="inline-flex px-3 py-1 text-sm font-semibold rounded-full">
                {{ orderToUpdate?.status?.toUpperCase() }}
              </span>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">New Status</label>
              <select v-model="newStatus" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="pending">PENDING</option>
                <option value="processing">PROCESSING</option>
                <option value="shipped">SHIPPED</option>
                <option value="delivered">DELIVERED</option>
                <option value="cancelled">CANCELLED</option>
              </select>
            </div>
          </div>
          
          <div class="flex justify-end space-x-3 mt-6">
            <button @click="showStatusUpdateModal = false" 
                    class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button @click="confirmStatusUpdate" :disabled="updating || newStatus === orderToUpdate?.status"
                    class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
              {{ updating ? 'Updating...' : 'Update Status' }}
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
  middleware: 'admin'
})

useHead({
  title: 'Orders - Admin - Long Châu'
})

const authStore = useAuthStore()

// Reactive data
const orders = ref([])
const totalOrders = ref(0)
const currentPage = ref(1)
const itemsPerPage = ref(20)
const selectedOrder = ref(null)
const loading = ref(false)
const showStatusUpdateModal = ref(false)
const orderToUpdate = ref(null)
const newStatus = ref('')
const updating = ref(false)

const filters = ref({
  status: '',
  dateFrom: '',
  dateTo: ''
})

// Load orders from database
const loadOrders = async () => {
  loading.value = true
  try {
    if (!authStore.token) {
      throw new Error('No authentication token')
    }

    // Build query parameters
    const params = new URLSearchParams({
      page: currentPage.value.toString(),
      limit: itemsPerPage.value.toString()
    })

    // Add filters
    if (filters.value.status) {
      params.append('status', filters.value.status.toUpperCase())
    }
    if (filters.value.dateFrom) {
      params.append('dateFrom', filters.value.dateFrom)
    }
    if (filters.value.dateTo) {
      params.append('dateTo', filters.value.dateTo)
    }

    // Make API call using $fetch
    const response = await $fetch(`/api/admin/orders?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    })

    console.log('API Response:', response) // Debug log

    console.log('API Response:', response) // Debug log

    if (response.success) {
      console.log('Orders data:', response.orders) // Debug log
      // Transform the data to match the frontend format
      orders.value = response.orders.map(order => ({
        id: order.id,
        customerName: `${order.user.firstName} ${order.user.lastName}`,
        customerEmail: order.user.email,
        customerPhone: order.user.phone || '',
        createdAt: new Date(order.createdAt),
        itemCount: order.orderItems.length,
        total: parseFloat(order.totalAmount || '0'),
        status: order.status.toLowerCase(),
        items: order.orderItems.map(item => ({
          id: item.id,
          name: item.product.name,
          quantity: item.quantity,
          price: parseFloat(item.price || '0'),
          manufacturer: item.product.manufacturer
        })),
        shippingAddress: (() => {
          try {
            if (!order.shippingAddress) return null
            return typeof order.shippingAddress === 'string' ? JSON.parse(order.shippingAddress) : order.shippingAddress
          } catch (error) {
            console.error('Error parsing shipping address for order', order.id, error)
            return null
          }
        })(),
        trackingNumber: order.trackingNumber
      }))
      
      totalOrders.value = response.pagination.totalCount
      console.log('Transformed orders:', orders.value) // Debug log
    }
  } catch (error) {
    console.error('Error loading orders:', error)
    // Show error to user
    alert('Failed to load orders. Please try again.')
  } finally {
    loading.value = false
  }
}

// Methods
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const formatShippingAddress = (shippingAddress) => {
  if (!shippingAddress) return 'No shipping address provided'
  
  try {
    // Handle if it's still a string
    const addr = typeof shippingAddress === 'string' ? JSON.parse(shippingAddress) : shippingAddress
    
    let formattedAddress = ''
    
    // Name
    if (addr.firstName || addr.lastName) {
      formattedAddress += `${addr.firstName || ''} ${addr.lastName || ''}`.trim() + '\n'
    }
    
    // Street address
    if (addr.address) {
      formattedAddress += addr.address + '\n'
    }
    
    // City, State, ZIP
    let cityLine = ''
    if (addr.city) cityLine += addr.city
    if (addr.state) cityLine += (cityLine ? ', ' : '') + addr.state
    if (addr.zipCode) cityLine += (cityLine ? ' ' : '') + addr.zipCode
    if (cityLine) formattedAddress += cityLine + '\n'
    
    // Country
    if (addr.country) {
      const countryNames = {
        'US': 'United States',
        'VN': 'Vietnam',
        'CA': 'Canada',
        'UK': 'United Kingdom'
      }
      formattedAddress += (countryNames[addr.country] || addr.country)
    }
    
    // Additional info
    if (addr.phone && addr.phone !== selectedOrder.value?.customerPhone) {
      formattedAddress += '\n\nDelivery Phone: ' + addr.phone
    }
    
    if (addr.specialInstructions) {
      formattedAddress += '\n\nSpecial Instructions: ' + addr.specialInstructions
    }
    
    return formattedAddress.trim()
  } catch (error) {
    console.error('Error formatting shipping address:', error)
    return 'Error displaying shipping address'
  }
}

const getStatusClass = (status) => {
  const statusClasses = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  }
  return statusClasses[status] || 'bg-gray-100 text-gray-800'
}

const viewOrder = (order) => {
  selectedOrder.value = order
}

const updateOrderStatus = async (order) => {
  orderToUpdate.value = order
  newStatus.value = order.status
  showStatusUpdateModal.value = true
}

const confirmStatusUpdate = async () => {
  if (!newStatus.value || newStatus.value === orderToUpdate.value.status) {
    showStatusUpdateModal.value = false
    return
  }

  updating.value = true
  try {
    if (!authStore.token) {
      throw new Error('No authentication token')
    }

    // Make API call to update order status using $fetch
    const response = await $fetch(`/api/admin/orders/${orderToUpdate.value.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
        'Content-Type': 'application/json'
      },
      body: {
        status: newStatus.value.toUpperCase()
      }
    })

    if (response.success) {
      // Update the local order status
      orderToUpdate.value.status = newStatus.value.toLowerCase()
      alert(`Order #${orderToUpdate.value.id} status updated to ${newStatus.value}`)
      showStatusUpdateModal.value = false
    } else {
      throw new Error('Failed to update order status')
    }
  } catch (error) {
    console.error('Error updating order status:', error)
    alert('Failed to update order status. Please try again.')
  } finally {
    updating.value = false
  }
}

// Load orders on mount
onMounted(() => {
  loadOrders()
})
</script>
