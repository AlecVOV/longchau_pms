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
              <span class="text-neutral-700">First Aid</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">First Aid</h1>
            <p class="text-neutral-600 max-w-2xl">
              Be prepared for minor injuries and emergencies with our comprehensive selection of first aid supplies, bandages, antiseptics, and emergency care essentials for your home, office, or travel needs.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg" alt="First Aid" class="w-32 h-32 object-cover rounded-full mx-auto">
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
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About First Aid Products</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Having the right first aid supplies on hand is essential for quickly addressing minor injuries and emergencies. Our first aid category offers a comprehensive selection of products to help you build a well-stocked first aid kit for your home, office, car, or travel needs.
          </p>
          <p class="mt-4">
            Bandages, gauze, and wound dressings are fundamental components of any first aid kit, providing protection for cuts, scrapes, and burns. We offer a variety of sizes and types to address different wound care needs, from adhesive bandages for minor cuts to larger dressings for more significant injuries.
          </p>
          <p class="mt-4">
            Antiseptics, antibiotic ointments, and wound cleansers play a crucial role in preventing infection and promoting healing. These should be applied to wounds after thorough cleaning and before bandaging. Additionally, our selection includes pain relievers, fever reducers, and allergy medications to address common symptoms.
          </p>
          <p class="mt-4">
            For comprehensive emergency preparedness, consider keeping first aid kits in multiple locations and checking them regularly to ensure supplies are complete and not expired. Our pharmacists can provide guidance on building or supplementing your first aid kit based on your specific needs.
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
  'Bandages',
  'Wound Care',
  'Antiseptics',
  'First Aid Kits',
  'Emergency',
  'Burn Treatment'
]

// First Aid products
const products = [
  {
    id: 501,
    name: 'Complete First Aid Kit (100 pieces)',
    slug: 'complete-first-aid-kit-100-pieces',
    category: 'First Aid',
    price: 29.99,
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg',
    rating: 4.8,
    reviews: 92,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 502,
    name: 'Advanced Adhesive Bandages (50 count)',
    slug: 'advanced-adhesive-bandages-50-count',
    category: 'First Aid',
    price: 7.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.6,
    reviews: 74,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 503,
    name: 'Emergency Thermal Blanket',
    slug: 'emergency-thermal-blanket',
    category: 'First Aid',
    price: 5.99,
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg',
    rating: 4.7,
    reviews: 48,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 504,
    name: 'Antiseptic Wound Wash Spray',
    slug: 'antiseptic-wound-wash-spray',
    category: 'First Aid',
    price: 9.49,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.9,
    reviews: 86,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 505,
    name: 'Medical Gauze Rolls (6 pack)',
    slug: 'medical-gauze-rolls-6-pack',
    category: 'First Aid',
    price: 10.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.5,
    reviews: 37,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 506,
    name: 'Instant Cold Pack (4 pack)',
    slug: 'instant-cold-pack-4-pack',
    category: 'First Aid',
    price: 12.99,
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg',
    rating: 4.6,
    reviews: 42,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 507,
    name: 'Antibiotic Ointment Packets (25 count)',
    slug: 'antibiotic-ointment-packets-25-count',
    category: 'First Aid',
    price: 8.49,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.7,
    reviews: 54,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 508,
    name: 'Travel First Aid Kit',
    slug: 'travel-first-aid-kit',
    category: 'First Aid',
    price: 16.99,
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg',
    rating: 4.8,
    reviews: 62,
    inStock: true,
    isRx: false,
    discount: 10
  },
  {
    id: 509,
    name: 'Burn Relief Gel (2 oz)',
    slug: 'burn-relief-gel-2-oz',
    category: 'First Aid',
    price: 7.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.9,
    reviews: 47,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 510,
    name: 'Emergency CPR Shield with Case',
    slug: 'emergency-cpr-shield-with-case',
    category: 'First Aid',
    price: 9.99,
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg',
    rating: 4.8,
    reviews: 39,
    inStock: true,
    isRx: false,
    discount: 0
  }
]

// Related Categories
const relatedCategories = [
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
  },
  {
    name: 'Skin Care',
    slug: 'skin-care',
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