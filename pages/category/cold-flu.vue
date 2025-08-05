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
              <span class="text-neutral-700">Cold & Flu</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Cold & Flu Relief</h1>
            <p class="text-neutral-600 max-w-2xl">
              Find effective remedies for cough, congestion, sore throat, fever, and other cold and flu symptoms with our comprehensive selection of medications.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg" alt="Cold & Flu" class="w-32 h-32 object-cover rounded-full mx-auto">
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
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About Cold & Flu Products</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Cold and flu medications are designed to alleviate symptoms while your body fights the virus. These products typically address multiple symptoms such as fever, body aches, congestion, cough, and sore throat.
          </p>
          <p class="mt-4">
            When choosing a cold or flu product, consider the specific symptoms you want to treat. Some products are formulated for daytime use without causing drowsiness, while others include ingredients to help you rest at night. There are also specialized products for specific symptoms, such as cough suppressants or decongestants.
          </p>
          <p class="mt-4">
            Remember that over-the-counter cold and flu medications treat symptoms but do not cure the underlying viral infection. Proper rest, hydration, and nutrition are also important for recovery. If symptoms persist or worsen, consult a healthcare professional.
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
  'Cough',
  'Congestion',
  'Sore Throat',
  'Fever',
  'Multi-Symptom',
  'Daytime',
  'Nighttime'
]

// Cold & Flu products
const products = [
  {
    id: 201,
    name: 'Cold & Flu Relief Combo Pack',
    slug: 'cold-flu-relief-combo-pack',
    category: 'Cold & Flu',
    price: 19.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.7,
    reviews: 56,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 202,
    name: 'Daytime Cold & Flu Capsules',
    slug: 'daytime-cold-flu-capsules',
    category: 'Cold & Flu',
    price: 17.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.6,
    reviews: 42,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 203,
    name: 'Nighttime Cough Syrup',
    slug: 'nighttime-cough-syrup',
    category: 'Cold & Flu',
    price: 13.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.4,
    reviews: 27,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 204,
    name: 'Sinus Congestion Relief',
    slug: 'sinus-congestion-relief',
    category: 'Cold & Flu',
    price: 15.49,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.2,
    reviews: 18,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 205,
    name: 'Immune Support Zinc Lozenges',
    slug: 'immune-support-zinc-lozenges',
    category: 'Cold & Flu',
    price: 8.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.3,
    reviews: 56,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 206,
    name: 'Throat Soothing Honey Lozenges',
    slug: 'throat-soothing-honey-lozenges',
    category: 'Cold & Flu',
    price: 6.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.5,
    reviews: 34,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 207,
    name: 'Children\'s Cold & Fever Liquid',
    slug: 'childrens-cold-fever-liquid',
    category: 'Cold & Flu',
    price: 12.49,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.8,
    reviews: 47,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 208,
    name: 'Vapor Rub Chest Congestion Relief',
    slug: 'vapor-rub-chest-congestion-relief',
    category: 'Cold & Flu',
    price: 9.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.6,
    reviews: 38,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 209,
    name: 'Cough Drops Value Pack',
    slug: 'cough-drops-value-pack',
    category: 'Cold & Flu',
    price: 7.49,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.4,
    reviews: 29,
    inStock: true,
    isRx: false,
    discount: 10
  },
  {
    id: 210,
    name: 'Nasal Decongestant Spray',
    slug: 'nasal-decongestant-spray',
    category: 'Cold & Flu',
    price: 10.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    rating: 4.3,
    reviews: 24,
    inStock: true,
    isRx: false,
    discount: 0
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
    name: 'Vitamins',
    slug: 'vitamins',
    icon: '💊'
  },
  {
    name: 'OTC Medicines',
    slug: 'otc-medicines',
    icon: '💊'
  },
  {
    name: 'First Aid',
    slug: 'first-aid',
    icon: '🩹'
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