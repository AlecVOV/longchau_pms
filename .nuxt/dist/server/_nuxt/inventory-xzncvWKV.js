import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { u as useProductsStore } from "./products-SeWkcUmE.js";
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
const _sfc_main = {
  __name: "inventory",
  __ssrInlineRender: true,
  setup(__props) {
    const productsStore = useProductsStore();
    const searchQuery = ref("");
    const selectedCategory = ref("");
    const stockFilter = ref("");
    const selectedProducts = ref([]);
    const selectAll = ref(false);
    const showBulkUpdateModal = ref(false);
    const bulkOperation = ref("set");
    const bulkQuantity = ref(0);
    const stockThresholds = {
      well: 20,
      low: 10
    };
    const products = computed(() => productsStore.products);
    const categories = computed(() => productsStore.categories);
    const pagination = computed(() => productsStore.pagination);
    const filteredProducts = computed(() => {
      let filtered = [...products.value];
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (product) => product.name.toLowerCase().includes(query) || product.sku.toLowerCase().includes(query)
        );
      }
      if (selectedCategory.value) {
        filtered = filtered.filter(
          (product) => product.categoryId === parseInt(selectedCategory.value)
        );
      }
      if (stockFilter.value) {
        switch (stockFilter.value) {
          case "well-stocked":
            filtered = filtered.filter((p) => p.stock > stockThresholds.well);
            break;
          case "low-stock":
            filtered = filtered.filter((p) => p.stock > 0 && p.stock <= stockThresholds.low);
            break;
          case "out-of-stock":
            filtered = filtered.filter((p) => p.stock === 0);
            break;
        }
      }
      return filtered;
    });
    const totalInventoryValue = computed(() => {
      return products.value.reduce((total, product) => {
        return total + product.stock * product.price;
      }, 0);
    });
    const wellStockedCount = computed(
      () => products.value.filter((p) => p.stock > stockThresholds.well).length
    );
    const lowStockCount = computed(
      () => products.value.filter((p) => p.stock > 0 && p.stock <= stockThresholds.low).length
    );
    const outOfStockCount = computed(
      () => products.value.filter((p) => p.stock === 0).length
    );
    const getStockStatusText = (stock) => {
      if (stock === 0) return "Out of Stock";
      if (stock <= stockThresholds.low) return "Low Stock";
      return "In Stock";
    };
    const getStockStatusColor = (stock) => {
      if (stock === 0) return "bg-red-100 text-red-800";
      if (stock <= stockThresholds.low) return "bg-yellow-100 text-yellow-800";
      return "bg-green-100 text-green-800";
    };
    const formatDate = (date) => {
      return (/* @__PURE__ */ new Date()).toLocaleDateString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"><div><h1 class="text-3xl font-bold text-gray-900">Inventory Management</h1><p class="text-gray-600 mt-2">Monitor and manage product stock levels</p></div><div class="mt-4 sm:mt-0 flex space-x-4"><button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"> Bulk Update </button><button class="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"> Export CSV </button></div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"><div class="bg-white p-6 rounded-lg shadow-sm border"><div class="flex items-center"><div class="p-2 bg-blue-100 rounded-lg"><svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Total Value</p><p class="text-2xl font-bold text-gray-900">$${ssrInterpolate(unref(totalInventoryValue).toFixed(2))}</p></div></div></div><div class="bg-white p-6 rounded-lg shadow-sm border"><div class="flex items-center"><div class="p-2 bg-green-100 rounded-lg"><svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Well Stocked</p><p class="text-2xl font-bold text-gray-900">${ssrInterpolate(unref(wellStockedCount))}</p></div></div></div><div class="bg-white p-6 rounded-lg shadow-sm border"><div class="flex items-center"><div class="p-2 bg-yellow-100 rounded-lg"><svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Low Stock Alerts</p><p class="text-2xl font-bold text-gray-900">${ssrInterpolate(unref(lowStockCount))}</p></div></div></div><div class="bg-white p-6 rounded-lg shadow-sm border"><div class="flex items-center"><div class="p-2 bg-red-100 rounded-lg"><svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Out of Stock</p><p class="text-2xl font-bold text-gray-900">${ssrInterpolate(unref(outOfStockCount))}</p></div></div></div></div><div class="bg-white rounded-lg shadow-sm border p-6 mb-8"><h2 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><button class="flex items-center p-4 border border-yellow-300 rounded-lg hover:bg-yellow-50 transition-colors"><div class="p-2 bg-yellow-100 rounded-lg mr-3"><svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div><div class="text-left"><div class="font-medium text-gray-900">Review Low Stock</div><div class="text-sm text-gray-500">${ssrInterpolate(unref(lowStockCount))} items need attention</div></div></button><button class="flex items-center p-4 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"><div class="p-2 bg-red-100 rounded-lg mr-3"><svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div><div class="text-left"><div class="font-medium text-gray-900">Restock Items</div><div class="text-sm text-gray-500">${ssrInterpolate(unref(outOfStockCount))} items out of stock</div></div></button><button class="flex items-center p-4 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"><div class="p-2 bg-blue-100 rounded-lg mr-3"><svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg></div><div class="text-left"><div class="font-medium text-gray-900">Generate Reorder List</div><div class="text-sm text-gray-500">Create purchase orders</div></div></button></div></div><div class="bg-white rounded-lg shadow-sm border overflow-hidden"><div class="p-6 border-b border-gray-200"><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Search Products</label><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Search by name or SKU" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Category</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), "") : ssrLooseEqual(unref(selectedCategory), "")) ? " selected" : ""}>All Categories</option><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), category.id) : ssrLooseEqual(unref(selectedCategory), category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Stock Status</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(stockFilter)) ? ssrLooseContain(unref(stockFilter), "") : ssrLooseEqual(unref(stockFilter), "")) ? " selected" : ""}>All Products</option><option value="well-stocked"${ssrIncludeBooleanAttr(Array.isArray(unref(stockFilter)) ? ssrLooseContain(unref(stockFilter), "well-stocked") : ssrLooseEqual(unref(stockFilter), "well-stocked")) ? " selected" : ""}>Well Stocked (&gt;${ssrInterpolate(stockThresholds.well)})</option><option value="low-stock"${ssrIncludeBooleanAttr(Array.isArray(unref(stockFilter)) ? ssrLooseContain(unref(stockFilter), "low-stock") : ssrLooseEqual(unref(stockFilter), "low-stock")) ? " selected" : ""}>Low Stock (1-${ssrInterpolate(stockThresholds.low)})</option><option value="out-of-stock"${ssrIncludeBooleanAttr(Array.isArray(unref(stockFilter)) ? ssrLooseContain(unref(stockFilter), "out-of-stock") : ssrLooseEqual(unref(stockFilter), "out-of-stock")) ? " selected" : ""}>Out of Stock (0)</option></select></div><div class="flex items-end"><button class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"> Clear Filters </button></div></div></div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><input${ssrIncludeBooleanAttr(Array.isArray(unref(selectAll)) ? ssrLooseContain(unref(selectAll), null) : unref(selectAll)) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"></th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Product </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Current Stock </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Status </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Unit Price </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Stock Value </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Last Updated </th><th class="relative px-6 py-3">Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
      ssrRenderList(unref(filteredProducts), (product) => {
        _push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap"><input${ssrIncludeBooleanAttr(Array.isArray(unref(selectedProducts)) ? ssrLooseContain(unref(selectedProducts), product.id) : unref(selectedProducts)) ? " checked" : ""}${ssrRenderAttr("value", product.id)} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"></td><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="flex-shrink-0 h-10 w-10"><img${ssrRenderAttr("src", product.image || "/placeholder-product.jpg")}${ssrRenderAttr("alt", product.name)} class="h-10 w-10 rounded-lg object-cover"></div><div class="ml-4"><div class="text-sm font-medium text-gray-900">${ssrInterpolate(product.name)}</div><div class="text-sm text-gray-500">SKU: ${ssrInterpolate(product.sku)}</div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center space-x-2"><input${ssrRenderAttr("value", product.stock)} type="number" min="0" class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><span class="text-sm text-gray-500">units</span></div></td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([getStockStatusColor(product.stock), "inline-flex px-2 py-1 text-xs font-semibold rounded-full"])}">${ssrInterpolate(getStockStatusText(product.stock))}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> $${ssrInterpolate(product.price.toFixed(2))}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> $${ssrInterpolate((product.stock * product.price).toFixed(2))}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(formatDate(product.lastUpdated))}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><div class="flex space-x-2"><button class="text-blue-600 hover:text-blue-900" title="View History"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button><button class="text-green-600 hover:text-green-900" title="Quick Restock"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"><div class="flex-1 flex justify-between sm:hidden"><button${ssrIncludeBooleanAttr(!unref(pagination).hasPrev) ? " disabled" : ""} class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"> Previous </button><button${ssrIncludeBooleanAttr(!unref(pagination).hasNext) ? " disabled" : ""} class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"> Next </button></div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700"> Showing ${ssrInterpolate((unref(pagination).currentPage - 1) * unref(pagination).itemsPerPage + 1)} to ${ssrInterpolate(Math.min(unref(pagination).currentPage * unref(pagination).itemsPerPage, unref(filteredProducts).length))} of ${ssrInterpolate(unref(filteredProducts).length)} results </p></div><div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"><button${ssrIncludeBooleanAttr(!unref(pagination).hasPrev) ? " disabled" : ""} class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"> Previous </button><button${ssrIncludeBooleanAttr(!unref(pagination).hasNext) ? " disabled" : ""} class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"> Next </button></nav></div></div></div></div></div>`);
      if (unref(showBulkUpdateModal)) {
        _push(`<div class="fixed inset-0 z-50 overflow-y-auto"><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 transition-opacity" aria-hidden="true"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4"> Bulk Stock Update </h3><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2"> Selected Products: ${ssrInterpolate(unref(selectedProducts).length)}</label><p class="text-sm text-gray-500"> Update stock levels for all selected products </p></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Operation</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value="set"${ssrIncludeBooleanAttr(Array.isArray(unref(bulkOperation)) ? ssrLooseContain(unref(bulkOperation), "set") : ssrLooseEqual(unref(bulkOperation), "set")) ? " selected" : ""}>Set Stock Level</option><option value="add"${ssrIncludeBooleanAttr(Array.isArray(unref(bulkOperation)) ? ssrLooseContain(unref(bulkOperation), "add") : ssrLooseEqual(unref(bulkOperation), "add")) ? " selected" : ""}>Add to Current Stock</option><option value="subtract"${ssrIncludeBooleanAttr(Array.isArray(unref(bulkOperation)) ? ssrLooseContain(unref(bulkOperation), "subtract") : ssrLooseEqual(unref(bulkOperation), "subtract")) ? " selected" : ""}>Subtract from Current Stock</option></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2">${ssrInterpolate(unref(bulkOperation) === "set" ? "New Stock Level" : "Quantity")}</label><input${ssrRenderAttr("value", unref(bulkQuantity))} type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div></div></div><div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button${ssrIncludeBooleanAttr(unref(selectedProducts).length === 0) ? " disabled" : ""} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"> Update ${ssrInterpolate(unref(selectedProducts).length)} Products </button><button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancel </button></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/inventory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=inventory-xzncvWKV.js.map
