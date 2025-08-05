<template>
  <div class="py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p class="text-gray-600 mt-2">Monitor and manage product stock levels</p>
        </div>
        <div class="mt-4 sm:mt-0 flex space-x-4">
          <button
            @click="showBulkUpdateModal = true"
            class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Bulk Update
          </button>
          <button
            @click="exportInventory"
            class="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Export CSV
          </button>
        </div>
      </div>

      <!-- Inventory Overview Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <div class="flex items-center">
            <div class="p-2 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Total Value</p>
              <p class="text-2xl font-bold text-gray-900">${{ totalInventoryValue.toFixed(2) }}</p>
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
              <p class="text-sm font-medium text-gray-600">Well Stocked</p>
              <p class="text-2xl font-bold text-gray-900">{{ wellStockedCount }}</p>
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
              <p class="text-sm font-medium text-gray-600">Low Stock Alerts</p>
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

      <!-- Quick Actions -->
      <div class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            @click="showLowStockProducts"
            class="flex items-center p-4 border border-yellow-300 rounded-lg hover:bg-yellow-50 transition-colors"
          >
            <div class="p-2 bg-yellow-100 rounded-lg mr-3">
              <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div class="text-left">
              <div class="font-medium text-gray-900">Review Low Stock</div>
              <div class="text-sm text-gray-500">{{ lowStockCount }} items need attention</div>
            </div>
          </button>

          <button
            @click="showOutOfStockProducts"
            class="flex items-center p-4 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
          >
            <div class="p-2 bg-red-100 rounded-lg mr-3">
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div class="text-left">
              <div class="font-medium text-gray-900">Restock Items</div>
              <div class="text-sm text-gray-500">{{ outOfStockCount }} items out of stock</div>
            </div>
          </button>

          <button
            @click="generateReorder"
            class="flex items-center p-4 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div class="p-2 bg-blue-100 rounded-lg mr-3">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <div class="text-left">
              <div class="font-medium text-gray-900">Generate Reorder List</div>
              <div class="text-sm text-gray-500">Create purchase orders</div>
            </div>
          </button>
        </div>
      </div>

      <!-- Inventory Table -->
      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <!-- Table Filters -->
        <div class="p-6 border-b border-gray-200">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name or SKU"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                v-model="selectedCategory"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Products</option>
                <option value="well-stocked">Well Stocked (>{{ stockThresholds.well }})</option>
                <option value="low-stock">Low Stock (1-{{ stockThresholds.low }})</option>
                <option value="out-of-stock">Out of Stock (0)</option>
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

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    v-model="selectAll"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    @change="toggleSelectAll"
                  >
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Stock
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit Price
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Value
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th class="relative px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="product in filteredProducts" :key="product.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <input
                    v-model="selectedProducts"
                    :value="product.id"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="product.image || '/placeholder-product.jpg'"
                        :alt="product.name"
                        class="h-10 w-10 rounded-lg object-cover"
                      >
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                      <div class="text-sm text-gray-500">SKU: {{ product.sku }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-2">
                    <input
                      :value="product.stock"
                      type="number"
                      min="0"
                      class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      @change="updateProductStock(product, $event.target.value)"
                    >
                    <span class="text-sm text-gray-500">units</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="getStockStatusColor(product.stock)"
                    class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                  >
                    {{ getStockStatusText(product.stock) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${{ product.price.toFixed(2) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${{ (product.stock * product.price).toFixed(2) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatDate(product.lastUpdated) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex space-x-2">
                    <button
                      @click="showStockHistory(product)"
                      class="text-blue-600 hover:text-blue-900"
                      title="View History"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                    <button
                      @click="quickRestock(product)"
                      class="text-green-600 hover:text-green-900"
                      title="Quick Restock"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
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
                Showing {{ ((pagination.currentPage - 1) * pagination.itemsPerPage) + 1 }} to {{ Math.min(pagination.currentPage * pagination.itemsPerPage, filteredProducts.length) }} of {{ filteredProducts.length }} results
              </p>
            </div>
            <div>
              <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
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

    <!-- Bulk Update Modal -->
    <div v-if="showBulkUpdateModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75" @click="showBulkUpdateModal = false"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
              Bulk Stock Update
            </h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Selected Products: {{ selectedProducts.length }}
                </label>
                <p class="text-sm text-gray-500">
                  Update stock levels for all selected products
                </p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Operation</label>
                <select
                  v-model="bulkOperation"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="set">Set Stock Level</option>
                  <option value="add">Add to Current Stock</option>
                  <option value="subtract">Subtract from Current Stock</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ bulkOperation === 'set' ? 'New Stock Level' : 'Quantity' }}
                </label>
                <input
                  v-model.number="bulkQuantity"
                  type="number"
                  min="0"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="executeBulkUpdate"
              :disabled="selectedProducts.length === 0"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
            >
              Update {{ selectedProducts.length }} Products
            </button>
            <button
              @click="showBulkUpdateModal = false"
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

definePageMeta({
  middleware: 'admin'
})

const productsStore = useProductsStore()

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('')
const stockFilter = ref('')
const selectedProducts = ref([])
const selectAll = ref(false)
const showBulkUpdateModal = ref(false)
const bulkOperation = ref('set')
const bulkQuantity = ref(0)

// Constants
const stockThresholds = {
  well: 20,
  low: 10
}

// Computed properties
const products = computed(() => productsStore.products)
const categories = computed(() => productsStore.categories)
const pagination = computed(() => productsStore.pagination)

const filteredProducts = computed(() => {
  let filtered = [...products.value]

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(query) ||
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
      case 'well-stocked':
        filtered = filtered.filter(p => p.stock > stockThresholds.well)
        break
      case 'low-stock':
        filtered = filtered.filter(p => p.stock > 0 && p.stock <= stockThresholds.low)
        break
      case 'out-of-stock':
        filtered = filtered.filter(p => p.stock === 0)
        break
    }
  }

  return filtered
})

const totalInventoryValue = computed(() => {
  return products.value.reduce((total, product) => {
    return total + (product.stock * product.price)
  }, 0)
})

const wellStockedCount = computed(() => 
  products.value.filter(p => p.stock > stockThresholds.well).length
)

const lowStockCount = computed(() => 
  products.value.filter(p => p.stock > 0 && p.stock <= stockThresholds.low).length
)

const outOfStockCount = computed(() => 
  products.value.filter(p => p.stock === 0).length
)

// Methods
const getStockStatusText = (stock) => {
  if (stock === 0) return 'Out of Stock'
  if (stock <= stockThresholds.low) return 'Low Stock'
  return 'In Stock'
}

const getStockStatusColor = (stock) => {
  if (stock === 0) return 'bg-red-100 text-red-800'
  if (stock <= stockThresholds.low) return 'bg-yellow-100 text-yellow-800'
  return 'bg-green-100 text-green-800'
}

const formatDate = (date) => {
  return new Date().toLocaleDateString()
}

const updateProductStock = async (product, newStock) => {
  try {
    await productsStore.setStock(product.id, parseInt(newStock))
    // Success feedback could be added here
  } catch (error) {
    console.error('Failed to update stock:', error)
    // Error feedback could be added here
  }
}

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedProducts.value = filteredProducts.value.map(p => p.id)
  } else {
    selectedProducts.value = []
  }
}

const executeBulkUpdate = async () => {
  if (selectedProducts.value.length === 0) return

  try {
    const updates = selectedProducts.value.map(productId => ({
      productId,
      stock: bulkQuantity.value,
      operation: bulkOperation.value
    }))

    await productsStore.bulkUpdateStock(updates)
    showBulkUpdateModal.value = false
    selectedProducts.value = []
    selectAll.value = false
    // Success feedback could be added here
  } catch (error) {
    console.error('Failed to bulk update stock:', error)
    // Error feedback could be added here
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  stockFilter.value = ''
}

const showLowStockProducts = () => {
  stockFilter.value = 'low-stock'
}

const showOutOfStockProducts = () => {
  stockFilter.value = 'out-of-stock'
}

const exportInventory = () => {
  // Generate CSV export
  const csvContent = generateInventoryCSV()
  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `inventory-${new Date().toISOString().split('T')[0]}.csv`
  a.click()
  window.URL.revokeObjectURL(url)
}

const generateInventoryCSV = () => {
  const headers = ['Product Name', 'SKU', 'Category', 'Current Stock', 'Unit Price', 'Stock Value', 'Status']
  const rows = filteredProducts.value.map(product => [
    product.name,
    product.sku,
    product.category?.name || 'N/A',
    product.stock,
    product.price.toFixed(2),
    (product.stock * product.price).toFixed(2),
    getStockStatusText(product.stock)
  ])

  return [headers, ...rows].map(row => row.join(',')).join('\n')
}

const generateReorder = () => {
  // Generate reorder list for low stock and out of stock items
  const reorderItems = products.value.filter(p => p.stock <= stockThresholds.low)
  console.log('Reorder list generated:', reorderItems)
  // In a real app, this would open a reorder modal or navigate to a purchase order page
}

const showStockHistory = (product) => {
  // Show stock movement history
  console.log('Show stock history for:', product.name)
  // In a real app, this would open a modal with stock history
}

const quickRestock = (product) => {
  // Quick restock dialog
  const quantity = prompt(`Enter quantity to add to ${product.name} (current: ${product.stock}):`)
  if (quantity && !isNaN(quantity)) {
    updateProductStock(product, product.stock + parseInt(quantity))
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
