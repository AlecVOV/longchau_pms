import { u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "track-order",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Track Order - Long Châu Pharmacy",
      meta: [
        {
          name: "description",
          content: "Track your Long Châu Pharmacy orders in real-time. Get updates on prescription deliveries, shipping status, and estimated delivery times."
        },
        {
          name: "keywords",
          content: "track order, order tracking, prescription delivery, shipping status, order status"
        }
      ]
    });
    const orderNumber = ref("");
    const email = ref("");
    const isLoading = ref(false);
    const trackingData = ref(null);
    const errorMessage = ref("");
    const getStatusColor = (status) => {
      const colors = {
        "Order Placed": "bg-blue-100 text-blue-800",
        "Processing": "bg-yellow-100 text-yellow-800",
        "In Transit": "bg-purple-100 text-purple-800",
        "Out for Delivery": "bg-orange-100 text-orange-800",
        "Delivered": "bg-green-100 text-green-800",
        "Cancelled": "bg-red-100 text-red-800"
      };
      return colors[status] || "bg-neutral-100 text-neutral-800";
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const formatDateTime = (dateString) => {
      return new Date(dateString).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">Track Order</span></div></li></ol></nav><div class="text-center mb-12"><h1 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Track Your Order</h1><p class="text-lg text-neutral-600 max-w-2xl mx-auto"> Enter your order number or tracking number to get real-time updates on your prescription and health product deliveries. </p></div><div class="max-w-2xl mx-auto mb-12"><div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8"><form class="space-y-6"><div><label for="orderNumber" class="block text-sm font-medium text-neutral-700 mb-2"> Order Number or Tracking Number </label><input id="orderNumber"${ssrRenderAttr("value", orderNumber.value)} type="text" placeholder="Enter your order number (e.g., LC123456789)" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required><p class="text-sm text-neutral-500 mt-2"> You can find your order number in your confirmation email or account dashboard. </p></div><div><label for="email" class="block text-sm font-medium text-neutral-700 mb-2"> Email Address (Optional) </label><input id="email"${ssrRenderAttr("value", email.value)} type="email" placeholder="Enter the email used for this order" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></div><button type="submit"${ssrIncludeBooleanAttr(isLoading.value || !orderNumber.value.trim()) ? " disabled" : ""} class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium">`);
      if (isLoading.value) {
        _push(`<span class="flex items-center justify-center"><span class="i-iconify-ph-spinner animate-spin mr-2"></span> Tracking Order... </span>`);
      } else {
        _push(`<span>Track Order</span>`);
      }
      _push(`</button></form></div></div>`);
      if (trackingData.value) {
        _push(`<div class="space-y-8"><div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8"><div class="flex items-center justify-between mb-6"><h2 class="text-2xl font-bold text-neutral-900">Order Details</h2><span class="${ssrRenderClass([
          "px-3 py-1 rounded-full text-sm font-medium",
          getStatusColor(trackingData.value.status)
        ])}">${ssrInterpolate(trackingData.value.status)}</span></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div><h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Order Number</h3><p class="text-lg font-semibold text-neutral-900">${ssrInterpolate(trackingData.value.orderNumber)}</p></div><div><h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Order Date</h3><p class="text-lg font-semibold text-neutral-900">${ssrInterpolate(formatDate(trackingData.value.orderDate))}</p></div><div><h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Estimated Delivery</h3><p class="text-lg font-semibold text-neutral-900">${ssrInterpolate(formatDate(trackingData.value.estimatedDelivery))}</p></div><div><h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Tracking Number</h3><p class="text-lg font-semibold text-neutral-900">${ssrInterpolate(trackingData.value.trackingNumber)}</p></div></div><div class="mt-6 pt-6 border-t border-neutral-200"><h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Delivery Address</h3><p class="text-neutral-900">${ssrInterpolate(trackingData.value.deliveryAddress)}</p></div></div><div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Tracking Timeline</h2><div class="relative"><div class="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200"></div><div class="space-y-6"><!--[-->`);
        ssrRenderList(trackingData.value.timeline, (event, index) => {
          _push(`<div class="relative flex items-start"><div class="${ssrRenderClass([
            "relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center",
            event.completed ? "bg-green-500 border-green-500" : event.current ? "bg-primary-500 border-primary-500" : "bg-white border-neutral-300"
          ])}">`);
          if (event.completed) {
            _push(`<span class="i-iconify-ph-check text-white text-sm"></span>`);
          } else if (event.current) {
            _push(`<span class="i-iconify-ph-circle text-white text-sm"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="ml-6 flex-1"><div class="flex items-center justify-between"><h3 class="${ssrRenderClass([
            "font-semibold",
            event.completed || event.current ? "text-neutral-900" : "text-neutral-500"
          ])}">${ssrInterpolate(event.title)}</h3><span class="${ssrRenderClass([
            "text-sm",
            event.completed || event.current ? "text-neutral-600" : "text-neutral-400"
          ])}">${ssrInterpolate(event.time ? formatDateTime(event.time) : "Pending")}</span></div><p class="${ssrRenderClass([
            "text-sm mt-1",
            event.completed || event.current ? "text-neutral-600" : "text-neutral-400"
          ])}">${ssrInterpolate(event.description)}</p>`);
          if (event.location) {
            _push(`<p class="${ssrRenderClass([
              "text-xs mt-1",
              event.completed || event.current ? "text-neutral-500" : "text-neutral-400"
            ])}"> 📍 ${ssrInterpolate(event.location)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div></div><div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Order Items</h2><div class="space-y-4"><!--[-->`);
        ssrRenderList(trackingData.value.items, (item) => {
          _push(`<div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg"><div class="flex items-center space-x-4"><div class="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center"><span class="${ssrRenderClass([item.isPrescription ? "i-iconify-ph-pill" : "i-iconify-ph-package", "text-2xl text-neutral-400"])}"></span></div><div><h3 class="font-semibold text-neutral-900">${ssrInterpolate(item.name)}</h3><p class="text-sm text-neutral-600">${ssrInterpolate(item.description)}</p><div class="flex items-center space-x-4 mt-1"><span class="text-sm text-neutral-500">Qty: ${ssrInterpolate(item.quantity)}</span>`);
          if (item.isPrescription) {
            _push(`<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"> Prescription </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="text-right"><p class="font-semibold text-neutral-900">$${ssrInterpolate(item.price.toFixed(2))}</p></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-6 pt-6 border-t border-neutral-200"><div class="flex justify-between items-center"><span class="text-lg font-semibold text-neutral-900">Total</span><span class="text-lg font-bold text-neutral-900">$${ssrInterpolate(trackingData.value.total.toFixed(2))}</span></div></div></div>`);
        if (trackingData.value.deliveryInstructions) {
          _push(`<div class="bg-blue-50 rounded-lg p-6"><h3 class="font-semibold text-neutral-900 mb-2">Delivery Instructions</h3><p class="text-neutral-700">${ssrInterpolate(trackingData.value.deliveryInstructions)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8"><div class="text-center"><h2 class="text-xl font-bold text-neutral-900 mb-4">Need Help with Your Order?</h2><p class="text-neutral-600 mb-6"> Our customer service team is here to help with any questions about your order. </p><div class="flex flex-col sm:flex-row gap-4 justify-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact Support `);
            } else {
              return [
                createTextVNode(" Contact Support ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a href="tel:(028) 73023456" class="bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors font-medium"> Call (028) 73023456 </a></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="max-w-2xl mx-auto"><div class="bg-red-50 border border-red-200 rounded-lg p-6"><div class="flex items-center"><span class="i-iconify-ph-warning-circle text-red-500 text-xl mr-3"></span><div><h3 class="font-semibold text-red-900">Order Not Found</h3><p class="text-red-700 mt-1">${ssrInterpolate(errorMessage.value)}</p></div></div><div class="mt-4"><h4 class="font-medium text-red-900 mb-2">Please check:</h4><ul class="text-sm text-red-700 space-y-1"><li>• Order number is entered correctly</li><li>• Order was placed within the last 90 days</li><li>• Email address matches the order</li></ul></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-12 text-center"><h2 class="text-xl font-semibold text-neutral-900 mb-6">Quick Actions</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/prescriptions",
        class: "bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"${_scopeId}><span class="i-iconify-ph-pill text-blue-600 text-xl"${_scopeId}></span></div><h3 class="font-semibold text-neutral-900 mb-2"${_scopeId}>My Prescriptions</h3><p class="text-sm text-neutral-600"${_scopeId}>View and manage your prescription orders</p>`);
          } else {
            return [
              createVNode("div", { class: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4" }, [
                createVNode("span", { class: "i-iconify-ph-pill text-blue-600 text-xl" })
              ]),
              createVNode("h3", { class: "font-semibold text-neutral-900 mb-2" }, "My Prescriptions"),
              createVNode("p", { class: "text-sm text-neutral-600" }, "View and manage your prescription orders")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4"${_scopeId}><span class="i-iconify-ph-shopping-cart text-green-600 text-xl"${_scopeId}></span></div><h3 class="font-semibold text-neutral-900 mb-2"${_scopeId}>Shopping Cart</h3><p class="text-sm text-neutral-600"${_scopeId}>Continue shopping for health products</p>`);
          } else {
            return [
              createVNode("div", { class: "w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4" }, [
                createVNode("span", { class: "i-iconify-ph-shopping-cart text-green-600 text-xl" })
              ]),
              createVNode("h3", { class: "font-semibold text-neutral-900 mb-2" }, "Shopping Cart"),
              createVNode("p", { class: "text-sm text-neutral-600" }, "Continue shopping for health products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shipping-policy",
        class: "bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4"${_scopeId}><span class="i-iconify-ph-truck text-purple-600 text-xl"${_scopeId}></span></div><h3 class="font-semibold text-neutral-900 mb-2"${_scopeId}>Shipping Info</h3><p class="text-sm text-neutral-600"${_scopeId}>Learn about our shipping options</p>`);
          } else {
            return [
              createVNode("div", { class: "w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4" }, [
                createVNode("span", { class: "i-iconify-ph-truck text-purple-600 text-xl" })
              ]),
              createVNode("h3", { class: "font-semibold text-neutral-900 mb-2" }, "Shipping Info"),
              createVNode("p", { class: "text-sm text-neutral-600" }, "Learn about our shipping options")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/track-order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=track-order-DFnKhjkU.js.map
