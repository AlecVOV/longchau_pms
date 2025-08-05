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
              <span class="text-neutral-700">Allergy Relief</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Allergy Relief & Prevention</h1>
            <p class="text-neutral-600 max-w-2xl">
              Find effective relief from seasonal allergies, hay fever, indoor allergens, and skin reactions with our comprehensive range of antihistamines, nasal sprays, and topical treatments.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg" alt="Allergy Relief" class="w-32 h-32 object-cover rounded-full mx-auto">
          </div>
        </div>
      </div>
      
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="filter in allergyFilters" 
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
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About Allergy Relief Products</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Allergies occur when your immune system reacts to substances like pollen, dust mites, pet dander, or certain foods. Our allergy relief products help manage symptoms like sneezing, runny nose, itchy eyes, and skin reactions.
          </p>
          <p class="mt-4">
            <strong>Types of allergy medications include:</strong>
          </p>
          <ul class="mt-2 ml-4 list-disc">
            <li><strong>Antihistamines:</strong> Block histamine to reduce sneezing, itching, and runny nose</li>
            <li><strong>Nasal Sprays:</strong> Provide targeted relief for nasal congestion and inflammation</li>
            <li><strong>Decongestants:</strong> Help reduce swollen nasal passages</li>
            <li><strong>Topical Treatments:</strong> Address skin allergies and reactions</li>
            <li><strong>Eye Drops:</strong> Relieve itchy, watery eyes</li>
          </ul>
          <p class="mt-4">
            For best results, start taking allergy medications before allergy season begins. If you have severe allergies or reactions, consult with a healthcare professional for personalized treatment options.
          </p>
        </div>
      </div>
      
      <!-- Allergy Tips -->
      <div class="bg-green-50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold text-neutral-900 mb-4">Allergy Prevention Tips</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold text-neutral-800 mb-2">Indoor Allergens</h3>
            <ul class="text-sm text-neutral-600 space-y-1">
              <li>• Use HEPA air purifiers</li>
              <li>• Wash bedding in hot water weekly</li>
              <li>• Keep humidity below 50%</li>
              <li>• Regular vacuuming with HEPA filter</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-neutral-800 mb-2">Seasonal Allergies</h3>
            <ul class="text-sm text-neutral-600 space-y-1">
              <li>• Check daily pollen counts</li>
              <li>• Keep windows closed during high pollen days</li>
              <li>• Shower after being outdoors</li>
              <li>• Start medications before season begins</li>
            </ul>
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

// Allergy filter options
const allergyFilters = [
  'All Products',
  'Antihistamines',
  'Nasal Sprays',
  'Eye Drops',
  'Skin Care',
  'Children\'s',
  'Non-Drowsy',
  '24-Hour Relief'
]

