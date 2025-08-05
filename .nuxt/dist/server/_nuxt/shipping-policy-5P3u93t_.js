import { u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "shipping-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Shipping Policy - Long Châu Pharmacy",
      meta: [
        {
          name: "description",
          content: "Learn about Long Châu Pharmacy shipping options, delivery times, and policies for prescription and over-the-counter medications. Free shipping on orders over $50."
        },
        {
          name: "keywords",
          content: "shipping policy, delivery, prescription shipping, pharmacy delivery, medication shipping, free shipping"
        }
      ]
    });
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">Shipping Policy</span></div></li></ol></nav><div class="text-center mb-12"><h1 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Shipping Policy</h1><p class="text-lg text-neutral-600 max-w-2xl mx-auto"> Learn about our shipping options, delivery times, and policies for prescription and over-the-counter medications. </p><p class="text-sm text-neutral-500 mt-2">Last updated: June 24, 2025</p></div><div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="text-center"><div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3"><span class="i-iconify-ph-truck text-2xl text-blue-600"></span></div><h3 class="font-semibold text-neutral-900 mb-1">Free Shipping</h3><p class="text-sm text-neutral-600">On orders over $50</p></div><div class="text-center"><div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3"><span class="i-iconify-ph-clock text-2xl text-green-600"></span></div><h3 class="font-semibold text-neutral-900 mb-1">Same-Day Delivery</h3><p class="text-sm text-neutral-600">Available in select areas</p></div><div class="text-center"><div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3"><span class="i-iconify-ph-shield-check text-2xl text-purple-600"></span></div><h3 class="font-semibold text-neutral-900 mb-1">Secure Packaging</h3><p class="text-sm text-neutral-600">Temperature-controlled delivery</p></div></div></div><div class="space-y-12"><section class="bg-white rounded-lg shadow-sm p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Shipping Options</h2><div class="space-y-6"><div class="border border-neutral-200 rounded-lg p-6"><div class="flex items-start justify-between"><div class="flex-1"><h3 class="text-lg font-semibold text-neutral-900 mb-2">Standard Shipping</h3><p class="text-neutral-600 mb-3"> Our most popular shipping option for non-urgent medications and health products. </p><ul class="text-sm text-neutral-600 space-y-1"><li>• Delivery time: 3-5 business days</li><li>• Cost: $7.99 (FREE on orders over $50)</li><li>• Tracking included</li><li>• Signature required for prescription medications</li></ul></div><div class="ml-4 text-right"><span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"> Most Popular </span></div></div></div><div class="border border-neutral-200 rounded-lg p-6"><div class="flex items-start justify-between"><div class="flex-1"><h3 class="text-lg font-semibold text-neutral-900 mb-2">Express Shipping</h3><p class="text-neutral-600 mb-3"> Faster delivery for urgent medication needs. </p><ul class="text-sm text-neutral-600 space-y-1"><li>• Delivery time: 1-2 business days</li><li>• Cost: $14.99</li><li>• Priority handling</li><li>• Real-time tracking</li><li>• Temperature-controlled for sensitive medications</li></ul></div><div class="ml-4 text-right"><span class="text-lg font-bold text-neutral-900">$14.99</span></div></div></div><div class="border border-neutral-200 rounded-lg p-6"><div class="flex items-start justify-between"><div class="flex-1"><h3 class="text-lg font-semibold text-neutral-900 mb-2">Same-Day Delivery</h3><p class="text-neutral-600 mb-3"> Available in select metropolitan areas for urgent prescriptions. </p><ul class="text-sm text-neutral-600 space-y-1"><li>• Delivery time: Within 4-6 hours</li><li>• Cost: $24.99</li><li>• Available in: New York, Los Angeles, Chicago, Houston</li><li>• Order by 2 PM for same-day delivery</li><li>• Direct delivery by licensed courier</li></ul></div><div class="ml-4 text-right"><span class="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded mb-2"> Limited Areas </span><div class="text-lg font-bold text-neutral-900">$24.99</div></div></div></div><div class="border border-neutral-200 rounded-lg p-6"><div class="flex items-start justify-between"><div class="flex-1"><h3 class="text-lg font-semibold text-neutral-900 mb-2">Store Pickup</h3><p class="text-neutral-600 mb-3"> Collect your order from one of our partner pharmacy locations. </p><ul class="text-sm text-neutral-600 space-y-1"><li>• Ready for pickup: 2-4 hours</li><li>• Cost: FREE</li><li>• Available at 200+ locations nationwide</li><li>• Consultation available on-site</li><li>• Valid ID required for pickup</li></ul></div><div class="ml-4 text-right"><span class="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded mb-2"> FREE </span></div></div></div></div></section><section class="bg-white rounded-lg shadow-sm p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Special Handling for Medications</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="text-lg font-semibold text-neutral-900 mb-4">Prescription Medications</h3><ul class="space-y-3 text-neutral-600"><li class="flex items-start"><span class="i-iconify-ph-check-circle text-green-500 mr-2 mt-0.5"></span><span>Secure, tamper-evident packaging</span></li><li class="flex items-start"><span class="i-iconify-ph-check-circle text-green-500 mr-2 mt-0.5"></span><span>Signature required upon delivery</span></li><li class="flex items-start"><span class="i-iconify-ph-check-circle text-green-500 mr-2 mt-0.5"></span><span>Temperature monitoring for sensitive drugs</span></li><li class="flex items-start"><span class="i-iconify-ph-check-circle text-green-500 mr-2 mt-0.5"></span><span>Discrete packaging for privacy</span></li><li class="flex items-start"><span class="i-iconify-ph-check-circle text-green-500 mr-2 mt-0.5"></span><span>HIPAA-compliant handling procedures</span></li></ul></div><div><h3 class="text-lg font-semibold text-neutral-900 mb-4">Controlled Substances</h3><ul class="space-y-3 text-neutral-600"><li class="flex items-start"><span class="i-iconify-ph-shield-check text-blue-500 mr-2 mt-0.5"></span><span>Enhanced security protocols</span></li><li class="flex items-start"><span class="i-iconify-ph-shield-check text-blue-500 mr-2 mt-0.5"></span><span>Adult signature required (21+)</span></li><li class="flex items-start"><span class="i-iconify-ph-shield-check text-blue-500 mr-2 mt-0.5"></span><span>Photo ID verification</span></li><li class="flex items-start"><span class="i-iconify-ph-shield-check text-blue-500 mr-2 mt-0.5"></span><span>DEA-compliant tracking</span></li><li class="flex items-start"><span class="i-iconify-ph-shield-check text-blue-500 mr-2 mt-0.5"></span><span>No delivery to PO boxes</span></li></ul></div></div></section><section class="bg-white rounded-lg shadow-sm p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Order Processing Times</h2><div class="overflow-x-auto"><table class="w-full border-collapse"><thead><tr class="border-b border-neutral-200"><th class="text-left py-3 px-4 font-semibold text-neutral-900">Order Type</th><th class="text-left py-3 px-4 font-semibold text-neutral-900">Processing Time</th><th class="text-left py-3 px-4 font-semibold text-neutral-900">Notes</th></tr></thead><tbody class="divide-y divide-neutral-100"><tr><td class="py-3 px-4">OTC Medications</td><td class="py-3 px-4">Same day if ordered by 3 PM</td><td class="py-3 px-4 text-sm text-neutral-600">Ready to ship within hours</td></tr><tr><td class="py-3 px-4">New Prescriptions</td><td class="py-3 px-4">2-4 hours</td><td class="py-3 px-4 text-sm text-neutral-600">Pharmacist verification required</td></tr><tr><td class="py-3 px-4">Prescription Refills</td><td class="py-3 px-4">1-2 hours</td><td class="py-3 px-4 text-sm text-neutral-600">Automated processing available</td></tr><tr><td class="py-3 px-4">Controlled Substances</td><td class="py-3 px-4">4-8 hours</td><td class="py-3 px-4 text-sm text-neutral-600">Additional verification steps</td></tr><tr><td class="py-3 px-4">Specialty Medications</td><td class="py-3 px-4">1-2 business days</td><td class="py-3 px-4 text-sm text-neutral-600">May require special ordering</td></tr></tbody></table></div></section><section class="bg-white rounded-lg shadow-sm p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Delivery Areas &amp; Restrictions</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div><h3 class="text-lg font-semibold text-neutral-900 mb-4">Nationwide Coverage</h3><p class="text-neutral-600 mb-4"> We ship to all 50 US states, Washington D.C., and US territories including Puerto Rico, US Virgin Islands, and Guam. </p><h4 class="font-semibold text-neutral-900 mb-2">Same-Day Delivery Cities</h4><ul class="grid grid-cols-2 gap-1 text-sm text-neutral-600"><li>• New York City</li><li>• Los Angeles</li><li>• Chicago</li><li>• Houston</li><li>• Phoenix</li><li>• Philadelphia</li><li>• San Antonio</li><li>• San Diego</li><li>• Dallas</li><li>• San Jose</li></ul></div><div><h3 class="text-lg font-semibold text-neutral-900 mb-4">Shipping Restrictions</h3><div class="space-y-4"><div><h4 class="font-semibold text-neutral-800 mb-2">Cannot Ship To:</h4><ul class="text-sm text-neutral-600 space-y-1"><li>• PO Boxes (for controlled substances)</li><li>• International addresses</li><li>• Military bases overseas (APO/FPO)</li></ul></div><div><h4 class="font-semibold text-neutral-800 mb-2">Special Requirements:</h4><ul class="text-sm text-neutral-600 space-y-1"><li>• Some medications require refrigeration</li><li>• Controlled substances need adult signature</li><li>• Certain states have additional regulations</li></ul></div></div></div></div></section><section class="bg-white rounded-lg shadow-sm p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Important Policies</h2><div class="space-y-6"><div><h3 class="text-lg font-semibold text-neutral-900 mb-3">Delivery Attempts</h3><p class="text-neutral-600 mb-3"> Our carrier will make up to 3 delivery attempts. If delivery is unsuccessful after 3 attempts: </p><ul class="text-sm text-neutral-600 space-y-1 ml-4"><li>• Package will be held at local facility for 5 business days</li><li>• You&#39;ll receive pickup instructions via email and SMS</li><li>• After 5 days, package will be returned to us</li><li>• Returned packages may incur reshipping fees</li></ul></div><div><h3 class="text-lg font-semibold text-neutral-900 mb-3">Weather &amp; Holiday Delays</h3><p class="text-neutral-600 mb-3"> Shipping may be delayed due to: </p><ul class="text-sm text-neutral-600 space-y-1 ml-4"><li>• Severe weather conditions</li><li>• Federal holidays</li><li>• Natural disasters</li><li>• Carrier service disruptions</li></ul><p class="text-sm text-neutral-600 mt-3"> We&#39;ll notify you immediately of any delays and provide updated delivery estimates. </p></div><div><h3 class="text-lg font-semibold text-neutral-900 mb-3">Package Tracking</h3><p class="text-neutral-600 mb-3"> All shipments include tracking information: </p><ul class="text-sm text-neutral-600 space-y-1 ml-4"><li>• Tracking number provided via email</li><li>• Real-time updates available online</li><li>• SMS notifications for delivery updates</li><li>• Delivery confirmation with signature</li></ul></div><div><h3 class="text-lg font-semibold text-neutral-900 mb-3">Damaged or Lost Packages</h3><p class="text-neutral-600 mb-3"> If your package arrives damaged or goes missing: </p><ul class="text-sm text-neutral-600 space-y-1 ml-4"><li>• Contact us within 24 hours of delivery</li><li>• We&#39;ll investigate with the carrier</li><li>• Replacement shipped at no charge</li><li>• Claims processed within 5-7 business days</li></ul></div></div></section><section class="bg-blue-50 rounded-lg p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Questions About Shipping?</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="font-semibold text-neutral-900 mb-3">Contact Our Shipping Team</h3><div class="space-y-2 text-neutral-600"><p class="flex items-center"><span class="i-iconify-ph-phone mr-2"></span><span>(028) 73023456 (Option 2)</span></p><p class="flex items-center"><span class="i-iconify-ph-envelope mr-2"></span><span>shipping@longchau.com</span></p><p class="flex items-center"><span class="i-iconify-ph-clock mr-2"></span><span>Monday - Friday: 8 AM - 8 PM EST</span></p></div></div><div><h3 class="font-semibold text-neutral-900 mb-3">Quick Actions</h3><div class="space-y-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/track-order",
        class: "block bg-white rounded-lg p-3 hover:shadow-sm transition-shadow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><span class="i-iconify-ph-package text-primary-600 mr-3"${_scopeId}></span><span class="font-medium text-neutral-900"${_scopeId}>Track Your Order</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("span", { class: "i-iconify-ph-package text-primary-600 mr-3" }),
                createVNode("span", { class: "font-medium text-neutral-900" }, "Track Your Order")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "block bg-white rounded-lg p-3 hover:shadow-sm transition-shadow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><span class="i-iconify-ph-chat-circle text-primary-600 mr-3"${_scopeId}></span><span class="font-medium text-neutral-900"${_scopeId}>Contact Support</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("span", { class: "i-iconify-ph-chat-circle text-primary-600 mr-3" }),
                createVNode("span", { class: "font-medium text-neutral-900" }, "Contact Support")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "block bg-white rounded-lg p-3 hover:shadow-sm transition-shadow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><span class="i-iconify-ph-question text-primary-600 mr-3"${_scopeId}></span><span class="font-medium text-neutral-900"${_scopeId}>Shipping FAQ</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("span", { class: "i-iconify-ph-question text-primary-600 mr-3" }),
                createVNode("span", { class: "font-medium text-neutral-900" }, "Shipping FAQ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shipping-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=shipping-policy-5P3u93t_.js.map
