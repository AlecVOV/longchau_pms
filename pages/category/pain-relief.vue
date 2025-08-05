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
              <span class="text-neutral-700">Pain Relief</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Pain Relief</h1>
            <p class="text-neutral-600 max-w-2xl">
              Find effective solutions for headaches, muscle pain, joint discomfort, and more with our extensive range of pain relief medications and topical treatments.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg" alt="Pain Relief" class="w-32 h-32 object-cover rounded-full mx-auto">
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
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About Pain Relief Products</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Pain relief medications work in different ways to alleviate discomfort and reduce inflammation. Common over-the-counter options include acetaminophen (Tylenol), which primarily relieves pain, and nonsteroidal anti-inflammatory drugs (NSAIDs) like ibuprofen (Advil, Motrin) and naproxen (Aleve), which reduce both pain and inflammation.
          </p>
          <p class="mt-4">
            For localized pain, topical treatments like creams, gels, and patches can provide targeted relief. These products often contain ingredients such as menthol, lidocaine, or capsaicin that work directly on the affected area.
          </p>
          <p class="mt-4">
            When choosing a pain reliever, consider factors such as the type of pain you're experiencing, any underlying health conditions, and other medications you may be taking. Our pharmacists are available to provide guidance on selecting the most appropriate product for your specific needs.
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
  'Headache Relief',
  'Muscle Pain',
  'Joint Pain',
  'Fever Reducers',
  'Menstrual Pain',
  'Topical Pain Relief'
]

// Pain Relief products
const products = [
  {
    id: 101,
    name: 'Advanced Pain Relief Ibuprofen 200mg Tablets',
    slug: 'advanced-pain-relief-ibuprofen-200mg-tablets',
    category: 'Pain Relief',
    price: 12.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 102,
    name: 'Extra Strength Acetaminophen 500mg',
    slug: 'extra-strength-acetaminophen-500mg',
    category: 'Pain Relief',
    price: 9.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.6,
    reviews: 98,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 103,
    name: 'Advanced Migraine Relief Formula',
    slug: 'advanced-migraine-relief-formula',
    category: 'Pain Relief',
    price: 15.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.7,
    reviews: 54,
    inStock: true,
    isRx: false,
    discount: 10
  },
  {
    id: 104,
    name: 'Muscle & Joint Pain Relief Gel',
    slug: 'muscle-joint-pain-relief-gel',
    category: 'Pain Relief',
    price: 11.49,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.5,
    reviews: 65,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 105,
    name: 'Naproxen Sodium 220mg Tablets',
    slug: 'naproxen-sodium-220mg-tablets',
    category: 'Pain Relief',
    price: 13.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.4,
    reviews: 42,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 106,
    name: 'Children\'s Fever Reducer Liquid',
    slug: 'childrens-fever-reducer-liquid',
    category: 'Pain Relief',
    price: 10.49,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.9,
    reviews: 86,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 107,
    name: 'Hot/Cold Therapy Pain Relief Patch',
    slug: 'hot-cold-therapy-pain-relief-patch',
    category: 'Pain Relief',
    price: 8.49,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.3,
    reviews: 38,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 108,
    name: 'Menstrual Pain Relief Capsules',
    slug: 'menstrual-pain-relief-capsules',
    category: 'Pain Relief',
    price: 14.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.7,
    reviews: 62,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 109,
    name: 'Arthritis Pain Relief Cream',
    slug: 'arthritis-pain-relief-cream',
    category: 'Pain Relief',
    price: 16.49,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.6,
    reviews: 49,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 110,
    name: 'Lidocaine Pain Relief Patch',
    slug: 'lidocaine-pain-relief-patch',
    category: 'Pain Relief',
    price: 18.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.8,
    reviews: 37,
    inStock: true,
    isRx: false,
    discount: 0
  }
]

// Related Categories
const relatedCategories = [
  {
    name: 'Diabetes Care',
    slug: 'diabetes-care',
    icon: '🩸'
  },
  {
    name: 'First Aid',
    slug: 'first-aid',
    icon: '🩹'
  },
  {
    name: 'Heart Health',
    slug: 'heart-health',
    icon: '❤️'
  },
  {
    name: 'Medical Devices',
    slug: 'medical-devices',
    icon: '🩺'
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