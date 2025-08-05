import { d as defineStore } from "../server.mjs";
const useNotificationsStore = defineStore("notifications", {
  state: () => ({
    notifications: []
  }),
  actions: {
    add(notification) {
      const id = Date.now() + Math.random();
      const newNotification = {
        id,
        type: "info",
        // info, success, warning, error
        title: "",
        message: "",
        duration: 5e3,
        // Auto dismiss after 5 seconds
        persistent: false,
        // If true, won't auto dismiss
        actions: [],
        // Array of action buttons
        ...notification
      };
      this.notifications.push(newNotification);
      if (!newNotification.persistent && newNotification.duration > 0) {
        setTimeout(() => {
          this.remove(id);
        }, newNotification.duration);
      }
      return id;
    },
    remove(id) {
      const index = this.notifications.findIndex((n) => n.id === id);
      if (index > -1) {
        this.notifications.splice(index, 1);
      }
    },
    clear() {
      this.notifications = [];
    },
    // Convenience methods
    success(message, options = {}) {
      return this.add({
        type: "success",
        message,
        ...options
      });
    },
    error(message, options = {}) {
      return this.add({
        type: "error",
        message,
        duration: 8e3,
        // Errors stay longer
        ...options
      });
    },
    warning(message, options = {}) {
      return this.add({
        type: "warning",
        message,
        duration: 6e3,
        ...options
      });
    },
    info(message, options = {}) {
      return this.add({
        type: "info",
        message,
        ...options
      });
    },
    // Toast for async operations
    loading(message, options = {}) {
      return this.add({
        type: "info",
        message,
        persistent: true,
        showSpinner: true,
        ...options
      });
    }
  }
});
export {
  useNotificationsStore as u
};
//# sourceMappingURL=notifications-CugxVEC_.js.map
