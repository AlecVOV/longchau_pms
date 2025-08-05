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
              <span class="text-neutral-700">OTC Medicines</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Over-the-Counter Medicines</h1>
            <p class="text-neutral-600 max-w-2xl">
              Browse our wide selection of over-the-counter medications for common conditions and symptoms. All products are verified for safety and effectiveness.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg" alt="OTC Medicines" class="w-32 h-32 object-cover rounded-full mx-auto">
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
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About OTC Medicines</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Over-the-counter (OTC) medicines are medications that can be purchased without a prescription from a healthcare professional. These products are designed to treat a variety of common ailments and symptoms, including pain, fever, allergies, cough, cold, and digestive issues.
          </p>
          <p class="mt-4">
            At Long Châu, we carefully curate our selection of OTC medicines to ensure they meet the highest standards of quality and effectiveness. All products are sourced from reputable manufacturers and are compliant with FDA regulations.
          </p>
          <p class="mt-4">
            While OTC medicines are generally safe when used as directed, it's important to carefully read and follow the instructions on the label. If you have any questions or concerns about which product is right for you, our pharmacists are available to provide guidance.
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
const productsPerPage = 12
const visibleProducts = ref(productsPerPage)

// Popular filter options
const popularFilters = [
  'All Products',
  'Pain Relief',
  'Cold & Flu',
  'Allergy',
  'Digestive Health',
  'First Aid',
  'Sleep Aids'
]

// OTC Medicine products
const products = [
  {
    id: 1,
    name: 'Advanced Pain Relief Ibuprofen 200mg',
    slug: 'advanced-pain-relief-ibuprofen-200mg',
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
    id: 2,
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
    id: 3,
    name: 'Cold & Flu Relief Combo Pack',
    slug: 'cold-flu-relief-combo-pack',
    category: 'Cold & Flu',
    price: 19.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.7,
    reviews: 56,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 4,
    name: 'Non-Drowsy Allergy Relief',
    slug: 'non-drowsy-allergy-relief',
    category: 'Allergy',
    price: 14.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.4,
    reviews: 42,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 5,
    name: 'Upset Stomach Relief Chewable Tablets',
    slug: 'upset-stomach-relief-chewable-tablets',
    category: 'Digestive Health',
    price: 8.49,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.5,
    reviews: 39,
    inStock: true,
    isRx: false,
    discount: 10
  },
  {
    id: 6,
    name: 'Sleep Aid Softgels',
    slug: 'sleep-aid-softgels',
    category: 'Sleep Aids',
    price: 16.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.3,
    reviews: 28,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 7,
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
    id: 8,
    name: 'Immune Support Zinc Lozenges',
    slug: 'immune-support-zinc-lozenges',
    category: 'Cold & Flu',
    price: 8.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.3,
    reviews: 56,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 9,
    name: 'Allergy Relief Cetirizine 10mg',
    slug: 'allergy-relief-cetirizine-10mg',
    category: 'Allergy',
    price: 14.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.7,
    reviews: 32,
    inStock: true,
    isRx: false,
    discount: 15
  },
  {
    id: 10,
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
    id: 11,
    name: 'Acid Reducer Tablets 20mg',
    slug: 'acid-reducer-tablets-20mg',
    category: 'Digestive Health',
    price: 12.29,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.6,
    reviews: 44,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 12,
    name: 'Nighttime Cough Syrup',
    slug: 'nighttime-cough-syrup',
    category: 'Cold & Flu',
    price: 13.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.4,
    reviews: 27,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 13,
    name: 'Sinus Congestion Relief',
    slug: 'sinus-congestion-relief',
    category: 'Cold & Flu',
    price: 15.49,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.2,
    reviews: 18,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 14,
    name: 'Motion Sickness Relief',
    slug: 'motion-sickness-relief',
    category: 'Digestive Health',
    price: 9.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.0,
    reviews: 22,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 15,
    name: 'Hemorrhoid Relief Cream',
    slug: 'hemorrhoid-relief-cream',
    category: 'Personal Care',
    price: 11.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.5,
    reviews: 31,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 16,
    name: 'Daytime Cold & Flu Capsules',
    slug: 'daytime-cold-flu-capsules',
    category: 'Cold & Flu',
    price: 17.99,
    image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    rating: 4.6,
    reviews: 42,
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