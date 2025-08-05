import { a as useAuthStore, _ as __nuxt_component_0, g as __nuxt_component_1 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useCartStore } from "./cart-Cj2Ys50X.js";
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
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const authStore = useAuthStore();
    const mobileMenuOpen = ref(false);
    ref(false);
    ref(false);
    ref(null);
    computed(() => authStore.isLoggedIn);
    const mainNavItems = [
      { name: "Home", path: "/" },
      { name: "All Products", path: "/products" },
      { name: "Prescription", path: "/category/prescription" },
      { name: "Medical Equipment", path: "/category/medical-devices" },
      { name: "Health Blog", path: "/blog" },
      { name: "Book Consultation", path: "/book-consultation" },
      { name: "Health Assessment", path: "/health-assessment" },
      { name: "Drug Information", path: "/drug-info" },
      { name: "Contact", path: "/contact" }
    ];
    const categories = [
      { name: "Pain Relief", slug: "pain-relief" },
      { name: "Cold & Flu", slug: "cold-flu" },
      { name: "Allergy", slug: "allergy" },
      { name: "Diabetes Care", slug: "diabetes-care" },
      { name: "First Aid", slug: "first-aid" },
      { name: "Vitamins & Supplements", slug: "vitamins-supplements" },
      { name: "Personal Care", slug: "personal-care" },
      { name: "Skin Care", slug: "skin-care" },
      { name: "Medical Devices", slug: "medical-devices" },
      { name: "OTC Medicines", slug: "otc-medicines" },
      { name: "Heart Health", slug: "heart-health" }
    ];
    computed(() => cartStore.items);
    computed(() => cartStore.itemCount);
    computed(() => cartStore.total);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-sm sticky top-0 z-50 animate-fade-in" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "absolute left-0 top-0 h-full flex items-center px-8 bg-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://placehold.co/200x50?text=Long%20Châu" alt="Long Châu Logo" class="h-10"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "https://placehold.co/200x50?text=Long%20Châu",
                alt: "Long Châu Logo",
                class: "h-10"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container-custom"><div class="hidden md:flex items-center justify-between py-2 border-b border-neutral-100 text-sm"><div class="flex items-center space-x-6"></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shipping-policy",
        class: "text-neutral-600 hover:text-primary-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shipping`);
          } else {
            return [
              createTextVNode("Shipping")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "text-neutral-600 hover:text-primary-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQs`);
          } else {
            return [
              createTextVNode("FAQs")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-neutral-300">|</span>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div><div class="flex items-center justify-between py-4 px-8"><nav class="hidden lg:flex items-center justify-between w-full"><div class="flex items-center space-x-12 flex-1 mr-16"><!--[-->`);
      ssrRenderList(mainNavItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path,
          class: "font-medium text-neutral-700 hover:text-primary-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</nav><button class="lg:hidden ml-2 flex items-center justify-center h-10 w-10 rounded-full hover:bg-neutral-100">`);
      if (!mobileMenuOpen.value) {
        _push(`<span class="i-iconify-ph-list-bold text-2xl"></span>`);
      } else {
        _push(`<span class="i-iconify-ph-x-bold text-2xl"></span>`);
      }
      _push(`</button></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="lg:hidden bg-white border-t border-neutral-100 animate-slide-up"><div class="container-custom py-4"><nav class="space-y-2"><!--[-->`);
        ssrRenderList(mainNavItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.path,
            to: item.path,
            class: "block py-2 font-medium text-neutral-700 hover:text-primary-600 border-b border-neutral-100 last:border-b-0"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav><div class="mt-4 pt-4 border-t border-neutral-100 flex flex-col space-y-2">`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-neutral-50 border-t border-b border-neutral-200"><div class="container-custom relative flex items-center"><button class="absolute left-0 z-10 flex items-center justify-center w-8 h-8 text-neutral-900 hover:opacity-70"><img src="https://raw.githubusercontent.com/ionic-team/ionicons/main/src/svg/chevron-back-outline.svg" alt="Previous" class="w-6 h-6"></button><nav class="flex-1 flex items-center space-x-8 py-2 overflow-x-auto hide-scrollbar scroll-smooth mx-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/book-consultation",
        class: "whitespace-nowrap text-sm font-medium text-primary-600 hover:text-primary-700 py-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book Consultation `);
          } else {
            return [
              createTextVNode(" Book Consultation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "whitespace-nowrap text-sm font-medium text-green-600 hover:text-green-700 py-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Health Blog `);
          } else {
            return [
              createTextVNode(" Health Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/search",
        class: "whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-700 py-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Search Products `);
          } else {
            return [
              createTextVNode(" Search Products ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: category.slug,
          to: `/category/${category.slug}`,
          class: "whitespace-nowrap text-sm text-neutral-600 hover:text-primary-600 py-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/drug-info",
        class: "whitespace-nowrap text-sm text-neutral-600 hover:text-primary-600 py-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Drug Information `);
          } else {
            return [
              createTextVNode(" Drug Information ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><button class="absolute right-0 z-10 flex items-center justify-center w-8 h-8 text-neutral-900 hover:opacity-70"><img src="https://raw.githubusercontent.com/ionic-team/ionicons/main/src/svg/chevron-forward-outline.svg" alt="Next" class="w-6 h-6"></button></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=SiteHeader-B0FeUk7V.js.map
