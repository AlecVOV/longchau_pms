<template>
  <div 
    class="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
    :class="{'border-l-4 border-secondary-500': item.isSignature}"
  >
    <div class="flex flex-col md:flex-row">
      <!-- Image (only show on medium screens and up) -->
      <div class="md:w-1/3">
        <img 
          :src="item.image" 
          :alt="item.name" 
          class="w-full h-40 md:h-full object-cover"
        />
      </div>
      
      <!-- Content -->
      <div class="p-6 md:w-2/3">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-serif text-xl font-bold">
            {{ item.name }}
            <span v-if="item.isSignature" class="text-secondary-500 ml-2 text-sm">★ Chef's Signature</span>
          </h3>
          <span class="font-semibold text-primary-600">${{ item.price.toFixed(2) }}</span>
        </div>
        
        <p class="text-gray-600 mb-4">{{ item.description }}</p>
        
        <div class="flex space-x-2">
          <span 
            v-if="item.isVegetarian" 
            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
          >
            Vegetarian
          </span>
          <span 
            v-if="item.isGlutenFree" 
            class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
          >
            Gluten-Free
          </span>
        </div>
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
});
</script>