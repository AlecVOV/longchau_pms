<template>
  <div class="py-8">
    <div class="container mx-auto px-4">
      <!-- Search Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Search Products</h1>
        
        <!-- Search Bar -->
        <div class="max-w-2xl">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Search for medications, supplements, or health products..."
              @keyup.enter="performSearch"
            >
          </div>
          <div class="mt-2 flex flex-wrap gap-2">
            <button
              v-for="suggestion in searchSuggestions"
              :key="suggestion"
              @click="searchQuery = suggestion; performSearch()"
              class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {{ suggestion }}
            </button>
          </div>
        </div>
      </div>

      <!-- Search Results -->
      <div v-if="hasSearched">
        <!-- Results Header -->
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">
              {{ searchResults.length }} results for "{{ currentSearchQuery }}"
            </h2>
            <p class="text-gray-600 mt-1">
              Showing {{ Math.min(displayedResults, filteredResults.length) }} of {{ filteredResults.length }} products
            </p>
            <!-- Debug Info -->
            
          </div>
          
          <!-- Sort Options -->
          <div class="mt-4 lg:mt-0 flex items-center space-x-4">
            <label class="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              v-model="sortBy"
              @change="applySorting"
              class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="relevance">Relevance</option>
              <option value="name">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="price">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
            </select>
          </div>
        </div>

        <!-- Filters and Results -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Filters Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              <!-- Category Filter -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-gray-900 mb-3">Category</h4>
                <div class="space-y-2">
                  <label v-for="category in availableCategories" :key="category.id" class="flex items-center">
                    <input
                      v-model="selectedCategories"
                      :value="category.id"
                      type="checkbox"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      @change="applyFilters"
                    >
                    <span class="ml-2 text-sm text-gray-700">
                      {{ category.name }}
                      <span class="text-gray-400">({{ getCategoryCount(category.id) }})</span>
                    </span>
                  </label>
                </div>
              </div>

              <!-- Price Range Filter -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
                <div class="space-y-3">
                  <div class="flex items-center space-x-2">
                    <input
                      v-model.number="priceRange.min"
                      type="number"
                      min="0"
                      placeholder="Min"
                      class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      @change="applyFilters"
                    >
                    <span class="text-gray-500">to</span>
                    <input
                      v-model.number="priceRange.max"
                      type="number"
                      min="0"
                      placeholder="Max"
                      class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      @change="applyFilters"
                    >
                  </div>
                  <div class="space-y-1">
                    <label v-for="range in priceRanges" :key="range.label" class="flex items-center">
                      <input
                        :value="range"
                        type="radio"
                        name="priceRange"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        @change="selectPriceRange(range)"
                      >
                      <span class="ml-2 text-sm text-gray-700">{{ range.label }}</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Brand Filter -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-gray-900 mb-3">Brand</h4>
                <div class="space-y-2">
                  <label v-for="brand in availableBrands" :key="brand" class="flex items-center">
                    <input
                      v-model="selectedBrands"
                      :value="brand"
                      type="checkbox"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      @change="applyFilters"
                    >
                    <span class="ml-2 text-sm text-gray-700">
                      {{ brand }}
                      <span class="text-gray-400">({{ getBrandCount(brand) }})</span>
                    </span>
                  </label>
                </div>
              </div>

              <!-- Stock Filter -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-gray-900 mb-3">Availability</h4>
                <div class="space-y-2">
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
                      v-model="showPrescriptionOnly"
                      type="checkbox"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      @change="applyFilters"
                    >
                    <span class="ml-2 text-sm text-gray-700">Prescription Required</span>
                  </label>
                </div>
              </div>

              <!-- Clear Filters -->
              <button
                @click="clearFilters"
                class="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          <!-- Search Results -->
          <div class="lg:col-span-3">
            <div v-if="loading" class="flex justify-center items-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>

            <div v-else-if="filteredResults.length === 0" class="text-center py-12">
              <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <h3 class="mt-2 text-sm font-medium text-gray-900">No products found</h3>
              <p class="mt-1 text-sm text-gray-500">
                Try adjusting your search criteria or filters
              </p>
            </div>

            <div v-else class="space-y-6">
              <!-- Results Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <ProductCard
                  v-for="product in paginatedResults"
                  :key="product.id"
                  :product="product"
                  :show-add-to-cart="true"
                />
              </div>

              <!-- Load More Button -->
              <div v-if="displayedResults < filteredResults.length" class="text-center">
                <button
                  @click="loadMoreResults"
                  class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Load More Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Search State -->
      <div v-else class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">Search for products</h3>
        <p class="mt-1 text-sm text-gray-500">
          Enter a search term to find medications, supplements, and health products
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'
import ProductCard from '~/components/ProductCard.vue'

const productsStore = useProductsStore()
const router = useRouter()
const route = useRoute()

// Reactive data
const searchQuery = ref('')
const currentSearchQuery = ref('')
const hasSearched = ref(false)
const loading = ref(false)
const searchResults = ref([])
const selectedCategories = ref([])
const selectedBrands = ref([])
const priceRange = ref({ min: 0, max: 1000 })
const showInStockOnly = ref(false)
const showPrescriptionOnly = ref(false)
const sortBy = ref('relevance')
const displayedResults = ref(12)

