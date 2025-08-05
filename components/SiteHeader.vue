<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 animate-fade-in">
    <!-- Logo - Absolutely positioned -->
    <NuxtLink to="/" class="absolute left-0 top-0 h-full flex items-center px-8 bg-white">
      <img src="https://placehold.co/200x50?text=Long%20Châu" alt="Long Châu Logo" class="h-10">
    </NuxtLink>

    <div class="container-custom">
      <!-- Top Bar -->
      <div class="hidden md:flex items-center justify-between py-2 border-b border-neutral-100 text-sm">
        <div class="flex items-center space-x-6">
          <!-- <a href="tel:+842873023456" class="flex items-center text-neutral-600 hover:text-primary-600">
            <span class="i-iconify-ph-phone-fill mr-1.5"></span>
            <span>(028) 73023456</span>
          </a>
          <a href="mailto:sale@nhathuoclongchau.com.vn" class="flex items-center text-neutral-600 hover:text-primary-600">
            <span class="i-iconify-ph-envelope-fill mr-1.5"></span>
            <span>sale@nhathuoclongchau.com.vn</span>
          </a> -->
        </div>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/shipping-policy" class="text-neutral-600 hover:text-primary-600">Shipping</NuxtLink>
          <NuxtLink to="/faq" class="text-neutral-600 hover:text-primary-600">FAQs</NuxtLink>
          <span class="text-neutral-300">|</span>

          <!-- Account Dropdown - Wrapped in ClientOnly to prevent hydration mismatch -->
          <ClientOnly>
            <div
              v-if="isAuthenticated"
              class="relative"
              @mouseleave="startClose"
              @mouseenter="clearClose"
            >
              <button
                @mouseenter="clearClose; accountDropdownOpen = true"
                class="flex items-center text-neutral-700 hover:text-primary-600"
              >
                <span>{{ authStore.getUserRole === 'ADMIN' ? 'Admin Panel' : 'My Account' }}</span>
                <span v-if="authStore.getUserRole === 'ADMIN'" class="ml-2 px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">ADMIN</span>
                <span class="i-iconify-ph-caret-down-fill ml-1"></span>
              </button>

              <transition
                enter-active-class="transition ease-out duration-300"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-300"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
              >
              <div
                v-if="accountDropdownOpen"
                @mouseenter="clearClose"
                @mouseleave="startClose"
                class="absolute right-0 top-full mt-1 w-48 bg-white shadow-md rounded-md py-2 z-10 animate-slide-up"
              >
                <!-- Admin-specific links first -->
                <template v-if="authStore.getUserRole === 'ADMIN'">
                  <NuxtLink to="/admin" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 font-medium">Admin Dashboard</NuxtLink>
                  <div class="border-t border-neutral-200 my-2"></div>
                  <div class="px-4 py-1">
                    <span class="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Admin Functions</span>
                  </div>
                  <NuxtLink to="/admin/products" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Manage Products</NuxtLink>
                  <NuxtLink to="/admin/orders" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Manage Orders</NuxtLink>
                  <NuxtLink to="/admin/prescriptions" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Manage Prescriptions</NuxtLink>
                  <NuxtLink to="/admin/inventory" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Manage Inventory</NuxtLink>
                  <NuxtLink to="/admin/categories" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Manage Categories</NuxtLink>
                  <div class="border-t border-neutral-200 my-2"></div>
                  <div class="px-4 py-1">
                    <span class="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Personal</span>
                  </div>
                </template>
                
                <!-- Regular user links (shown for both admin and customer) -->
                <NuxtLink :to="authStore.getUserRole === 'ADMIN' ? '/account' : '/account'" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">My Profile</NuxtLink>
                <NuxtLink to="/account/orders" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">My Orders</NuxtLink>
                <NuxtLink to="/account/prescriptions" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">My Prescriptions</NuxtLink>
                <NuxtLink to="/account/medication-reminders" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Medical Reminders</NuxtLink>
                <NuxtLink to="/health-assessment" class="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Health Assessment</NuxtLink>
                
                <div class="border-t border-neutral-200 my-2"></div>
                <button @click="logout" class="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-neutral-700">Logout</button>
              </div>
            </transition>
          </div>

          <template v-else>
            <NuxtLink to="/login" class="text-neutral-600 hover:text-primary-600">Login</NuxtLink>
            <span class="text-neutral-300">|</span>
            <NuxtLink to="/register" class="text-neutral-600 hover:text-primary-600">Register</NuxtLink>
          </template>
          </ClientOnly>
        </div>
      </div>

      <!-- Main Header -->
      <div class="flex items-center justify-between py-4 px-8">
        <!-- Navigation -->
        <nav class="hidden lg:flex items-center justify-between w-full">
          <div class="flex items-center space-x-12 flex-1 mr-16">
            <NuxtLink v-for="item in mainNavItems" :key="item.path" 
                     :to="item.path" 
                     class="font-medium text-neutral-700 hover:text-primary-600">
              {{ item.name }}
            </NuxtLink>
          </div>
          
          <!-- Cart - Wrapped in ClientOnly to prevent hydration mismatch -->
          <ClientOnly>
            <div class="relative shrink-0">
              <div 
                @click="cartDropdownOpen = !cartDropdownOpen"
                class="relative cursor-pointer group"
              >
                <img 
                  src="https://raw.githubusercontent.com/ionic-team/ionicons/main/src/svg/cart-outline.svg" 
                  alt="Cart" 
                  class="w-7 h-7 opacity-80 group-hover:opacity-100 transition-opacity"
                >
                <span v-if="cartItemCount > 0" 
                      class="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {{ cartItemCount }}
                </span>
              </div>
              
              <!-- Cart Dropdown -->
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-200"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div v-if="cartDropdownOpen" 
                     class="absolute right-0 top-full mt-1 w-80 bg-white shadow-md rounded-md py-3 z-10">
                  <div class="flex items-center justify-between px-4 pb-2 border-b border-neutral-100">
                    <span class="font-medium">Shopping Cart ({{ cartItemCount }} items)</span>
                    <button @click="cartDropdownOpen = false" 
                            class="p-1 hover:opacity-70 transition-opacity">
                      <img src="https://raw.githubusercontent.com/ionic-team/ionicons/main/src/svg/close-outline.svg" 
                           alt="Close" 
                           class="w-5 h-5">
                    </button>
                  </div>

                  <!-- Cart Items -->
                  <div class="max-h-60 overflow-y-auto px-4">
                    <div v-if="cartItemCount === 0" class="py-8 text-center">
                      <span class="i-iconify-ph-shopping-cart text-4xl text-neutral-300 mb-2"></span>
                      <p class="text-neutral-500">You haven't bought anything yet</p>
                    </div>
                    <template v-else>
                      <div v-for="(item, index) in cartItems" :key="index" 
                           class="flex items-center py-2 border-b border-neutral-100 last:border-b-0">
                        <img :src="item.image" :alt="item.name" class="w-12 h-12 object-cover rounded-md">
                        <div class="ml-3 flex-1">
                          <p class="text-sm font-medium text-neutral-800 line-clamp-1">{{ item.name }}</p>
                          <div class="flex items-center justify-between mt-1">
                            <p class="text-sm text-neutral-500">{{ item.quantity }} × ${{ item.price.toFixed(2) }}</p>
                            <button @click="removeFromCart(index)" class="text-neutral-400 hover:text-error-500">
                              <span class="i-iconify-ph-trash text-lg"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>

                  <!-- Cart Actions - Always visible -->
                  <div class="px-4 py-3 border-t border-neutral-100">
                    <div v-if="cartItemCount > 0" class="flex items-center justify-between mb-3">
                      <span class="font-medium">Subtotal:</span>
                      <span class="font-medium">${{ cartTotal.toFixed(2) }}</span>
                    </div>
                    <div class="flex space-x-2">
                      <button 
                        @click="cartItemCount > 0 ? navigateTo('/cart') : null"
                        class="btn-outline text-sm py-1.5 flex-1"
                        :class="{'opacity-50 cursor-not-allowed': cartItemCount === 0}">
                        View Cart
                      </button>
                      <button
                        @click="cartItemCount > 0 ? navigateTo('/checkout') : null"
                        class="btn-primary text-sm py-1.5 flex-1"
                        :class="{'opacity-50 cursor-not-allowed': cartItemCount === 0}">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </ClientOnly>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden ml-2 flex items-center justify-center h-10 w-10 rounded-full hover:bg-neutral-100">
          <span v-if="!mobileMenuOpen" class="i-iconify-ph-list-bold text-2xl"></span>
          <span v-else class="i-iconify-ph-x-bold text-2xl"></span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-neutral-100 animate-slide-up">
      <div class="container-custom py-4">
        <nav class="space-y-2">
          <NuxtLink v-for="item in mainNavItems" :key="item.path" 
                   :to="item.path" 
                   class="block py-2 font-medium text-neutral-700 hover:text-primary-600 border-b border-neutral-100 last:border-b-0">
            {{ item.name }}
          </NuxtLink>
        </nav>
        
        <div class="mt-4 pt-4 border-t border-neutral-100 flex flex-col space-y-2">
          <ClientOnly>
            <template v-if="isAuthenticated">
              <NuxtLink to="/account" class="flex items-center py-2 text-neutral-700 hover:text-primary-600">
                <span class="i-iconify-ph-user-circle-fill mr-2 text-xl"></span>
                <span>My Account</span>
              </NuxtLink>
              <NuxtLink to="/account/prescriptions" class="flex items-center py-2 text-neutral-700 hover:text-primary-600">
                <span class="i-iconify-ph-prescription-fill mr-2 text-xl"></span>
                <span>Prescriptions</span>
              </NuxtLink>
              <NuxtLink to="/account/medication-reminders" class="flex items-center py-2 text-neutral-700 hover:text-primary-600">
                <span class="i-iconify-ph-bell-fill mr-2 text-xl"></span>
                <span>Med Reminders</span>
              </NuxtLink>
              <NuxtLink to="/health-assessment" class="flex items-center py-2 text-neutral-700 hover:text-primary-600">
                <span class="i-iconify-ph-clipboard-fill mr-2 text-xl"></span>
                <span>Health Assessment</span>
              </NuxtLink>
              <button @click="logout" class="flex items-center py-2 text-neutral-700 hover:text-primary-600">
                <span class="i-iconify-ph-sign-out-fill mr-2 text-xl"></span>
                <span>Logout</span>
              </button>
            </template>
            <template v-else>
              <NuxtLink to="/login" class="flex items-center py-2 text-neutral-700 hover:text-primary-600">
                <span class="i-iconify-ph-sign-in-fill mr-2 text-xl"></span>
                <span>Login</span>
              </NuxtLink>
              <NuxtLink to="/register" class="flex items-center py-2 text-neutral-700 hover:text-primary-600">
                <span class="i-iconify-ph-user-plus-fill mr-2 text-xl"></span>
                <span>Register</span>
              </NuxtLink>
            </template>
          </ClientOnly>
        </div>
      </div>
    </div>
    
    <!-- Category Navigation -->
    <div class="bg-neutral-50 border-t border-b border-neutral-200">
      <div class="container-custom relative flex items-center">
        <!-- Left Arrow -->
        <button 
          @click="scrollCategories('left')"
          class="absolute left-0 z-10 flex items-center justify-center w-8 h-8 text-neutral-900 hover:opacity-70"
        >
          <img src="https://raw.githubusercontent.com/ionic-team/ionicons/main/src/svg/chevron-back-outline.svg" 
               alt="Previous" 
               class="w-6 h-6">
        </button>

        <nav ref="categoryNav" class="flex-1 flex items-center space-x-8 py-2 overflow-x-auto hide-scrollbar scroll-smooth mx-10">
          <NuxtLink to="/book-consultation" 
                   class="whitespace-nowrap text-sm font-medium text-primary-600 hover:text-primary-700 py-1">
            Book Consultation
          </NuxtLink>
          <NuxtLink to="/blog" 
                   class="whitespace-nowrap text-sm font-medium text-green-600 hover:text-green-700 py-1">
            Health Blog
          </NuxtLink>
          <NuxtLink to="/search" 
                   class="whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-700 py-1">
            Search Products
          </NuxtLink>
          <NuxtLink v-for="category in categories" :key="category.slug" 
                   :to="`/category/${category.slug}`" 
                   class="whitespace-nowrap text-sm text-neutral-600 hover:text-primary-600 py-1">
            {{ category.name }}
          </NuxtLink>
          <NuxtLink to="/drug-info" 
                   class="whitespace-nowrap text-sm text-neutral-600 hover:text-primary-600 py-1">
            Drug Information
          </NuxtLink>
        </nav>

        <!-- Right Arrow -->
        <button 
          @click="scrollCategories('right')"
          class="absolute right-0 z-10 flex items-center justify-center w-8 h-8 text-neutral-900 hover:opacity-70"
        >
          <img src="https://raw.githubusercontent.com/ionic-team/ionicons/main/src/svg/chevron-forward-outline.svg" 
               alt="Next" 
               class="w-6 h-6">
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/auth'

