import { _ as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
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
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ["add-to-cart", "add-to-wishlist", "quick-view"],
  setup(__props, { emit: __emit }) {
    const wishlistClicked = ref(false);
    const getProductImage = (product) => {
      if (product.images) {
        if (Array.isArray(product.images) && product.images.length > 0) {
          return product.images[0];
        }
        if (typeof product.images === "string") {
          try {
            const parsedImages = JSON.parse(product.images);
            if (Array.isArray(parsedImages) && parsedImages.length > 0) {
              return parsedImages[0];
            }
          } catch {
            return product.images;
          }
        }
      }
      return product.image || "/placeholder-product.jpg";
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card group relative animate-fade-in" }, _attrs))}><div class="absolute top-2 left-2 z-10 flex flex-col gap-1">`);
      if (__props.product.discount > 0) {
        _push(`<span class="bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">${ssrInterpolate(__props.product.discount)}% OFF </span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.product.isRx) {
        _push(`<span class="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded"> Prescription </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"><button class="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white text-neutral-700 hover:text-primary-600 transition-colors" title="Quick view"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></button></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${__props.product.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="aspect-square overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", getProductImage(__props.product))}${ssrRenderAttr("alt", __props.product.name)} class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "aspect-square overflow-hidden" }, [
                createVNode("img", {
                  src: getProductImage(__props.product),
                  alt: __props.product.name,
                  class: "w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                }, null, 8, ["src", "alt"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-4"><p class="text-xs text-neutral-500 mb-1">${ssrInterpolate(((_a = __props.product.category) == null ? void 0 : _a.name) || __props.product.category)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${__props.product.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-medium text-neutral-800 hover:text-primary-600 transition-colors line-clamp-2 mb-2"${_scopeId}>${ssrInterpolate(__props.product.name)}</h3>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-neutral-800 hover:text-primary-600 transition-colors line-clamp-2 mb-2" }, toDisplayString(__props.product.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center mb-3"><div class="flex text-warning-500"><!--[-->`);
      ssrRenderList(5, (n) => {
        _push(`<svg class="${ssrRenderClass([[n <= Math.floor(__props.product.rating) ? "text-yellow-400" : "text-gray-300"], "w-4 h-4"])}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
      });
      _push(`<!--]--></div><span class="text-xs text-neutral-500 ml-1">(${ssrInterpolate(__props.product.reviews)})</span></div><div class="flex items-center justify-between mb-3"><div>`);
      if (__props.product.discount > 0) {
        _push(`<span class="text-neutral-500 text-sm line-through mr-2"> $${ssrInterpolate((__props.product.price * (1 + __props.product.discount / 100)).toFixed(2))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="font-semibold text-neutral-900">$${ssrInterpolate(__props.product.price.toFixed(2))}</span></div>`);
      if (__props.product.stock === 0) {
        _push(`<span class="text-xs text-accent-600 font-medium">Out of Stock</span>`);
      } else if (__props.product.requiresPrescription) {
        _push(`<span class="text-xs text-primary-600 font-medium">Rx Required</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex gap-2">`);
      if (__props.product.requiresPrescription) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product/${__props.product.slug}`,
          class: "btn-primary py-1.5 flex-grow text-center text-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Details `);
            } else {
              return [
                createTextVNode(" View Details ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (__props.product.stock > 0) {
        _push(`<button class="btn-primary py-1.5 flex-grow text-sm"> Add to Cart </button>`);
      } else {
        _push(`<button disabled class="btn-primary py-1.5 flex-grow text-sm opacity-50 cursor-not-allowed"> Out of Stock </button>`);
      }
      _push(`<button class="${ssrRenderClass([{ "text-red-500": unref(wishlistClicked) }, "btn-ghost py-1.5 px-3 text-sm transition-all duration-300 hover:scale-110"])}">`);
      if (!unref(wishlistClicked)) {
        _push(`<svg class="w-5 h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5 transition-all duration-300 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`);
      }
      _push(`</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProductCard-0zuHsmiv.js.map
