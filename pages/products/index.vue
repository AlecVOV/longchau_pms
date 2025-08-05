<template>
  <div class="py-8 md:py-12">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          {{ pageTitle }}
        </h1>
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <NuxtLink to="/" class="text-gray-500 hover:text-gray-700">
                Home
              </NuxtLink>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-1 text-gray-500 md:ml-2">{{ pageTitle }}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Search and Filters -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search Input -->
          <div class="md:col-span-2">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search products..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                @input="debouncedSearch"
              />
              <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <div>
            <select
              v-model="selectedCategory"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              @change="applyFilters"
            >
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

          <!-- Sort Options -->
          <div>
            <select
              v-model="sortBy"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              @change="applyFilters"
            >
              <option value="name_asc">Name A-Z</option>
              <option value="name_desc">Name Z-A</option>
              <option value="price_asc">Price Low to High</option>
              <option value="price_desc">Price High to Low</option>
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        <!-- Advanced Filters -->
        <div class="mt-4 pt-4 border-t border-gray-200">
          <button
            @click="showAdvancedFilters = !showAdvancedFilters"
            class="flex items-center text-blue-600 hover:text-blue-700"
          >
            <span>Advanced Filters</span>
            <svg
              :class="{ 'rotate-180': showAdvancedFilters }"
              class="ml-2 h-4 w-4 transform transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-show="showAdvancedFilters" class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Price Range -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div class="flex items-center space-x-2">
                <input
                  v-model="priceRange.min"
                  type="number"
                  placeholder="Min"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <span class="text-gray-500">-</span>
                <input
                  v-model="priceRange.max"
                  type="number"
                  placeholder="Max"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
        
            <!-- Brand Filter -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select
                v-model="selectedBrand"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Brands</option>
                <option v-for="brand in brands" :key="brand" :value="brand">
                  {{ brand }}
                </option>
              </select>
            </div>
        
            <!-- Availability Filter -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input
                    v-model="inStockOnly"
                    type="checkbox"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span class="ml-2 text-sm text-gray-700">In Stock Only</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="prescriptionOnly"
                    type="checkbox"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span class="ml-2 text-sm text-gray-700">Prescription Required</span>
                </label>
              </div>
            </div>
          </div>

          <div class="mt-4 flex space-x-2">
            <button
              @click="applyFilters"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Apply Filters
            </button>
            <button
              @click="clearFilters"
              class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      <!-- Results Summary -->
      <div class="flex justify-between items-center mb-6">
        <div class="text-gray-600">
          Showing {{ products.length }} of {{ totalProducts }} products
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600">View:</span>
          <button
            @click="viewMode = 'grid'"
            :class="{ 'bg-blue-600 text-white': viewMode === 'grid', 'bg-gray-200 text-gray-700': viewMode !== 'grid' }"
            class="p-2 rounded-lg"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            @click="viewMode = 'list'"
            :class="{ 'bg-blue-600 text-white': viewMode === 'list', 'bg-gray-200 text-gray-700': viewMode !== 'list' }"
            class="p-2 rounded-lg"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Products Grid/List -->
      <div v-else-if="products.length > 0">
        <!-- Grid View -->
        <div v-if="viewMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
            @quick-view="openQuickView"
            @add-to-wishlist="addToWishlist"
          />
        </div>

        <!-- List View -->
        <div v-else class="space-y-4">
          <ProductListItem
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
            @quick-view="openQuickView"
            @add-to-wishlist="addToWishlist"
          />
        </div>

        <!-- Pagination -->
        <div class="mt-12 flex justify-center">
          <nav class="flex items-center space-x-2">
            <button
              @click="goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              :class="{
                'bg-blue-600 text-white': page === currentPage,
                'text-gray-500 bg-white hover:bg-gray-50': page !== currentPage
              }"
              class="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg"
            >
              {{ page }}
            </button>

            <button
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </nav>
        </div>
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-12">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
          <svg class="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p class="text-gray-500 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
        <button
          @click="clearFilters"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Clear All Filters
        </button>
      </div>
    </div>
    
    <!-- Quick View Modal -->
    <ProductQuickView
      :is-open="quickViewOpen"
      :product="selectedProduct"
      @close="closeQuickView"
      @add-to-cart="handleQuickViewAddToCart"
      @add-to-wishlist="addToWishlist"
    />
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'
import { useNotificationsStore } from '~/stores/notifications'
import ProductQuickView from '~/components/ProductQuickView.vue'

const productsStore = useProductsStore()
const cartStore = useCartStore()
const notifications = useNotificationsStore()
const route = useRoute()

