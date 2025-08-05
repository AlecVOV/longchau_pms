import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    refreshToken: null,
    loading: false,
    isAuthenticated: false,
    sessionExpiry: null,
    sessionCheckInterval: null,
  }),

  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated && !!state.token,
    getUserRole: (state) => state.user?.role || 'customer',
    getUserId: (state) => state.user?.id,
    isSessionValid: (state) => {
      if (!state.sessionExpiry) return false
      return new Date().getTime() < state.sessionExpiry
    },
    timeUntilExpiry: (state) => {
      if (!state.sessionExpiry) return 0
      return Math.max(0, state.sessionExpiry - new Date().getTime())
    },
  },

  actions: {
    async login(credentials) {
      this.loading = true
      try {
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: credentials
        })
        
        this.user = response.user
        this.token = response.token
        this.refreshToken = response.refreshToken
        this.isAuthenticated = true
        this.sessionExpiry = new Date().getTime() + (response.expiresIn * 1000)
        
        // Store tokens for persistence - only on client side
        if (process.client) {
          try {
            localStorage.setItem('auth-token', response.token)
            localStorage.setItem('refresh-token', response.refreshToken)
            localStorage.setItem('session-expiry', this.sessionExpiry.toString())
            
            // Load user-specific cart after login
            const { useCartStore } = await import('~/stores/cart')
            const cartStore = useCartStore()
            cartStore.loadFromLocalStorage()
          } catch (storageError) {
            console.warn('Failed to save to localStorage or load cart:', storageError)
          }
        }
        
        // Start session monitoring
        this.startSessionMonitoring()
        
        return response
      } catch (error) {
        console.error('Login error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(userData) {
      this.loading = true
      try {
        const response = await $fetch('/api/auth/register', {
          method: 'POST',
          body: userData
        })
        
        this.user = response.user
        this.token = response.token
        this.refreshToken = response.refreshToken
        this.isAuthenticated = true
        this.sessionExpiry = new Date().getTime() + (response.expiresIn * 1000)
        
        if (process.client) {
          try {
            localStorage.setItem('auth-token', response.token)
            localStorage.setItem('refresh-token', response.refreshToken)
            localStorage.setItem('session-expiry', this.sessionExpiry.toString())
            
            // Load user-specific cart after registration
            const { useCartStore } = await import('~/stores/cart')
            const cartStore = useCartStore()
            cartStore.loadFromLocalStorage()
          } catch (storageError) {
            console.warn('Failed to save to localStorage or load cart:', storageError)
          }
        }
        
        // Start session monitoring
        this.startSessionMonitoring()
        
        return response
      } catch (error) {
        console.error('Registration error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      try {
        if (this.token) {
          await $fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          })
        }
      } catch (error) {
        console.error('Logout error:', error)
      } finally {
        // Store old user ID before clearing
        const oldUserId = this.user?.id

        this.user = null
        this.token = null
        this.refreshToken = null
        this.isAuthenticated = false
        this.sessionExpiry = null
        
        // Clear session monitoring
        this.stopSessionMonitoring()
        
        if (process.client) {
          try {
            localStorage.removeItem('auth-token')
            localStorage.removeItem('refresh-token')
            localStorage.removeItem('session-expiry')
            
            // Clear user-specific cart when logging out
            if (oldUserId) {
              const { useCartStore } = await import('~/stores/cart')
              const cartStore = useCartStore()
              cartStore.clearUserCart(oldUserId)
            }
          } catch (storageError) {
            console.warn('Failed to clear localStorage:', storageError)
          }
        }
      }
    },

    async fetchUser() {
      if (!this.token) return
      
      try {
        const response = await $fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.user = response.user
        this.isAuthenticated = true
      } catch (error) {
        console.error('Fetch user error:', error)
        // If user fetch fails, clear authentication
        await this.logout()
      }
    },

    async updateProfile(profileData) {
      this.loading = true
      try {
        const response = await $fetch('/api/auth/profile', {
          method: 'PUT',
          body: profileData,
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        
        this.user = { ...this.user, ...response.user }
        return response
      } catch (error) {
        console.error('Update profile error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async changePassword(passwordData) {
      this.loading = true
      try {
        const response = await $fetch('/api/auth/change-password', {
          method: 'POST',
          body: passwordData,
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        return response
      } catch (error) {
        console.error('Change password error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    initializeAuth() {
      // Only run on client side
      if (!process.client) return
      
      try {
        const token = localStorage.getItem('auth-token')
        const refreshToken = localStorage.getItem('refresh-token')
        const sessionExpiry = localStorage.getItem('session-expiry')
        
        if (token && refreshToken && sessionExpiry) {
          this.token = token
          this.refreshToken = refreshToken
          this.sessionExpiry = parseInt(sessionExpiry)
          
          // Check if session is still valid
          if (this.isSessionValid) {
            this.isAuthenticated = true
            this.fetchUser()
            this.startSessionMonitoring()
          } else {
            // Try to refresh token
            this.refreshAuthToken().catch(() => {
              // If refresh fails, clean up
              this.logout()
            })
          }
        }
      } catch (error) {
        console.warn('Failed to initialize auth from localStorage:', error)
        this.logout()
      }
    },

    // Session Management Methods
    startSessionMonitoring() {
      if (!process.client || this.sessionCheckInterval) return
      
      this.sessionCheckInterval = setInterval(() => {
        // Check if session is about to expire (5 minutes before)
        const timeLeft = this.timeUntilExpiry
        if (timeLeft > 0 && timeLeft < 5 * 60 * 1000) {
          this.refreshAuthToken()
        } else if (timeLeft <= 0) {
          this.logout()
        }
      }, 60000) // Check every minute
    },

    stopSessionMonitoring() {
      if (this.sessionCheckInterval) {
        clearInterval(this.sessionCheckInterval)
        this.sessionCheckInterval = null
      }
    },

    async refreshAuthToken() {
      if (!this.refreshToken) {
        this.logout()
        return
      }

      try {
        const response = await $fetch('/api/auth/refresh', {
          method: 'POST',
          body: { refreshToken: this.refreshToken }
        })

        this.token = response.token
        this.refreshToken = response.refreshToken
        this.sessionExpiry = new Date().getTime() + (response.expiresIn * 1000)

        if (process.client) {
          localStorage.setItem('auth-token', response.token)
          localStorage.setItem('refresh-token', response.refreshToken)
          localStorage.setItem('session-expiry', this.sessionExpiry.toString())
        }

        return response
      } catch (error) {
        console.error('Token refresh failed:', error)
        this.logout()
        throw error
      }
    },

    // Password Reset Methods
    async forgotPassword(email) {
      this.loading = true
      try {
        const response = await $fetch('/api/auth/forgot-password', {
          method: 'POST',
          body: { email }
        })
        return response
      } catch (error) {
        console.error('Forgot password error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async resetPassword(token, email, password, confirmPassword) {
      this.loading = true
      try {
        const response = await $fetch('/api/auth/reset-password', {
          method: 'POST',
          body: { token, email, password, confirmPassword }
        })
        return response
      } catch (error) {
        console.error('Reset password error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async validateResetToken(token, email) {
      try {
        const response = await $fetch('/api/auth/validate-reset-token', {
          method: 'POST',
          body: { token, email }
        })
        return response
      } catch (error) {
        console.error('Validate reset token error:', error)
        throw error
      }
    },

    // Session utilities
    extendSession() {
      if (this.isLoggedIn) {
        this.refreshAuthToken()
      }
    },

    getSessionTimeRemaining() {
      if (!this.sessionExpiry) return 0
      return Math.max(0, Math.floor((this.sessionExpiry - new Date().getTime()) / 1000))
    },

    isSessionExpiringSoon(minutes = 5) {
      const timeLeft = this.timeUntilExpiry
      return timeLeft > 0 && timeLeft < minutes * 60 * 1000
    }
  }
})
