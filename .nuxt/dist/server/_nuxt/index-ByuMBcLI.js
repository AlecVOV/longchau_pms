import { c as useRoute, u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import _sfc_main$1 from "./ProductCard-0zuHsmiv.js";
import __nuxt_component_2 from "./ProductListItem-BJi2mMRf.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { u as useProductsStore } from "./products-SeWkcUmE.js";
import { useCartStore } from "./cart-Cj2Ys50X.js";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
import _sfc_main$2 from "./ProductQuickView-DoaVLY8v.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/unctx/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/radix3/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/defu/dist/defu.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/ufo/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/klona/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/@unhead/vue/dist/index.mjs";
const itemsPerPage = 12;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productsStore = useProductsStore();
    const cartStore = useCartStore();
    const notifications = useNotificationsStore();
    const route = useRoute();
    const loading = ref(false);
    const searchQuery = ref("");
    const selectedCategory = ref("");
    const selectedBrand = ref("");
    const sortBy = ref("name_asc");
    const viewMode = ref("grid");
    const showAdvancedFilters = ref(false);
    const inStockOnly = ref(false);
    const prescriptionOnly = ref(false);
    const priceRange = ref({ min: "", max: "" });
    const currentPage = ref(1);
    const quickViewOpen = ref(false);
    const selectedProduct = ref(null);
    const products = computed(() => {
      if (searchQuery.value.trim()) {
        return productsStore.searchResults || [];
      }
      return productsStore.getFilteredProducts;
    });
    const categories = computed(() => productsStore.categories);
    const brands = computed(() => {
      const allBrands = productsStore.products.map((product) => product.brand).filter(Boolean);
      return [...new Set(allBrands)].sort();
    });
    const totalProducts = computed(() => {
      var _a;
      if (searchQuery.value.trim()) {
        return ((_a = productsStore.searchResults) == null ? void 0 : _a.length) || 0;
      }
      return productsStore.pagination.totalItems;
    });
    const totalPages = computed(() => Math.ceil(totalProducts.value / itemsPerPage));
    const pageTitle = computed(() => {
      if (selectedCategory.value) {
        const category = categories.value.find((cat) => cat.id === selectedCategory.value);
        return (category == null ? void 0 : category.name) || "Products";
      }
      return searchQuery.value ? `Search results for "${searchQuery.value}"` : "All Products";
    });
    const visiblePages = computed(() => {
      const pages = [];
      const start = Math.max(1, currentPage.value - 2);
      const end = Math.min(totalPages.value, currentPage.value + 2);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    });
    const applyFilters = async () => {
      loading.value = true;
      const filters = {
        category: selectedCategory.value,
        brand: selectedBrand.value,
        priceRange: {
          min: priceRange.value.min ? parseFloat(priceRange.value.min) : 0,
          max: priceRange.value.max ? parseFloat(priceRange.value.max) : 1e4
        },
        inStock: inStockOnly.value,
        prescriptionOnly: prescriptionOnly.value,
        sortBy: sortBy.value,
        page: currentPage.value,
        limit: itemsPerPage
      };
      productsStore.setFilters(filters);
      try {
        if (searchQuery.value.trim()) {
          await productsStore.searchProducts(searchQuery.value, filters);
        } else {
          productsStore.searchResults = [];
          await productsStore.fetchProducts(filters);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        loading.value = false;
      }
    };
    const addToCart = (product, quantity = 1) => {
      cartStore.addItem(product, quantity);
      notifications.success(`${product.name} added to cart!`);
    };
    const addToWishlist = (product) => {
      notifications.success(`${product.name} added to wishlist!`, {
        duration: 3e3
      });
      console.log("Added to wishlist:", product.name);
    };
    const openQuickView = (product) => {
      selectedProduct.value = product;
      quickViewOpen.value = true;
    };
    const closeQuickView = () => {
      quickViewOpen.value = false;
      selectedProduct.value = null;
    };
    const handleQuickViewAddToCart = ({ product, quantity }) => {
      cartStore.addItem(product, quantity);
      notifications.success(`${product.name} (${quantity}x) added to cart!`);
    };
    watch(() => route.query, (newQuery) => {
      if (newQuery.search !== searchQuery.value) {
        searchQuery.value = newQuery.search || "";
        applyFilters();
      }
    });
    useHead({
      title: () => `${pageTitle.value} - Long Châu`,
      meta: [
        {
          name: "description",
          content: () => `Browse ${pageTitle.value.toLowerCase()} at Long Châu. Find quality medications and health products with fast delivery.`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ProductCard = _sfc_main$1;
      const _component_ProductListItem = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))} data-v-ae8d0c03><div class="container mx-auto px-4" data-v-ae8d0c03><div class="mb-8" data-v-ae8d0c03><h1 class="text-3xl font-bold text-gray-900 mb-4" data-v-ae8d0c03>${ssrInterpolate(unref(pageTitle))}</h1><nav class="flex" aria-label="Breadcrumb" data-v-ae8d0c03><ol class="inline-flex items-center space-x-1 md:space-x-3" data-v-ae8d0c03><li class="inline-flex items-center" data-v-ae8d0c03>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-500 hover:text-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-ae8d0c03><div class="flex items-center" data-v-ae8d0c03><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" data-v-ae8d0c03><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-ae8d0c03></path></svg><span class="ml-1 text-gray-500 md:ml-2" data-v-ae8d0c03>${ssrInterpolate(unref(pageTitle))}</span></div></li></ol></nav></div><div class="bg-white rounded-lg shadow-sm p-6 mb-8" data-v-ae8d0c03><div class="grid grid-cols-1 md:grid-cols-4 gap-4" data-v-ae8d0c03><div class="md:col-span-2" data-v-ae8d0c03><div class="relative" data-v-ae8d0c03><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Search products..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-v-ae8d0c03><svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-ae8d0c03><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-ae8d0c03></path></svg></div></div><div data-v-ae8d0c03><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-v-ae8d0c03><option value="" data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), "") : ssrLooseEqual(unref(selectedCategory), "")) ? " selected" : ""}>All Categories</option><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)} data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), category.id) : ssrLooseEqual(unref(selectedCategory), category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select></div><div data-v-ae8d0c03><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-v-ae8d0c03><option value="name_asc" data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "name_asc") : ssrLooseEqual(unref(sortBy), "name_asc")) ? " selected" : ""}>Name A-Z</option><option value="name_desc" data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "name_desc") : ssrLooseEqual(unref(sortBy), "name_desc")) ? " selected" : ""}>Name Z-A</option><option value="price_asc" data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price_asc") : ssrLooseEqual(unref(sortBy), "price_asc")) ? " selected" : ""}>Price Low to High</option><option value="price_desc" data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price_desc") : ssrLooseEqual(unref(sortBy), "price_desc")) ? " selected" : ""}>Price High to Low</option><option value="newest" data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "newest") : ssrLooseEqual(unref(sortBy), "newest")) ? " selected" : ""}>Newest First</option><option value="popular" data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "popular") : ssrLooseEqual(unref(sortBy), "popular")) ? " selected" : ""}>Most Popular</option></select></div></div><div class="mt-4 pt-4 border-t border-gray-200" data-v-ae8d0c03><button class="flex items-center text-blue-600 hover:text-blue-700" data-v-ae8d0c03><span data-v-ae8d0c03>Advanced Filters</span><svg class="${ssrRenderClass([{ "rotate-180": unref(showAdvancedFilters) }, "ml-2 h-4 w-4 transform transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-ae8d0c03><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-ae8d0c03></path></svg></button><div style="${ssrRenderStyle(unref(showAdvancedFilters) ? null : { display: "none" })}" class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4" data-v-ae8d0c03><div data-v-ae8d0c03><label class="block text-sm font-medium text-gray-700 mb-2" data-v-ae8d0c03>Price Range</label><div class="flex items-center space-x-2" data-v-ae8d0c03><input${ssrRenderAttr("value", unref(priceRange).min)} type="number" placeholder="Min" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" data-v-ae8d0c03><span class="text-gray-500" data-v-ae8d0c03>-</span><input${ssrRenderAttr("value", unref(priceRange).max)} type="number" placeholder="Max" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" data-v-ae8d0c03></div></div><div data-v-ae8d0c03><label class="block text-sm font-medium text-gray-700 mb-2" data-v-ae8d0c03>Brand</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" data-v-ae8d0c03><option value="" data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(selectedBrand)) ? ssrLooseContain(unref(selectedBrand), "") : ssrLooseEqual(unref(selectedBrand), "")) ? " selected" : ""}>All Brands</option><!--[-->`);
      ssrRenderList(unref(brands), (brand) => {
        _push(`<option${ssrRenderAttr("value", brand)} data-v-ae8d0c03${ssrIncludeBooleanAttr(Array.isArray(unref(selectedBrand)) ? ssrLooseContain(unref(selectedBrand), brand) : ssrLooseEqual(unref(selectedBrand), brand)) ? " selected" : ""}>${ssrInterpolate(brand)}</option>`);
      });
      _push(`<!--]--></select></div><div data-v-ae8d0c03><label class="block text-sm font-medium text-gray-700 mb-2" data-v-ae8d0c03>Availability</label><div class="space-y-2" data-v-ae8d0c03><label class="flex items-center" data-v-ae8d0c03><input${ssrIncludeBooleanAttr(Array.isArray(unref(inStockOnly)) ? ssrLooseContain(unref(inStockOnly), null) : unref(inStockOnly)) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" data-v-ae8d0c03><span class="ml-2 text-sm text-gray-700" data-v-ae8d0c03>In Stock Only</span></label><label class="flex items-center" data-v-ae8d0c03><input${ssrIncludeBooleanAttr(Array.isArray(unref(prescriptionOnly)) ? ssrLooseContain(unref(prescriptionOnly), null) : unref(prescriptionOnly)) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" data-v-ae8d0c03><span class="ml-2 text-sm text-gray-700" data-v-ae8d0c03>Prescription Required</span></label></div></div></div><div class="mt-4 flex space-x-2" data-v-ae8d0c03><button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" data-v-ae8d0c03> Apply Filters </button><button class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400" data-v-ae8d0c03> Clear All </button></div></div></div><div class="flex justify-between items-center mb-6" data-v-ae8d0c03><div class="text-gray-600" data-v-ae8d0c03> Showing ${ssrInterpolate(unref(products).length)} of ${ssrInterpolate(unref(totalProducts))} products </div><div class="flex items-center space-x-2" data-v-ae8d0c03><span class="text-sm text-gray-600" data-v-ae8d0c03>View:</span><button class="${ssrRenderClass([{ "bg-blue-600 text-white": unref(viewMode) === "grid", "bg-gray-200 text-gray-700": unref(viewMode) !== "grid" }, "p-2 rounded-lg"])}" data-v-ae8d0c03><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-v-ae8d0c03><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-v-ae8d0c03></path></svg></button><button class="${ssrRenderClass([{ "bg-blue-600 text-white": unref(viewMode) === "list", "bg-gray-200 text-gray-700": unref(viewMode) !== "list" }, "p-2 rounded-lg"])}" data-v-ae8d0c03><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-v-ae8d0c03><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-ae8d0c03></path></svg></button></div></div>`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center items-center py-12" data-v-ae8d0c03><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" data-v-ae8d0c03></div></div>`);
      } else if (unref(products).length > 0) {
        _push(`<div data-v-ae8d0c03>`);
        if (unref(viewMode) === "grid") {
          _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-v-ae8d0c03><!--[-->`);
          ssrRenderList(unref(products), (product) => {
            _push(ssrRenderComponent(_component_ProductCard, {
              key: product.id,
              product,
              onAddToCart: addToCart,
              onQuickView: openQuickView,
              onAddToWishlist: addToWishlist
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="space-y-4" data-v-ae8d0c03><!--[-->`);
          ssrRenderList(unref(products), (product) => {
            _push(ssrRenderComponent(_component_ProductListItem, {
              key: product.id,
              product,
              onAddToCart: addToCart,
              onQuickView: openQuickView,
              onAddToWishlist: addToWishlist
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(`<div class="mt-12 flex justify-center" data-v-ae8d0c03><nav class="flex items-center space-x-2" data-v-ae8d0c03><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ae8d0c03> Previous </button><!--[-->`);
        ssrRenderList(unref(visiblePages), (page) => {
          _push(`<button class="${ssrRenderClass([{
            "bg-blue-600 text-white": page === unref(currentPage),
            "text-gray-500 bg-white hover:bg-gray-50": page !== unref(currentPage)
          }, "px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg"])}" data-v-ae8d0c03>${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(totalPages)) ? " disabled" : ""} class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ae8d0c03> Next </button></nav></div></div>`);
      } else {
        _push(`<div class="text-center py-12" data-v-ae8d0c03><div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center" data-v-ae8d0c03><svg class="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-ae8d0c03><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-ae8d0c03></path></svg></div><h3 class="text-lg font-medium text-gray-900 mb-2" data-v-ae8d0c03>No products found</h3><p class="text-gray-500 mb-4" data-v-ae8d0c03>Try adjusting your search or filters to find what you&#39;re looking for.</p><button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" data-v-ae8d0c03> Clear All Filters </button></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        "is-open": unref(quickViewOpen),
        product: unref(selectedProduct),
        onClose: closeQuickView,
        onAddToCart: handleQuickViewAddToCart,
        onAddToWishlist: addToWishlist
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae8d0c03"]]);
export {
  index as default
};
//# sourceMappingURL=index-ByuMBcLI.js.map
