<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <nav class="flex mb-6 text-sm" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <NuxtLink to="/" class="text-neutral-500 hover:text-primary-600">Home</NuxtLink>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <span class="mx-2 text-neutral-400">/</span>
              <span class="text-neutral-700">Skin Care</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-pink-50 to-rose-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Skin Care & Beauty</h1>
            <p class="text-neutral-600 max-w-2xl">
              Discover our comprehensive range of skin care products including moisturizers, cleansers, anti-aging treatments, acne solutions, and sun protection for healthy, radiant skin.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg" alt="Skin Care" class="w-32 h-32 object-cover rounded-full mx-auto">
          </div>
        </div>
      </div>
      
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="filter in skinCareFilters" 
              :key="filter"
              @click="activeFilter = filter"
              :class="[
                'px-3 py-1 text-sm rounded-full transition-colors',
                activeFilter === filter 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              ]"
            >
              {{ filter }}
            </button>
          </div>          
          <div class="flex items-center gap-2">
            <label for="sort" class="text-sm text-neutral-600">Sort by:</label>
            <select id="sort" v-model="sortOption" class="text-sm border-neutral-300 rounded-md">
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <ProductCard 
          v-for="product in sortedProducts" 
          :key="product.id" 
          :product="product" 
          @add-to-cart="addToCart"
        />
      </div>
      
      <!-- Load More -->
      <div class="text-center mb-12">
        <button v-if="!showingAll" @click="loadMore" class="btn-outline">
          Load More Products
        </button>
        <p v-else class="text-neutral-500 text-sm">
          You've viewed all products in this category
        </p>
      </div>
      
      <!-- Category Information -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About Skin Care Products</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Healthy skin starts with the right care routine. Our skin care collection includes products for all skin types and concerns, from basic cleansing and moisturizing to targeted treatments for specific conditions.
          </p>
          <p class="mt-4">
            <strong>Essential skin care steps include:</strong>
          </p>
          <ul class="mt-2 ml-4 list-disc">
            <li><strong>Cleansing:</strong> Remove dirt, oil, and makeup with gentle cleansers</li>
            <li><strong>Toning:</strong> Balance skin pH and prepare for moisturizer</li>
            <li><strong>Moisturizing:</strong> Hydrate and protect the skin barrier</li>
            <li><strong>Sun Protection:</strong> Daily SPF to prevent UV damage and aging</li>
            <li><strong>Targeted Treatments:</strong> Serums and treatments for specific concerns</li>
          </ul>
          <p class="mt-4">
            Remember to introduce new products gradually and patch test before full application. If you have sensitive skin or specific conditions like eczema or rosacea, consult with a dermatologist for personalized recommendations.
          </p>
        </div>
      </div>
      
      <!-- Skin Care Tips -->
      <div class="bg-pink-50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold text-neutral-900 mb-4">Daily Skin Care Tips</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold text-neutral-800 mb-2">Morning Routine</h3>
            <ul class="text-sm text-neutral-600 space-y-1">
              <li>• Gentle cleanser</li>
              <li>• Vitamin C serum (optional)</li>
              <li>• Moisturizer</li>
              <li>• Broad-spectrum SPF 30+</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-neutral-800 mb-2">Evening Routine</h3>
            <ul class="text-sm text-neutral-600 space-y-1">
              <li>• Remove makeup/sunscreen</li>
              <li>• Gentle cleanser</li>
              <li>• Treatment products (retinol, acids)</li>
              <li>• Night moisturizer or face oil</li>
            </ul>
          </div>
        </div>
        <div class="mt-6 p-4 bg-white rounded-lg">
          <h3 class="font-semibold text-neutral-800 mb-2">Pro Tips</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-600">
            <div>• Always patch test new products</div>
            <div>• Use lukewarm water when cleansing</div>
            <div>• Apply products to damp skin for better absorption</div>
          </div>
        </div>
      </div>
      
      <!-- Related Categories -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-neutral-900 mb-4">Related Categories</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <NuxtLink 
            v-for="category in relatedCategories" 
            :key="category.slug" 
            :to="`/category/${category.slug}`"
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 text-center group"
          >
            <div class="w-12 h-12 rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-100 flex items-center justify-center mx-auto mb-3">
              <span class="text-xl">{{ category.icon }}</span>
            </div>
            <h3 class="font-medium text-neutral-800 group-hover:text-primary-600">{{ category.name }}</h3>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const sortOption = ref('popular')
const activeFilter = ref('All Products')
const productsPerPage = 8
const visibleProducts = ref(productsPerPage)

// Skin care filter options
const skinCareFilters = [
  'All Products',
  'Cleansers',
  'Moisturizers',
  'Anti-Aging',
  'Acne Treatment',
  'Sun Protection',
  'Serums',
  'Face Masks',
  'Sensitive Skin'
]

