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
              <span class="text-neutral-700">Personal Care</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Personal Care</h1>
            <p class="text-neutral-600 max-w-2xl">
              Discover our extensive range of personal care products to help you look and feel your best, from skincare and haircare to oral hygiene and specialized health needs.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg" alt="Personal Care" class="w-32 h-32 object-cover rounded-full mx-auto">
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
        <h2 class="text-xl font-bold text-neutral-900 mb-4">About Personal Care Products</h2>
        <div class="prose max-w-none text-neutral-700">
          <p>
            Personal care encompasses a wide range of products designed to support daily hygiene, health maintenance, and self-care routines. Our carefully curated selection offers quality products for every aspect of personal wellness.
          </p>
          <p class="mt-4">
            Maintaining good oral hygiene is essential for overall health. Our oral care section includes toothpastes, mouthwashes, dental floss, and specialized products for sensitive teeth and gums. For skincare, we offer cleansers, moisturizers, and treatments formulated for different skin types and concerns.
          </p>
          <p class="mt-4">
            Our haircare products range from everyday shampoos and conditioners to specialized treatments for hair loss, dandruff, and other scalp conditions. We also provide a comprehensive selection of feminine hygiene products and men's grooming essentials.
          </p>
          <p class="mt-4">
            For those with specialized needs, we carry incontinence products, foot care items, and aids for daily living. All our personal care products are selected with quality and effectiveness in mind, helping you maintain your health and comfort with confidence.
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
  'Skin Care',
  'Oral Care',
  'Hair Care',
  'Feminine Care',
  'Men\'s Grooming',
  'Bath & Body',
  'Foot Care'
]

// Personal Care products
const products = [
  {
    id: 801,
    name: 'Advanced Facial Moisturizer SPF 30',
    slug: 'advanced-facial-moisturizer-spf-30',
    category: 'Personal Care',
    price: 22.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.8,
    reviews: 92,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 802,
    name: 'Sensitive Teeth Toothpaste',
    slug: 'sensitive-teeth-toothpaste',
    category: 'Personal Care',
    price: 8.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.7,
    reviews: 87,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 803,
    name: 'Anti-Dandruff Shampoo & Conditioner Set',
    slug: 'anti-dandruff-shampoo-conditioner-set',
    category: 'Personal Care',
    price: 17.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.6,
    reviews: 73,
    inStock: true,
    isRx: false,
    discount: 10
  },
  {
    id: 804,
    name: 'Electric Rechargeable Toothbrush',
    slug: 'electric-rechargeable-toothbrush',
    category: 'Personal Care',
    price: 49.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.9,
    reviews: 104,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 805,
    name: 'Men\'s 5-Blade Razor with Refills',
    slug: 'mens-5-blade-razor-with-refills',
    category: 'Personal Care',
    price: 24.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.7,
    reviews: 68,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 806,
    name: 'Ultra Absorbent Incontinence Pads',
    slug: 'ultra-absorbent-incontinence-pads',
    category: 'Personal Care',
    price: 19.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.8,
    reviews: 56,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 807,
    name: 'Organic Cotton Feminine Hygiene Products',
    slug: 'organic-cotton-feminine-hygiene-products',
    category: 'Personal Care',
    price: 12.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.9,
    reviews: 82,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 808,
    name: 'Therapeutic Foot Cream',
    slug: 'therapeutic-foot-cream',
    category: 'Personal Care',
    price: 14.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.5,
    reviews: 47,
    inStock: true,
    isRx: false,
    discount: 0
  },
  {
    id: 809,
    name: 'Alcohol-Free Mouthwash',
    slug: 'alcohol-free-mouthwash',
    category: 'Personal Care',
    price: 9.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.6,
    reviews: 59,
    inStock: true,
    isRx: false,
    discount: 5
  },
  {
    id: 810,
    name: 'Dry Skin Body Lotion',
    slug: 'dry-skin-body-lotion',
    category: 'Personal Care',
    price: 16.99,
    image: 'https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg',
    rating: 4.7,
    reviews: 71,
    inStock: true,
    isRx: false,
    discount: 0
  }
]

// Related Categories
const relatedCategories = [
  {
    name: 'Allergy',
    slug: 'allergy',
    icon: '🌞'
  },
  {
    name: 'Cold & Flu',
    slug: 'cold-flu',
    icon: '🌡️'
  },
  {
    name: 'Diabetes Care',
    slug: 'diabetes-care',
    icon: '🩸'
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