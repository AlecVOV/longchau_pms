<template>
  <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
    <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
      <!-- Product Image -->
      <div class="flex-shrink-0 w-full md:w-32 h-32">
        <NuxtLink :to="`/product/${product.slug}`" class="block w-full h-full">
          <img
            :src="product.image || '/placeholder-product.jpg'"
            :alt="product.name"
            class="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </NuxtLink>
      </div>

      <!-- Product Info -->
      <div class="flex-grow">
        <div class="flex flex-col md:flex-row md:justify-between">
          <div class="flex-grow">
            <!-- Product Name -->
            <NuxtLink 
              :to="`/product/${product.slug}`"
              class="text-lg font-semibold text-gray-900 hover:text-blue-600 line-clamp-2"
            >
              {{ product.name }}
            </NuxtLink>

            <!-- Brand -->
            <p v-if="product.brand" class="text-sm text-gray-600 mt-1">
              {{ product.brand }}
            </p>

            <!-- Description -->
            <p class="text-gray-600 mt-2 line-clamp-2">
              {{ product.description }}
            </p>

            <!-- Tags/Categories -->
            <div class="flex flex-wrap gap-2 mt-3">
              <span 
                v-if="product.category"
                class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {{ product.category.name }}
              </span>
              <span 
                v-if="product.prescriptionRequired"
                class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full"
              >
                Prescription Required
              </span>
              <span 
                v-if="product.stock <= 5 && product.stock > 0"
                class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
              >
                Low Stock
              </span>
            </div>
          </div>

          <!-- Price and Actions -->
          <div class="flex flex-col items-end justify-between mt-4 md:mt-0 md:ml-6">
            <!-- Price -->
            <div class="text-right mb-4">
              <div v-if="product.discount > 0" class="flex items-center space-x-2">
                <span class="text-lg font-bold text-green-600">
                  ${{ discountedPrice.toFixed(2) }}
                </span>
                <span class="text-sm text-gray-500 line-through">
                  ${{ product.price.toFixed(2) }}
                </span>
                <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                  {{ product.discount }}% OFF
                </span>
              </div>
              <div v-else class="text-lg font-bold text-gray-900">
                ${{ product.price.toFixed(2) }}
              </div>
            </div>

            <!-- Stock Status -->
            <div class="mb-4">
              <span 
                v-if="product.stock > 0"
                class="text-sm text-green-600 font-medium"
              >
                {{ product.stock }} in stock
              </span>
              <span 
                v-else
                class="text-sm text-red-600 font-medium"
              >
                Out of stock
              </span>
            </div>

            <!-- Actions -->
            <div class="flex flex-col space-y-2 w-full md:w-auto">
              <div class="flex space-x-2">
                <button
                  v-if="product.stock > 0"
                  @click="$emit('add-to-cart', product)"
                  class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm font-medium"
                >
                  Add to Cart
                </button>
                <button
                  v-else
                  class="flex-1 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium"
                  disabled
                >
                  Out of Stock
                </button>
                
                <button
                  @click="$emit('quick-view', product)"
                  class="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-sm"
                  title="Quick view"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                
                <button
                  @click="handleWishlistClick"
                  class="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 text-sm"
                  :class="{ 'border-red-300 text-red-500 bg-red-50': wishlistClicked }"
                  title="Add to wishlist"
                >
                  <!-- Outlined heart when not clicked -->
                  <svg v-if="!wishlistClicked" class="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <!-- Filled heart when clicked -->
                  <svg v-else class="w-4 h-4 transition-all duration-300 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
              </div>

              <NuxtLink
                :to="`/product/${product.slug}`"
                class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-sm font-medium text-center"
              >
                View Details
              </NuxtLink>
            </div>
          </div>
        </div>
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

const emit = defineEmits(['add-to-cart', 'quick-view', 'add-to-wishlist'])

// Wishlist animation state
const wishlistClicked = ref(false)

// Handle wishlist click with visual feedback
const handleWishlistClick = () => {
  wishlistClicked.value = true
  emit('add-to-wishlist', props.product)
  
  // No timeout - keep the heart filled permanently
}

const discountedPrice = computed(() => {
  if (props.product.discount > 0) {
    return props.product.price * (1 - props.product.discount / 100)
  }
  return props.product.price
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
