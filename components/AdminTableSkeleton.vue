<template>
  <div class="animate-pulse">
    <!-- Header -->
    <div class="mb-8">
      <div class="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div class="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
    
    <!-- Stats cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div v-for="i in 4" :key="i" class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded w-20"></div>
            <div class="h-6 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Table -->
    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="p-6 border-b">
        <div class="h-6 bg-gray-200 rounded w-48"></div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th v-for="i in 6" :key="i" class="px-6 py-3">
                <div class="h-4 bg-gray-200 rounded w-20"></div>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="i in 8" :key="i">
              <td v-for="j in 6" :key="j" class="px-6 py-4">
                <div class="h-4 bg-gray-200 rounded" :class="j === 1 ? 'w-32' : 'w-16'"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
// Admin table skeleton for loading states
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
