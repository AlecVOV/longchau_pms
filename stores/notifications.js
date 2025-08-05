import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notifications: []
  }),

  actions: {
    add(notification) {
      const id = Date.now() + Math.random()
      const newNotification = {
        id,
        type: 'info', // info, success, warning, error
        title: '',
        message: '',
        duration: 5000, // Auto dismiss after 5 seconds
        persistent: false, // If true, won't auto dismiss
        actions: [], // Array of action buttons
        ...notification
      }

      this.notifications.push(newNotification)

      // Auto dismiss if not persistent
      if (!newNotification.persistent && newNotification.duration > 0) {
        setTimeout(() => {
          this.remove(id)
        }, newNotification.duration)
      }

      return id
    },

    remove(id) {
      const index = this.notifications.findIndex(n => n.id === id)
      if (index > -1) {
        this.notifications.splice(index, 1)
      }
    },

    clear() {
      this.notifications = []
    },

    // Convenience methods
    success(message, options = {}) {
      return this.add({
        type: 'success',
        message,
        ...options
      })
    },

    error(message, options = {}) {
      return this.add({
        type: 'error',
        message,
        duration: 8000, // Errors stay longer
        ...options
      })
    },

    warning(message, options = {}) {
      return this.add({
        type: 'warning',
        message,
        duration: 6000,
        ...options
      })
    },

    info(message, options = {}) {
      return this.add({
        type: 'info',
        message,
        ...options
      })
    },

    // Toast for async operations
    loading(message, options = {}) {
      return this.add({
        type: 'info',
        message,
        persistent: true,
        showSpinner: true,
        ...options
      })
    }
  }
})
