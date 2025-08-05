import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    
    total: (state) => {
      return state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
  },
  
  actions: {
    addItem(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
          isRx: product.isRx || false
        })
      }
      
      this.saveToLocalStorage()
    },
    
    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId)
      this.saveToLocalStorage()
    },
    
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId)
        } else {
          item.quantity = quantity
          this.saveToLocalStorage()
        }
      }
    },
    
    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },

    // Enhanced cart clearing method with better error handling
    forceCloseCart() {
      try {
        // Clear the items array
        this.items = []
        
        // Clear localStorage with different possible keys
        const possibleKeys = [
          'pharmacy-cart',
          'pharmacy-cart-guest',
          this.getCartKey()
        ]
        
        possibleKeys.forEach(key => {
          try {
            localStorage.removeItem(key)
          } catch (e) {
            console.warn(`Failed to remove ${key} from localStorage:`, e)
          }
        })
        
        // Try to clear any user-specific cart keys
        try {
          const userId = this.getCurrentUserId()
          if (userId && userId !== 'guest') {
            localStorage.removeItem(`pharmacy-cart-${userId}`)
          }
        } catch (e) {
          console.warn('Failed to clear user-specific cart:', e)
        }
        
        console.log('Cart successfully cleared and localStorage cleaned')
        return true
      } catch (error) {
        console.error('Error in forceCloseCart:', error)
        return false
      }
    },
    
    // Get current user ID from auth store safely - FIXED VERSION
    getCurrentUserId() {
      if (!process.client) return 'guest'
      
      try {
        // Safe approach: try to access auth store through Nuxt context
        // without using require() or dynamic imports
        const nuxtApp = useNuxtApp()
        if (nuxtApp && nuxtApp.$pinia) {
          // Check if auth store exists and is initialized
          const stores = nuxtApp.$pinia._s
          if (stores && stores.has('auth')) {
            const authStore = stores.get('auth')
            if (authStore && authStore.user && authStore.user.id) {
              return authStore.user.id
            }
          }
        }
        
        return 'guest'
      } catch (error) {
        // Silently fail and return guest - don't log to avoid console spam
        return 'guest'
      }
    },

    // Get user-specific cart key
    getCartKey() {
      const userId = this.getCurrentUserId()
      return `pharmacy-cart-${userId}`
    },
    
    // Save cart to localStorage
    saveToLocalStorage() {
      if (!process.client) return
      
      try {
        const cartKey = this.getCartKey()
        localStorage.setItem(cartKey, JSON.stringify(this.items))
      } catch (error) {
        console.warn('Failed to save cart to localStorage:', error)
      }
    },
    
    // Load cart from localStorage
    loadFromLocalStorage() {
      if (!process.client) return
      
      try {
        const cartKey = this.getCartKey()
        const stored = localStorage.getItem(cartKey)
        
        if (stored) {
          this.items = JSON.parse(stored)
        }
      } catch (error) {
        console.warn('Failed to load cart from localStorage:', error)
        this.items = []
      }
    },
    
    // Initialize cart (called when store is created)
    init() {
      this.loadFromLocalStorage()
    }
  }
})