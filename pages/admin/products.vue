<template>
  <div class="py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Product Management</h1>
          <p class="text-gray-600 mt-2">Manage your pharmacy inventory and products</p>
        </div>
        <div class="mt-4 sm:mt-0">
          <button
            @click="showAddProductModal = true"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add New Product
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <div class="flex items-center">
            <div class="p-2 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Total Products</p>
              <p class="text-2xl font-bold text-gray-900">{{ products.length }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <div class="flex items-center">
            <div class="p-2 bg-green-100 rounded-lg">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">In Stock</p>
              <p class="text-2xl font-bold text-gray-900">{{ inStockCount }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <div class="flex items-center">
            <div class="p-2 bg-yellow-100 rounded-lg">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Low Stock</p>
              <p class="text-2xl font-bold text-gray-900">{{ lowStockCount }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <div class="flex items-center">
            <div class="p-2 bg-red-100 rounded-lg">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Out of Stock</p>
              <p class="text-2xl font-bold text-gray-900">{{ outOfStockCount }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters and Search -->
      <div class="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by name, brand, or SKU"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              v-model="selectedCategory"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Stock Status</label>
            <select
              v-model="stockFilter"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Products</option>
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
          <div class="flex items-end">
            <button
              @click="clearFilters"
              class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <!-- Products Table -->
      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="product in filteredProducts" :key="product.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-12 w-12">
                      <img
                        :src="product.image || '/placeholder-product.jpg'"
                        :alt="product.name"
                        class="h-12 w-12 rounded-lg object-cover"
                      >
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                      <div class="text-sm text-gray-500">SKU: {{ product.sku }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ product.category?.name }}</div>
                  <div class="text-sm text-gray-500">{{ product.brand }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">${{ product.price.toFixed(2) }}</div>
                  <div v-if="product.originalPrice && product.originalPrice > product.price" class="text-sm text-gray-500 line-through">
                    ${{ product.originalPrice.toFixed(2) }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-2">
                    <input
                      v-model.number="product.stock"
                      type="number"
                      min="0"
                      class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      @change="updateStock(product)"
                    >
                    <button
                      @click="showStockModal(product)"
                      class="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Edit
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="{
                      'bg-green-100 text-green-800': product.stock > 10,
                      'bg-yellow-100 text-yellow-800': product.stock > 0 && product.stock <= 10,
                      'bg-red-100 text-red-800': product.stock === 0
                    }"
                    class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                  >
                    {{ getStatusText(product.stock) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                    <button
                      @click="editProduct(product)"
                      class="text-blue-600 hover:text-blue-900"
                    >
                      Edit
                    </button>
                    <button
                      @click="deleteProduct(product)"
                      class="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div class="flex-1 flex justify-between sm:hidden">
            <button
              @click="previousPage"
              :disabled="!pagination.hasPrev"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              @click="nextPage"
              :disabled="!pagination.hasNext"
              class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Showing
                <span class="font-medium">{{ ((pagination.currentPage - 1) * pagination.itemsPerPage) + 1 }}</span>
                to
                <span class="font-medium">{{ Math.min(pagination.currentPage * pagination.itemsPerPage, filteredProducts.length) }}</span>
                of
                <span class="font-medium">{{ filteredProducts.length }}</span>
                results
              </p>
            </div>
            <div>
              <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  @click="previousPage"
                  :disabled="!pagination.hasPrev"
                  class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  @click="nextPage"
                  :disabled="!pagination.hasNext"
                  class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Product Modal -->
    <div v-if="showAddProductModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75" @click="showAddProductModal = false"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <form @submit.prevent="addProduct" class="bg-white">
            <div class="px-6 py-4 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Add New Product</h3>
            </div>
            
            <div class="px-6 py-4 max-h-96 overflow-y-auto">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Basic Information -->
                <div class="space-y-4">
                  <h4 class="font-medium text-gray-900">Basic Information</h4>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                    <input
                      v-model="newProduct.name"
                      type="text"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter product name"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                    <input
                      v-model="newProduct.sku"
                      type="text"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Product SKU"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                    <input
                      v-model="newProduct.brand"
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Brand name"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      v-model="newProduct.categoryId"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a category</option>
                      <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                      </option>
                    </select>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Price</label>
                      <input
                        v-model.number="newProduct.price"
                        type="number"
                        step="0.01"
                        min="0"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.00"
                      >
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
                      <input
                        v-model.number="newProduct.originalPrice"
                        type="number"
                        step="0.01"
                        min="0"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.00"
                      >
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                    <input
                      v-model.number="newProduct.stock"
                      type="number"
                      min="0"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      v-model="newProduct.description"
                      rows="3"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Product description"
                    ></textarea>
                  </div>
                </div>

                <!-- Image Upload -->
                <div class="space-y-4">
                  <h4 class="font-medium text-gray-900">Product Images</h4>
                  <ImageUploader
                    v-model="newProduct.images"
                    :max-images="5"
                    :max-size-mb="2"
                    :show-image-details="true"
                    @upload-complete="handleImageUpload"
                    @upload-error="handleImageError"
                  />
                </div>
              </div>
            </div>

            <div class="bg-gray-50 px-6 py-3 flex flex-row-reverse space-x-3 space-x-reverse">
              <button
                type="submit"
                :disabled="isAddingProduct"
                class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isAddingProduct" class="flex items-center">
                  <div class="animate-spin -ml-1 mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Adding...
                </span>
                <span v-else>Add Product</span>
              </button>
              <button
                type="button"
                @click="cancelAddProduct"
                class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Stock Update Modal -->
    <div v-if="showStockUpdateModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75" @click="showStockUpdateModal = false"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Update Stock - {{ selectedProduct?.name }}
                </h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Current Stock</label>
                    <p class="text-lg font-semibold">{{ selectedProduct?.stock }} units</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Operation</label>
                    <select v-model="stockOperation" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="set">Set Stock Level</option>
                      <option value="add">Add Stock</option>
                      <option value="subtract">Remove Stock</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ stockOperation === 'set' ? 'New Stock Level' : 'Quantity' }}
                    </label>
                    <input
                      v-model.number="stockQuantity"
                      type="number"
                      min="0"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="updateStockLevel"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Update Stock
            </button>
            <button
              @click="showStockUpdateModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'
import { useNotificationsStore } from '~/stores/notifications'
import ImageUploader from '~/components/ImageUploader.vue'

definePageMeta({
  middleware: 'admin'
})

const productsStore = useProductsStore()
const notifications = useNotificationsStore()

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('')
const stockFilter = ref('')
const showAddProductModal = ref(false)
const showStockUpdateModal = ref(false)
const selectedProduct = ref(null)
const stockOperation = ref('set')
const stockQuantity = ref(0)
const isAddingProduct = ref(false)

// New product form data
const newProduct = ref({
  name: '',
  sku: '',
  brand: '',
  categoryId: '',
  price: 0,
  originalPrice: 0,
  stock: 0,
  description: '',
  images: []
})

// Reset new product form
const resetNewProduct = () => {
  newProduct.value = {
    name: '',
    sku: '',
    brand: '',
    categoryId: '',
    price: 0,
    originalPrice: 0,
    stock: 0,
    description: '',
    images: []
  }
}

// Computed properties
const products = computed(() => productsStore.products)
const categories = computed(() => productsStore.categories)

const inStockCount = computed(() => 
  products.value.filter(p => p.stock > 0).length
)

const lowStockCount = computed(() => 
  products.value.filter(p => p.stock > 0 && p.stock <= 10).length
)

const outOfStockCount = computed(() => 
  products.value.filter(p => p.stock === 0).length
)

const filteredProducts = computed(() => {
  let filtered = [...products.value]

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query)
    )
  }

  // Category filter
  if (selectedCategory.value) {
    filtered = filtered.filter(product => 
      product.categoryId === parseInt(selectedCategory.value)
    )
  }

  // Stock filter
  if (stockFilter.value) {
    switch (stockFilter.value) {
      case 'in-stock':
        filtered = filtered.filter(p => p.stock > 10)
        break
      case 'low-stock':
        filtered = filtered.filter(p => p.stock > 0 && p.stock <= 10)
        break
      case 'out-of-stock':
        filtered = filtered.filter(p => p.stock === 0)
        break
    }
  }

  return filtered
})

const pagination = computed(() => productsStore.pagination)

// Methods
const getStatusText = (stock) => {
  if (stock === 0) return 'Out of Stock'
  if (stock <= 10) return 'Low Stock'
  return 'In Stock'
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  stockFilter.value = ''
}

const showStockModal = (product) => {
  selectedProduct.value = product
  stockQuantity.value = product.stock
  showStockUpdateModal.value = true
}

const updateStock = async (product) => {
  try {
    await productsStore.setStock(product.id, product.stock)
    notifications.success('Stock updated successfully')
  } catch (error) {
    console.error('Failed to update stock:', error)
    notifications.error('Failed to update stock')
  }
}

const updateStockLevel = async () => {
  if (!selectedProduct.value) return

  try {
    await productsStore.updateInventory(
      selectedProduct.value.id,
      stockQuantity.value,
      stockOperation.value
    )
    showStockUpdateModal.value = false
    selectedProduct.value = null
    notifications.success('Stock level updated successfully')
  } catch (error) {
    console.error('Failed to update stock level:', error)
    notifications.error('Failed to update stock level')
  }
}

// Product management methods
const addProduct = async () => {
  if (isAddingProduct.value) return
  
  try {
    isAddingProduct.value = true
    
    // Validate required fields
    if (!newProduct.value.name || !newProduct.value.sku || !newProduct.value.categoryId) {
      notifications.error('Please fill in all required fields')
      return
    }

    // Prepare product data
    const productData = {
      ...newProduct.value,
      categoryId: parseInt(newProduct.value.categoryId),
      price: parseFloat(newProduct.value.price),
      originalPrice: newProduct.value.originalPrice ? parseFloat(newProduct.value.originalPrice) : null,
      stock: parseInt(newProduct.value.stock),
      image: newProduct.value.images.find(img => img.isPrimary)?.url || newProduct.value.images[0]?.url || null,
      images: newProduct.value.images.map(img => ({
        url: img.url,
        alt: img.alt,
        caption: img.caption,
        isPrimary: img.isPrimary
      }))
    }

    await productsStore.addProduct(productData)
    
    showAddProductModal.value = false
    resetNewProduct()
    notifications.success('Product added successfully')
    
  } catch (error) {
    console.error('Failed to add product:', error)
    notifications.error('Failed to add product: ' + error.message)
  } finally {
    isAddingProduct.value = false
  }
}

const cancelAddProduct = () => {
  showAddProductModal.value = false
  resetNewProduct()
}

const handleImageUpload = (images) => {
  notifications.success(`${images.length} image(s) uploaded successfully`)
}

const handleImageError = (error) => {
  notifications.error('Image upload failed: ' + error.message)
}

const editProduct = (product) => {
  // Navigate to edit product page or show edit modal
  navigateTo(`/admin/products/${product.id}/edit`)
}

const deleteProduct = async (product) => {
  if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
    try {
      await productsStore.deleteProduct(product.id)
      notifications.success('Product deleted successfully')
    } catch (error) {
      console.error('Failed to delete product:', error)
      notifications.error('Failed to delete product')
    }
  }
}

const previousPage = () => {
  if (pagination.value.hasPrev) {
    productsStore.setCurrentPage(pagination.value.currentPage - 1)
    productsStore.fetchProducts()
  }
}

const nextPage = () => {
  if (pagination.value.hasNext) {
    productsStore.setCurrentPage(pagination.value.currentPage + 1)
    productsStore.fetchProducts()
  }
}

// Load data on mount
onMounted(async () => {
  await Promise.all([
    productsStore.fetchProducts(),
    productsStore.fetchCategories()
  ])
})
</script>
