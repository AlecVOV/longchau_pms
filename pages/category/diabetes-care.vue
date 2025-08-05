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
              <span class="text-neutral-700">Diabetes Care</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Diabetes Care</h1>
            <p class="text-neutral-600 max-w-2xl">
              Find everything you need for diabetes management, including glucose monitors, test strips, insulin supplies, and diabetes-friendly supplements to support your overall health.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg" alt="Diabetes Care" class="w-32 h-32 object-cover rounded-full mx-auto">
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
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About Diabetes Care Products</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Effective diabetes management requires regular monitoring of blood glucose levels and, in many cases, insulin therapy. Our diabetes care category offers a comprehensive range of products to help you maintain optimal health.
          </p>
          <p class="mt-4">
            Glucose monitoring devices, including traditional meters and continuous glucose monitoring systems, are essential tools for tracking blood sugar levels throughout the day. We offer a variety of options to suit different needs and preferences, along with the necessary test strips and lancets.
          </p>
          <p class="mt-4">
            For insulin users, we provide a selection of insulin delivery devices, such as syringes, pens, and pump supplies. We also carry diabetes-friendly supplements and foot care products to address specific health concerns associated with diabetes.
          </p>
          <p class="mt-4">
            If you have questions about the different products available or need advice on managing your diabetes supplies, our pharmacists are here to help guide you to the most appropriate options for your specific needs.
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
  'Glucose Monitors',
  'Test Strips',
  'Insulin Supplies',
  'Foot Care',
  'Supplements',
  'Syringes & Needles'
]

// Diabetes Care products
const products = [
  {
    id: 301,
    name: 'Digital Blood Glucose Monitor Kit',
    slug: 'digital-blood-glucose-monitor-kit',
    category: 'Diabetes Care',
    price: 49.99,
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
    rating: 4.8,
    reviews: 87,
    inStock: true,
    isRx: false,
    discount: 10
  },
  {
    id: 302,
    name: 'Glucose Test Strips (50 Count)',
    slug: 'glucose-test-strips-50-count',
    category: 'Diabetes Care',
    price: 29.99,
    image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg',
    rating: 4.7,
    reviews: 64,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 303,
    name: 'Lancets Ultra-Thin (100 Count)',
    slug: 'lancets-ultra-thin-100-count',
    category: 'Diabetes Care',
    price: 12.99,
    image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg',
    rating: 4.6,
    reviews: 42,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 304,
    name: 'Insulin Travel Case',
    slug: 'insulin-travel-case',
    category: 'Diabetes Care',
    price: 24.99,
    image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg',
    rating: 4.9,
    reviews: 36,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 305,
    name: 'Diabetic Foot Cream',
    slug: 'diabetic-foot-cream',
    category: 'Diabetes Care',
    price: 16.49,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.5,
    reviews: 28,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 306,
    name: 'Sugar-Free Glucose Tablets',
    slug: 'sugar-free-glucose-tablets',
    category: 'Diabetes Care',
    price: 8.99,
    image: 'https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg',
    rating: 4.3,
    reviews: 24,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 307,
    name: 'Insulin Syringes (100 Pack)',
    slug: 'insulin-syringes-100-pack',
    category: 'Diabetes Care',
    price: 19.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.7,
    reviews: 31,
    inStock: true,
    isRx: true,
    discount: 0
  },
  {
    id: 308,
    name: 'Continuous Glucose Monitor Sensors',
    slug: 'continuous-glucose-monitor-sensors',
    category: 'Diabetes Care',
    price: 89.99,
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
    rating: 4.9,
    reviews: 54,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 309,
    name: 'Diabetes Multi-Vitamin Supplement',
    slug: 'diabetes-multi-vitamin-supplement',
    category: 'Diabetes Care',
    price: 22.99,
    image: 'https://images.pexels.com/photos/5528884/pexels-photo-5528884.jpeg',
    rating: 4.4,
    reviews: 19,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 310,
    name: 'Diabetic Compression Socks',
    slug: 'diabetic-compression-socks',
    category: 'Diabetes Care',
    price: 15.99,
    image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg',
    rating: 4.6,
    reviews: 27,
    inStock: true,
    isRx: false,
    discount: 10
  }
]

// Related Categories
const relatedCategories = [
  {
    name: 'Pain Relief',
    slug: 'pain-relief',
    icon: '🏥'
  },
  {
    name: 'Personal Care',
    slug: 'personal-care',
    icon: '🧴'
  },
  {
    name: 'Skin Care',
    slug: 'skin-care',
    icon: '🧴'
  },
  {
    name: 'Vitamins & Supplements',
    slug: 'vitamins-supplements',
    icon: '💊'
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