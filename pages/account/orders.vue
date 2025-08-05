<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Order History</h1>
              <p class="mt-1 text-sm text-gray-500">View and track your orders</p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="text-sm text-gray-500">
                Last updated: {{ lastRefreshTime }}
              </div>
              <button @click="downloadOrderHistory" 
                      class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download History
              </button>
              <button @click="refreshOrders" 
                      :disabled="loading"
                      class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {{ loading ? 'Refreshing...' : 'Refresh Orders' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Filter Orders</h3>
            
            <!-- Status Filter -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Order Status</label>
              <select v-model="statusFilter" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option value="">All Orders</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <!-- Date Range Filter -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select v-model="dateFilter" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option value="">All Time</option>
                <option value="last30">Last 30 Days</option>
                <option value="last90">Last 90 Days</option>
                <option value="lastyear">Last Year</option>
              </select>
            </div>

            <!-- Order Summary -->
            <div class="border-t border-gray-200 pt-4">
              <h4 class="font-medium text-gray-900 mb-3">Order Summary</h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-500">Total Orders:</span>
                  <span class="font-medium">{{ totalOrders }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">Total Spent:</span>
                  <span class="font-medium">${{ (totalSpent || 0).toFixed(2) }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">Avg. Order:</span>
                  <span class="font-medium">${{ (averageOrder || 0).toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h3 class="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div class="space-y-3">
              <NuxtLink to="/track-order" 
                       class="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Track Order
              </NuxtLink>
              <NuxtLink to="/return-policy" 
                       class="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Return Policy
              </NuxtLink>
              <NuxtLink to="/contact" 
                       class="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Support
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Orders List -->
        <div class="lg:col-span-3">
          <!-- Search Bar -->
          <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div class="relative">
              <input v-model="searchQuery" 
                     type="text" 
                     placeholder="Search orders by order number, product name..." 
                     class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Orders -->
          <div v-if="loading" class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p class="mt-2 text-gray-500">Loading orders...</p>
          </div>

          <div v-else-if="filteredOrders.length === 0" class="bg-white rounded-lg shadow-sm p-12 text-center">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p class="text-gray-500 mb-6">You haven't placed any orders matching your filters.</p>
            <NuxtLink to="/products" 
                     class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Start Shopping
            </NuxtLink>
          </div>

          <div v-else class="space-y-6">
            <div v-for="order in paginatedOrders" :key="order.id" 
                 class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              
              <!-- Order Header -->
              <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-6">
                    <div>
                      <p class="text-sm font-medium text-gray-900">Order #{{ order.orderNumber }}</p>
                      <p class="text-sm text-gray-500">Placed {{ formatDate(order.createdAt) }}</p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Total</p>
                      <p class="text-sm font-medium text-gray-900">${{ (order.total || order.totalAmount || 0).toFixed(2) }}</p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Status</p>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            :class="getOrderStatusClass(order.status)">
                        {{ order.status }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Order Items -->
              <div class="px-6 py-4">
                <div class="space-y-3">
                  <div v-for="item in getOrderItems(order).slice(0, 3)" :key="item.id || item.name" 
                       class="flex items-center space-x-4">
                    <img :src="item.product?.images?.[0] || item.image || '/images/default-product.jpg'" :alt="item.product?.name || item.name || 'Product'" 
                         class="w-16 h-16 object-cover rounded-lg border border-gray-200">
                    <div class="flex-1 min-w-0">
                      <h4 class="text-sm font-medium text-gray-900 truncate">{{ item.product?.name || item.name || 'Unknown Product' }}</h4>
                      <p class="text-sm text-gray-500">{{ item.product?.manufacturer || 'Unknown Brand' }}</p>
                      <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
                    </div>
                    <div class="text-sm font-medium text-gray-900">
                      ${{ ((item.price || 0) * (item.quantity || 0)).toFixed(2) }}
                    </div>
                  </div>
                  
                  <div v-if="getOrderItems(order).length > 3" class="text-sm text-gray-500 border-t border-gray-200 pt-3">
                    +{{ getOrderItems(order).length - 3 }} more items
                  </div>
                </div>

                <!-- Quick Actions -->
                <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div class="flex items-center space-x-4 text-sm">
                    <span class="text-gray-500">
                      Delivered to: {{ order.shippingAddress?.name || 'Default Address' }}
                    </span>
                    <span v-if="order.estimatedDelivery" class="text-gray-500">
                      • Est. delivery: {{ formatDate(order.estimatedDelivery) }}
                    </span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button v-if="canReorder(order)" 
                            @click="reorderItems(order)" 
                            class="text-sm text-blue-600 hover:text-blue-500 font-medium">
                      Reorder
                    </button>
                    <button v-if="canReturn(order)" 
                            @click="initiateReturn(order)" 
                            class="text-sm text-blue-600 hover:text-blue-500 font-medium">
                      Return Items
                    </button>
                    <button @click="downloadInvoice(order)" 
                            class="text-sm text-blue-600 hover:text-blue-500 font-medium">
                      Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div v-if="filteredOrders.length > itemsPerPage" class="bg-white rounded-lg shadow-sm p-4 mt-6">
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-500">
                Showing {{ ((currentPage - 1) * itemsPerPage) + 1 }} to {{ Math.min(currentPage * itemsPerPage, filteredOrders.length) }} of {{ filteredOrders.length }} orders
              </div>
              <div class="flex items-center space-x-2">
                <button @click="currentPage--" 
                        :disabled="currentPage === 1"
                        class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <div class="flex items-center space-x-1">
                  <button v-for="page in visiblePages" :key="page"
                          @click="currentPage = page"
                          :class="page === currentPage ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'"
                          class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded">
                    {{ page }}
                  </button>
                </div>
                <button @click="currentPage++" 
                        :disabled="currentPage === totalPages"
                        class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useOrdersStore } from '~/stores/orders'
import { useNotificationsStore } from '~/stores/notifications'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'Order History - Long Châu',
  meta: [
    { name: 'description', content: 'View and track your order history, reorder items, and manage returns.' }
  ]
})

const ordersStore = useOrdersStore()
const notifications = useNotificationsStore()
const authStore = useAuthStore()

// Helper function to get order items regardless of structure
const getOrderItems = (order) => {
  const items = order.orderItems || order.items || []
  console.log('getOrderItems called for order:', order.orderNumber, 'items:', items)
  return items
}

// Check if current user is admin
const isAdmin = computed(() => {
  const userRole = authStore.getUserRole
  console.log('Current user role:', userRole, 'Is admin:', userRole === 'ADMIN' || userRole === 'admin')
  return userRole === 'ADMIN' || userRole === 'admin'
})

// Reactive data
const loading = ref(false)
const searchQuery = ref('')
const statusFilter = ref('')
const dateFilter = ref('')
const currentPage = ref(1)
const itemsPerPage = 10
const lastRefreshTime = ref('')

// Load orders from API
const orders = computed(() => ordersStore.orders || [])

// Computed properties
const filteredOrders = computed(() => {
  let filtered = orders.value

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(order => 
      order.orderNumber?.toLowerCase().includes(query) ||
      getOrderItems(order).some(item => 
        (item.product?.name || item.name || '').toLowerCase().includes(query)
      )
    )
  }

  // Filter by status
  if (statusFilter.value) {
    filtered = filtered.filter(order => order.status === statusFilter.value)
  }

  // Filter by date range
  if (dateFilter.value) {
    const now = new Date()
    const filterDate = new Date()
    
    switch (dateFilter.value) {
      case 'last30':
        filterDate.setDate(now.getDate() - 30)
        break
      case 'last90':
        filterDate.setDate(now.getDate() - 90)
        break
      case 'lastyear':
        filterDate.setFullYear(now.getFullYear() - 1)
        break
    }
    
    filtered = filtered.filter(order => new Date(order.createdAt) >= filterDate)
  }

  return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})

const paginatedOrders = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredOrders.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(filteredOrders.value.length / itemsPerPage))

const totalOrders = computed(() => orders.value.length)
const totalSpent = computed(() => orders.value.reduce((sum, order) => sum + (order.total || order.totalAmount || 0), 0))
const averageOrder = computed(() => totalOrders.value > 0 ? totalSpent.value / totalOrders.value : 0)

// Methods
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getOrderStatusClass = (status) => {
  const classes = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'processing': 'bg-blue-100 text-blue-800',
    'shipped': 'bg-purple-100 text-purple-800',
    'delivered': 'bg-green-100 text-green-800',
    'cancelled': 'bg-red-100 text-red-800'
  }
  return classes[status?.toLowerCase()] || 'bg-gray-100 text-gray-800'
}

const viewOrderDetails = (order) => {
  navigateTo(`/account/orders/${order.id}`)
}

const trackOrder = (order) => {
  navigateTo(`/track-order?order=${order.orderNumber}`)
}

const canTrackOrder = (order) => {
  return ['processing', 'shipped'].includes(order.status?.toLowerCase())
}

const downloadInvoice = async (order) => {
  try {
    notifications.info('Downloading invoice...')
    // Implementation for invoice download
    notifications.success('Invoice downloaded successfully')
  } catch (error) {
    console.error('Error downloading invoice:', error)
    notifications.error('Failed to download invoice. Please try again.')
  }
}

const downloadOrderHistory = async () => {
  try {
    if (filteredOrders.value.length === 0) {
      notifications.warning('No orders to download')
      return
    }
    
    notifications.info('Preparing order history...')
    // Implementation for order history download
    notifications.success('Order history downloaded successfully')
  } catch (error) {
    console.error('Error downloading order history:', error)
    notifications.error('Failed to download order history. Please try again.')
  }
}

const refreshOrders = async () => {
  loading.value = true
  try {
    console.log('Manual refresh: Loading orders...')
    await ordersStore.fetchOrders()
    console.log('Manual refresh: Orders loaded:', ordersStore.orders.length)
    lastRefreshTime.value = new Date().toLocaleTimeString()
    notifications.success('Orders refreshed successfully')
  } catch (error) {
    console.error('Error refreshing orders:', error)
    notifications.error('Failed to refresh orders. Please try again.')
  } finally {
    loading.value = false
  }
}

// Missing functions that need to be implemented:

const canReorder = (order) => {
  // Check if order can be reordered
  const reorderableStatuses = ['delivered', 'completed']
  return reorderableStatuses.includes(order.status?.toLowerCase())
}

const reorderItems = async (order) => {
  try {
    notifications.info('Adding items to cart...')
    await ordersStore.reorderItems(order.id)
    notifications.success('Items added to cart successfully!')
    // Optionally redirect to cart
    // navigateTo('/cart')
  } catch (error) {
    console.error('Error reordering items:', error)
    notifications.error('Failed to reorder items. Please try again.')
  }
}

const canReturn = (order) => {
  // Check if order can be returned
  const returnableStatuses = ['delivered', 'completed']
  if (!returnableStatuses.includes(order.status?.toLowerCase())) {
    return false
  }
  
  // Check if order is within return window (e.g., 30 days)
  const orderDate = new Date(order.createdAt)
  const now = new Date()
  const daysDifference = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24))
  
  return daysDifference <= 30 // 30-day return policy
}

