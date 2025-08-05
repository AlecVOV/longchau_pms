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
  __name: "vitamins-supplements",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const sortOption = ref("popular");
    const visibleProducts = ref(productsPerPage);
    const products = [
      {
        id: 401,
        name: "Premium Digital Blood Pressure Monitor",
        slug: "premium-digital-blood-pressure-monitor",
        category: "Heart Health",
        price: 49.99,
        image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg",
        rating: 4.9,
        reviews: 89,
        inStock: true,
        isRx: false,
        discount: 10
      },
      {
        id: 402,
        name: "Omega-3 Fish Oil Softgels",
        slug: "omega-3-fish-oil-softgels",
        category: "Heart Health",
        price: 24.99,
        image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg",
        rating: 4.7,
        reviews: 76,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 403,
        name: "Cholesterol Support Complex",
        slug: "cholesterol-support-complex",
        category: "Heart Health",
        price: 29.99,
        image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg",
        rating: 4.5,
        reviews: 42,
        inStock: true,
        isRx: false,
        discount: 5
      },
      {
        id: 404,
        name: "CoQ10 100mg Capsules",
        slug: "coq10-100mg-capsules",
        category: "Heart Health",
        price: 27.99,
        image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg",
        rating: 4.8,
        reviews: 63,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 405,
        name: "Wrist Blood Pressure Monitor",
        slug: "wrist-blood-pressure-monitor",
        category: "Heart Health",
        price: 34.99,
        image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg",
        rating: 4.3,
        reviews: 38,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 406,
        name: "Plant Sterols Supplement",
        slug: "plant-sterols-supplement",
        category: "Heart Health",
        price: 19.99,
        image: "https://images.pexels.com/photos/5528884/pexels-photo-5528884.jpeg",
        rating: 4.4,
        reviews: 29,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 407,
        name: "Garlic Extract Tablets",
        slug: "garlic-extract-tablets",
        category: "Heart Health",
        price: 14.99,
        image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg",
        rating: 4.5,
        reviews: 47,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 408,
        name: "Blood Pressure Log Book",
        slug: "blood-pressure-log-book",
        category: "Heart Health",
        price: 7.99,
        image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg",
        rating: 4.6,
        reviews: 32,
        inStock: true,
        isRx: false,
        discount: 0
      },
      {
        id: 409,
        name: "Circulation Support Formula",
        slug: "circulation-support-formula",
        category: "Heart Health",
        price: 22.99,
        image: "https://images.pexels.com/photos/5528884/pexels-photo-5528884.jpeg",
        rating: 4.4,
        reviews: 26,
        inStock: true,
        isRx: false,
        discount: 5
      },
      {
        id: 410,
        name: "Heart Health Monitoring Kit",
        slug: "heart-health-monitoring-kit",
        category: "Heart Health",
        price: 89.99,
        image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg",
        rating: 4.9,
        reviews: 52,
        inStock: true,
        isRx: false,
        discount: 15
      }
    ];
    const relatedCategories = [
      {
        name: "Diabetes Care",
        slug: "diabetes-care",
        icon: "🩸"
      },
      {
        name: "Medical Devices",
        slug: "medical-devices",
        icon: "🩺"
      },
      {
        name: "Vitamins",
        slug: "vitamins",
        icon: "💊"
      },
      {
        name: "Pain Relief",
        slug: "pain-relief",
        icon: "🏥"
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">Heart Health</span></div></li></ol></nav><div class="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 mb-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"><div class="md:col-span-2"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Heart Health</h1><p class="text-neutral-600 max-w-2xl"> Support your cardiovascular health with our range of heart-focused medications, supplements, and monitoring devices designed to promote healthy blood pressure, cholesterol levels, and overall heart function. </p></div><div class="hidden md:block"><img src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg" alt="Heart Health" class="w-32 h-32 object-cover rounded-full mx-auto"></div></div></div><div class="bg-white rounded-lg shadow-sm p-4 mb-8"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div class="flex items-center gap-2"><label for="sort" class="text-sm text-neutral-600">Sort by:</label><select id="sort" class="text-sm border-neutral-300 rounded-md"><option value="popular"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "popular") : ssrLooseEqual(sortOption.value, "popular")) ? " selected" : ""}>Most Popular</option><option value="price-low"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "price-low") : ssrLooseEqual(sortOption.value, "price-low")) ? " selected" : ""}>Price: Low to High</option><option value="price-high"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "price-high") : ssrLooseEqual(sortOption.value, "price-high")) ? " selected" : ""}>Price: High to Low</option><option value="rating"${ssrIncludeBooleanAttr(Array.isArray(sortOption.value) ? ssrLooseContain(sortOption.value, "rating") : ssrLooseEqual(sortOption.value, "rating")) ? " selected" : ""}>Highest Rating</option></select></div></div></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8"><!--[-->`);
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
      _push(`</div><div class="bg-white rounded-lg shadow-sm p-6 mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">About Heart Health Products</h2><div class="prose max-w-none text-neutral-700"><p> Maintaining a healthy cardiovascular system is essential for overall wellness and longevity. Our heart health category features a comprehensive range of products designed to support optimal heart function and monitor cardiovascular health. </p><p class="mt-4"> Blood pressure monitors are valuable tools for tracking this important health metric at home, allowing you to maintain awareness of your cardiovascular health between doctor visits. We offer both traditional and digital monitors to suit your preferences. </p><p class="mt-4"> For those managing cholesterol or seeking preventative care, we provide a selection of supplements clinically shown to support heart health, including omega-3 fatty acids, CoQ10, and plant sterols. These supplements work alongside a healthy lifestyle to promote optimal cardiovascular function. </p><p class="mt-4"> Our pharmacists can help guide you in selecting appropriate products based on your specific health needs and any medications you may be taking. Always consult with your healthcare provider before starting any new supplement regimen. </p></div></div><div class="mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">Related Categories</h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/vitamins-supplements.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=vitamins-supplements-DA8YJzq-.js.map
