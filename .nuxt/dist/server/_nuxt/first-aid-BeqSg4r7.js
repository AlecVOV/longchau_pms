import { _ as __nuxt_component_0 } from "../server.mjs";
import _sfc_main$1 from "./ProductCard-0zuHsmiv.js";
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "first-aid",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const sortOption = ref("popular");
    const visibleProducts = ref(productsPerPage);
    const products = [
      {
        id: 501,
        name: "Complete First Aid Kit (100 pieces)",
        slug: "complete-first-aid-kit-100-pieces",
        category: "First Aid",
        price: 29.99,
        image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg",
        rating: 4.8,
        reviews: 92,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 502,
        name: "Advanced Adhesive Bandages (50 count)",
        slug: "advanced-adhesive-bandages-50-count",
        category: "First Aid",
        price: 7.99,
        image: "https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg",
        rating: 4.6,
        reviews: 74,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 503,
        name: "Emergency Thermal Blanket",
        slug: "emergency-thermal-blanket",
        category: "First Aid",
        price: 5.99,
        image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg",
        rating: 4.7,
        reviews: 48,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 504,
        name: "Antiseptic Wound Wash Spray",
        slug: "antiseptic-wound-wash-spray",
        category: "First Aid",
        price: 9.49,
        image: "https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg",
        rating: 4.9,
        reviews: 86,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 505,
        name: "Medical Gauze Rolls (6 pack)",
        slug: "medical-gauze-rolls-6-pack",
        category: "First Aid",
        price: 10.99,
        image: "https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg",
        rating: 4.5,
        reviews: 37,
        inStock: true,
        isRx: false,
        discount: 5
      },
      {
        id: 506,
        name: "Instant Cold Pack (4 pack)",
        slug: "instant-cold-pack-4-pack",
        category: "First Aid",
        price: 12.99,
        image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg",
        rating: 4.6,
        reviews: 42,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 507,
        name: "Antibiotic Ointment Packets (25 count)",
        slug: "antibiotic-ointment-packets-25-count",
        category: "First Aid",
        price: 8.49,
        image: "https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg",
        rating: 4.7,
        reviews: 54,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 508,
        name: "Travel First Aid Kit",
        slug: "travel-first-aid-kit",
        category: "First Aid",
        price: 16.99,
        image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg",
        rating: 4.8,
        reviews: 62,
        inStock: true,
        isRx: false,
        discount: 10
      },
      {
        id: 509,
        name: "Burn Relief Gel (2 oz)",
        slug: "burn-relief-gel-2-oz",
        category: "First Aid",
        price: 7.99,
        image: "https://images.pexels.com/photos/208513/pexels-photo-208513.jpeg",
        rating: 4.9,
        reviews: 47,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 510,
        name: "Emergency CPR Shield with Case",
        slug: "emergency-cpr-shield-with-case",
        category: "First Aid",
        price: 9.99,
        image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg",
        rating: 4.8,
        reviews: 39,
        inStock: true,
        isRx: false,
        discount: 0
      }
    ];
    const relatedCategories = [
      {
        name: "OTC Medicines",
        slug: "otc-medicines",
        icon: "💊"
      },
      {
        name: "Pain Relief",
        slug: "pain-relief",
        icon: "🏥"
      },
      {
        name: "Personal Care",
        slug: "personal-care",
        icon: "🧴"
      },
      {
        name: "Skin Care",
        slug: "skin-care",
        icon: "🧴"
      }
    ];
    const sortedProducts = computed(() => {
      const sorted = [...products];
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
    const showingAll = computed(() => visibleProducts.value >= products.length);
    function addToCart(product) {
      cartStore.addItem(product);
    }
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">First Aid</span></div></li></ol></nav><div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"><div class="md:col-span-2"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">First Aid</h1><p class="text-neutral-600 max-w-2xl"> Be prepared for minor injuries and emergencies with our comprehensive selection of first aid supplies, bandages, antiseptics, and emergency care essentials for your home, office, or travel needs. </p></div><div class="hidden md:block"><img src="https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg" alt="First Aid" class="w-32 h-32 object-cover rounded-full mx-auto"></div></div></div><div class="bg-white rounded-lg shadow-sm p-4 mb-8"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div class="flex items-center gap-2"><label for="sort" class="text-sm text-neutral-600">Sort by:</label><select id="sort" class="text-sm border-neutral-300 rounded-md"><option value="popular"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "popular") : ssrLooseEqual(sortOption.value, "popular")) ? " selected" : ""}>Most Popular</option><option value="price-low"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "price-low") : ssrLooseEqual(sortOption.value, "price-low")) ? " selected" : ""}>Price: Low to High</option><option value="price-high"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "price-high") : ssrLooseEqual(sortOption.value, "price-high")) ? " selected" : ""}>Price: High to Low</option><option value="rating"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "rating") : ssrLooseEqual(sortOption.value, "rating")) ? " selected" : ""}>Highest Rating</option></select></div></div></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8"><!--[-->`);
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
      _push(`</div><div class="bg-white rounded-lg shadow-sm p-6 mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">About First Aid Products</h2><div class="prose max-w-none text-neutral-700"><p> Having the right first aid supplies on hand is essential for quickly addressing minor injuries and emergencies. Our first aid category offers a comprehensive selection of products to help you build a well-stocked first aid kit for your home, office, car, or travel needs. </p><p class="mt-4"> Bandages, gauze, and wound dressings are fundamental components of any first aid kit, providing protection for cuts, scrapes, and burns. We offer a variety of sizes and types to address different wound care needs, from adhesive bandages for minor cuts to larger dressings for more significant injuries. </p><p class="mt-4"> Antiseptics, antibiotic ointments, and wound cleansers play a crucial role in preventing infection and promoting healing. These should be applied to wounds after thorough cleaning and before bandaging. Additionally, our selection includes pain relievers, fever reducers, and allergy medications to address common symptoms. </p><p class="mt-4"> For comprehensive emergency preparedness, consider keeping first aid kits in multiple locations and checking them regularly to ensure supplies are complete and not expired. Our pharmacists can provide guidance on building or supplementing your first aid kit based on your specific needs. </p></div></div><div class="mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">Related Categories</h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/first-aid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=first-aid-BeqSg4r7.js.map
