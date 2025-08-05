import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware on server-side rendering
  if (process.server) return

  const authStore = useAuthStore()
  
  // Initialize auth if not already done
  if (!authStore.isLoggedIn) {
    authStore.initializeAuth()
  }

  // Check if user is authenticated
  if (!authStore.isLoggedIn) {
    // Redirect to login with return URL
    return navigateTo({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  // Check if session is still valid
  if (!authStore.isSessionValid) {
    // Try to refresh token
    authStore.refreshAuthToken().catch(() => {
      return navigateTo({
        path: '/login',
        query: { redirect: to.fullPath, message: 'Session expired. Please log in again.' }
      })
    })
  }
})
