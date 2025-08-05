<template>
  <div class="py-8 md:py-12">
    <div class="container mx-auto px-4">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Category Not Found -->
      <div v-else-if="!category" class="text-center py-12">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p class="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
        <NuxtLink
          to="/products"
          class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse All Products
        </NuxtLink>
      </div>

      <!-- Category Content -->
      <div v-else>
        <!-- Category Header -->
        <div class="mb-8">
          <!-- Breadcrumb -->
          <nav class="flex mb-4" aria-label="Breadcrumb">
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
              <li>
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="ml-1 text-gray-500 md:ml-2">{{ category.name }}</span>
                </div>
              </li>
            </ol>
          </nav>

          <!-- Category Info -->
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
            <div class="flex flex-col md:flex-row md:items-center md:space-x-6">
              <div v-if="category.image" class="flex-shrink-0 mb-4 md:mb-0">
                <img
                  :src="category.image"
                  :alt="category.name"
                  class="w-24 h-24 rounded-lg object-cover"
                >
              </div>
              <div class="flex-1">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ category.name }}</h1>
                <p class="text-gray-600 text-lg mb-4">{{ category.description }}</p>
                <div class="flex items-center text-sm text-gray-500">
                  <span>{{ totalProducts }} {{ totalProducts === 1 ? 'product' : 'products' }} available</span>
                  <span class="mx-2">•</span>
                  <span>{{ inStockProducts }} in stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Filters and Sorting -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Search within category -->
            <div class="md:col-span-2">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  :placeholder="`Search in ${category.name}...`"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  @input="applyFilters"
                />
                <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <!-- Brand Filter -->
            <div>
              <select
                v-model="selectedBrand"
                @change="applyFilters"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Brands</option>
                <option v-for="brand in availableBrands" :key="brand" :value="brand">
                  {{ brand }}
                </option>
              </select>
            </div>

            <!-- Sort Options -->
            <div>
              <select
                v-model="sortBy"
                @change="applySorting"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="name">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="price">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="featured">Featured First</option>
              </select>
            </div>
          </div>

          <!-- Additional Filters -->
          <div class="mt-4 pt-4 border-t border-gray-200">
            <div class="flex flex-wrap gap-4 items-center">
              <label class="flex items-center">
                <input
                  v-model="showInStockOnly"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  @change="applyFilters"
                >
                <span class="ml-2 text-sm text-gray-700">In Stock Only</span>
              </label>

              <label class="flex items-center">
                <input
                  v-model="showFeaturedOnly"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  @change="applyFilters"
                >
                <span class="ml-2 text-sm text-gray-700">Featured Products</span>
              </label>

              <label class="flex items-center">
                <input
                  v-model="showDiscountedOnly"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  @change="applyFilters"
                >
                <span class="ml-2 text-sm text-gray-700">On Sale</span>
              </label>

              <!-- Price Range -->
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-700">Price:</span>
                <input
                  v-model.number="priceRange.min"
                  type="number"
                  min="0"
                  placeholder="Min"
                  class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  @change="applyFilters"
                >
                <span class="text-gray-500">-</span>
                <input
                  v-model.number="priceRange.max"
                  type="number"
                  min="0"
                  placeholder="Max"
                  class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  @change="applyFilters"
                >
              </div>

              <!-- Clear Filters -->
              <button
                @click="clearFilters"
                class="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div v-if="productsLoading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>

        <div v-else-if="filteredProducts.length === 0" class="text-center py-12">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No products found</h3>
          <p class="mt-1 text-sm text-gray-500">
            Try adjusting your search criteria or filters
          </p>
        </div>

        <div v-else>
          <!-- Products Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            <ProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
              :show-add-to-cart="true"
            />
          </div>

          <!-- Pagination -->
          <div v-if="pagination.totalPages > 1" class="flex justify-center">
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                @click="goToPage(pagination.currentPage - 1)"
                :disabled="!pagination.hasPrev"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              
              <button
                v-for="page in visiblePages"
                :key="page"
                @click="goToPage(page)"
                :class="{
                  'bg-blue-50 border-blue-500 text-blue-600': page === pagination.currentPage,
                  'bg-white border-gray-300 text-gray-500 hover:bg-gray-50': page !== pagination.currentPage
                }"
                class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {{ page }}
              </button>
              
              <button
                @click="goToPage(pagination.currentPage + 1)"
                :disabled="!pagination.hasNext"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'
