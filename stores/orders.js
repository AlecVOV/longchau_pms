import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
    currentOrder: null,
    orderHistory: [],
    loading: false,
    trackingInfo: null,
    orderStatuses: [
      'pending',
      'confirmed',
      'processing',
      'packed',
      'shipped',
      'delivered',
      'cancelled'
    ]
  }),

  getters: {
    getOrderById: (state) => {
      return (id) => state.orders.find(order => order.id === id)
    },

    getPendingOrders: (state) => {
      return state.orders.filter(order => order.status === 'pending')
    },

    getCompletedOrders: (state) => {
      return state.orders.filter(order => order.status === 'delivered')
    },

    getOrdersByStatus: (state) => {
      return (status) => state.orders.filter(order => order.status === status)
    },

    getTotalOrderValue: (state) => {
      return state.orders.reduce((total, order) => total + order.total, 0)
    },

    getRecentOrders: (state) => {
      return state.orders
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
    }
  },

  actions: {
    async createOrder(orderData) {
      this.loading = true
      try {
        const authStore = useAuthStore()
        const currentUserId = authStore.user?.id || 'demo-user'
        
        console.log('Creating order with data:', orderData)
        
        // Prepare order data for API in the correct format
        const apiOrderData = {
          orderNumber: orderData.orderNumber,
          items: orderData.items.map(item => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price
          })),
          shipping: orderData.shipping,
          billing: orderData.billing,
          paymentMethod: orderData.paymentMethod,
          subtotal: orderData.subtotal,
          tax: orderData.tax,
          shippingFee: orderData.shippingFee,
          total: orderData.total
        }
        
        console.log('Sending to API:', apiOrderData)
        
        // Try to create order via API first
        let createdOrder = null
        try {
          const apiResponse = await $fetch('/api/orders', {
            method: 'POST',
            body: apiOrderData,
            headers: authStore.token ? {
              Authorization: `Bearer ${authStore.token}`
            } : {}
          })
          
          console.log('API Response:', apiResponse)
          
          if (apiResponse.success && apiResponse.order) {
            createdOrder = apiResponse.order
            console.log('Order created via API successfully:', createdOrder.id)
          }
        } catch (apiError) {
          console.error('API order creation failed:', apiError)
          throw new Error(`Order creation failed: ${apiError.message || 'Unknown API error'}`)
        }
        
        // If API creation succeeded, save to localStorage as backup and update store
        if (createdOrder && process.client) {
          // Prepare order for local storage
          const localOrder = {
            id: createdOrder.id,
            orderNumber: createdOrder.orderNumber,
            userId: currentUserId,
            items: orderData.items,
            shipping: orderData.shipping,
            billing: orderData.billing,
            paymentMethod: orderData.paymentMethod,
            subtotal: orderData.subtotal,
            tax: orderData.tax,
            shippingFee: orderData.shippingFee,
            total: orderData.total,
            status: createdOrder.status || 'pending',
            createdAt: createdOrder.createdAt || new Date().toISOString(),
            updatedAt: createdOrder.updatedAt || new Date().toISOString()
          }
          
          // Save to user-specific localStorage
          const ordersKey = `pharmacy-orders-${currentUserId}`
          const existingOrders = JSON.parse(localStorage.getItem(ordersKey) || '[]')
          existingOrders.push(localOrder)
          localStorage.setItem(ordersKey, JSON.stringify(existingOrders))
          
          // Update store
          this.orders.push(localOrder)
          this.currentOrder = localOrder
        }
        
        return createdOrder
      } catch (error) {
        console.error('Error creating order:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchOrders(params = {}) {
      this.loading = true
      try {
        // Get auth store safely
        let authStore
        let currentUserId = 'demo-user'
        
        try {
          authStore = useAuthStore()
          currentUserId = authStore.user?.id || 'demo-user'
        } catch (authError) {
          console.warn('Auth store not available, using demo user:', authError)
        }
        
        // Try to fetch from API first with cache-busting
        let apiOrders = []
        
        // Store previous orders for comparison
        const previousOrders = [...this.orders]
        
        try {
          const cacheBuster = Date.now()
          const response = await $fetch(`/api/orders?_t=${cacheBuster}`, {
            headers: (authStore && authStore.token) ? {
              Authorization: `Bearer ${authStore.token}`,
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            } : {}
          })
          
          // Handle the API response structure properly
          if (response && response.success && Array.isArray(response.data)) {
            apiOrders = response.data
          } else if (Array.isArray(response)) {
            // Fallback: if response is directly an array
            apiOrders = response
          } else {
            console.warn('Unexpected API response format:', response)
            apiOrders = []
          }
        } catch (apiError) {
          console.warn('API orders fetch failed, loading from localStorage:', apiError)
          apiOrders = []
        }
        
        // Load from user-specific localStorage as fallback
        if (process.client) {
          const ordersKey = `pharmacy-orders-${currentUserId}`
          const existingOrders = JSON.parse(localStorage.getItem(ordersKey) || '[]')
          
          console.log('Loading orders for user:', currentUserId)
          console.log('Orders key:', ordersKey)
          console.log('Existing orders found:', existingOrders.length)
          console.log('API orders found:', Array.isArray(apiOrders) ? apiOrders.length : 'Not an array')
          
          // Ensure apiOrders is always an array
          if (!Array.isArray(apiOrders)) {
            console.warn('apiOrders is not an array, converting to empty array:', apiOrders)
            apiOrders = []
          }
          
          // If API failed or returned no results, use localStorage orders
          if (apiOrders.length === 0) {
            this.orders = existingOrders.filter(order => 
              order.userId === currentUserId
            )
          } else {
            // Merge API orders with local orders (prefer API)
            const localOrderIds = existingOrders.map(o => o.id)
            const newApiOrders = apiOrders.filter(o => !localOrderIds.includes(o.id))
            this.orders = [...existingOrders, ...newApiOrders].filter(order => 
              order.userId === currentUserId
            )
          }
          
          console.log('Final orders loaded:', this.orders.length)
          
          // Check for status changes and notify
          if (previousOrders.length > 0) {
            this.checkForStatusChanges(previousOrders, this.orders)
          }
        } else {
          // Ensure apiOrders is always an array before assignment
          if (Array.isArray(apiOrders)) {
            this.orders = apiOrders
          } else {
            console.warn('apiOrders is not an array in fallback, using empty array:', apiOrders)
            this.orders = []
          }
        }
      } catch (error) {
        console.error('Error fetching orders:', error)
        this.orders = []
      } finally {
        this.loading = false
      }
    },

    async fetchOrderById(id) {
      this.loading = true
      try {
        const authStore = useAuthStore()
        const cacheBuster = Date.now()
        const response = await $fetch(`/api/orders/${id}?_t=${cacheBuster}`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        })
        
        this.currentOrder = response.order || response
        
        // Also update the order in the orders array if it exists
        const orderIndex = this.orders.findIndex(order => order.id === id)
        if (orderIndex !== -1) {
          this.orders[orderIndex] = this.currentOrder
        }
        
        return this.currentOrder
      } catch (error) {
        console.error('Error fetching order:', error)
        this.currentOrder = null
        throw error
      } finally {
        this.loading = false
      }
    },

    async refreshOrderById(id) {
      try {
        const authStore = useAuthStore()
        const cacheBuster = Date.now()
        const response = await $fetch(`/api/orders/${id}?_t=${cacheBuster}`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        })
        
        const updatedOrder = response.order || response
        
        // Update the order in the orders array
        const orderIndex = this.orders.findIndex(order => order.id === id)
        if (orderIndex !== -1) {
          this.orders[orderIndex] = updatedOrder
          console.log(`Order ${id} status updated to:`, updatedOrder.status)
        }
        
        return updatedOrder
      } catch (error) {
        console.error('Error refreshing order:', error)
        throw error
      }
    },

    checkForStatusChanges(previousOrders, currentOrders) {
      try {
        const { useNotificationsStore } = require('~/stores/notifications')
        const notifications = useNotificationsStore()
        
        previousOrders.forEach(prevOrder => {
          const currentOrder = currentOrders.find(order => order.id === prevOrder.id)
          if (currentOrder && currentOrder.status !== prevOrder.status) {
            console.log(`Order ${prevOrder.id} status changed from ${prevOrder.status} to ${currentOrder.status}`)
            
            // Show notification for status change
            const statusMessages = {
              'pending': 'Your order is pending confirmation',
              'processing': 'Your order is being processed',
              'shipped': 'Your order has been shipped',
              'delivered': 'Your order has been delivered',
              'cancelled': 'Your order has been cancelled'
            }
            
            const message = statusMessages[currentOrder.status.toLowerCase()] || `Order status updated to ${currentOrder.status}`
            notifications.success(`Order #${currentOrder.orderNumber}: ${message}`)
          }
        })
      } catch (error) {
        console.error('Error checking status changes:', error)
      }
    },

    async updateOrderStatus(id, status) {
      try {
        const authStore = useAuthStore()
        const response = await $fetch(`/api/orders/${id}/status`, {
          method: 'PATCH',
          body: { status },
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        })
        
        const orderIndex = this.orders.findIndex(order => order.id === id)
        if (orderIndex !== -1) {
          this.orders[orderIndex] = response.order || response
        }
        
        if (this.currentOrder && this.currentOrder.id === id) {
          this.currentOrder = response.order || response
        }
        
        return response
      } catch (error) {
        console.error('Error updating order status:', error)
        throw error
      }
    },

    async cancelOrder(id, reason = '') {
      try {
        const authStore = useAuthStore()
        const response = await $fetch(`/api/orders/${id}/cancel`, {
          method: 'POST',
          body: { reason },
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        })
        
        const orderIndex = this.orders.findIndex(order => order.id === id)
        if (orderIndex !== -1) {
          this.orders[orderIndex].status = 'cancelled'
          this.orders[orderIndex].cancelReason = reason
        }
        
        return response
      } catch (error) {
        console.error('Error cancelling order:', error)
        throw error
      }
    },

    async fetchOrderHistory(userId) {
      this.loading = true
      try {
        const authStore = useAuthStore()
        const response = await $fetch(`/api/users/${userId}/orders`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        })
        
        this.orderHistory = response.orders || response.data || []
      } catch (error) {
        console.error('Error fetching order history:', error)
        this.orderHistory = []
      } finally {
        this.loading = false
      }
    },

    async trackOrder(orderId) {
      this.loading = true
      try {
        const authStore = useAuthStore()
        const response = await $fetch(`/api/orders/${orderId}/tracking`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        })
        
        this.trackingInfo = response.tracking || response
        return this.trackingInfo
      } catch (error) {
        console.error('Error tracking order:', error)
        this.trackingInfo = null
        throw error
      } finally {
        this.loading = false
      }
    },

    async processPayment(orderId, paymentData) {
      this.loading = true
      try {
        const authStore = useAuthStore()
        const response = await $fetch(`/api/orders/${orderId}/payment`, {
          method: 'POST',
          body: paymentData,
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        })
        
        // Update order status after successful payment
        const orderIndex = this.orders.findIndex(order => order.id === orderId)
        if (orderIndex !== -1) {
          this.orders[orderIndex].paymentStatus = 'paid'
          this.orders[orderIndex].status = 'confirmed'
        }
        
        return response
      } catch (error) {
        console.error('Error processing payment:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async reorderItems(orderId) {
      try {
        const authStore = useAuthStore()
        
        const response = await $fetch(`/api/orders/${orderId}/reorder`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        })
        
        // Add items to cart
        try {
          const { useCartStore } = await import('~/stores/cart')
          const cartStore = useCartStore()
          response.items.forEach(item => {
            cartStore.addItem(item.product, item.quantity)
          })
        } catch (cartError) {
          console.warn('Failed to add items to cart:', cartError)
        }
        
        return response
      } catch (error) {
        console.error('Error reordering items:', error)
        throw error
      }
    },

    async downloadInvoice(orderId) {
      try {
        const authStore = useAuthStore()
        const response = await $fetch(`/api/orders/${orderId}/invoice`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        })
        
        // Handle PDF download
        if (process.client && response.downloadUrl) {
          const link = document.createElement('a')
          link.href = response.downloadUrl
          link.download = `invoice-${orderId}.pdf`
          link.click()
        }
        
        return response
      } catch (error) {
        console.error('Error downloading invoice:', error)
        throw error
      }
    },

    clearCurrentOrder() {
      this.currentOrder = null
    },

    clearTrackingInfo() {
      this.trackingInfo = null
    }
  }
})