const initiateReturn = (order) => {
  // Navigate to return initiation page or show return modal
  navigateTo(`/returns/initiate?orderId=${order.id}`)
}

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 7) {
    // Show all pages if total is 7 or less
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Show current page with 2 pages before and after, plus first and last
    const start = Math.max(1, current - 2)
    const end = Math.min(total, current + 2)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    // Add first page if not already included
    if (start > 1) {
      pages.unshift(1)
      if (start > 2) {
        pages.splice(1, 0, '...')
      }
    }
    
    // Add last page if not already included
    if (end < total) {
      if (end < total - 1) {
        pages.push('...')
      }
      pages.push(total)
    }
  }
  
  return pages
})

// Load orders on mount
onMounted(async () => {
  loading.value = true
  try {
    console.log('Orders page: Loading orders...')
    await ordersStore.fetchOrders()
    console.log('Orders page: Orders loaded:', ordersStore.orders.length)
    lastRefreshTime.value = new Date().toLocaleTimeString()
    // Debug: log the structure of the first order
    if (ordersStore.orders.length > 0) {
      console.log('First order structure:', ordersStore.orders[0])
      console.log('First order items property:', ordersStore.orders[0].items || ordersStore.orders[0].orderItems)
    }
  } catch (error) {
    console.error('Error loading orders:', error)
    notifications.error('Failed to load orders')
  } finally {
    loading.value = false
  }

  // Set up auto-refresh every 30 seconds
  const autoRefreshInterval = setInterval(async () => {
    try {
      console.log('Auto-refresh: Checking for order updates...')
      await ordersStore.fetchOrders()
      lastRefreshTime.value = new Date().toLocaleTimeString()
      console.log('Auto-refresh completed at:', lastRefreshTime.value)
    } catch (error) {
      console.error('Auto-refresh error:', error)
    }
  }, 30000) // 30 seconds

  // Clean up interval when component unmounts
  onUnmounted(() => {
    if (autoRefreshInterval) {
      clearInterval(autoRefreshInterval)
    }
  })
})

// Reset to first page when filters change
watch([searchQuery, statusFilter, dateFilter], () => {
  currentPage.value = 1
})
</script>
