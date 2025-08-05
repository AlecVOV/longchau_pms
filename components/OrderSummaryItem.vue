<template>
  <div class="flex items-center py-2 border-b border-neutral-100 last:border-b-0">
    <img :src="item.image" :alt="item.name" class="w-12 h-12 object-cover rounded-md">
    <div class="ml-3 flex-1">
      <p class="text-sm font-medium text-neutral-800 line-clamp-1">{{ item.name }}</p>
      <div class="flex items-center justify-between mt-1">
        <p class="text-sm text-neutral-500">{{ item.quantity }} × ${{ item.price.toFixed(2) }}</p>
        <p class="text-sm font-medium">${{ (item.price * item.quantity).toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>