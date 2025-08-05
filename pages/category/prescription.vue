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
              <span class="text-neutral-700">Prescription Medications</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Category Header -->
      <div class="relative bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-6 md:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Prescription Medications</h1>
            <p class="text-neutral-600 max-w-2xl">
              Browse our comprehensive range of prescription medications. A valid prescription is required for purchase. Upload your prescription to get started with your medication order.
            </p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg" alt="Prescription Medications" class="w-32 h-32 object-cover rounded-full mx-auto">
          </div>
        </div>
      </div>

      <!-- Important Notice -->
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <div class="flex items-start">
          <span class="text-amber-500 text-xl mr-3 mt-0.5">⚠️</span>
          <div>
            <h3 class="font-semibold text-amber-800 mb-1">Prescription Required</h3>
            <p class="text-amber-700 text-sm">
              All medications listed below require a valid prescription from a licensed healthcare provider. 
              <NuxtLink to="/upload-prescription" class="text-amber-800 underline hover:text-amber-900">
                Upload your prescription
              </NuxtLink> 
              to purchase these medications.
            </p>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <NuxtLink to="/upload-prescription" class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow group">
          <div class="flex items-center">
            <div class="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
              <span class="text-2xl text-primary-600">📤</span>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold text-neutral-900">Upload Prescription</h3>
              <p class="text-sm text-neutral-600">Start your medication order</p>
            </div>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/account/prescriptions" class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow group">
          <div class="flex items-center">
            <div class="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
              <span class="text-2xl text-green-600">📄</span>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold text-neutral-900">My Prescriptions</h3>
              <p class="text-sm text-neutral-600">View your uploaded prescriptions</p>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/book-consultation" class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow group">
          <div class="flex items-center">
            <div class="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <span class="text-2xl text-blue-600">📹</span>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold text-neutral-900">Book Consultation</h3>
              <p class="text-sm text-neutral-600">Consult with our pharmacists</p>
            </div>
          </div>
        </NuxtLink>
      </div>
      
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="filter in medicationFilters" 
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
              <option value="name">Name A-Z</option>
              <option value="category">Category</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <div 
          v-for="product in sortedProducts" 
          :key="product.id" 
          class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group relative"
        >
          <!-- Prescription Badge -->
          <div class="absolute top-2 left-2 z-10">
            <span class="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
              Prescription Required
            </span>
          </div>
          
          <!-- Product Image -->
          <NuxtLink :to="`/product/${product.slug}`">
            <div class="aspect-square overflow-hidden">
              <img :src="product.image" 
                   :alt="product.name" 
                   class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105">
            </div>
          </NuxtLink>
          
          <!-- Product Info -->
          <div class="p-4">
            <!-- Category -->
            <p class="text-xs text-neutral-500 mb-1">{{ product.category?.name || product.category }}</p>
            
            <!-- Product Name -->
            <NuxtLink :to="`/product/${product.slug}`">
              <h3 class="font-medium text-neutral-800 hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                {{ product.name }}
              </h3>
            </NuxtLink>
            
            <!-- Generic name -->
            <p class="text-xs text-neutral-600 mb-2">{{ product.genericName }}</p>
            
            <!-- Strength -->
            <p class="text-sm font-medium text-neutral-700 mb-2">{{ product.strength }}</p>
            
            <!-- Price -->
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <span class="text-lg font-bold text-neutral-900">${{ product.price }}</span>
                <span class="text-xs text-neutral-500 ml-1">per {{ product.unit }}</span>
              </div>
            </div>
            
            <!-- Action Button -->
            <button 
              @click="requirePrescription(product)"
              class="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      
      <!-- Load More -->
      <div class="text-center mb-12">
        <button v-if="!showingAll" @click="loadMore" class="btn-outline">
          Load More Medications
        </button>
        <p v-else class="text-neutral-500 text-sm">
          You've viewed all medications in this category
        </p>
      </div>
      
      <!-- Information Sections -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- How to Order -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-bold text-neutral-900 mb-4">How to Order Prescription Medications</h2>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                1
              </div>
              <div>
                <h3 class="font-medium text-neutral-800">Upload Your Prescription</h3>
                <p class="text-sm text-neutral-600">Take a clear photo or scan of your valid prescription</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                2
              </div>
              <div>
                <h3 class="font-medium text-neutral-800">Pharmacist Verification</h3>
                <p class="text-sm text-neutral-600">Our licensed pharmacists will verify your prescription</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                3
              </div>
              <div>
                <h3 class="font-medium text-neutral-800">Order Confirmation</h3>
                <p class="text-sm text-neutral-600">We'll contact you to confirm availability and pricing</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                4
              </div>
              <div>
                <h3 class="font-medium text-neutral-800">Secure Delivery</h3>
                <p class="text-sm text-neutral-600">Your medications will be delivered safely to your door</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Safety Information -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-bold text-neutral-900 mb-4">Prescription Safety</h2>
          <div class="prose max-w-none text-neutral-700 text-sm">
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-0.5">✅</span>
                <span>Only use medications prescribed by your healthcare provider</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-0.5">✅</span>
                <span>Follow dosage instructions exactly as prescribed</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-0.5">✅</span>
                <span>Inform your pharmacist of any allergies or other medications</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-0.5">✅</span>
                <span>Store medications in a cool, dry place away from children</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-0.5">✅</span>
                <span>Check expiration dates before taking any medication</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-0.5">✅</span>
                <span>Never share prescription medications with others</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Prescription Services -->
      <div class="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold text-neutral-900 mb-4">Our Prescription Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl text-blue-600">🛡️</span>
            </div>
            <h3 class="font-semibold text-neutral-800 mb-2">Licensed Pharmacists</h3>
            <p class="text-sm text-neutral-600">All prescriptions reviewed by licensed professionals</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl text-blue-600">🚚</span>
            </div>
            <h3 class="font-semibold text-neutral-800 mb-2">Free Delivery</h3>
            <p class="text-sm text-neutral-600">Free delivery on prescription orders over $50</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl text-blue-600">📞</span>
            </div>
            <h3 class="font-semibold text-neutral-800 mb-2">24/7 Support</h3>
            <p class="text-sm text-neutral-600">Round-the-clock support for prescription questions</p>
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

