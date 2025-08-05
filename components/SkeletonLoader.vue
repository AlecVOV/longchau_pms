<template>
  <div class="animate-pulse">
    <div class="bg-gray-200 rounded" :style="{ width, height }" :class="additionalClasses"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '1rem'
  },
  additionalClasses: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