// Skin care products
const products = [
  {
    id: 401,
    name: 'Gentle Daily Facial Cleanser',
    slug: 'gentle-daily-facial-cleanser',
    category: 'Skin Care',
    price: 18.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isRx: false,
    discount: 15,
    tags: ['cleansers', 'sensitive-skin']
  },
  {
    id: 402,
    name: 'Hydrating Face Moisturizer SPF 30',
    slug: 'hydrating-face-moisturizer-spf30',
    category: 'Skin Care',
    price: 24.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
    rating: 4.8,
    reviews: 203,
    inStock: true,
    isRx: false,
    discount: 20,
    tags: ['moisturizers', 'sun-protection']
  },
  {
    id: 403,
    name: 'Anti-Aging Retinol Night Cream',
    slug: 'anti-aging-retinol-night-cream',
    category: 'Skin Care',
    price: 34.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    rating: 4.6,
    reviews: 127,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['anti-aging', 'moisturizers']
  },
  {
    id: 404,
    name: 'Acne Fighting Spot Treatment',
    slug: 'acne-fighting-spot-treatment',
    category: 'Skin Care',
    price: 16.49,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
    rating: 4.5,
    reviews: 89,
    inStock: true,
    isRx: false,
    discount: 10,
    tags: ['acne-treatment']
  },
  {
    id: 405,
    name: 'Vitamin C Brightening Serum',
    slug: 'vitamin-c-brightening-serum',
    category: 'Skin Care',
    price: 28.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    rating: 4.9,
    reviews: 178,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['serums', 'anti-aging']
  },
  {
    id: 406,
    name: 'Broad Spectrum Sunscreen SPF 50',
    slug: 'broad-spectrum-sunscreen-spf50',
    category: 'Skin Care',
    price: 22.49,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
    rating: 4.7,
    reviews: 145,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['sun-protection']
  },
  {
    id: 407,
    name: 'Hydrating Clay Face Mask',
    slug: 'hydrating-clay-face-mask',
    category: 'Skin Care',
    price: 14.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    rating: 4.4,
    reviews: 73,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['face-masks']
  },
  {
    id: 408,
    name: 'Sensitive Skin Gentle Toner',
    slug: 'sensitive-skin-gentle-toner',
    category: 'Skin Care',
    price: 19.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    rating: 4.6,
    reviews: 94,
    inStock: true,
    isRx: false,
    discount: 5,
    tags: ['cleansers', 'sensitive-skin']
  },
  {
    id: 409,
    name: 'Exfoliating Salicylic Acid Cleanser',
    slug: 'exfoliating-salicylic-acid-cleanser',
    category: 'Skin Care',
    price: 21.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    rating: 4.5,
    reviews: 112,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['cleansers', 'acne-treatment']
  },
  {
    id: 410,
    name: 'Hyaluronic Acid Hydrating Serum',
    slug: 'hyaluronic-acid-hydrating-serum',
    category: 'Skin Care',
    price: 26.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    isRx: false,
    discount: 15,
    tags: ['serums', 'moisturizers']
  },
  {
    id: 411,
    name: 'Nourishing Night Face Oil',
    slug: 'nourishing-night-face-oil',
    category: 'Skin Care',
    price: 32.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
    rating: 4.7,
    reviews: 85,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['moisturizers', 'anti-aging']
  },
  {
    id: 412,
    name: 'Purifying Charcoal Face Mask',
    slug: 'purifying-charcoal-face-mask',
    category: 'Skin Care',
    price: 12.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    rating: 4.3,
    reviews: 58,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['face-masks', 'acne-treatment']
  },
  {
    id: 413,
    name: 'Eye Cream for Dark Circles',
    slug: 'eye-cream-dark-circles',
    category: 'Skin Care',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    rating: 4.6,
    reviews: 101,
    inStock: true,
    isRx: false,
    discount: 10,
    tags: ['anti-aging', 'moisturizers']
  },
  {
    id: 414,
    name: 'Micellar Water Makeup Remover',
    slug: 'micellar-water-makeup-remover',
    category: 'Skin Care',
    price: 15.49,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
    rating: 4.7,
    reviews: 139,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['cleansers', 'sensitive-skin']
  },
  {
    id: 415,
    name: 'Peptide Firming Face Serum',
    slug: 'peptide-firming-face-serum',
    category: 'Skin Care',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    rating: 4.8,
    reviews: 92,
    inStock: true,
    isRx: false,
    discount: 25,
    tags: ['serums', 'anti-aging']
  }
]

// Related Categories
const relatedCategories = [
  {
    name: 'Personal Care',
    slug: 'personal-care',
    icon: '🧴'
  },
  {
    name: 'Allergy Relief',
    slug: 'allergy',
    icon: '🌞'
  },
  {
    name: 'Vitamins',
    slug: 'vitamins-supplements',
    icon: '💊'
  },
  {
    name: 'First Aid',
    slug: 'first-aid',
    icon: '🩹'
  }
]

// Computed properties
const filteredProducts = computed(() => {
  if (activeFilter.value === 'All Products') {
    return products
  }
  
  const filterMap = {
    'Cleansers': 'cleansers',
    'Moisturizers': 'moisturizers',
    'Anti-Aging': 'anti-aging',
    'Acne Treatment': 'acne-treatment',
    'Sun Protection': 'sun-protection',
    'Serums': 'serums',
    'Face Masks': 'face-masks',
    'Sensitive Skin': 'sensitive-skin'
  }
  
  const filterTag = filterMap[activeFilter.value]
  return products.filter(product => product.tags?.includes(filterTag))
})

const sortedProducts = computed(() => {
  const sorted = [...filteredProducts.value]
  
  switch (sortOption.value) {
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating)
      break
    case 'popular':
    default:
      sorted.sort((a, b) => b.reviews - a.reviews)
      break
  }
  
  return sorted.slice(0, visibleProducts.value)
})

const showingAll = computed(() => visibleProducts.value >= filteredProducts.value.length)

// Methods
function loadMore() {
  visibleProducts.value += productsPerPage
}

function addToCart(product) {
  cartStore.addItem(product)
}

// Meta
useHead({
  title: 'Skin Care Products - Long Châu Pharmacy',
  meta: [
    {
      name: 'description',
      content: 'Shop premium skin care products including cleansers, moisturizers, anti-aging treatments, and sun protection for healthy, radiant skin.'
    }
  ]
})
</script>