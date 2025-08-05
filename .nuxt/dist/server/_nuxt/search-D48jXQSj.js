import { ref, computed, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { u as useProductsStore } from "./products-SeWkcUmE.js";
import _sfc_main$1 from "./ProductCard-0zuHsmiv.js";
import { b as useRouter, c as useRoute, u as useHead } from "../server.mjs";
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
const _sfc_main = {
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const productsStore = useProductsStore();
    const router = useRouter();
    const route = useRoute();
    const searchQuery = ref("");
    const currentSearchQuery = ref("");
    const hasSearched = ref(false);
    const loading = ref(false);
    const searchResults = ref([]);
    const selectedCategories = ref([]);
    const selectedBrands = ref([]);
    const priceRange = ref({ min: 0, max: 1e3 });
    const showInStockOnly = ref(false);
    const showPrescriptionOnly = ref(false);
    const sortBy = ref("relevance");
    const displayedResults = ref(12);
    const searchSuggestions = ref([
      "Paracetamol",
      "Vitamin D",
      "Ibuprofen",
      "Cold medicine",
      "Antibiotics",
      "Blood pressure"
    ]);
    const priceRanges = [
      { label: "Under $10", min: 0, max: 10 },
      { label: "$10 - $25", min: 10, max: 25 },
      { label: "$25 - $50", min: 25, max: 50 },
      { label: "$50 - $100", min: 50, max: 100 },
      { label: "Over $100", min: 100, max: 1e3 }
    ];
    const categories = computed(() => productsStore.categories);
    const availableCategories = computed(() => {
      return categories.value.filter(
        (category) => searchResults.value.some((product) => product.categoryId === category.id)
      );
    });
    const availableBrands = computed(() => {
      const brands = [...new Set(searchResults.value.map((product) => product.brand))];
      return brands.sort();
    });
    const filteredResults = computed(() => {
      console.log("Computing filteredResults with searchResults:", searchResults.value.length);
      let filtered = [...searchResults.value];
      if (selectedCategories.value.length > 0) {
        filtered = filtered.filter(
          (product) => selectedCategories.value.includes(product.categoryId)
        );
      }
      if (selectedBrands.value.length > 0) {
        filtered = filtered.filter(
          (product) => selectedBrands.value.includes(product.brand)
        );
      }
      filtered = filtered.filter(
        (product) => product.price >= priceRange.value.min && product.price <= priceRange.value.max
      );
      if (showInStockOnly.value) {
        filtered = filtered.filter((product) => product.stock > 0);
      }
      if (showPrescriptionOnly.value) {
        filtered = filtered.filter((product) => product.prescription);
      }
      console.log("Filtered results:", filtered.length);
      return filtered;
    });
    const paginatedResults = computed(() => {
      console.log("Computing paginatedResults with filteredResults:", filteredResults.value.length);
      const results = filteredResults.value.slice(0, displayedResults.value);
      console.log("Returning paginated results:", results.length);
      return results;
    });
    const performSearch = async () => {
      if (!searchQuery.value.trim()) return;
      loading.value = true;
      hasSearched.value = true;
      currentSearchQuery.value = searchQuery.value;
      try {
        console.log("Searching for:", searchQuery.value);
        const results = await productsStore.searchProducts(searchQuery.value);
        console.log("Search results received:", results.length);
        searchResults.value = results;
        displayedResults.value = 12;
        await router.push({
          path: "/search",
          query: { q: searchQuery.value }
        });
      } catch (error) {
        console.error("Search failed:", error);
        searchResults.value = [];
      } finally {
        loading.value = false;
      }
    };
    const getCategoryCount = (categoryId) => {
      return searchResults.value.filter((product) => product.categoryId === categoryId).length;
    };
    const getBrandCount = (brand) => {
      return searchResults.value.filter((product) => product.brand === brand).length;
    };
    watch(() => route.query.q, (newQuery) => {
      if (newQuery && newQuery !== searchQuery.value) {
        searchQuery.value = newQuery;
        performSearch();
      }
    });
    useHead({
      title: computed(() => {
        if (hasSearched.value && currentSearchQuery.value) {
          return `Search Results for "${currentSearchQuery.value}" - Long Châu`;
        }
        return "Search Products - Long Châu";
      }),
      meta: [
        {
          name: "description",
          content: computed(() => {
            if (hasSearched.value && currentSearchQuery.value) {
              return `Search results for "${currentSearchQuery.value}". Find medications, supplements, and health products at Long Châu.`;
            }
            return "Search for medications, supplements, and health products at Long Châu online pharmacy.";
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="mb-8"><h1 class="text-3xl font-bold text-gray-900 mb-4">Search Products</h1><div class="max-w-2xl"><div class="relative"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input${ssrRenderAttr("value", unref(searchQuery))} type="text" class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-lg" placeholder="Search for medications, supplements, or health products..."></div><div class="mt-2 flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(searchSuggestions), (suggestion) => {
        _push(`<button class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">${ssrInterpolate(suggestion)}</button>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (unref(hasSearched)) {
        _push(`<div><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"><div><h2 class="text-xl font-semibold text-gray-900">${ssrInterpolate(unref(searchResults).length)} results for &quot;${ssrInterpolate(unref(currentSearchQuery))}&quot; </h2><p class="text-gray-600 mt-1"> Showing ${ssrInterpolate(Math.min(unref(displayedResults), unref(filteredResults).length))} of ${ssrInterpolate(unref(filteredResults).length)} products </p></div><div class="mt-4 lg:mt-0 flex items-center space-x-4"><label class="text-sm font-medium text-gray-700">Sort by:</label><select class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value="relevance"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "relevance") : ssrLooseEqual(unref(sortBy), "relevance")) ? " selected" : ""}>Relevance</option><option value="name"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "name") : ssrLooseEqual(unref(sortBy), "name")) ? " selected" : ""}>Name A-Z</option><option value="name-desc"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "name-desc") : ssrLooseEqual(unref(sortBy), "name-desc")) ? " selected" : ""}>Name Z-A</option><option value="price"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price") : ssrLooseEqual(unref(sortBy), "price")) ? " selected" : ""}>Price: Low to High</option><option value="price-desc"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price-desc") : ssrLooseEqual(unref(sortBy), "price-desc")) ? " selected" : ""}>Price: High to Low</option><option value="rating"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "rating") : ssrLooseEqual(unref(sortBy), "rating")) ? " selected" : ""}>Rating: High to Low</option></select></div></div><div class="grid grid-cols-1 lg:grid-cols-4 gap-8"><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-sm border p-6 sticky top-8"><h3 class="text-lg font-semibold text-gray-900 mb-4">Filters</h3><div class="mb-6"><h4 class="text-sm font-medium text-gray-900 mb-3">Category</h4><div class="space-y-2"><!--[-->`);
        ssrRenderList(unref(availableCategories), (category) => {
          _push(`<label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategories)) ? ssrLooseContain(unref(selectedCategories), category.id) : unref(selectedCategories)) ? " checked" : ""}${ssrRenderAttr("value", category.id)} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"><span class="ml-2 text-sm text-gray-700">${ssrInterpolate(category.name)} <span class="text-gray-400">(${ssrInterpolate(getCategoryCount(category.id))})</span></span></label>`);
        });
        _push(`<!--]--></div></div><div class="mb-6"><h4 class="text-sm font-medium text-gray-900 mb-3">Price Range</h4><div class="space-y-3"><div class="flex items-center space-x-2"><input${ssrRenderAttr("value", unref(priceRange).min)} type="number" min="0" placeholder="Min" class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><span class="text-gray-500">to</span><input${ssrRenderAttr("value", unref(priceRange).max)} type="number" min="0" placeholder="Max" class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div><div class="space-y-1"><!--[-->`);
        ssrRenderList(priceRanges, (range) => {
          _push(`<label class="flex items-center"><input${ssrRenderAttr("value", range)} type="radio" name="priceRange" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"><span class="ml-2 text-sm text-gray-700">${ssrInterpolate(range.label)}</span></label>`);
        });
        _push(`<!--]--></div></div></div><div class="mb-6"><h4 class="text-sm font-medium text-gray-900 mb-3">Brand</h4><div class="space-y-2"><!--[-->`);
        ssrRenderList(unref(availableBrands), (brand) => {
          _push(`<label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(selectedBrands)) ? ssrLooseContain(unref(selectedBrands), brand) : unref(selectedBrands)) ? " checked" : ""}${ssrRenderAttr("value", brand)} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"><span class="ml-2 text-sm text-gray-700">${ssrInterpolate(brand)} <span class="text-gray-400">(${ssrInterpolate(getBrandCount(brand))})</span></span></label>`);
        });
        _push(`<!--]--></div></div><div class="mb-6"><h4 class="text-sm font-medium text-gray-900 mb-3">Availability</h4><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(showInStockOnly)) ? ssrLooseContain(unref(showInStockOnly), null) : unref(showInStockOnly)) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"><span class="ml-2 text-sm text-gray-700">In Stock Only</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(showPrescriptionOnly)) ? ssrLooseContain(unref(showPrescriptionOnly), null) : unref(showPrescriptionOnly)) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"><span class="ml-2 text-sm text-gray-700">Prescription Required</span></label></div></div><button class="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"> Clear All Filters </button></div></div><div class="lg:col-span-3">`);
        if (unref(loading)) {
          _push(`<div class="flex justify-center items-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>`);
        } else if (unref(filteredResults).length === 0) {
          _push(`<div class="text-center py-12"><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900">No products found</h3><p class="mt-1 text-sm text-gray-500"> Try adjusting your search criteria or filters </p></div>`);
        } else {
          _push(`<div class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"><!--[-->`);
          ssrRenderList(unref(paginatedResults), (product) => {
            _push(ssrRenderComponent(_sfc_main$1, {
              key: product.id,
              product,
              "show-add-to-cart": true
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
          if (unref(displayedResults) < unref(filteredResults).length) {
            _push(`<div class="text-center"><button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"> Load More Products </button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<div class="text-center py-12"><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900">Search for products</h3><p class="mt-1 text-sm text-gray-500"> Enter a search term to find medications, supplements, and health products </p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=search-D48jXQSj.js.map
