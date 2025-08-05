import { c as useRoute, u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { u as useProductsStore } from "./products-SeWkcUmE.js";
import _sfc_main$1 from "./ProductCard-0zuHsmiv.js";
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const productsStore = useProductsStore();
    const loading = ref(true);
    const productsLoading = ref(false);
    const category = ref(null);
    const products = ref([]);
    const searchQuery = ref("");
    const selectedBrand = ref("");
    const sortBy = ref("name");
    const showInStockOnly = ref(false);
    const showFeaturedOnly = ref(false);
    const showDiscountedOnly = ref(false);
    const priceRange = ref({ min: 0, max: 1e3 });
    const categorySlug = computed(() => route.params.slug);
    const availableBrands = computed(() => {
      if (!products.value.length) return [];
      const brands = [...new Set(products.value.map((p) => p.brand))];
      return brands.sort();
    });
    const totalProducts = computed(() => products.value.length);
    const inStockProducts = computed(
      () => products.value.filter((p) => p.stock > 0).length
    );
    const filteredProducts = computed(() => {
      let filtered = [...products.value];
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query) || product.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }
      if (selectedBrand.value) {
        filtered = filtered.filter((p) => p.brand === selectedBrand.value);
      }
      if (showInStockOnly.value) {
        filtered = filtered.filter((p) => p.stock > 0);
      }
      if (showFeaturedOnly.value) {
        filtered = filtered.filter((p) => p.featured);
      }
      if (showDiscountedOnly.value) {
        filtered = filtered.filter((p) => p.discount > 0);
      }
      filtered = filtered.filter(
        (p) => p.price >= priceRange.value.min && p.price <= priceRange.value.max
      );
      return filtered;
    });
    const pagination = computed(() => productsStore.pagination);
    const visiblePages = computed(() => {
      const current = pagination.value.currentPage;
      const total = pagination.value.totalPages;
      const pages = [];
      const start = Math.max(1, current - 2);
      const end = Math.min(total, current + 2);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    });
    const fetchCategoryData = async () => {
      loading.value = true;
      try {
        await productsStore.fetchCategories();
        category.value = productsStore.categories.find((c) => c.slug === categorySlug.value);
        if (category.value) {
          productsLoading.value = true;
          const response = await $fetch(`/api/categories/${category.value.id}/products`);
          products.value = response.products || [];
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        loading.value = false;
        productsLoading.value = false;
      }
    };
    watch(() => route.params.slug, () => {
      fetchCategoryData();
    });
    useHead({
      title: computed(() => {
        if (category.value) {
          return `${category.value.name} - Long Châu Online Pharmacy`;
        }
        return "Category - Long Châu";
      }),
      meta: [
        {
          name: "description",
          content: computed(() => {
            if (category.value) {
              return `${category.value.description} Shop ${category.value.name.toLowerCase()} products at Long Châu online pharmacy.`;
            }
            return "Browse products by category at Long Châu online pharmacy.";
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container mx-auto px-4">`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center items-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>`);
      } else if (!unref(category)) {
        _push(`<div class="text-center py-12"><h1 class="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1><p class="text-gray-600 mb-6">The category you&#39;re looking for doesn&#39;t exist.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse All Products `);
            } else {
              return [
                createTextVNode(" Browse All Products ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><div class="mb-8"><nav class="flex mb-4" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-gray-500 hover:text-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li><div class="flex items-center"><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "ml-1 text-gray-500 hover:text-gray-700 md:ml-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Products`);
            } else {
              return [
                createTextVNode("Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></li><li><div class="flex items-center"><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg><span class="ml-1 text-gray-500 md:ml-2">${ssrInterpolate(unref(category).name)}</span></div></li></ol></nav><div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8"><div class="flex flex-col md:flex-row md:items-center md:space-x-6">`);
        if (unref(category).image) {
          _push(`<div class="flex-shrink-0 mb-4 md:mb-0"><img${ssrRenderAttr("src", unref(category).image)}${ssrRenderAttr("alt", unref(category).name)} class="w-24 h-24 rounded-lg object-cover"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex-1"><h1 class="text-3xl font-bold text-gray-900 mb-2">${ssrInterpolate(unref(category).name)}</h1><p class="text-gray-600 text-lg mb-4">${ssrInterpolate(unref(category).description)}</p><div class="flex items-center text-sm text-gray-500"><span>${ssrInterpolate(unref(totalProducts))} ${ssrInterpolate(unref(totalProducts) === 1 ? "product" : "products")} available</span><span class="mx-2">•</span><span>${ssrInterpolate(unref(inStockProducts))} in stock</span></div></div></div></div></div><div class="bg-white rounded-lg shadow-sm p-6 mb-8"><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="md:col-span-2"><div class="relative"><input${ssrRenderAttr("value", unref(searchQuery))} type="text"${ssrRenderAttr("placeholder", `Search in ${unref(category).name}...`)} class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div><div><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedBrand)) ? ssrLooseContain(unref(selectedBrand), "") : ssrLooseEqual(unref(selectedBrand), "")) ? " selected" : ""}>All Brands</option><!--[-->`);
        ssrRenderList(unref(availableBrands), (brand) => {
          _push(`<option${ssrRenderAttr("value", brand)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedBrand)) ? ssrLooseContain(unref(selectedBrand), brand) : ssrLooseEqual(unref(selectedBrand), brand)) ? " selected" : ""}>${ssrInterpolate(brand)}</option>`);
        });
        _push(`<!--]--></select></div><div><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value="name"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "name") : ssrLooseEqual(unref(sortBy), "name")) ? " selected" : ""}>Name A-Z</option><option value="name-desc"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "name-desc") : ssrLooseEqual(unref(sortBy), "name-desc")) ? " selected" : ""}>Name Z-A</option><option value="price"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price") : ssrLooseEqual(unref(sortBy), "price")) ? " selected" : ""}>Price: Low to High</option><option value="price-desc"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price-desc") : ssrLooseEqual(unref(sortBy), "price-desc")) ? " selected" : ""}>Price: High to Low</option><option value="rating"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "rating") : ssrLooseEqual(unref(sortBy), "rating")) ? " selected" : ""}>Highest Rated</option><option value="featured"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "featured") : ssrLooseEqual(unref(sortBy), "featured")) ? " selected" : ""}>Featured First</option></select></div></div><div class="mt-4 pt-4 border-t border-gray-200"><div class="flex flex-wrap gap-4 items-center"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(showInStockOnly)) ? ssrLooseContain(unref(showInStockOnly), null) : unref(showInStockOnly)) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"><span class="ml-2 text-sm text-gray-700">In Stock Only</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(showFeaturedOnly)) ? ssrLooseContain(unref(showFeaturedOnly), null) : unref(showFeaturedOnly)) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"><span class="ml-2 text-sm text-gray-700">Featured Products</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(showDiscountedOnly)) ? ssrLooseContain(unref(showDiscountedOnly), null) : unref(showDiscountedOnly)) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"><span class="ml-2 text-sm text-gray-700">On Sale</span></label><div class="flex items-center space-x-2"><span class="text-sm text-gray-700">Price:</span><input${ssrRenderAttr("value", unref(priceRange).min)} type="number" min="0" placeholder="Min" class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><span class="text-gray-500">-</span><input${ssrRenderAttr("value", unref(priceRange).max)} type="number" min="0" placeholder="Max" class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div><button class="text-sm text-blue-600 hover:text-blue-800 font-medium"> Clear Filters </button></div></div></div>`);
        if (unref(productsLoading)) {
          _push(`<div class="flex justify-center items-center py-12"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>`);
        } else if (unref(filteredProducts).length === 0) {
          _push(`<div class="text-center py-12"><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900">No products found</h3><p class="mt-1 text-sm text-gray-500"> Try adjusting your search criteria or filters </p></div>`);
        } else {
          _push(`<div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"><!--[-->`);
          ssrRenderList(unref(filteredProducts), (product) => {
            _push(ssrRenderComponent(_sfc_main$1, {
              key: product.id,
              product,
              "show-add-to-cart": true
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
          if (unref(pagination).totalPages > 1) {
            _push(`<div class="flex justify-center"><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"><button${ssrIncludeBooleanAttr(!unref(pagination).hasPrev) ? " disabled" : ""} class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"> Previous </button><!--[-->`);
            ssrRenderList(unref(visiblePages), (page) => {
              _push(`<button class="${ssrRenderClass([{
                "bg-blue-50 border-blue-500 text-blue-600": page === unref(pagination).currentPage,
                "bg-white border-gray-300 text-gray-500 hover:bg-gray-50": page !== unref(pagination).currentPage
              }, "relative inline-flex items-center px-4 py-2 border text-sm font-medium"])}">${ssrInterpolate(page)}</button>`);
            });
            _push(`<!--]--><button${ssrIncludeBooleanAttr(!unref(pagination).hasNext) ? " disabled" : ""} class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"> Next </button></nav></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-Ch4KtpR3.js.map