const sortOption = ref('name')
const activeFilter = ref('All Medications')
const productsPerPage = 12
const visibleProducts = ref(productsPerPage)

// Medication filter options
const medicationFilters = [
  'All Medications',
  'Cardiovascular',
  'Diabetes',
  'Antibiotics',
  'Pain Management',
  'Mental Health',
  'Respiratory',
  'Hormones',
  'Gastrointestinal'
]

// Prescription medications
const products = [
  {
    id: 501,
    name: 'Lisinopril Tablets',
    slug: 'lisinopril-tablets',
    category: 'Cardiovascular',
    genericName: 'Lisinopril',
    strength: '10mg',
    price: 24.99,
    unit: 'bottle (30 tablets)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: true,
    tags: ['cardiovascular', 'blood-pressure']
  },
  {
    id: 502,
    name: 'Metformin Extended Release',
    slug: 'metformin-extended-release',
    category: 'Diabetes',
    genericName: 'Metformin HCl',
    strength: '500mg',
    price: 18.99,
    unit: 'bottle (60 tablets)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: true,
    tags: ['diabetes', 'blood-sugar']
  },
  {
    id: 503,
    name: 'Amoxicillin Capsules',
    slug: 'amoxicillin-capsules',
    category: 'Antibiotics',
    genericName: 'Amoxicillin',
    strength: '250mg',
    price: 12.99,
    unit: 'bottle (21 capsules)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: false,
    tags: ['antibiotics', 'infection']
  },
  {
    id: 504,
    name: 'Atorvastatin Tablets',
    slug: 'atorvastatin-tablets',
    category: 'Cardiovascular',
    genericName: 'Atorvastatin Calcium',
    strength: '20mg',
    price: 32.99,
    unit: 'bottle (30 tablets)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: true,
    tags: ['cardiovascular', 'cholesterol']
  },
  {
    id: 505,
    name: 'Levothyroxine Tablets',
    slug: 'levothyroxine-tablets',
    category: 'Hormones',
    genericName: 'Levothyroxine Sodium',
    strength: '50mcg',
    price: 15.99,
    unit: 'bottle (90 tablets)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: true,
    tags: ['hormones', 'thyroid']
  },
  {
    id: 506,
    name: 'Sertraline Tablets',
    slug: 'sertraline-tablets',
    category: 'Mental Health',
    genericName: 'Sertraline HCl',
    strength: '50mg',
    price: 28.99,
    unit: 'bottle (30 tablets)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: false,
    tags: ['mental-health', 'antidepressant']
  },
  {
    id: 507,
    name: 'Albuterol Inhaler',
    slug: 'albuterol-inhaler',
    category: 'Respiratory',
    genericName: 'Albuterol Sulfate',
    strength: '90mcg/actuation',
    price: 45.99,
    unit: 'inhaler (200 doses)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: true,
    tags: ['respiratory', 'asthma']
  },
  {
    id: 508,
    name: 'Omeprazole Capsules',
    slug: 'omeprazole-capsules',
    category: 'Gastrointestinal',
    genericName: 'Omeprazole',
    strength: '20mg',
    price: 21.99,
    unit: 'bottle (30 capsules)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: true,
    tags: ['gastrointestinal', 'acid-reflux']
  },
  {
    id: 509,
    name: 'Gabapentin Capsules',
    slug: 'gabapentin-capsules',
    category: 'Pain Management',
    genericName: 'Gabapentin',
    strength: '300mg',
    price: 35.99,
    unit: 'bottle (90 capsules)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: false,
    tags: ['pain-management', 'neuropathy']
  },
  {
    id: 510,
    name: 'Amlodipine Tablets',
    slug: 'amlodipine-tablets',
    category: 'Cardiovascular',
    genericName: 'Amlodipine Besylate',
    strength: '5mg',
    price: 19.99,
    unit: 'bottle (30 tablets)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: true,
    tags: ['cardiovascular', 'blood-pressure']
  },
  {
    id: 511,
    name: 'Losartan Tablets',
    slug: 'losartan-tablets',
    category: 'Cardiovascular',
    genericName: 'Losartan Potassium',
    strength: '50mg',
    price: 26.99,
    unit: 'bottle (30 tablets)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: true,
    tags: ['cardiovascular', 'blood-pressure']
  },
  {
    id: 512,
    name: 'Simvastatin Tablets',
    slug: 'simvastatin-tablets',
    category: 'Cardiovascular',
    genericName: 'Simvastatin',
    strength: '20mg',
    price: 22.99,
    unit: 'bottle (30 tablets)',
    image: 'https://images.pexels.com/photos/3786235/pexels-photo-3786235.jpeg',
    popular: false,
    tags: ['cardiovascular', 'cholesterol']
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
    name: 'Vitamins',
    slug: 'vitamins-supplements',
    icon: '🍃'
  },
  {
    name: 'Medical Devices',
    slug: 'medical-devices',
    icon: '🩺'
  },
  {
    name: 'Health Tests',
    slug: 'health-assessment',
    icon: '🧪'
  }
]

// Computed properties
const filteredProducts = computed(() => {
  if (activeFilter.value === 'All Medications') {
    return products
  }
  
  return products.filter(product => product.category === activeFilter.value)
})

const sortedProducts = computed(() => {
  const sorted = [...filteredProducts.value]
  
  switch (sortOption.value) {
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'category':
      sorted.sort((a, b) => a.category.localeCompare(b.category))
      break
    case 'popular':
      sorted.sort((a, b) => b.popular - a.popular)
      break
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price)
      break
  }
  
  return sorted.slice(0, visibleProducts.value)
})

const showingAll = computed(() => visibleProducts.value >= filteredProducts.value.length)

// Methods
function loadMore() {
  visibleProducts.value += productsPerPage
}

function requirePrescription(product) {
  // Show prescription requirement message
  alert(`${product.name} requires a valid prescription. Please upload your prescription to purchase this medication.`)
}

// Meta
useHead({
  title: 'Prescription Medications - Long Châu Pharmacy',
  meta: [
    {
      name: 'description',
      content: 'Browse prescription medications from Long Châu Pharmacy. Upload your prescription to order medications safely and securely with professional pharmacist review.'
    }
  ]
})
</script>