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
              <span class="text-neutral-700">Heart Health</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Heart Health</h1>
            <p class="text-neutral-600 max-w-2xl">
              Support your cardiovascular health with our range of heart-focused medications, supplements, and monitoring devices designed to promote healthy blood pressure, cholesterol levels, and overall heart function.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg" alt="Heart Health" class="w-32 h-32 object-cover rounded-full mx-auto">
          </div>
        </div>
      </div>
      
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About Heart Health Products</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Maintaining a healthy cardiovascular system is essential for overall wellness and longevity. Our heart health category features a comprehensive range of products designed to support optimal heart function and monitor cardiovascular health.
          </p>
          <p class="mt-4">
            Blood pressure monitors are valuable tools for tracking this important health metric at home, allowing you to maintain awareness of your cardiovascular health between doctor visits. We offer both traditional and digital monitors to suit your preferences.
          </p>
          <p class="mt-4">
            For those managing cholesterol or seeking preventative care, we provide a selection of supplements clinically shown to support heart health, including omega-3 fatty acids, CoQ10, and plant sterols. These supplements work alongside a healthy lifestyle to promote optimal cardiovascular function.
          </p>
          <p class="mt-4">
            Our pharmacists can help guide you in selecting appropriate products based on your specific health needs and any medications you may be taking. Always consult with your healthcare provider before starting any new supplement regimen.
          </p>
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
const productsPerPage = 8
const visibleProducts = ref(productsPerPage)

// Popular filter options
const popularFilters = [
  'All Products',
  'Blood Pressure',
  'Cholesterol',
  'Supplements',
  'Monitoring Devices',
  'Heart Health Kits',
  'Circulation Support'
]

// Heart Health products
const products = [
  {
    id: 401,
    name: 'Premium Digital Blood Pressure Monitor',
    slug: 'premium-digital-blood-pressure-monitor',
    category: 'Heart Health',
    price: 49.99,
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    isRx: false,
    discount: 10
  },
  {
    id: 402,
    name: 'Omega-3 Fish Oil Softgels',
    slug: 'omega-3-fish-oil-softgels',
    category: 'Heart Health',
    price: 24.99,
    image: 'https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg',
    rating: 4.7,
    reviews: 76,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 403,
    name: 'Cholesterol Support Complex',
    slug: 'cholesterol-support-complex',
    category: 'Heart Health',
    price: 29.99,
    image: 'https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg',
    rating: 4.5,
    reviews: 42,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 404,
    name: 'CoQ10 100mg Capsules',
    slug: 'coq10-100mg-capsules',
    category: 'Heart Health',
    price: 27.99,
    image: 'https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg',
    rating: 4.8,
    reviews: 63,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 405,
    name: 'Wrist Blood Pressure Monitor',
    slug: 'wrist-blood-pressure-monitor',
    category: 'Heart Health',
    price: 34.99,
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
    rating: 4.3,
    reviews: 38,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 406,
    name: 'Plant Sterols Supplement',
    slug: 'plant-sterols-supplement',
    category: 'Heart Health',
    price: 19.99,
    image: 'https://images.pexels.com/photos/5528884/pexels-photo-5528884.jpeg',
    rating: 4.4,
    reviews: 29,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 407,
    name: 'Garlic Extract Tablets',
    slug: 'garlic-extract-tablets',
    category: 'Heart Health',
    price: 14.99,
    image: 'https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg',
    rating: 4.5,
    reviews: 47,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 408,
    name: 'Blood Pressure Log Book',
    slug: 'blood-pressure-log-book',
    category: 'Heart Health',
    price: 7.99,
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg',
    rating: 4.6,
    reviews: 32,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 409,
    name: 'Circulation Support Formula',
    slug: 'circulation-support-formula',
    category: 'Heart Health',
    price: 22.99,
    image: 'https://images.pexels.com/photos/5528884/pexels-photo-5528884.jpeg',
    rating: 4.4,
    reviews: 26,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 410,
    name: 'Heart Health Monitoring Kit',
    slug: 'heart-health-monitoring-kit',
    category: 'Heart Health',
    price: 89.99,
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
    rating: 4.9,
    reviews: 52,
    inStock: true,
    isRx: false,
    discount: 15
  }
]

// Related Categories
const relatedCategories = [
  {
    name: 'Medical Devices',
    slug: 'medical-devices',
    icon: '🩺'
  },
  {
    name: 'OTC Medicines',
    slug: 'otc-medicines',
    icon: '💊'
  },
  {
    name: 'Pain Relief',
    slug: 'pain-relief',
    icon: '🏥'
  },
  {
    name: 'Personal Care',
    slug: 'personal-care',
    icon: '🧴'
  }
]

// Computed properties
const sortedProducts = computed(() => {
  const sorted = [...products]
  
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

const showingAll = computed(() => visibleProducts.value >= products.length)

// Methods
function loadMore() {
  visibleProducts.value += productsPerPage
}

function addToCart(product) {
  cartStore.addItem(product)
}
</script>