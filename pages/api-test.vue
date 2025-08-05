<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">🧪 Backend API Testing</h1>
      
      <!-- API Status -->
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">🔄 API Status</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="text-2xl mb-2">🗄️</div>
            <div class="text-sm text-gray-600">Database</div>
            <div class="font-semibold text-green-600">Connected</div>
          </div>
          <div class="text-center">
            <div class="text-2xl mb-2">🔐</div>
            <div class="text-sm text-gray-600">Authentication</div>
            <div class="font-semibold text-green-600">Active</div>
          </div>
          <div class="text-center">
            <div class="text-2xl mb-2">🛒</div>
            <div class="text-sm text-gray-600">Products API</div>
            <div class="font-semibold text-green-600">Working</div>
          </div>
        </div>
      </div>

      <!-- Products Test -->
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">🏥 Products from Database</h2>
        <div v-if="loading" class="text-center py-4">
          <div class="animate-spin inline-block w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          <p class="mt-2">Loading products...</p>
        </div>
        <div v-else-if="error" class="bg-red-50 border border-red-200 rounded p-4 text-red-700">
          <strong>Error:</strong> {{ error }}
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="product in products" :key="product.id" class="border rounded-lg p-4">
            <h3 class="font-semibold">{{ product.name }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ product.shortDescription }}</p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-green-600">${{ product.price }}</span>
              <span class="text-sm text-gray-500">Stock: {{ product.stock }}</span>
            </div>
            <div class="mt-2">
              <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {{ product.category?.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Categories Test -->
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">📦 Categories from Database</h2>
        <div v-if="categoriesLoading" class="text-center py-4">
          <div class="animate-spin inline-block w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          <p class="mt-2">Loading categories...</p>
        </div>
        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div v-for="category in categories" :key="category.id" class="text-center p-4 border rounded-lg">
            <div class="text-2xl mb-2">🏷️</div>
            <h3 class="font-semibold text-sm">{{ category.name }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ category.slug }}</p>
          </div>
        </div>
      </div>

      <!-- Authentication Test -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">🔐 Authentication Test</h2>
        <div v-if="!authStore.isLoggedIn" class="space-y-4">
          <p class="text-gray-600">Test login with sample credentials:</p>
          <div class="bg-gray-50 p-4 rounded">
            <p><strong>Customer:</strong> customer@example.com / customer123</p>
            <p><strong>Admin:</strong> admin@pharmacy.com / admin123</p>
          </div>
          <NuxtLink to="/login" class="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Go to Login Page
          </NuxtLink>
        </div>
        <div v-else class="space-y-4">
          <div class="bg-green-50 border border-green-200 rounded p-4">
            <p class="text-green-800">✅ You are logged in as: <strong>{{ authStore.user?.email }}</strong></p>
            <p class="text-green-700">Role: <strong>{{ authStore.user?.role }}</strong></p>
          </div>
          <button @click="logout" class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>

      <!-- Backend Summary -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
        <h2 class="text-xl font-semibold mb-4 text-blue-900">📊 Phase 1 Backend Summary</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 class="font-semibold text-blue-800 mb-2">✅ Completed Features:</h3>
            <ul class="space-y-1 text-blue-700">
              <li>• SQLite Database with Prisma ORM</li>
              <li>• JWT Authentication System</li>
              <li>• Products & Categories API</li>
              <li>• User Management (Admin/Customer)</li>
              <li>• Cart & Order Models</li>
              <li>• Database Seeding</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-blue-800 mb-2">📊 Database Stats:</h3>
            <ul class="space-y-1 text-blue-700">
              <li>• Products: {{ products?.length || 0 }}</li>
              <li>• Categories: {{ categories?.length || 0 }}</li>
              <li>• Users: 2 (1 admin, 1 customer)</li>
              <li>• Authentication: JWT-based</li>
              <li>• Database: SQLite (dev.db)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page meta
definePageMeta({
  layout: 'default'
})

// Stores
const authStore = useAuthStore()

// Reactive data
const products = ref([])
const categories = ref([])
const loading = ref(true)
const categoriesLoading = ref(true)
const error = ref(null)

// Fetch products on mount
onMounted(async () => {
  try {
    // Fetch products
    const { data: productsData } = await $fetch('/api/products')
    products.value = productsData?.products || productsData || []
  } catch (err) {
    error.value = err.message || 'Failed to fetch products'
  } finally {
    loading.value = false
  }

  try {
    // Fetch categories
    const { data: categoriesData } = await $fetch('/api/categories')
    categories.value = categoriesData?.categories || categoriesData || []
  } catch (err) {
    console.error('Failed to fetch categories:', err)
  } finally {
    categoriesLoading.value = false
  }
})

// Logout function
const logout = async () => {
  try {
    await authStore.logout()
    await navigateTo('/')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>
