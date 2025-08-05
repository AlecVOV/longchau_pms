import { u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import _sfc_main$1 from "./ProductCard-0zuHsmiv.js";
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useCartStore } from "./cart-Cj2Ys50X.js";
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
const productsPerPage = 8;
const _sfc_main = {
  __name: "skin-care",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const sortOption = ref("popular");
    const activeFilter = ref("All Products");
    const visibleProducts = ref(productsPerPage);
    const skinCareFilters = [
      "All Products",
      "Cleansers",
      "Moisturizers",
      "Anti-Aging",
      "Acne Treatment",
      "Sun Protection",
      "Serums",
      "Face Masks",
      "Sensitive Skin"
    ];
    const products = [
      {
        id: 401,
        name: "Gentle Daily Facial Cleanser",
        slug: "gentle-daily-facial-cleanser",
        category: "Skin Care",
        price: 18.99,
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.7,
        reviews: 156,
        inStock: true,
        isRx: false,
        discount: 15,
        tags: ["cleansers", "sensitive-skin"]
      },
      {
        id: 402,
        name: "Hydrating Face Moisturizer SPF 30",
        slug: "hydrating-face-moisturizer-spf30",
        category: "Skin Care",
        price: 24.99,
        image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
        rating: 4.8,
        reviews: 203,
        inStock: true,
        isRx: false,
        discount: 20,
        tags: ["moisturizers", "sun-protection"]
      },
      {
        id: 403,
        name: "Anti-Aging Retinol Night Cream",
        slug: "anti-aging-retinol-night-cream",
        category: "Skin Care",
        price: 34.99,
        image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
        rating: 4.6,
        reviews: 127,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["anti-aging", "moisturizers"]
      },
      {
        id: 404,
        name: "Acne Fighting Spot Treatment",
        slug: "acne-fighting-spot-treatment",
        category: "Skin Care",
        price: 16.49,
        image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
        rating: 4.5,
        reviews: 89,
        inStock: true,
        isRx: false,
        discount: 10,
        tags: ["acne-treatment"]
      },
      {
        id: 405,
        name: "Vitamin C Brightening Serum",
        slug: "vitamin-c-brightening-serum",
        category: "Skin Care",
        price: 28.99,
        image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
        rating: 4.9,
        reviews: 178,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["serums", "anti-aging"]
      },
      {
        id: 406,
        name: "Broad Spectrum Sunscreen SPF 50",
        slug: "broad-spectrum-sunscreen-spf50",
        category: "Skin Care",
        price: 22.49,
        image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
        rating: 4.7,
        reviews: 145,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["sun-protection"]
      },
      {
        id: 407,
        name: "Hydrating Clay Face Mask",
        slug: "hydrating-clay-face-mask",
        category: "Skin Care",
        price: 14.99,
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.4,
        reviews: 73,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["face-masks"]
      },
      {
        id: 408,
        name: "Sensitive Skin Gentle Toner",
        slug: "sensitive-skin-gentle-toner",
        category: "Skin Care",
        price: 19.99,
        image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
        rating: 4.6,
        reviews: 94,
        inStock: true,
        isRx: false,
        discount: 5,
        tags: ["cleansers", "sensitive-skin"]
      },
      {
        id: 409,
        name: "Exfoliating Salicylic Acid Cleanser",
        slug: "exfoliating-salicylic-acid-cleanser",
        category: "Skin Care",
        price: 21.99,
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.5,
        reviews: 112,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["cleansers", "acne-treatment"]
      },
      {
        id: 410,
        name: "Hyaluronic Acid Hydrating Serum",
        slug: "hyaluronic-acid-hydrating-serum",
        category: "Skin Care",
        price: 26.99,
        image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
        rating: 4.8,
        reviews: 167,
        inStock: true,
        isRx: false,
        discount: 15,
        tags: ["serums", "moisturizers"]
      },
      {
        id: 411,
        name: "Nourishing Night Face Oil",
        slug: "nourishing-night-face-oil",
        category: "Skin Care",
        price: 32.99,
        image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
        rating: 4.7,
        reviews: 85,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["moisturizers", "anti-aging"]
      },
      {
        id: 412,
        name: "Purifying Charcoal Face Mask",
        slug: "purifying-charcoal-face-mask",
        category: "Skin Care",
        price: 12.99,
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.3,
        reviews: 58,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["face-masks", "acne-treatment"]
      },
      {
        id: 413,
        name: "Eye Cream for Dark Circles",
        slug: "eye-cream-dark-circles",
        category: "Skin Care",
        price: 29.99,
        image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
        rating: 4.6,
        reviews: 101,
        inStock: true,
        isRx: false,
        discount: 10,
        tags: ["anti-aging", "moisturizers"]
      },
      {
        id: 414,
        name: "Micellar Water Makeup Remover",
        slug: "micellar-water-makeup-remover",
        category: "Skin Care",
        price: 15.49,
        image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
        rating: 4.7,
        reviews: 139,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["cleansers", "sensitive-skin"]
      },
      {
        id: 415,
        name: "Peptide Firming Face Serum",
        slug: "peptide-firming-face-serum",
        category: "Skin Care",
        price: 39.99,
        image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
        rating: 4.8,
        reviews: 92,
        inStock: true,
        isRx: false,
        discount: 25,
        tags: ["serums", "anti-aging"]
      }
    ];
    const relatedCategories = [
      {
        name: "Personal Care",
        slug: "personal-care",
        icon: "🧴"
      },
      {
        name: "Allergy Relief",
        slug: "allergy",
        icon: "🌞"
      },
      {
        name: "Vitamins",
        slug: "vitamins-supplements",
        icon: "💊"
      },
      {
        name: "First Aid",
        slug: "first-aid",
        icon: "🩹"
      }
    ];
    const filteredProducts = computed(() => {
      if (activeFilter.value === "All Products") {
        return products;
      }
      const filterMap = {
        "Cleansers": "cleansers",
        "Moisturizers": "moisturizers",
        "Anti-Aging": "anti-aging",
        "Acne Treatment": "acne-treatment",
        "Sun Protection": "sun-protection",
        "Serums": "serums",
        "Face Masks": "face-masks",
        "Sensitive Skin": "sensitive-skin"
      };
      const filterTag = filterMap[activeFilter.value];
      return products.filter((product) => {
        var _a;
        return (_a = product.tags) == null ? void 0 : _a.includes(filterTag);
      });
    });
    const sortedProducts = computed(() => {
      const sorted = [...filteredProducts.value];
      switch (sortOption.value) {
        case "price-low":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          sorted.sort((a, b) => b.rating - a.rating);
          break;
        case "popular":
        default:
          sorted.sort((a, b) => b.reviews - a.reviews);
          break;
      }
      return sorted.slice(0, visibleProducts.value);
    });
    const showingAll = computed(() => visibleProducts.value >= filteredProducts.value.length);
    function addToCart(product) {
      cartStore.addItem(product);
    }
    useHead({
      title: "Skin Care Products - Long Châu Pharmacy",
      meta: [
        {
          name: "description",
          content: "Shop premium skin care products including cleansers, moisturizers, anti-aging treatments, and sun protection for healthy, radiant skin."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ProductCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><nav class="flex mb-6 text-sm" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-neutral-500 hover:text-primary-600"
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">Skin Care</span></div></li></ol></nav><div class="relative bg-gradient-to-r from-pink-50 to-rose-100 rounded-xl p-6 md:p-8 mb-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"><div class="md:col-span-2"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Skin Care &amp; Beauty</h1><p class="text-neutral-600 max-w-2xl"> Discover our comprehensive range of skin care products including moisturizers, cleansers, anti-aging treatments, acne solutions, and sun protection for healthy, radiant skin. </p></div><div class="hidden md:block"><img src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg" alt="Skin Care" class="w-32 h-32 object-cover rounded-full mx-auto"></div></div></div><div class="bg-white rounded-lg shadow-sm p-4 mb-8"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(skinCareFilters, (filter) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-1 text-sm rounded-full transition-colors",
          activeFilter.value === filter ? "bg-primary-600 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
        ])}">${ssrInterpolate(filter)}</button>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-2"><label for="sort" class="text-sm text-neutral-600">Sort by:</label><select id="sort" class="text-sm border-neutral-300 rounded-md"><option value="popular"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "popular") : ssrLooseEqual(sortOption.value, "popular")) ? " selected" : ""}>Most Popular</option><option value="price-low"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "price-low") : ssrLooseEqual(sortOption.value, "price-low")) ? " selected" : ""}>Price: Low to High</option><option value="price-high"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "price-high") : ssrLooseEqual(sortOption.value, "price-high")) ? " selected" : ""}>Price: High to Low</option><option value="rating"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "rating") : ssrLooseEqual(sortOption.value, "rating")) ? " selected" : ""}>Highest Rating</option></select></div></div></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8"><!--[-->`);
      ssrRenderList(sortedProducts.value, (product) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.id,
          product,
          onAddToCart: addToCart
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="text-center mb-12">`);
      if (!showingAll.value) {
        _push(`<button class="btn-outline"> Load More Products </button>`);
      } else {
        _push(`<p class="text-neutral-500 text-sm"> You&#39;ve viewed all products in this category </p>`);
      }
      _push(`</div><div class="bg-white rounded-lg shadow-sm p-6 mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">About Skin Care Products</h2><div class="prose max-w-none text-neutral-700"><p> Healthy skin starts with the right care routine. Our skin care collection includes products for all skin types and concerns, from basic cleansing and moisturizing to targeted treatments for specific conditions. </p><p class="mt-4"><strong>Essential skin care steps include:</strong></p><ul class="mt-2 ml-4 list-disc"><li><strong>Cleansing:</strong> Remove dirt, oil, and makeup with gentle cleansers</li><li><strong>Toning:</strong> Balance skin pH and prepare for moisturizer</li><li><strong>Moisturizing:</strong> Hydrate and protect the skin barrier</li><li><strong>Sun Protection:</strong> Daily SPF to prevent UV damage and aging</li><li><strong>Targeted Treatments:</strong> Serums and treatments for specific concerns</li></ul><p class="mt-4"> Remember to introduce new products gradually and patch test before full application. If you have sensitive skin or specific conditions like eczema or rosacea, consult with a dermatologist for personalized recommendations. </p></div></div><div class="bg-pink-50 rounded-lg p-6 mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">Daily Skin Care Tips</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-semibold text-neutral-800 mb-2">Morning Routine</h3><ul class="text-sm text-neutral-600 space-y-1"><li>• Gentle cleanser</li><li>• Vitamin C serum (optional)</li><li>• Moisturizer</li><li>• Broad-spectrum SPF 30+</li></ul></div><div><h3 class="font-semibold text-neutral-800 mb-2">Evening Routine</h3><ul class="text-sm text-neutral-600 space-y-1"><li>• Remove makeup/sunscreen</li><li>• Gentle cleanser</li><li>• Treatment products (retinol, acids)</li><li>• Night moisturizer or face oil</li></ul></div></div><div class="mt-6 p-4 bg-white rounded-lg"><h3 class="font-semibold text-neutral-800 mb-2">Pro Tips</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-600"><div>• Always patch test new products</div><div>• Use lukewarm water when cleansing</div><div>• Apply products to damp skin for better absorption</div></div></div></div><div class="mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">Related Categories</h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedCategories, (category) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: category.slug,
          to: `/category/${category.slug}`,
          class: "bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 text-center group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-12 h-12 rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-100 flex items-center justify-center mx-auto mb-3"${_scopeId}><span class="text-xl"${_scopeId}>${ssrInterpolate(category.icon)}</span></div><h3 class="font-medium text-neutral-800 group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(category.name)}</h3>`);
            } else {
              return [
                createVNode("div", { class: "w-12 h-12 rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-100 flex items-center justify-center mx-auto mb-3" }, [
                  createVNode("span", { class: "text-xl" }, toDisplayString(category.icon), 1)
                ]),
                createVNode("h3", { class: "font-medium text-neutral-800 group-hover:text-primary-600" }, toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/skin-care.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=skin-care-CRgq8Z1D.js.map
