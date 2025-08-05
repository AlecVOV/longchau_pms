<template>
  <Teleport to="body">
    <div v-if="notifications.length" class="toast-container">
      <TransitionGroup name="toast" tag="div">
        <ToastNotification
          v-for="notification in notifications"
          :key="notification.id"
          :notification="notification"
          @close="removeNotification(notification.id)"
        />
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { useNotificationsStore } from '~/stores/notifications'
import ToastNotification from './ToastNotification.vue'

const notificationsStore = useNotificationsStore()

const notifications = computed(() => notificationsStore.notifications)

const removeNotification = (id) => {
  notificationsStore.remove(id)
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  pointer-events: none;
}

.toast-container > * {
  pointer-events: auto;
}

/* Transition styles */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%) scale(0.95);
}

.toast-move {
  transition: transform 0.3s ease;
}

@media (max-width: 640px) {
  .toast-container {
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
  }
}
</style>
