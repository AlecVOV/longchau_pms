import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware on server-side rendering
  if (process.server) return

  const authStore = useAuthStore()
  
  // Initialize auth if not already done
  authStore.initializeAuth()

  // If user is authenticated, redirect to home or intended page
  if (authStore.isLoggedIn && authStore.isSessionValid) {
    const redirectTo = to.query.redirect || '/'
    return navigateTo(redirectTo)
  }
})
