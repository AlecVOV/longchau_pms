import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async () => {
  // Only run on client side
  if (process.client) {
    const authStore = useAuthStore()
    
    // Initialize authentication
    authStore.initializeAuth()
    
    // Add event listener for storage changes (multi-tab logout)
    window.addEventListener('storage', (e) => {
      if (e.key === 'auth-token' && !e.newValue) {
        // Token was removed in another tab, logout this tab too
        authStore.logout()
      }
    })
    
    // Add event listener for before page unload to clean up intervals
    window.addEventListener('beforeunload', () => {
      authStore.stopSessionMonitoring()
    })
    
    // Add visibility change listener to refresh token when tab becomes active
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && authStore.isLoggedIn) {
        // Check if session is still valid when tab becomes active
        if (!authStore.isSessionValid) {
          authStore.refreshAuthToken().catch(() => {
            authStore.logout()
          })
        }
      }
    })
  }
})
