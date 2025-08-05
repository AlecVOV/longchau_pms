<template>
  <div v-if="loading" class="flex justify-center items-center min-h-screen">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>

  <div v-else-if="product" class="py-8 md:py-12">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <NuxtLink to="/products" class="ml-1 text-gray-500 hover:text-gray-700 md:ml-2">Products</NuxtLink>
            </div>
          </li>
          <li v-if="product.category">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <NuxtLink :to="`/category/${product.category.slug}`" class="ml-1 text-gray-500 hover:text-gray-700 md:ml-2">
                {{ product.category.name }}
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="ml-1 text-gray-500 md:ml-2">{{ product.name }}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Product Images -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              :src="selectedImage || (product.images && product.images.length > 0 ? product.images[0] : '/placeholder-product.jpg')"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Image Thumbnails -->
          <div v-if="product.images && product.images.length > 1" class="flex space-x-2 overflow-x-auto">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              @click="selectedImage = image"
              :class="{ 'ring-2 ring-blue-500': selectedImage === image }"
              class="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden hover:ring-2 hover:ring-gray-300"
            >
              <img :src="image" :alt="`${product.name} ${index + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Product Details -->
        <div class="space-y-6">
          <!-- Product Name and Brand -->
          <div>
            <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>
            <p v-if="product.brand" class="text-lg text-gray-600 mt-2">{{ product.brand }}</p>
          </div>

          <!-- Rating and Reviews -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <svg
                  v-for="i in 5"
                  :key="i"
                  :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-600">{{ product.rating }} ({{ product.reviews }} reviews)</span>
            </div>
          </div>

          <!-- Price -->
          <div class="space-y-2">
            <div v-if="product.discount > 0" class="flex items-baseline space-x-3">
              <span class="text-3xl font-bold text-green-600">${{ product.price.toFixed(2) }}</span>
              <span class="text-xl text-gray-500 line-through">${{ (product.price * (1 + product.discount / 100)).toFixed(2) }}</span>
              <span class="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                {{ product.discount }}% OFF
              </span>
            </div>
            <div v-else class="text-3xl font-bold text-gray-900">
              ${{ product.price.toFixed(2) }}
            </div>
          </div>

          <!-- Stock Status -->
          <div class="flex items-center space-x-4">
            <div v-if="product.stock > 0" class="flex items-center text-green-600">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="font-medium">In Stock ({{ product.stock }} available)</span>
            </div>
            <div v-else class="flex items-center text-red-600">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span class="font-medium">Out of stock</span>
            </div>
          </div>

          <!-- Product Alerts -->
          <div class="space-y-2">
            <div v-if="product.isRx" class="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
              <svg class="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <span class="text-red-800 text-sm font-medium">Prescription required for this medication</span>
            </div>
          </div>

          <!-- Quantity and Add to Cart -->
          <div v-if="product.stock > 0" class="space-y-4">
            <div class="flex items-center space-x-4">
              <label class="text-sm font-medium text-gray-700">Quantity:</label>
              <div class="flex items-center border border-gray-300 rounded-lg">
                <button
                  @click="decreaseQuantity"
                  :disabled="quantity <= 1"
                  class="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                >
                  -
                </button>
                <input
                  v-model.number="quantity"
                  type="number"
                  :min="1"
                  :max="product.stock"
                  class="w-16 px-2 py-2 text-center border-0 focus:ring-0"
                />
                <button
                  @click="increaseQuantity"
                  :disabled="quantity >= product.stock"
                  class="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                >
                  +
                </button>
              </div>
            </div>

            <div class="flex space-x-4">
              <button
                @click="addToCart"
                class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
              <button
                @click="buyNow"
                class="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Buy Now
              </button>
            </div>
          </div>

          <!-- Out of Stock Message -->
          <div v-else class="space-y-4">
            <div class="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-800 font-medium">This product is currently out of stock.</p>
              <p class="text-red-600 text-sm mt-1">Check back later or contact us for availability.</p>
            </div>
          </div>

          <!-- Product Information Tabs -->
          <div class="mt-8">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex space-x-8">
                <button
                  v-for="(tab, index) in tabs"
                  :key="tab.id"
                  @click="activeTab = index"
                  :class="{
                    'border-blue-500 text-blue-600': activeTab === index,
                    'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== index
                  }"
                  class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                  {{ tab.name }}
                </button>
              </nav>
            </div>

            <div class="mt-6">
              <!-- Description Tab -->
              <div v-show="activeTab === 0" class="prose max-w-none">
                <p class="text-gray-700 mb-4">{{ product.description }}</p>
              </div>

              <!-- Ingredients Tab -->
              <div v-show="activeTab === 1" class="prose max-w-none">
                <div v-if="product.ingredients">
                  <div v-if="Array.isArray(product.ingredients)" class="mb-4">
                    <h4 class="font-semibold text-lg mb-2">Active Ingredients:</h4>
                    <ul class="list-disc pl-5">
                      <li v-for="(ingredient, index) in product.ingredients" :key="index" class="mb-1">
                        {{ ingredient }}
                      </li>
                    </ul>
                  </div>
                  <div v-else class="mb-4">
                    <p>{{ product.ingredients }}</p>
                  </div>
                </div>
                <div v-else class="text-gray-500">Information about the ingredients is currently not available for this product.</div>
              </div>

              <!-- Directions Tab -->
              <div v-show="activeTab === 2" class="prose max-w-none">
                <div v-if="product.directions">
                  <p class="mb-4">{{ product.directions }}</p>
                  
                  <div v-if="product.dosage" class="mb-4">
                    <h4 class="font-semibold text-lg mb-2">Recommended Dosage:</h4>
                    <p>{{ product.dosage }}</p>
                  </div>
                  
                  <div v-if="product.warnings && product.warnings.length > 0" class="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-4">
                    <h4 class="font-semibold text-yellow-700 mb-2">Important Warnings:</h4>
                    <ul class="list-disc pl-5 text-yellow-700">
                      <li v-for="(warning, index) in product.warnings" :key="index" class="mb-1">
                        {{ warning }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-else class="text-gray-500">Detailed usage directions are currently not available for this product.</div>
              </div>

              <!-- Reviews Tab -->
              <div v-show="activeTab === 3">
                <div class="space-y-6">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-medium">Customer Reviews</h3>
                    <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">Write a Review</button>
                  </div>
                  
                  <div v-if="product.reviewList && product.reviewList.length > 0" class="space-y-4">
                    <div v-for="(review, index) in product.reviewList" :key="index" class="border-b border-gray-200 pb-4">
                      <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center space-x-2">
                          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-lg">
                            {{ review.name.charAt(0) }}
                          </div>
                          <div>
                            <p class="font-medium text-gray-800">{{ review.name }}</p>
                            <p class="text-xs text-gray-500">{{ review.date }}</p>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <svg
                            v-for="i in 5"
                            :key="i"
                            :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <p class="text-gray-700">{{ review.comment }}</p>
                    </div>
                  </div>
                  
                  <div v-else class="text-center py-8">
                    <p class="text-gray-500 mb-3">No reviews yet</p>
                    <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">Be the first to write a review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
            @add-to-cart="addRelatedToCart"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Product Not Found -->
  <div v-else class="py-16 text-center">
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
      <p class="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
      <NuxtLink to="/products" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
        Browse Products
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'
import ProductCard from '~/components/ProductCard.vue' 

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()

// Reactive data
const loading = ref(true)
const product = ref(null)
const relatedProducts = ref([])
const selectedImage = ref('')
const selectedVariantIndex = ref(0)
const quantity = ref(1)
const activeTab = ref(0) // Using index instead of ID for consistency

// Tabs configuration
const tabs = [
  { id: 'description', name: 'Description' },
  { id: 'ingredients', name: 'Ingredients' },
  { id: 'directions', name: 'Directions' },
  { id: 'reviews', name: 'Reviews' }
]

// Load product data
const loadProduct = async () => {
  try {
    loading.value = true
    const slug = route.params.slug
    
    // Fetch product by slug from API (using the correct endpoint)
    const response = await $fetch(`/api/products/${slug}`)
    
    if (response && response.product) {
      product.value = response.product
      
      // Set default selected image
      if (product.value.images && product.value.images.length > 0) {
        selectedImage.value = product.value.images[0]
      } else {
        selectedImage.value = product.value.image
      }
      
      // Related products are included in the API response
      if (response.product.relatedProducts) {
        relatedProducts.value = response.product.relatedProducts
      }
    }
  } catch (error) {
    console.error('Error loading product:', error)
    product.value = null
  } finally {
    loading.value = false
  }
}

// Methods
const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  const maxQty = product.value?.stock || 0
  if (quantity.value < maxQty) {
    quantity.value++
  }
}

