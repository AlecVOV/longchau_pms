<template>
  <div class="py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Category Management</h1>
          <p class="text-gray-600 mt-2">Manage product categories and organization</p>
        </div>
        <div class="mt-4 sm:mt-0 space-x-4">
          <button
            @click="showAddCategoryModal = true"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add New Category
          </button>
        </div>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
        >
          <div class="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
            <img
              :src="category.image || '/placeholder-category.jpg'"
              :alt="category.name"
              class="w-full h-full object-cover"
            >
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ category.name }}</h3>
                <p class="text-sm text-gray-600">{{ category.description }}</p>
              </div>
              <div class="flex space-x-2">
                <button
                  @click="editCategory(category)"
                  class="text-blue-600 hover:text-blue-800 p-1"
                  title="Edit Category"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button
                  @click="deleteCategory(category)"
                  class="text-red-600 hover:text-red-800 p-1"
                  title="Delete Category"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ category.productCount || 0 }} products</span>
              <NuxtLink 
                :to="`/category/${category.slug}`"
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Products →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Category Statistics -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Category Statistics</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Products
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  In Stock
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Low Stock
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Out of Stock
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="category in categories" :key="category.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="category.image || '/placeholder-category.jpg'"
                        :alt="category.name"
                        class="h-10 w-10 rounded-lg object-cover"
                      >
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ category.name }}</div>
                      <div class="text-sm text-gray-500">{{ category.slug }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ getCategoryStats(category.id).totalProducts }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {{ getCategoryStats(category.id).inStock }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {{ getCategoryStats(category.id).lowStock }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {{ getCategoryStats(category.id).outOfStock }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                    <NuxtLink
                      :to="`/admin/products?category=${category.id}`"
                      class="text-blue-600 hover:text-blue-900"
                    >
                      Manage Products
                    </NuxtLink>
                    <button
                      @click="editCategory(category)"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Add/Edit Category Modal -->
    <div v-if="showAddCategoryModal || showEditCategoryModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75" @click="closeModal"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form @submit.prevent="saveCategory">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                    {{ showEditCategoryModal ? 'Edit Category' : 'Add New Category' }}
                  </h3>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                      <input
                        v-model="categoryForm.name"
                        type="text"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter category name"
                      >
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                      <input
                        v-model="categoryForm.slug"
                        type="text"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="category-slug"
                      >
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        v-model="categoryForm.description"
                        rows="3"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter category description"
                      ></textarea>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                      <input
                        v-model="categoryForm.image"
                        type="url"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com/image.jpg"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {{ showEditCategoryModal ? 'Update Category' : 'Add Category' }}
              </button>
              <button
                type="button"
                @click="closeModal"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
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
const showAddCategoryModal = ref(false)
const showEditCategoryModal = ref(false)
const selectedCategory = ref(null)

const categoryForm = ref({
  name: '',
  slug: '',
  description: '',
  image: ''
})

// Computed properties
const categories = computed(() => productsStore.categories)
const products = computed(() => productsStore.products)

// Methods
const getCategoryStats = (categoryId) => {
  const categoryProducts = products.value.filter(p => p.categoryId === categoryId)
  
  return {
    totalProducts: categoryProducts.length,
    inStock: categoryProducts.filter(p => p.stock > 10).length,
    lowStock: categoryProducts.filter(p => p.stock > 0 && p.stock <= 10).length,
    outOfStock: categoryProducts.filter(p => p.stock === 0).length
  }
}

const editCategory = (category) => {
  selectedCategory.value = category
  categoryForm.value = {
    name: category.name,
    slug: category.slug,
    description: category.description || '',
    image: category.image || ''
  }
  showEditCategoryModal.value = true
}

const closeModal = () => {
  showAddCategoryModal.value = false
  showEditCategoryModal.value = false
  selectedCategory.value = null
  categoryForm.value = {
    name: '',
    slug: '',
    description: '',
    image: ''
  }
}

const saveCategory = async () => {
  try {
    if (showEditCategoryModal.value && selectedCategory.value) {
      await productsStore.updateCategory(selectedCategory.value.id, categoryForm.value)
    } else {
      await productsStore.addCategory(categoryForm.value)
    }
    closeModal()
    // Success feedback could be added here
  } catch (error) {
    console.error('Failed to save category:', error)
    // Error feedback could be added here
  }
}

const deleteCategory = async (category) => {
  const stats = getCategoryStats(category.id)
  
  if (stats.totalProducts > 0) {
    if (!confirm(`This category contains ${stats.totalProducts} products. Are you sure you want to delete it? The products will need to be reassigned to other categories.`)) {
      return
    }
  } else if (!confirm(`Are you sure you want to delete the category "${category.name}"?`)) {
    return
  }

  try {
    await productsStore.deleteCategory(category.id)
    // Success feedback could be added here
  } catch (error) {
    console.error('Failed to delete category:', error)
    // Error feedback could be added here
  }
}

// Auto-generate slug from name
watch(() => categoryForm.value.name, (newName) => {
  if (newName && !showEditCategoryModal.value) {
    categoryForm.value.slug = newName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
})

// Load data on mount
onMounted(async () => {
  await Promise.all([
    productsStore.fetchCategories(),
    productsStore.fetchProducts()
  ])
})
</script>