// Reactive data
const loading = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedBrand = ref('')
const sortBy = ref('name_asc')
const viewMode = ref('grid')
const showAdvancedFilters = ref(false)
const inStockOnly = ref(false)
const prescriptionOnly = ref(false)
const priceRange = ref({ min: '', max: '' })
const currentPage = ref(1)
const itemsPerPage = 12

// Quick View data
const quickViewOpen = ref(false)
const selectedProduct = ref(null)

// Computed properties
const products = computed(() => {
  // If there's a search query, use search results; otherwise use filtered products
  if (searchQuery.value.trim()) {
    return productsStore.searchResults || []
  }
  return productsStore.getFilteredProducts
})
const categories = computed(() => productsStore.categories)
const brands = computed(() => {
  const allBrands = productsStore.products.map(product => product.brand).filter(Boolean)
  return [...new Set(allBrands)].sort()
})
const totalProducts = computed(() => {
  // If there's a search query, use search results count; otherwise use pagination total
  if (searchQuery.value.trim()) {
    return productsStore.searchResults?.length || 0
  }
  return productsStore.pagination.totalItems
})
const totalPages = computed(() => Math.ceil(totalProducts.value / itemsPerPage))
const pageTitle = computed(() => {
  if (selectedCategory.value) {
    const category = categories.value.find(cat => cat.id === selectedCategory.value)
    return category?.name || 'Products'
  }
  return searchQuery.value ? `Search results for "${searchQuery.value}"` : 'All Products'
})

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

// Methods
const debouncedSearch = debounce(() => {
  applyFilters()
}, 300)

const applyFilters = async () => {
  loading.value = true
  
  const filters = {
    category: selectedCategory.value,
    brand: selectedBrand.value,
    priceRange: {
      min: priceRange.value.min ? parseFloat(priceRange.value.min) : 0,
      max: priceRange.value.max ? parseFloat(priceRange.value.max) : 10000
    },
    inStock: inStockOnly.value,
    prescriptionOnly: prescriptionOnly.value,
    sortBy: sortBy.value,
    page: currentPage.value,
    limit: itemsPerPage
  }
  
  productsStore.setFilters(filters)
  
  try {
    if (searchQuery.value.trim()) {
      await productsStore.searchProducts(searchQuery.value, filters)
    } else {
      // Clear search results when no search query
      productsStore.searchResults = []
      await productsStore.fetchProducts(filters)
    }
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    loading.value = false
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedBrand.value = ''
  sortBy.value = 'name_asc'
  inStockOnly.value = false
  prescriptionOnly.value = false
  priceRange.value = { min: '', max: '' }
  currentPage.value = 1
  
  // Clear search results
  productsStore.searchResults = []
  productsStore.clearFilters()
  applyFilters()
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    productsStore.setCurrentPage(page)
    applyFilters()
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const addToCart = (product, quantity = 1) => {
  cartStore.addItem(product, quantity)
  notifications.success(`${product.name} added to cart!`)
}

const addToWishlist = (product) => {
  // Show success notification when wishlist button is clicked
  notifications.success(`${product.name} added to wishlist!`, {
    duration: 3000
  })
  console.log('Added to wishlist:', product.name)
}

// Quick View methods
const openQuickView = (product) => {
  selectedProduct.value = product
  quickViewOpen.value = true
}

const closeQuickView = () => {
  quickViewOpen.value = false
  selectedProduct.value = null
}

const handleQuickViewAddToCart = ({ product, quantity }) => {
  cartStore.addItem(product, quantity)
  notifications.success(`${product.name} (${quantity}x) added to cart!`)
}

// Utility function
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Initialize
onMounted(async () => {
  // Get category from route params if exists
  if (route.params.category) {
    selectedCategory.value = route.params.category
  }
  
  // Get search query from URL params
  if (route.query.search) {
    searchQuery.value = route.query.search
  }
  
  // Load categories
  await productsStore.fetchCategories()
  
  // Load initial products
  await applyFilters()
})

// Watch for route changes
watch(() => route.query, (newQuery) => {
  if (newQuery.search !== searchQuery.value) {
    searchQuery.value = newQuery.search || ''
    applyFilters()
  }
})

useHead({
  title: () => `${pageTitle.value} - Long Châu`,
  meta: [
    {
      name: 'description',
      content: () => `Browse ${pageTitle.value.toLowerCase()} at Long Châu. Find quality medications and health products with fast delivery.`
    }
  ]
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

.rotate-180 {
  transform: rotate(180deg);
}
</style>
