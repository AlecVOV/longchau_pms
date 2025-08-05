import { _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderTeleport, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
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
  __name: "ProductQuickView",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default: null
    }
  },
  emits: ["close", "add-to-cart", "add-to-wishlist"],
  setup(__props, { emit: __emit }) {
    useNotificationsStore();
    const props = __props;
    const quantity = ref(1);
    const selectedImageIndex = ref(0);
    const wishlistClicked = ref(false);
    const productImages = computed(() => {
      var _a;
      if (!((_a = props.product) == null ? void 0 : _a.images)) return [];
      if (Array.isArray(props.product.images)) {
        return props.product.images;
      }
      if (typeof props.product.images === "string") {
        try {
          const parsed = JSON.parse(props.product.images);
          return Array.isArray(parsed) ? parsed : [parsed];
        } catch {
          return [props.product.images];
        }
      }
      return [];
    });
    const getProductImage = (product) => {
      if (productImages.value.length > 0) {
        return productImages.value[selectedImageIndex.value] || productImages.value[0];
      }
      return (product == null ? void 0 : product.image) || "/placeholder-product.jpg";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      ssrRenderTeleport(_push, (_push2) => {
        var _a;
        if (__props.isOpen) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div><div class="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"><div class="absolute top-4 right-4 z-10"><button class="bg-white rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors shadow-md"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
          if (__props.product) {
            _push2(`<div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="space-y-4"><div class="aspect-square overflow-hidden rounded-lg bg-gray-100"><img${ssrRenderAttr("src", getProductImage(__props.product))}${ssrRenderAttr("alt", __props.product.name)} class="w-full h-full object-cover"></div>`);
            if (unref(productImages).length > 1) {
              _push2(`<div class="flex space-x-2 overflow-x-auto"><!--[-->`);
              ssrRenderList(unref(productImages), (image, index) => {
                _push2(`<button class="${ssrRenderClass([{
                  "ring-2 ring-blue-500": unref(selectedImageIndex) === index,
                  "ring-1 ring-gray-300": unref(selectedImageIndex) !== index
                }, "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden"])}"><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `${__props.product.name} ${index + 1}`)} class="w-full h-full object-cover"></button>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-6"><div><p class="text-sm text-gray-500 mb-1">${ssrInterpolate(((_a = __props.product.category) == null ? void 0 : _a.name) || __props.product.category)}</p><h1 class="text-2xl font-bold text-gray-900">${ssrInterpolate(__props.product.name)}</h1></div><div class="flex items-center space-x-2"><div class="flex text-yellow-400"><!--[-->`);
            ssrRenderList(5, (n) => {
              _push2(`<span class="${ssrRenderClass([n <= Math.floor(__props.product.rating || 4.5) ? "i-iconify-ph-star-fill" : "i-iconify-ph-star text-gray-300"])}"></span>`);
            });
            _push2(`<!--]--></div><span class="text-sm text-gray-500">(${ssrInterpolate(__props.product.reviews || 0)} reviews)</span></div><div class="space-y-2"><div class="flex items-center space-x-2">`);
            if (__props.product.discount > 0) {
              _push2(`<span class="text-lg text-gray-500 line-through"> $${ssrInterpolate((__props.product.price * (1 + __props.product.discount / 100)).toFixed(2))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="text-2xl font-bold text-gray-900">$${ssrInterpolate(__props.product.price.toFixed(2))}</span>`);
            if (__props.product.discount > 0) {
              _push2(`<span class="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">${ssrInterpolate(__props.product.discount)}% OFF </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div>`);
            if (__props.product.stock > 0) {
              _push2(`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><svg class="w-1.5 h-1.5 mr-1" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg> In Stock (${ssrInterpolate(__props.product.stock)} available) </span>`);
            } else {
              _push2(`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"> Out of Stock </span>`);
            }
            _push2(`</div>`);
            if (__props.product.shortDescription || __props.product.description) {
              _push2(`<div><h3 class="text-lg font-medium text-gray-900 mb-2">Description</h3><p class="text-gray-600 text-sm leading-relaxed">${ssrInterpolate(__props.product.shortDescription || __props.product.description || "No description available.")}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.product.manufacturer || __props.product.sku) {
              _push2(`<div class="space-y-2"><h3 class="text-lg font-medium text-gray-900">Product Details</h3><div class="grid grid-cols-2 gap-4 text-sm">`);
              if (__props.product.sku) {
                _push2(`<div><span class="font-medium text-gray-500">SKU:</span><span class="ml-2 text-gray-900">${ssrInterpolate(__props.product.sku)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.product.manufacturer) {
                _push2(`<div><span class="font-medium text-gray-500">Brand:</span><span class="ml-2 text-gray-900">${ssrInterpolate(__props.product.manufacturer)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!__props.product.requiresPrescription && __props.product.stock > 0) {
              _push2(`<div><label class="block text-sm font-medium text-gray-700 mb-2">Quantity</label><div class="flex items-center space-x-3"><button class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg></button><span class="w-12 text-center font-medium">${ssrInterpolate(unref(quantity))}</span><button class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-3">`);
            if (__props.product.requiresPrescription) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/product/${__props.product.slug}`,
                class: "w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
              }, {
                default: withCtx((_, _push3, _parent2, _scopeId) => {
                  if (_push3) {
                    _push3(` View Details (Prescription Required) `);
                  } else {
                    return [
                      createTextVNode(" View Details (Prescription Required) ")
                    ];
                  }
                }),
                _: 1
              }, _parent));
            } else if (__props.product.stock > 0) {
              _push2(`<button class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"> Add to Cart - $${ssrInterpolate((__props.product.price * unref(quantity)).toFixed(2))}</button>`);
            } else {
              _push2(`<button disabled class="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg cursor-not-allowed font-medium"> Out of Stock </button>`);
            }
            _push2(`<div class="flex space-x-3"><button class="${ssrRenderClass([{ "border-red-300 text-red-500 bg-red-50": unref(wishlistClicked) }, "flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium flex items-center justify-center"])}">`);
            if (!unref(wishlistClicked)) {
              _push2(`<svg class="w-5 h-5 mr-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`);
            } else {
              _push2(`<svg class="w-5 h-5 mr-2 transition-all duration-300 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`);
            }
            _push2(` Wishlist </button>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/product/${__props.product.slug}`,
              class: "flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
            }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(` View Full Details `);
                } else {
                  return [
                    createTextVNode(" View Full Details ")
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push2(`</div></div></div></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductQuickView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProductQuickView-DoaVLY8v.js.map