// Search suggestions
const searchSuggestions = ref([
  'Paracetamol',
  'Vitamin D',
  'Ibuprofen',
  'Cold medicine',
  'Antibiotics',
  'Blood pressure'
])

// Price ranges
const priceRanges = [
  { label: 'Under $10', min: 0, max: 10 },
  { label: '$10 - $25', min: 10, max: 25 },
  { label: '$25 - $50', min: 25, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: 1000 }
]

// Computed properties
const categories = computed(() => productsStore.categories)

const availableCategories = computed(() => {
  return categories.value.filter(category => 
    searchResults.value.some(product => product.categoryId === category.id)
  )
})

const availableBrands = computed(() => {
  const brands = [...new Set(searchResults.value.map(product => product.brand))]
  return brands.sort()
})

const filteredResults = computed(() => {
  console.log('Computing filteredResults with searchResults:', searchResults.value.length)
  let filtered = [...searchResults.value]

  // Category filter
  if (selectedCategories.value.length > 0) {
    filtered = filtered.filter(product => 
      selectedCategories.value.includes(product.categoryId)
    )
  }

  // Brand filter
  if (selectedBrands.value.length > 0) {
    filtered = filtered.filter(product => 
      selectedBrands.value.includes(product.brand)
    )
  }

  // Price filter
  filtered = filtered.filter(product => 
    product.price >= priceRange.value.min && 
    product.price <= priceRange.value.max
  )

  // Stock filter
  if (showInStockOnly.value) {
    filtered = filtered.filter(product => product.stock > 0)
  }

  // Prescription filter
  if (showPrescriptionOnly.value) {
    filtered = filtered.filter(product => product.prescription)
  }

  console.log('Filtered results:', filtered.length)
  return filtered
})

const paginatedResults = computed(() => {
  console.log('Computing paginatedResults with filteredResults:', filteredResults.value.length)
  const results = filteredResults.value.slice(0, displayedResults.value)
  console.log('Returning paginated results:', results.length)
  return results
})

// Methods
const performSearch = async () => {
  if (!searchQuery.value.trim()) return

  loading.value = true
  hasSearched.value = true
  currentSearchQuery.value = searchQuery.value

  try {
    console.log('Searching for:', searchQuery.value)
    const results = await productsStore.searchProducts(searchQuery.value)
    console.log('Search results received:', results.length)
    searchResults.value = results
    displayedResults.value = 12
    
    // Update URL with search query
    await router.push({ 
      path: '/search', 
      query: { q: searchQuery.value } 
    })
  } catch (error) {
    console.error('Search failed:', error)
    searchResults.value = []
  } finally {
    loading.value = false
  }
}

const applyFilters = () => {
  displayedResults.value = 12
}

const applySorting = () => {
  // Sorting is handled by the API, but we can also sort locally
  const sortedResults = [...searchResults.value]
  
  switch (sortBy.value) {
    case 'name':
      sortedResults.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      sortedResults.sort((a, b) => b.name.localeCompare(a.name))
      break
    case 'price':
      sortedResults.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sortedResults.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      sortedResults.sort((a, b) => b.rating - a.rating)
      break
  }
  
  searchResults.value = sortedResults
  displayedResults.value = 12
}

const selectPriceRange = (range) => {
  priceRange.value = { min: range.min, max: range.max }
  applyFilters()
}

const clearFilters = () => {
  selectedCategories.value = []
  selectedBrands.value = []
  priceRange.value = { min: 0, max: 1000 }
  showInStockOnly.value = false
  showPrescriptionOnly.value = false
  displayedResults.value = 12
}

const loadMoreResults = () => {
  displayedResults.value += 12
}

const getCategoryCount = (categoryId) => {
  return searchResults.value.filter(product => product.categoryId === categoryId).length
}

const getBrandCount = (brand) => {
  return searchResults.value.filter(product => product.brand === brand).length
}

// Initialize search from URL query
onMounted(async () => {
  await productsStore.fetchCategories()
  
  const query = route.query.q
  if (query) {
    searchQuery.value = query
    await performSearch()
  }
})

// Watch for route changes
watch(() => route.query.q, (newQuery) => {
  if (newQuery && newQuery !== searchQuery.value) {
    searchQuery.value = newQuery
    performSearch()
  }
})

// SEO
useHead({
  title: computed(() => {
    if (hasSearched.value && currentSearchQuery.value) {
      return `Search Results for "${currentSearchQuery.value}" - Long Châu`
    }
    return 'Search Products - Long Châu'
  }),
  meta: [
    {
      name: 'description',
      content: computed(() => {
        if (hasSearched.value && currentSearchQuery.value) {
          return `Search results for "${currentSearchQuery.value}". Find medications, supplements, and health products at Long Châu.`
        }
        return 'Search for medications, supplements, and health products at Long Châu online pharmacy.'
      })
    }
  ]
})
</script>