import ProductCard from '~/components/ProductCard.vue'

const route = useRoute()
const productsStore = useProductsStore()

// Reactive data
const loading = ref(true)
const productsLoading = ref(false)
const category = ref(null)
const products = ref([])
const searchQuery = ref('')
const selectedBrand = ref('')
const sortBy = ref('name')
const showInStockOnly = ref(false)
const showFeaturedOnly = ref(false)
const showDiscountedOnly = ref(false)
const priceRange = ref({ min: 0, max: 1000 })

// Computed properties
const categorySlug = computed(() => route.params.slug)

const availableBrands = computed(() => {
  if (!products.value.length) return []
  const brands = [...new Set(products.value.map(p => p.brand))]
  return brands.sort()
})

const totalProducts = computed(() => products.value.length)

const inStockProducts = computed(() => 
  products.value.filter(p => p.stock > 0).length
)

const filteredProducts = computed(() => {
  let filtered = [...products.value]

  // Search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // Brand filter
  if (selectedBrand.value) {
    filtered = filtered.filter(p => p.brand === selectedBrand.value)
  }

  // Stock filter
  if (showInStockOnly.value) {
    filtered = filtered.filter(p => p.stock > 0)
  }

  // Featured filter
  if (showFeaturedOnly.value) {
    filtered = filtered.filter(p => p.featured)
  }

  // Discount filter
  if (showDiscountedOnly.value) {
    filtered = filtered.filter(p => p.discount > 0)
  }

  // Price range filter
  filtered = filtered.filter(p => 
    p.price >= priceRange.value.min && 
    p.price <= priceRange.value.max
  )

  return filtered
})

const pagination = computed(() => productsStore.pagination)

const visiblePages = computed(() => {
  const current = pagination.value.currentPage
  const total = pagination.value.totalPages
  const pages = []
  
  const start = Math.max(1, current - 2)
  const end = Math.min(total, current + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// Methods
const fetchCategoryData = async () => {
  loading.value = true
  try {
    // Fetch categories first
    await productsStore.fetchCategories()
    
    // Find category by slug
    category.value = productsStore.categories.find(c => c.slug === categorySlug.value)
    
    if (category.value) {
      // Fetch products for this category
      productsLoading.value = true
      const response = await $fetch(`/api/categories/${category.value.id}/products`)
      products.value = response.products || []
    }
  } catch (error) {
    console.error('Error fetching category data:', error)
  } finally {
    loading.value = false
    productsLoading.value = false
  }
}

const applyFilters = () => {
  // Filters are applied via computed property
}

const applySorting = () => {
  const sorted = [...products.value]
  
  switch (sortBy.value) {
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name))
      break
    case 'price':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating)
      break
    case 'featured':
      sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      break
  }
  
  products.value = sorted
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedBrand.value = ''
  showInStockOnly.value = false
  showFeaturedOnly.value = false
  showDiscountedOnly.value = false
  priceRange.value = { min: 0, max: 1000 }
}

const goToPage = (page) => {
  if (page >= 1 && page <= pagination.value.totalPages) {
    productsStore.setCurrentPage(page)
    // In a real app, this would refetch data
  }
}

// Watch for route changes
watch(() => route.params.slug, () => {
  fetchCategoryData()
})

// Load data on mount
onMounted(() => {
  fetchCategoryData()
})

// SEO
useHead({
  title: computed(() => {
    if (category.value) {
      return `${category.value.name} - Long Châu Online Pharmacy`
    }
    return 'Category - Long Châu'
  }),
  meta: [
    {
      name: 'description',
      content: computed(() => {
        if (category.value) {
          return `${category.value.description} Shop ${category.value.name.toLowerCase()} products at Long Châu online pharmacy.`
        }
        return 'Browse products by category at Long Châu online pharmacy.'
      })
    }
  ]
})
</script>
