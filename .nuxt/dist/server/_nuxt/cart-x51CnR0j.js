import { _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useCartStore } from "./cart-Cj2Ys50X.js";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    useNotificationsStore();
    const promoCode = ref("");
    const promoError = ref("");
    const promoSuccess = ref("");
    const discount = ref(0);
    ref([]);
    const cartItems = computed(() => cartStore.items);
    const cartItemCount = computed(() => cartStore.itemCount);
    const cartTotal = computed(() => cartStore.total);
    const shipping = computed(() => cartTotal.value > 50 ? 0 : 5.99);
    const tax = computed(() => cartTotal.value * 0.08);
    const orderTotal = computed(() => cartTotal.value + shipping.value + tax.value - discount.value);
    watch(promoCode, () => {
      promoError.value = "";
      promoSuccess.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><div class="flex items-center justify-between mb-6"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900">Cart Items (${ssrInterpolate(cartItemCount.value)})</h1><button class="text-sm text-neutral-500 hover:text-accent-600">Clear Cart</button></div>`);
      if (cartItems.value.length === 0) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-8 text-center"><div class="w-20 h-20 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center"><span class="i-iconify-ph-shopping-cart-fill text-3xl text-neutral-400"></span></div><h2 class="text-xl font-semibold text-neutral-800 mb-3">Your cart is empty</h2><p class="text-neutral-600 mb-6">Looks like you haven&#39;t added any items to your cart yet.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Continue Shopping`);
            } else {
              return [
                createTextVNode("Continue Shopping")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-sm divide-y divide-neutral-100"><!--[-->`);
        ssrRenderList(cartItems.value, (item, index) => {
          _push(`<div class="p-6 flex items-start space-x-4"><div class="w-24 h-24 flex-shrink-0"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="w-full h-full object-cover rounded-md"></div><div class="flex-1 min-w-0"><div class="flex justify-between"><div><h3 class="text-lg font-medium text-neutral-900 mb-1">${ssrInterpolate(item.name)}</h3><p class="text-sm text-neutral-500">Unit Price: $${ssrInterpolate(item.price.toFixed(2))}</p></div><p class="text-lg font-medium text-neutral-900">$${ssrInterpolate((item.price * item.quantity).toFixed(2))}</p></div><div class="flex items-center justify-between mt-4"><div class="flex items-center space-x-4"><div class="inline-flex items-center border border-neutral-200 rounded-md"><button${ssrIncludeBooleanAttr(item.quantity <= 1) ? " disabled" : ""} class="w-10 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-50"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg></button><span class="w-12 text-center font-medium">${ssrInterpolate(item.quantity)}</span><button${ssrIncludeBooleanAttr(item.quantity >= 10) ? " disabled" : ""} class="w-10 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-50"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></button></div></div><div class="flex items-center space-x-3"><button class="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-white hover:text-primary-600 border border-primary-600 transition-all duration-500"> Save for Later </button><button class="px-4 py-2 rounded-md bg-accent-600 text-white hover:bg-white hover:text-accent-600 border border-accent-600 transition-all duration-500"> Remove </button></div></div></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-flex items-center text-primary-600 hover:text-primary-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="i-iconify-ph-arrow-left text-lg mr-2"${_scopeId}></span> Continue Shopping `);
            } else {
              return [
                createVNode("span", { class: "i-iconify-ph-arrow-left text-lg mr-2" }),
                createTextVNode(" Continue Shopping ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-sm sticky top-24"><div class="p-6"><h2 class="text-xl font-semibold text-neutral-900 mb-6">Order Summary</h2><div class="space-y-4 text-neutral-600"><div class="flex justify-between"><span>Subtotal</span><span class="font-medium text-neutral-900">$${ssrInterpolate(cartTotal.value.toFixed(2))}</span></div><div class="flex justify-between"><span>Shipping</span>`);
        if (cartTotal.value > 50) {
          _push(`<span class="text-success-600 font-medium">Free</span>`);
        } else {
          _push(`<span class="font-medium text-neutral-900">$${ssrInterpolate(shipping.value.toFixed(2))}</span>`);
        }
        _push(`</div><div class="flex justify-between"><span>Tax (8%)</span><span class="font-medium text-neutral-900">$${ssrInterpolate(tax.value.toFixed(2))}</span></div>`);
        if (discount.value > 0) {
          _push(`<div class="flex justify-between text-success-600"><span>Discount</span><span>-$${ssrInterpolate(discount.value.toFixed(2))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="border-t border-neutral-200 pt-4 mt-4"><div class="flex justify-between text-lg"><span class="font-semibold text-neutral-900">Total</span><span class="font-bold text-neutral-900">$${ssrInterpolate(orderTotal.value.toFixed(2))}</span></div></div></div><div class="mb-6"><div class="flex gap-2"><input type="text" placeholder="Promo code"${ssrRenderAttr("value", promoCode.value)} class="input flex-grow"><button class="btn-outline px-4 whitespace-nowrap">Apply</button></div>`);
        if (promoError.value) {
          _push(`<p class="text-sm text-accent-600 mt-1">${ssrInterpolate(promoError.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (promoSuccess.value) {
          _push(`<p class="text-sm text-success-600 mt-1">${ssrInterpolate(promoSuccess.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/checkout",
          class: "btn-primary w-full flex justify-center py-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Proceed to Checkout `);
            } else {
              return [
                createTextVNode(" Proceed to Checkout ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cart-x51CnR0j.js.map
