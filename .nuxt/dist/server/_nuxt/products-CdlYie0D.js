import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { u as useProductsStore } from "./products-SeWkcUmE.js";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
import ImageUploader from "./ImageUploader-CSv1yPKh.js";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/unctx/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/radix3/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/defu/dist/defu.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/ufo/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/klona/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/@unhead/vue/dist/index.mjs";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const productsStore = useProductsStore();
    const notifications = useNotificationsStore();
    const searchQuery = ref("");
    const selectedCategory = ref("");
    const stockFilter = ref("");
    const showAddProductModal = ref(false);
    const showStockUpdateModal = ref(false);
    const selectedProduct = ref(null);
    const stockOperation = ref("set");
    const stockQuantity = ref(0);
    const isAddingProduct = ref(false);
    const newProduct = ref({
      name: "",
      sku: "",
      brand: "",
      categoryId: "",
      price: 0,
      originalPrice: 0,
      stock: 0,
      description: "",
      images: []
    });
    const products = computed(() => productsStore.products);
    const categories = computed(() => productsStore.categories);
    const inStockCount = computed(
      () => products.value.filter((p) => p.stock > 0).length
    );
    const lowStockCount = computed(
      () => products.value.filter((p) => p.stock > 0 && p.stock <= 10).length
    );
    const outOfStockCount = computed(
      () => products.value.filter((p) => p.stock === 0).length
    );
    const filteredProducts = computed(() => {
      let filtered = [...products.value];
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (product) => product.name.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query) || product.sku.toLowerCase().includes(query)
        );
      }
      if (selectedCategory.value) {
        filtered = filtered.filter(
          (product) => product.categoryId === parseInt(selectedCategory.value)
        );
      }
      if (stockFilter.value) {
        switch (stockFilter.value) {
          case "in-stock":
            filtered = filtered.filter((p) => p.stock > 10);
            break;
          case "low-stock":
            filtered = filtered.filter((p) => p.stock > 0 && p.stock <= 10);
            break;
          case "out-of-stock":
            filtered = filtered.filter((p) => p.stock === 0);
            break;
        }
      }
      return filtered;
    });
    const pagination = computed(() => productsStore.pagination);
    const getStatusText = (stock) => {
      if (stock === 0) return "Out of Stock";
      if (stock <= 10) return "Low Stock";
      return "In Stock";
    };
    const handleImageUpload = (images) => {
      notifications.success(`${images.length} image(s) uploaded successfully`);
    };
    const handleImageError = (error) => {
      notifications.error("Image upload failed: " + error.message);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"><div><h1 class="text-3xl font-bold text-gray-900">Product Management</h1><p class="text-gray-600 mt-2">Manage your pharmacy inventory and products</p></div><div class="mt-4 sm:mt-0"><button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"> Add New Product </button></div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"><div class="bg-white p-6 rounded-lg shadow-sm border"><div class="flex items-center"><div class="p-2 bg-blue-100 rounded-lg"><svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Total Products</p><p class="text-2xl font-bold text-gray-900">${ssrInterpolate(unref(products).length)}</p></div></div></div><div class="bg-white p-6 rounded-lg shadow-sm border"><div class="flex items-center"><div class="p-2 bg-green-100 rounded-lg"><svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">In Stock</p><p class="text-2xl font-bold text-gray-900">${ssrInterpolate(unref(inStockCount))}</p></div></div></div><div class="bg-white p-6 rounded-lg shadow-sm border"><div class="flex items-center"><div class="p-2 bg-yellow-100 rounded-lg"><svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Low Stock</p><p class="text-2xl font-bold text-gray-900">${ssrInterpolate(unref(lowStockCount))}</p></div></div></div><div class="bg-white p-6 rounded-lg shadow-sm border"><div class="flex items-center"><div class="p-2 bg-red-100 rounded-lg"><svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Out of Stock</p><p class="text-2xl font-bold text-gray-900">${ssrInterpolate(unref(outOfStockCount))}</p></div></div></div></div><div class="bg-white p-6 rounded-lg shadow-sm border mb-8"><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Search Products</label><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Search by name, brand, or SKU" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Category</label><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), "") : ssrLooseEqual(unref(selectedCategory), "")) ? " selected" : ""}>All Categories</option><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), category.id) : ssrLooseEqual(unref(selectedCategory), category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Stock Status</label><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(stockFilter)) ? ssrLooseContain(unref(stockFilter), "") : ssrLooseEqual(unref(stockFilter), "")) ? " selected" : ""}>All Products</option><option value="in-stock"${ssrIncludeBooleanAttr(Array.isArray(unref(stockFilter)) ? ssrLooseContain(unref(stockFilter), "in-stock") : ssrLooseEqual(unref(stockFilter), "in-stock")) ? " selected" : ""}>In Stock</option><option value="low-stock"${ssrIncludeBooleanAttr(Array.isArray(unref(stockFilter)) ? ssrLooseContain(unref(stockFilter), "low-stock") : ssrLooseEqual(unref(stockFilter), "low-stock")) ? " selected" : ""}>Low Stock</option><option value="out-of-stock"${ssrIncludeBooleanAttr(Array.isArray(unref(stockFilter)) ? ssrLooseContain(unref(stockFilter), "out-of-stock") : ssrLooseEqual(unref(stockFilter), "out-of-stock")) ? " selected" : ""}>Out of Stock</option></select></div><div class="flex items-end"><button class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"> Clear Filters </button></div></div></div><div class="bg-white rounded-lg shadow-sm border overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Product </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Category </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Price </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Stock </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Status </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Actions </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
      ssrRenderList(unref(filteredProducts), (product) => {
        var _a2;
        _push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="flex-shrink-0 h-12 w-12"><img${ssrRenderAttr("src", product.image || "/placeholder-product.jpg")}${ssrRenderAttr("alt", product.name)} class="h-12 w-12 rounded-lg object-cover"></div><div class="ml-4"><div class="text-sm font-medium text-gray-900">${ssrInterpolate(product.name)}</div><div class="text-sm text-gray-500">SKU: ${ssrInterpolate(product.sku)}</div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">${ssrInterpolate((_a2 = product.category) == null ? void 0 : _a2.name)}</div><div class="text-sm text-gray-500">${ssrInterpolate(product.brand)}</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">$${ssrInterpolate(product.price.toFixed(2))}</div>`);
        if (product.originalPrice && product.originalPrice > product.price) {
          _push(`<div class="text-sm text-gray-500 line-through"> $${ssrInterpolate(product.originalPrice.toFixed(2))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center space-x-2"><input${ssrRenderAttr("value", product.stock)} type="number" min="0" class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><button class="text-blue-600 hover:text-blue-800 text-sm"> Edit </button></div></td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([{
          "bg-green-100 text-green-800": product.stock > 10,
          "bg-yellow-100 text-yellow-800": product.stock > 0 && product.stock <= 10,
          "bg-red-100 text-red-800": product.stock === 0
        }, "inline-flex px-2 py-1 text-xs font-semibold rounded-full"])}">${ssrInterpolate(getStatusText(product.stock))}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium"><div class="flex space-x-2"><button class="text-blue-600 hover:text-blue-900"> Edit </button><button class="text-red-600 hover:text-red-900"> Delete </button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"><div class="flex-1 flex justify-between sm:hidden"><button${ssrIncludeBooleanAttr(!unref(pagination).hasPrev) ? " disabled" : ""} class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"> Previous </button><button${ssrIncludeBooleanAttr(!unref(pagination).hasNext) ? " disabled" : ""} class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"> Next </button></div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700"> Showing <span class="font-medium">${ssrInterpolate((unref(pagination).currentPage - 1) * unref(pagination).itemsPerPage + 1)}</span> to <span class="font-medium">${ssrInterpolate(Math.min(unref(pagination).currentPage * unref(pagination).itemsPerPage, unref(filteredProducts).length))}</span> of <span class="font-medium">${ssrInterpolate(unref(filteredProducts).length)}</span> results </p></div><div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination"><button${ssrIncludeBooleanAttr(!unref(pagination).hasPrev) ? " disabled" : ""} class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"> Previous </button><button${ssrIncludeBooleanAttr(!unref(pagination).hasNext) ? " disabled" : ""} class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"> Next </button></nav></div></div></div></div></div>`);
      if (unref(showAddProductModal)) {
        _push(`<div class="fixed inset-0 z-50 overflow-y-auto"><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 transition-opacity" aria-hidden="true"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"><form class="bg-white"><div class="px-6 py-4 border-b border-gray-200"><h3 class="text-lg leading-6 font-medium text-gray-900">Add New Product</h3></div><div class="px-6 py-4 max-h-96 overflow-y-auto"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-4"><h4 class="font-medium text-gray-900">Basic Information</h4><div><label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label><input${ssrRenderAttr("value", unref(newProduct).name)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter product name"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">SKU</label><input${ssrRenderAttr("value", unref(newProduct).sku)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Product SKU"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Brand</label><input${ssrRenderAttr("value", unref(newProduct).brand)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Brand name"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Category</label><select required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(newProduct).categoryId) ? ssrLooseContain(unref(newProduct).categoryId, "") : ssrLooseEqual(unref(newProduct).categoryId, "")) ? " selected" : ""}>Select a category</option><!--[-->`);
        ssrRenderList(unref(categories), (category) => {
          _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(newProduct).categoryId) ? ssrLooseContain(unref(newProduct).categoryId, category.id) : ssrLooseEqual(unref(newProduct).categoryId, category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
        });
        _push(`<!--]--></select></div><div class="grid grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-1">Price</label><input${ssrRenderAttr("value", unref(newProduct).price)} type="number" step="0.01" min="0" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="0.00"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Original Price</label><input${ssrRenderAttr("value", unref(newProduct).originalPrice)} type="number" step="0.01" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="0.00"></div></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label><input${ssrRenderAttr("value", unref(newProduct).stock)} type="number" min="0" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="0"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Product description">${ssrInterpolate(unref(newProduct).description)}</textarea></div></div><div class="space-y-4"><h4 class="font-medium text-gray-900">Product Images</h4>`);
        _push(ssrRenderComponent(ImageUploader, {
          modelValue: unref(newProduct).images,
          "onUpdate:modelValue": ($event) => unref(newProduct).images = $event,
          "max-images": 5,
          "max-size-mb": 2,
          "show-image-details": true,
          onUploadComplete: handleImageUpload,
          onUploadError: handleImageError
        }, null, _parent));
        _push(`</div></div></div><div class="bg-gray-50 px-6 py-3 flex flex-row-reverse space-x-3 space-x-reverse"><button type="submit"${ssrIncludeBooleanAttr(unref(isAddingProduct)) ? " disabled" : ""} class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">`);
        if (unref(isAddingProduct)) {
          _push(`<span class="flex items-center"><div class="animate-spin -ml-1 mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div> Adding... </span>`);
        } else {
          _push(`<span>Add Product</span>`);
        }
        _push(`</button><button type="button" class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"> Cancel </button></div></form></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showStockUpdateModal)) {
        _push(`<div class="fixed inset-0 z-50 overflow-y-auto"><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 transition-opacity" aria-hidden="true"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:items-start"><div class="mt-3 text-center sm:mt-0 sm:text-left w-full"><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4"> Update Stock - ${ssrInterpolate((_a = unref(selectedProduct)) == null ? void 0 : _a.name)}</h3><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Current Stock</label><p class="text-lg font-semibold">${ssrInterpolate((_b = unref(selectedProduct)) == null ? void 0 : _b.stock)} units</p></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Operation</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value="set"${ssrIncludeBooleanAttr(Array.isArray(unref(stockOperation)) ? ssrLooseContain(unref(stockOperation), "set") : ssrLooseEqual(unref(stockOperation), "set")) ? " selected" : ""}>Set Stock Level</option><option value="add"${ssrIncludeBooleanAttr(Array.isArray(unref(stockOperation)) ? ssrLooseContain(unref(stockOperation), "add") : ssrLooseEqual(unref(stockOperation), "add")) ? " selected" : ""}>Add Stock</option><option value="subtract"${ssrIncludeBooleanAttr(Array.isArray(unref(stockOperation)) ? ssrLooseContain(unref(stockOperation), "subtract") : ssrLooseEqual(unref(stockOperation), "subtract")) ? " selected" : ""}>Remove Stock</option></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2">${ssrInterpolate(unref(stockOperation) === "set" ? "New Stock Level" : "Quantity")}</label><input${ssrRenderAttr("value", unref(stockQuantity))} type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Update Stock </button><button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancel </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=products-CdlYie0D.js.map
