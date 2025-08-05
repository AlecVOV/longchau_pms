import { _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "ProductListItem",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ["add-to-cart", "quick-view", "add-to-wishlist"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const wishlistClicked = ref(false);
    const discountedPrice = computed(() => {
      if (props.product.discount > 0) {
        return props.product.price * (1 - props.product.discount / 100);
      }
      return props.product.price;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow" }, _attrs))} data-v-c238dc97><div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6" data-v-c238dc97><div class="flex-shrink-0 w-full md:w-32 h-32" data-v-c238dc97>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${__props.product.slug}`,
        class: "block w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", __props.product.image || "/placeholder-product.jpg")}${ssrRenderAttr("alt", __props.product.name)} class="w-full h-full object-cover rounded-lg" loading="lazy" data-v-c238dc97${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: __props.product.image || "/placeholder-product.jpg",
                alt: __props.product.name,
                class: "w-full h-full object-cover rounded-lg",
                loading: "lazy"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-grow" data-v-c238dc97><div class="flex flex-col md:flex-row md:justify-between" data-v-c238dc97><div class="flex-grow" data-v-c238dc97>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${__props.product.slug}`,
        class: "text-lg font-semibold text-gray-900 hover:text-blue-600 line-clamp-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.product.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.product.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.product.brand) {
        _push(`<p class="text-sm text-gray-600 mt-1" data-v-c238dc97>${ssrInterpolate(__props.product.brand)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-gray-600 mt-2 line-clamp-2" data-v-c238dc97>${ssrInterpolate(__props.product.description)}</p><div class="flex flex-wrap gap-2 mt-3" data-v-c238dc97>`);
      if (__props.product.category) {
        _push(`<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full" data-v-c238dc97>${ssrInterpolate(__props.product.category.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.product.prescriptionRequired) {
        _push(`<span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full" data-v-c238dc97> Prescription Required </span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.product.stock <= 5 && __props.product.stock > 0) {
        _push(`<span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full" data-v-c238dc97> Low Stock </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex flex-col items-end justify-between mt-4 md:mt-0 md:ml-6" data-v-c238dc97><div class="text-right mb-4" data-v-c238dc97>`);
      if (__props.product.discount > 0) {
        _push(`<div class="flex items-center space-x-2" data-v-c238dc97><span class="text-lg font-bold text-green-600" data-v-c238dc97> $${ssrInterpolate(unref(discountedPrice).toFixed(2))}</span><span class="text-sm text-gray-500 line-through" data-v-c238dc97> $${ssrInterpolate(__props.product.price.toFixed(2))}</span><span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full" data-v-c238dc97>${ssrInterpolate(__props.product.discount)}% OFF </span></div>`);
      } else {
        _push(`<div class="text-lg font-bold text-gray-900" data-v-c238dc97> $${ssrInterpolate(__props.product.price.toFixed(2))}</div>`);
      }
      _push(`</div><div class="mb-4" data-v-c238dc97>`);
      if (__props.product.stock > 0) {
        _push(`<span class="text-sm text-green-600 font-medium" data-v-c238dc97>${ssrInterpolate(__props.product.stock)} in stock </span>`);
      } else {
        _push(`<span class="text-sm text-red-600 font-medium" data-v-c238dc97> Out of stock </span>`);
      }
      _push(`</div><div class="flex flex-col space-y-2 w-full md:w-auto" data-v-c238dc97><div class="flex space-x-2" data-v-c238dc97>`);
      if (__props.product.stock > 0) {
        _push(`<button class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm font-medium" data-v-c238dc97> Add to Cart </button>`);
      } else {
        _push(`<button class="flex-1 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium" disabled data-v-c238dc97> Out of Stock </button>`);
      }
      _push(`<button class="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-sm" title="Quick view" data-v-c238dc97><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c238dc97><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-c238dc97></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-c238dc97></path></svg></button><button class="${ssrRenderClass([{ "border-red-300 text-red-500 bg-red-50": unref(wishlistClicked) }, "px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 text-sm"])}" title="Add to wishlist" data-v-c238dc97>`);
      if (!unref(wishlistClicked)) {
        _push(`<svg class="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c238dc97><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-c238dc97></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4 transition-all duration-300 text-red-500" fill="currentColor" viewBox="0 0 24 24" data-v-c238dc97><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-v-c238dc97></path></svg>`);
      }
      _push(`</button></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${__props.product.slug}`,
        class: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-sm font-medium text-center"
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
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c238dc97"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=ProductListItem-BJi2mMRf.js.map
