<template>
  <div class="card animate-pulse">
    <!-- Image skeleton -->
    <div class="w-full h-48 bg-gray-200 rounded-t-lg"></div>
    
    <div class="p-4 space-y-3">
      <!-- Title skeleton -->
      <div class="h-4 bg-gray-200 rounded w-3/4"></div>
      
      <!-- Description skeleton -->
      <div class="space-y-2">
        <div class="h-3 bg-gray-200 rounded"></div>
        <div class="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
      
      <!-- Price and button skeleton -->
      <div class="flex items-center justify-between pt-2">
        <div class="h-6 bg-gray-200 rounded w-20"></div>
        <div class="h-8 bg-gray-200 rounded w-24"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Product card skeleton for loading states
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