const cartStore = useCartStore()
const authStore = useAuthStore()

// State
const mobileMenuOpen = ref(false)
const cartDropdownOpen = ref(false)
const accountDropdownOpen = ref(false)
const categoryNav = ref(null)

// Hover-intent timer
let closeTimer = null
function startClose() {
  closeTimer = setTimeout(() => {
    accountDropdownOpen.value = false
  }, 500) // 0.5s delay
}
function clearClose() {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

// Get authentication status from store
const isAuthenticated = computed(() => authStore.isLoggedIn)

// Navigation items
const mainNavItems = [
  { name: 'Home', path: '/' },
  { name: 'All Products', path: '/products' },
  { name: 'Prescription', path: '/category/prescription' },
  { name: 'Medical Equipment', path: '/category/medical-devices' },
  { name: 'Health Blog', path: '/blog' },
  { name: 'Book Consultation', path: '/book-consultation' },
  { name: 'Health Assessment', path: '/health-assessment' },
  { name: 'Drug Information', path: '/drug-info' },
  { name: 'Contact', path: '/contact' }
]

// Categories for category navigation
const categories = [
  { name: 'Pain Relief', slug: 'pain-relief' },
  { name: 'Cold & Flu', slug: 'cold-flu' },
  { name: 'Allergy', slug: 'allergy' },
  { name: 'Diabetes Care', slug: 'diabetes-care' },
  { name: 'First Aid', slug: 'first-aid' },
  { name: 'Vitamins & Supplements', slug: 'vitamins-supplements' },
  { name: 'Personal Care', slug: 'personal-care' },
  { name: 'Skin Care', slug: 'skin-care' },
  { name: 'Medical Devices', slug: 'medical-devices' },
  { name: 'OTC Medicines', slug: 'otc-medicines' },
  { name: 'Heart Health', slug: 'heart-health' }
]

// Cart computed properties
const cartItems = computed(() => cartStore.items)
const cartItemCount = computed(() => cartStore.itemCount)
const cartTotal = computed(() => cartStore.total)

// Methods
const removeFromCart = (index) => {
  cartStore.removeItem(index)
}

const logout = () => {
  // Use auth store to logout
  authStore.logout()
  accountDropdownOpen.value = false
  // Navigate to home page after logout
  navigateTo('/')
}

const scrollCategories = (direction) => {
  if (!categoryNav.value) return
  
  const nav = categoryNav.value
  const scrollAmount = direction === 'left' ? 0 : nav.scrollWidth - nav.clientWidth
  
  nav.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  })
}
</script>

<style>
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>


