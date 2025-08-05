import { d as defineStore } from "../server.mjs";
const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    categories: [],
    currentProduct: null,
    searchResults: [],
    loading: false,
    filters: {
      category: null,
      priceRange: { min: 0, max: 1e3 },
      brand: null,
      inStock: true
    },
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 12
    }
  }),
  getters: {
    getProductById: (state) => {
      return (id) => state.products.find((product) => product.id === id);
    },
    getProductsByCategory: (state) => {
      return (categoryId) => state.products.filter((product) => product.categoryId === categoryId);
    },
    getFeaturedProducts: (state) => {
      return state.products.filter((product) => product.featured);
    },
    getDiscountedProducts: (state) => {
      return state.products.filter((product) => product.discount > 0);
    },
    getInStockProducts: (state) => {
      return state.products.filter((product) => product.stock > 0);
    },
    getCategoryById: (state) => {
      return (id) => state.categories.find((category) => category.id === id);
    },
    getFilteredProducts: (state) => {
      let filtered = [...state.products];
      if (state.filters.category) {
        filtered = filtered.filter((product) => product.categoryId === state.filters.category);
      }
      if (state.filters.brand) {
        filtered = filtered.filter((product) => product.brand === state.filters.brand);
      }
      if (state.filters.inStock) {
        filtered = filtered.filter((product) => product.stock > 0);
      }
      filtered = filtered.filter(
        (product) => product.price >= state.filters.priceRange.min && product.price <= state.filters.priceRange.max
      );
      return filtered;
    }
  },
  actions: {
    async fetchProducts(params = {}) {
      var _a, _b, _c, _d;
      this.loading = true;
      try {
        const query = new URLSearchParams();
        query.append("page", params.page || this.pagination.currentPage);
        query.append("limit", params.limit || this.pagination.itemsPerPage);
        if (params.category || this.filters.category) {
          query.append("category", params.category || this.filters.category);
        }
        if (params.search) {
          query.append("search", params.search);
        }
        if (params.minPrice !== void 0 || this.filters.priceRange.min > 0) {
          query.append("minPrice", params.minPrice || this.filters.priceRange.min);
        }
        if (params.maxPrice !== void 0 || this.filters.priceRange.max < 1e3) {
          query.append("maxPrice", params.maxPrice || this.filters.priceRange.max);
        }
        if (params.inStock !== void 0) {
          query.append("inStock", params.inStock);
        } else if (this.filters.inStock) {
          query.append("inStock", "true");
        }
        if (params.sortBy) {
          query.append("sortBy", params.sortBy);
        }
        if (params.sortOrder) {
          query.append("sortOrder", params.sortOrder);
        }
        const response = await $fetch(`/api/products?${query.toString()}`);
        this.products = response.products || response.data || [];
        this.pagination = {
          currentPage: ((_a = response.pagination) == null ? void 0 : _a.page) || 1,
          totalPages: ((_b = response.pagination) == null ? void 0 : _b.totalPages) || 1,
          totalItems: ((_c = response.pagination) == null ? void 0 : _c.total) || this.products.length,
          itemsPerPage: ((_d = response.pagination) == null ? void 0 : _d.limit) || this.pagination.itemsPerPage
        };
      } catch (error) {
        console.error("Error fetching products:", error);
        this.products = [];
      } finally {
        this.loading = false;
      }
    },
    async fetchProductById(id) {
      this.loading = true;
      try {
        const response = await $fetch(`/api/products/${id}`);
        this.currentProduct = response.product || response;
        return this.currentProduct;
      } catch (error) {
        console.error("Error fetching product:", error);
        this.currentProduct = null;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async fetchCategories() {
      try {
        const response = await $fetch("/api/categories");
        this.categories = response.categories || response.data || [];
      } catch (error) {
        console.error("Error fetching categories:", error);
        this.categories = [];
      }
    },
    async searchProducts(query, filters = {}) {
      var _a, _b, _c, _d;
      this.loading = true;
      try {
        const searchParams = new URLSearchParams();
        searchParams.append("q", query);
        searchParams.append("page", filters.page || this.pagination.currentPage);
        searchParams.append("limit", filters.limit || this.pagination.itemsPerPage);
        if (filters.category) {
          searchParams.append("category", filters.category);
        }
        if (filters.minPrice !== void 0) {
          searchParams.append("minPrice", filters.minPrice);
        }
        if (filters.maxPrice !== void 0) {
          searchParams.append("maxPrice", filters.maxPrice);
        }
        if (filters.sortBy) {
          searchParams.append("sortBy", filters.sortBy);
        }
        if (filters.sortOrder) {
          searchParams.append("sortOrder", filters.sortOrder);
        }
        const response = await $fetch(`/api/products/search?${searchParams.toString()}`);
        this.searchResults = response.results || response.data || [];
        this.pagination = {
          currentPage: ((_a = response.pagination) == null ? void 0 : _a.page) || 1,
          totalPages: ((_b = response.pagination) == null ? void 0 : _b.totalPages) || 1,
          totalItems: ((_c = response.pagination) == null ? void 0 : _c.totalItems) || this.searchResults.length,
          itemsPerPage: ((_d = response.pagination) == null ? void 0 : _d.limit) || this.pagination.itemsPerPage
        };
        return this.searchResults;
      } catch (error) {
        console.error("Error searching products:", error);
        this.searchResults = [];
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async fetchProductsByCategory(categoryId) {
      this.loading = true;
      try {
        const response = await $fetch(`/api/categories/${categoryId}/products`, {
          params: {
            page: this.pagination.currentPage,
            limit: this.pagination.itemsPerPage
          }
        });
        this.products = response.products || response.data || [];
        this.pagination = {
          ...this.pagination,
          totalPages: response.totalPages || 1,
          totalItems: response.totalItems || this.products.length
        };
      } catch (error) {
        console.error("Error fetching products by category:", error);
        this.products = [];
      } finally {
        this.loading = false;
      }
    },
    setFilters(newFilters) {
      this.filters = { ...this.filters, ...newFilters };
      this.pagination.currentPage = 1;
    },
    clearFilters() {
      this.filters = {
        category: null,
        priceRange: { min: 0, max: 1e3 },
        brand: null,
        inStock: true
      };
      this.pagination.currentPage = 1;
    },
    setCurrentPage(page) {
      this.pagination.currentPage = page;
    },
    addToRecentlyViewed(product) {
    },
    getRecentlyViewed() {
      return [];
    },
    // Inventory Management Functions
    async getInventoryStatus(productId) {
      try {
        const response = await $fetch(`/api/products/${productId}/inventory`);
        return response;
      } catch (error) {
        console.error("Error fetching inventory status:", error);
        throw error;
      }
    },
    async updateInventory(productId, stock, operation = "set") {
      try {
        const response = await $fetch(`/api/products/${productId}/inventory`, {
          method: "PUT",
          body: { stock, operation }
        });
        const product = this.products.find((p) => p.id === productId);
        if (product) {
          product.stock = response.newStock;
        }
        if (this.currentProduct && this.currentProduct.id === productId) {
          this.currentProduct.stock = response.newStock;
        }
        return response;
      } catch (error) {
        console.error("Error updating inventory:", error);
        throw error;
      }
    },
    async addStock(productId, quantity) {
      return await this.updateInventory(productId, quantity, "add");
    },
    async removeStock(productId, quantity) {
      return await this.updateInventory(productId, quantity, "subtract");
    },
    async setStock(productId, quantity) {
      return await this.updateInventory(productId, quantity, "set");
    },
    // Enhanced product management functions
    async addProduct(productData) {
      try {
        const response = await $fetch("/api/products", {
          method: "POST",
          body: productData
        });
        this.products.unshift(response.product);
        return response;
      } catch (error) {
        console.error("Error adding product:", error);
        throw error;
      }
    },
    async updateProduct(productId, productData) {
      try {
        const response = await $fetch(`/api/products/${productId}`, {
          method: "PUT",
          body: productData
        });
        const index = this.products.findIndex((p) => p.id === productId);
        if (index !== -1) {
          this.products[index] = response.product;
        }
        if (this.currentProduct && this.currentProduct.id === productId) {
          this.currentProduct = response.product;
        }
        return response;
      } catch (error) {
        console.error("Error updating product:", error);
        throw error;
      }
    },
    async deleteProduct(productId) {
      try {
        await $fetch(`/api/products/${productId}`, {
          method: "DELETE"
        });
        this.products = this.products.filter((p) => p.id !== productId);
        if (this.currentProduct && this.currentProduct.id === productId) {
          this.currentProduct = null;
        }
        return { success: true };
      } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
      }
    },
    // Category management functions
    async addCategory(categoryData) {
      try {
        const response = await $fetch("/api/categories", {
          method: "POST",
          body: categoryData
        });
        this.categories.push(response.category);
        return response;
      } catch (error) {
        console.error("Error adding category:", error);
        throw error;
      }
    },
    async updateCategory(categoryId, categoryData) {
      try {
        const response = await $fetch(`/api/categories/${categoryId}`, {
          method: "PUT",
          body: categoryData
        });
        const index = this.categories.findIndex((c) => c.id === categoryId);
        if (index !== -1) {
          this.categories[index] = response.category;
        }
        return response;
      } catch (error) {
        console.error("Error updating category:", error);
        throw error;
      }
    },
    async deleteCategory(categoryId) {
      try {
        await $fetch(`/api/categories/${categoryId}`, {
          method: "DELETE"
        });
        this.categories = this.categories.filter((c) => c.id !== categoryId);
        return { success: true };
      } catch (error) {
        console.error("Error deleting category:", error);
        throw error;
      }
    },
    // Advanced filtering and searching
    async fetchProductsWithAdvancedFilters(filters) {
      this.loading = true;
      try {
        const response = await $fetch("/api/products/advanced-search", {
          params: {
            ...filters,
            page: this.pagination.currentPage,
            limit: this.pagination.itemsPerPage
          }
        });
        this.products = response.products || [];
        this.pagination = {
          ...this.pagination,
          totalPages: response.totalPages || 1,
          totalItems: response.totalItems || this.products.length
        };
        return response;
      } catch (error) {
        console.error("Error fetching products with advanced filters:", error);
        this.products = [];
        throw error;
      } finally {
        this.loading = false;
      }
    },
    // Bulk operations
    async bulkUpdateStock(updates) {
      try {
        const response = await $fetch("/api/products/bulk-inventory", {
          method: "PUT",
          body: { updates }
        });
        updates.forEach((update) => {
          const product = this.products.find((p) => p.id === update.productId);
          if (product && response.results[update.productId]) {
            product.stock = response.results[update.productId].newStock;
          }
        });
        return response;
      } catch (error) {
        console.error("Error bulk updating stock:", error);
        throw error;
      }
    },
    // Low stock alerts
    getLowStockProducts(threshold = 10) {
      return this.products.filter(
        (product) => product.stock > 0 && product.stock <= threshold
      );
    },
    getOutOfStockProducts() {
      return this.products.filter((product) => product.stock === 0);
    }
  }
});
export {
  useProductsStore as u
};
//# sourceMappingURL=products-SeWkcUmE.js.map
