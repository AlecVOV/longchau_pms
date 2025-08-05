<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!-- Background overlay -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Modal -->
      <div
        class="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <!-- Close button -->
        <div class="absolute top-4 right-4 z-10">
          <button
            @click="closeModal"
            class="bg-white rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors shadow-md"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal content -->
        <div v-if="product" class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Product Image -->
            <div class="space-y-4">
              <div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  :src="getProductImage(product)"
                  :alt="product.name"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <!-- Thumbnail images if multiple -->
              <div v-if="productImages.length > 1" class="flex space-x-2 overflow-x-auto">
                <button
                  v-for="(image, index) in productImages"
                  :key="index"
                  @click="selectedImageIndex = index"
                  :class="{
                    'ring-2 ring-blue-500': selectedImageIndex === index,
                    'ring-1 ring-gray-300': selectedImageIndex !== index
                  }"
                  class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden"
                >
                  <img
                    :src="image"
                    :alt="`${product.name} ${index + 1}`"
                    class="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>

            <!-- Product Details -->
            <div class="space-y-6">
              <!-- Product Title & Category -->
              <div>
                <p class="text-sm text-gray-500 mb-1">{{ product.category?.name || product.category }}</p>
                <h1 class="text-2xl font-bold text-gray-900">{{ product.name }}</h1>
              </div>

              <!-- Rating -->
              <div class="flex items-center space-x-2">
                <div class="flex text-yellow-400">
                  <span v-for="n in 5" :key="n" 
                        :class="[n <= Math.floor(product.rating || 4.5) ? 'i-iconify-ph-star-fill' : 'i-iconify-ph-star text-gray-300']"></span>
                </div>
                <span class="text-sm text-gray-500">({{ product.reviews || 0 }} reviews)</span>
              </div>

              <!-- Price -->
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <span v-if="product.discount > 0" class="text-lg text-gray-500 line-through">
                    ${{ (product.price * (1 + product.discount / 100)).toFixed(2) }}
                  </span>
                  <span class="text-2xl font-bold text-gray-900">${{ product.price.toFixed(2) }}</span>
                  <span v-if="product.discount > 0" class="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                    {{ product.discount }}% OFF
                  </span>
                </div>
              </div>

              <!-- Stock Status -->
              <div>
                <span v-if="product.stock > 0" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <svg class="w-1.5 h-1.5 mr-1" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                  In Stock ({{ product.stock }} available)
                </span>
                <span v-else class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Out of Stock
                </span>
              </div>

              <!-- Short Description -->
              <div v-if="product.shortDescription || product.description">
                <h3 class="text-lg font-medium text-gray-900 mb-2">Description</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ product.shortDescription || product.description || 'No description available.' }}
                </p>
              </div>

              <!-- Product Details -->
              <div v-if="product.manufacturer || product.sku" class="space-y-2">
                <h3 class="text-lg font-medium text-gray-900">Product Details</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div v-if="product.sku">
                    <span class="font-medium text-gray-500">SKU:</span>
                    <span class="ml-2 text-gray-900">{{ product.sku }}</span>
                  </div>
                  <div v-if="product.manufacturer">
                    <span class="font-medium text-gray-500">Brand:</span>
                    <span class="ml-2 text-gray-900">{{ product.manufacturer }}</span>
                  </div>
                </div>
              </div>

              <!-- Quantity Selector -->
              <div v-if="!product.requiresPrescription && product.stock > 0">
                <label class="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div class="flex items-center space-x-3">
                  <button
                    @click="quantity = Math.max(1, quantity - 1)"
                    class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span class="w-12 text-center font-medium">{{ quantity }}</span>
                  <button
                    @click="quantity = Math.min(product.stock, quantity + 1)"
                    class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <template v-if="product.requiresPrescription">
                  <NuxtLink 
                    :to="`/product/${product.slug}`" 
                    class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
                  >
                    View Details (Prescription Required)
                  </NuxtLink>
                </template>
                <template v-else-if="product.stock > 0">
                  <button
                    @click="addToCart"
                    class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Add to Cart - ${{ (product.price * quantity).toFixed(2) }}
                  </button>
                </template>
                <template v-else>
                  <button disabled class="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg cursor-not-allowed font-medium">
                    Out of Stock
                  </button>
                </template>
                
                <div class="flex space-x-3">
                  <button
                    @click="addToWishlist"
                    class="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium flex items-center justify-center"
                    :class="{ 'border-red-300 text-red-500 bg-red-50': wishlistClicked }"
                  >
                    <!-- Outlined heart when not clicked -->
                    <svg v-if="!wishlistClicked" class="w-5 h-5 mr-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <!-- Filled heart when clicked -->
                    <svg v-else class="w-5 h-5 mr-2 transition-all duration-300 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    Wishlist
                  </button>
                  <NuxtLink 
                    :to="`/product/${product.slug}`"
                    class="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                  >
                    View Full Details
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useNotificationsStore } from '~/stores/notifications'

const notifications = useNotificationsStore()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  product: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'add-to-cart', 'add-to-wishlist'])

const quantity = ref(1)
const selectedImageIndex = ref(0)
const wishlistClicked = ref(false)

// Computed property for product images
const productImages = computed(() => {
  if (!props.product?.images) return []
  
  if (Array.isArray(props.product.images)) {
    return props.product.images
  }
  
  if (typeof props.product.images === 'string') {
    try {
      const parsed = JSON.parse(props.product.images)
      return Array.isArray(parsed) ? parsed : [parsed]
    } catch {
      return [props.product.images]
    }
  }
  
  return []
})

// Helper function to get the correct product image
const getProductImage = (product) => {
  if (productImages.value.length > 0) {
    return productImages.value[selectedImageIndex.value] || productImages.value[0]
  }
  
  return product?.image || '/placeholder-product.jpg'
}

// Methods
const closeModal = () => {
  emit('close')
  quantity.value = 1
  selectedImageIndex.value = 0
  // Keep wishlistClicked state - don't reset it
}

const addToCart = () => {
  emit('add-to-cart', {
    product: props.product,
    quantity: quantity.value
  })
  closeModal()
}

const addToWishlist = () => {
  wishlistClicked.value = true
  notifications.success(`${props.product.name} added to wishlist!`, {
    duration: 3000
  })
  emit('add-to-wishlist', props.product)
  
  // No timeout - keep the heart filled permanently
}

// Close modal on escape key
const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

onMounted(() => {
  if (process.client) {
    document.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('keydown', handleKeydown)
  }
})
</script>
