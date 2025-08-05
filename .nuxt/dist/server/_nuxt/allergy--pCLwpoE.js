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
  __name: "allergy",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const sortOption = ref("popular");
    const activeFilter = ref("All Products");
    const visibleProducts = ref(productsPerPage);
    const allergyFilters = [
      "All Products",
      "Antihistamines",
      "Nasal Sprays",
      "Eye Drops",
      "Skin Care",
      "Children's",
      "Non-Drowsy",
      "24-Hour Relief"
    ];
    const products = [
      {
        id: 301,
        name: "Non-Drowsy Allergy Relief 24HR",
        slug: "non-drowsy-allergy-relief-24hr",
        category: "Allergy Relief",
        price: 24.99,
        image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
        rating: 4.8,
        reviews: 89,
        inStock: true,
        isRx: false,
        discount: 15,
        tags: ["antihistamines", "non-drowsy", "24-hour"]
      },
      {
        id: 302,
        name: "Allergy Relief Nasal Spray",
        slug: "allergy-relief-nasal-spray",
        category: "Allergy Relief",
        price: 18.99,
        image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg",
        rating: 4.6,
        reviews: 67,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["nasal-sprays"]
      },
      {
        id: 303,
        name: "Allergy Eye Drops - Itchy Eyes Relief",
        slug: "allergy-eye-drops-itchy-eyes",
        category: "Allergy Relief",
        price: 12.49,
        image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg",
        rating: 4.7,
        reviews: 54,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["eye-drops"]
      },
      {
        id: 304,
        name: "Children's Allergy Liquid Medicine",
        slug: "childrens-allergy-liquid-medicine",
        category: "Allergy Relief",
        price: 16.99,
        image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
        rating: 4.9,
        reviews: 78,
        inStock: true,
        isRx: false,
        discount: 10,
        tags: ["children's", "antihistamines"]
      },
      {
        id: 305,
        name: "Seasonal Allergy Relief Tablets",
        slug: "seasonal-allergy-relief-tablets",
        category: "Allergy Relief",
        price: 21.99,
        image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
        rating: 4.5,
        reviews: 43,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["antihistamines", "24-hour"]
      },
      {
        id: 306,
        name: "Anti-Itch Cream for Allergic Reactions",
        slug: "anti-itch-cream-allergic-reactions",
        category: "Allergy Relief",
        price: 9.99,
        image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
        rating: 4.4,
        reviews: 36,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["skin-care"]
      },
      {
        id: 307,
        name: "Fast-Acting Allergy Capsules",
        slug: "fast-acting-allergy-capsules",
        category: "Allergy Relief",
        price: 19.49,
        image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
        rating: 4.6,
        reviews: 52,
        inStock: true,
        isRx: false,
        discount: 5,
        tags: ["antihistamines", "non-drowsy"]
      },
      {
        id: 308,
        name: "Natural Allergy Relief Supplement",
        slug: "natural-allergy-relief-supplement",
        category: "Allergy Relief",
        price: 27.99,
        image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
        rating: 4.3,
        reviews: 29,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["antihistamines"]
      },
      {
        id: 309,
        name: "Decongestant + Antihistamine Combo",
        slug: "decongestant-antihistamine-combo",
        category: "Allergy Relief",
        price: 23.99,
        image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
        rating: 4.7,
        reviews: 61,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["antihistamines", "non-drowsy"]
      },
      {
        id: 310,
        name: "Allergy Relief Chewable Tablets",
        slug: "allergy-relief-chewable-tablets",
        category: "Allergy Relief",
        price: 14.99,
        image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
        rating: 4.5,
        reviews: 38,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["children's", "antihistamines"]
      },
      {
        id: 311,
        name: "Sinus & Allergy Relief",
        slug: "sinus-allergy-relief",
        category: "Allergy Relief",
        price: 17.49,
        image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg",
        rating: 4.4,
        reviews: 45,
        inStock: true,
        isRx: false,
        discount: 0,
        tags: ["antihistamines", "nasal-sprays"]
      },
      {
        id: 312,
        name: "Allergy Relief Gel Caps",
        slug: "allergy-relief-gel-caps",
        category: "Allergy Relief",
        price: 22.99,
        image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
        rating: 4.8,
        reviews: 73,
        inStock: true,
        isRx: false,
        discount: 20,
        tags: ["antihistamines", "non-drowsy", "24-hour"]
      }
    ];
    const relatedCategories = [
      {
        name: "Cold & Flu",
        slug: "cold-flu",
        icon: "🌡️"
      },
      {
        name: "Skin Care",
        slug: "skin-care",
        icon: "🧴"
      },
      {
        name: "Vitamins",
        slug: "vitamins-supplements",
        icon: "💊"
      },
      {
        name: "OTC Medicines",
        slug: "otc-medicines",
        icon: "💊"
      }
    ];
    const filteredProducts = computed(() => {
      if (activeFilter.value === "All Products") {
        return products;
      }
      const filterMap = {
        "Antihistamines": "antihistamines",
        "Nasal Sprays": "nasal-sprays",
        "Eye Drops": "eye-drops",
        "Skin Care": "skin-care",
        "Children's": "children's",
        "Non-Drowsy": "non-drowsy",
        "24-Hour Relief": "24-hour"
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
      title: "Allergy Relief Products - Long Châu Pharmacy",
      meta: [
        {
          name: "description",
          content: "Find effective allergy relief medications including antihistamines, nasal sprays, and topical treatments for seasonal and year-round allergies."
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">Allergy Relief</span></div></li></ol></nav><div class="relative bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 md:p-8 mb-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"><div class="md:col-span-2"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Allergy Relief &amp; Prevention</h1><p class="text-neutral-600 max-w-2xl"> Find effective relief from seasonal allergies, hay fever, indoor allergens, and skin reactions with our comprehensive range of antihistamines, nasal sprays, and topical treatments. </p></div><div class="hidden md:block"><img src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg" alt="Allergy Relief" class="w-32 h-32 object-cover rounded-full mx-auto"></div></div></div><div class="bg-white rounded-lg shadow-sm p-4 mb-8"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(allergyFilters, (filter) => {
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
      _push(`</div><div class="bg-white rounded-lg shadow-sm p-6 mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">About Allergy Relief Products</h2><div class="prose max-w-none text-neutral-700"><p> Allergies occur when your immune system reacts to substances like pollen, dust mites, pet dander, or certain foods. Our allergy relief products help manage symptoms like sneezing, runny nose, itchy eyes, and skin reactions. </p><p class="mt-4"><strong>Types of allergy medications include:</strong></p><ul class="mt-2 ml-4 list-disc"><li><strong>Antihistamines:</strong> Block histamine to reduce sneezing, itching, and runny nose</li><li><strong>Nasal Sprays:</strong> Provide targeted relief for nasal congestion and inflammation</li><li><strong>Decongestants:</strong> Help reduce swollen nasal passages</li><li><strong>Topical Treatments:</strong> Address skin allergies and reactions</li><li><strong>Eye Drops:</strong> Relieve itchy, watery eyes</li></ul><p class="mt-4"> For best results, start taking allergy medications before allergy season begins. If you have severe allergies or reactions, consult with a healthcare professional for personalized treatment options. </p></div></div><div class="bg-green-50 rounded-lg p-6 mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">Allergy Prevention Tips</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-semibold text-neutral-800 mb-2">Indoor Allergens</h3><ul class="text-sm text-neutral-600 space-y-1"><li>• Use HEPA air purifiers</li><li>• Wash bedding in hot water weekly</li><li>• Keep humidity below 50%</li><li>• Regular vacuuming with HEPA filter</li></ul></div><div><h3 class="font-semibold text-neutral-800 mb-2">Seasonal Allergies</h3><ul class="text-sm text-neutral-600 space-y-1"><li>• Check daily pollen counts</li><li>• Keep windows closed during high pollen days</li><li>• Shower after being outdoors</li><li>• Start medications before season begins</li></ul></div></div></div><div class="mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">Related Categories</h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/allergy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=allergy--pCLwpoE.js.map