// Allergy products
const products = [
  {
    id: 301,
    name: 'Non-Drowsy Allergy Relief 24HR',
    slug: 'non-drowsy-allergy-relief-24hr',
    category: 'Allergy Relief',
    price: 24.99,
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg',
    rating: 4.8,
    reviews: 89,
    inStock: true,
    isRx: false,
    discount: 15,
    tags: ['antihistamines', 'non-drowsy', '24-hour']
  },
  {
    id: 302,
    name: 'Allergy Relief Nasal Spray',
    slug: 'allergy-relief-nasal-spray',
    category: 'Allergy Relief',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg',
    rating: 4.6,
    reviews: 67,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['nasal-sprays']
  },
  {
    id: 303,
    name: 'Allergy Eye Drops - Itchy Eyes Relief',
    slug: 'allergy-eye-drops-itchy-eyes',
    category: 'Allergy Relief',
    price: 12.49,
    image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg',
    rating: 4.7,
    reviews: 54,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['eye-drops']
  },
  {
    id: 304,
    name: 'Children\'s Allergy Liquid Medicine',
    slug: 'childrens-allergy-liquid-medicine',
    category: 'Allergy Relief',
    price: 16.99,
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
    rating: 4.9,
    reviews: 78,
    inStock: true,
    isRx: false,
    discount: 10,
    tags: ['children\'s', 'antihistamines']
  },
  {
    id: 305,
    name: 'Seasonal Allergy Relief Tablets',
    slug: 'seasonal-allergy-relief-tablets',
    category: 'Allergy Relief',
    price: 21.99,
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg',
    rating: 4.5,
    reviews: 43,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['antihistamines', '24-hour']
  },
  {
    id: 306,
    name: 'Anti-Itch Cream for Allergic Reactions',
    slug: 'anti-itch-cream-allergic-reactions',
    category: 'Allergy Relief',
    price: 9.99,
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
    rating: 4.4,
    reviews: 36,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['skin-care']
  },
  {
    id: 307,
    name: 'Fast-Acting Allergy Capsules',
    slug: 'fast-acting-allergy-capsules',
    category: 'Allergy Relief',
    price: 19.49,
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg',
    rating: 4.6,
    reviews: 52,
    inStock: true,
    isRx: false,
    discount: 5,
    tags: ['antihistamines', 'non-drowsy']
  },
  {
    id: 308,
    name: 'Natural Allergy Relief Supplement',
    slug: 'natural-allergy-relief-supplement',
    category: 'Allergy Relief',
    price: 27.99,
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
    rating: 4.3,
    reviews: 29,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['antihistamines']
  },
  {
    id: 309,
    name: 'Decongestant + Antihistamine Combo',
    slug: 'decongestant-antihistamine-combo',
    category: 'Allergy Relief',
    price: 23.99,
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg',
    rating: 4.7,
    reviews: 61,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['antihistamines', 'non-drowsy']
  },
  {
    id: 310,
    name: 'Allergy Relief Chewable Tablets',
    slug: 'allergy-relief-chewable-tablets',
    category: 'Allergy Relief',
    price: 14.99,
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
    rating: 4.5,
    reviews: 38,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['children\'s', 'antihistamines']
  },
  {
    id: 311,
    name: 'Sinus & Allergy Relief',
    slug: 'sinus-allergy-relief',
    category: 'Allergy Relief',
    price: 17.49,
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg',
    rating: 4.4,
    reviews: 45,
    inStock: true,
    isRx: false,
    discount: 0,
    tags: ['antihistamines', 'nasal-sprays']
  },
  {
    id: 312,
    name: 'Allergy Relief Gel Caps',
    slug: 'allergy-relief-gel-caps',
    category: 'Allergy Relief',
    price: 22.99,
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg',
    rating: 4.8,
    reviews: 73,
    inStock: true,
    isRx: false,
    discount: 20,
    tags: ['antihistamines', 'non-drowsy', '24-hour']
  }
]

// Related Categories
const relatedCategories = [
  {
    name: 'Cold & Flu',
    slug: 'cold-flu',
    icon: '🌡️'
  },
  {
    name: 'Skin Care',
    slug: 'skin-care',
    icon: '🧴'
  },
  {
    name: 'Vitamins',
    slug: 'vitamins-supplements',
    icon: '💊'
  },
  {
    name: 'OTC Medicines',
    slug: 'otc-medicines',
    icon: '💊'
  }
]

// Computed properties
const filteredProducts = computed(() => {
  if (activeFilter.value === 'All Products') {
    return products
  }
  
  const filterMap = {
    'Antihistamines': 'antihistamines',
    'Nasal Sprays': 'nasal-sprays',
    'Eye Drops': 'eye-drops',
    'Skin Care': 'skin-care',
    'Children\'s': 'children\'s',
    'Non-Drowsy': 'non-drowsy',
    '24-Hour Relief': '24-hour'
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
  title: 'Allergy Relief Products - Long Châu Pharmacy',
  meta: [
    {
      name: 'description',
      content: 'Find effective allergy relief medications including antihistamines, nasal sprays, and topical treatments for seasonal and year-round allergies.'
    }
  ]
})
</script>