const addToCart = () => {
  if (!product.value) return
  
  const cartItem = {
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    image: product.value.images && product.value.images.length > 0 ? product.value.images[0] : '/placeholder-product.jpg',
    quantity: quantity.value,
    selectedVariant: product.value.variants?.[selectedVariantIndex.value] || null
  }
  
  cartStore.addItem(cartItem)
  
  // Show success message (you can implement a toast notification here)
  alert(`${product.value.name} added to cart!`)
}

const buyNow = () => {
  addToCart()
  // Redirect to checkout
  navigateTo('/checkout')
}

const addRelatedToCart = (relatedProduct) => {
  const cartItem = {
    id: relatedProduct.id,
    name: relatedProduct.name,
    price: relatedProduct.price,
    image: relatedProduct.images && relatedProduct.images.length > 0 ? relatedProduct.images[0] : '/placeholder-product.jpg',
    quantity: 1
  }
  
  cartStore.addItem(cartItem)
  alert(`${relatedProduct.name} added to cart!`)
}

// Load product when component mounts or route changes
onMounted(() => {
  loadProduct()
})

watch(() => route.params.slug, () => {
  loadProduct()
})

// SEO Meta tags
useSeoMeta({
  title: computed(() => product.value?.name || 'Product'),
  description: computed(() => product.value?.description || 'Product details'),
  ogTitle: computed(() => product.value?.name || 'Product'),
  ogDescription: computed(() => product.value?.description || 'Product details'),
  ogImage: computed(() => product.value?.images && product.value.images.length > 0 ? product.value.images[0] : '/placeholder-product.jpg')
})
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.prose {
  color: #374151;
  line-height: 1.75;
}

.prose p {
  margin-bottom: 1.25em;
}

.prose h4 {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5em;
  margin-top: 1.5em;
}

.prose ul {
  margin-bottom: 1.25em;
}

.prose li {
  margin-bottom: 0.5em;
}
</style>
