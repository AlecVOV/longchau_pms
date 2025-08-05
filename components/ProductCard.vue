<template>
  <div class="card group relative animate-fade-in">
    <!-- Badges -->
    <div class="absolute top-2 left-2 z-10 flex flex-col gap-1">
      <span v-if="product.discount > 0" class="bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
        {{ product.discount }}% OFF
      </span>
      <span v-if="product.isRx" class="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
        Prescription
      </span>
    </div>
    
    <!-- Quick view button -->
    <div class="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
      <button @click.prevent="$emit('quick-view', product)" 
              class="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white text-neutral-700 hover:text-primary-600 transition-colors"
              title="Quick view">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </button>
    </div>
    
    <!-- Product Image -->
    <NuxtLink :to="`/product/${product.slug}`">
      <div class="aspect-square overflow-hidden">
        <img :src="getProductImage(product)" 
             :alt="product.name" 
             class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105">
      </div>
    </NuxtLink>
    
    <!-- Product Info -->
    <div class="p-4">
      <!-- Category -->
      <p class="text-xs text-neutral-500 mb-1">{{ product.category?.name || product.category }}</p>
      
      <!-- Product Name -->
      <NuxtLink :to="`/product/${product.slug}`">
        <h3 class="font-medium text-neutral-800 hover:text-primary-600 transition-colors line-clamp-2 mb-2">
          {{ product.name }}
        </h3>
      </NuxtLink>
      
      <!-- Rating -->
      <div class="flex items-center mb-3">
        <div class="flex text-warning-500">
          <svg v-for="n in 5" :key="n" 
               :class="[n <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300']"
               class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span class="text-xs text-neutral-500 ml-1">({{ product.reviews }})</span>
      </div>
      
      <!-- Price -->
      <div class="flex items-center justify-between mb-3">
        <div>
          <span v-if="product.discount > 0" class="text-neutral-500 text-sm line-through mr-2">
            ${{ (product.price * (1 + product.discount / 100)).toFixed(2) }}
          </span>
          <span class="font-semibold text-neutral-900">${{ product.price.toFixed(2) }}</span>
        </div>
        <span v-if="product.stock === 0" class="text-xs text-accent-600 font-medium">Out of Stock</span>
        <span v-else-if="product.requiresPrescription" class="text-xs text-primary-600 font-medium">Rx Required</span>
      </div>
      
      <!-- Actions -->
      <div class="flex gap-2">
        <template v-if="product.requiresPrescription">
          <NuxtLink :to="`/product/${product.slug}`" class="btn-primary py-1.5 flex-grow text-center text-sm">
            View Details
          </NuxtLink>
        </template>
        <template v-else-if="product.stock > 0">
          <button @click="$emit('add-to-cart', product)" 
                  class="btn-primary py-1.5 flex-grow text-sm">
            Add to Cart
          </button>
        </template>
        <template v-else>
          <button disabled class="btn-primary py-1.5 flex-grow text-sm opacity-50 cursor-not-allowed">
            Out of Stock
          </button>
        </template>
        <button @click="handleWishlistClick" 
                class="btn-ghost py-1.5 px-3 text-sm transition-all duration-300 hover:scale-110"
                :class="{ 'text-red-500': wishlistClicked }">
          <!-- Outlined heart when not clicked -->
          <svg v-if="!wishlistClicked" class="w-5 h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <!-- Filled heart when clicked -->
          <svg v-else class="w-5 h-5 transition-all duration-300 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['add-to-cart', 'add-to-wishlist', 'quick-view'])

// Wishlist animation state
const wishlistClicked = ref(false)

// Handle wishlist click with visual feedback
const handleWishlistClick = () => {
  wishlistClicked.value = true
  emit('add-to-wishlist', props.product)
  
  // No timeout - keep the heart filled permanently
}

// Helper function to get the correct product image
const getProductImage = (product) => {
  if (product.images) {
    // If images is an array, return the first image
    if (Array.isArray(product.images) && product.images.length > 0) {
      return product.images[0]
    }
    // If images is a string (JSON), try to parse it
    if (typeof product.images === 'string') {
      try {
        const parsedImages = JSON.parse(product.images)
        if (Array.isArray(parsedImages) && parsedImages.length > 0) {
          return parsedImages[0]
        }
      } catch {
        // If parsing fails, return the string as is
        return product.images
      }
    }
  }
  // Fallback to image field or placeholder
  return product.image || '/placeholder-product.jpg'
}
</script>