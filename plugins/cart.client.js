import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(() => {
  if (process.client) {
    const cartStore = useCartStore()
    const authStore = useAuthStore()
    
    // Load cart from localStorage on page load
    cartStore.loadFromLocalStorage()
    
    // Watch for authentication changes
    watch(() => authStore.user, (newUser, oldUser) => {
      // When user changes (login/logout/switch accounts)
      if (newUser?.id !== oldUser?.id) {
        // Reload cart for new user context
        cartStore.loadFromLocalStorage()
      }
    }, { immediate: false })
    
    // Add event listener for storage changes (multi-tab sync)
    window.addEventListener('storage', (e) => {
      if (e.key && e.key.startsWith('pharmacy-cart-')) {
        // Check if this storage change is for the current user's cart
        const currentCartKey = cartStore.getCartKey()
        if (e.key === currentCartKey) {
          cartStore.loadFromLocalStorage()
        }
      }
    })
  }
})
