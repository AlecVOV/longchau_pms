<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Drug Information Database</h1>
      <p class="text-neutral-600 mb-8 max-w-3xl">Browse our comprehensive drug information database for detailed information about medications, including usage, side effects, precautions, and more.</p>
      
      <!-- Search Bar -->
      <div class="max-w-2xl mb-8">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search medications by name..." 
            v-model="searchQuery"
            @keyup.enter="searchDrugs"
            class="input pr-12 w-full" 
          />
          <button 
            @click="searchDrugs" 
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white p-1.5 rounded-md hover:bg-primary-700"
          >
            <span class="i-iconify-ph-magnifying-glass-bold text-lg"></span>
          </button>
        </div>
      </div>
      
      <!-- Drug Categories -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-neutral-900 mb-4">Browse by Category</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="category in drugCategories" :key="category.id" class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-neutral-100">
            <h3 class="font-medium text-neutral-800 mb-2">{{ category.name }}</h3>
            <p class="text-sm text-neutral-500 mb-3">{{ category.description }}</p>
            <NuxtLink :to="`/drug-info?category=${category.id}`" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View Medications <span class="i-iconify-ph-arrow-right-bold ml-1"></span>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Popular Medications -->
      <div>
        <h2 class="text-xl font-bold text-neutral-900 mb-4">Popular Medications</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="drug in popularDrugs" :key="drug.slug" class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div class="p-4">
              <h3 class="font-medium text-neutral-800 mb-1">{{ drug.name }}</h3>
              <p class="text-sm text-neutral-500 mb-3">{{ drug.genericName }}</p>
              <p class="text-sm text-neutral-600 mb-4 line-clamp-2">{{ drug.overview }}</p>
              <NuxtLink :to="`/drug-info/${drug.slug}`" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View Details <span class="i-iconify-ph-arrow-right-bold ml-1"></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

// Mock data - in a real app, these would come from an API
const drugCategories = [
  { id: 'pain-relief', name: 'Pain Relief', description: 'Medications for managing pain and inflammation' },
  { id: 'antibiotics', name: 'Antibiotics', description: 'Medications that fight bacterial infections' },
  { id: 'antidepressants', name: 'Antidepressants', description: 'Medications for treating depression and anxiety' },
  { id: 'heart-health', name: 'Heart Health', description: 'Medications for cardiovascular health' },
  { id: 'diabetes', name: 'Diabetes', description: 'Medications for managing blood sugar levels' },
  { id: 'allergies', name: 'Allergies', description: 'Medications for relieving allergy symptoms' },
  { id: 'respiratory', name: 'Respiratory', description: 'Medications for asthma and lung conditions' },
  { id: 'gastrointestinal', name: 'Gastrointestinal', description: 'Medications for digestive system issues' },
]

const popularDrugs = [
  { 
    name: 'Acetaminophen',
    genericName: 'Acetaminophen (paracetamol)',
    overview: 'Used to treat pain and reduce fever.',
    slug: 'acetaminophen'
  },
  { 
    name: 'Ibuprofen',
    genericName: 'Ibuprofen',
    overview: 'Used to reduce inflammation, pain, and fever.',
    slug: 'ibuprofen'
  },
  { 
    name: 'Lisinopril',
    genericName: 'Lisinopril',
    overview: 'ACE inhibitor used to treat high blood pressure and heart failure.',
    slug: 'lisinopril'
  },
  { 
    name: 'Metformin',
    genericName: 'Metformin hydrochloride',
    overview: 'Used to treat type 2 diabetes by improving blood sugar control.',
    slug: 'metformin'
  },
]

const searchDrugs = () => {
  if (searchQuery.value.trim()) {
    // In a real app, this would navigate to search results or filter the current view
    navigateTo(`/drug-info?search=${encodeURIComponent(searchQuery.value.trim())}`)
  }
}
</script>
