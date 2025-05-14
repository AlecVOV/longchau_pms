import __nuxt_component_0 from './Icon-V7KX5z6a.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './config-Dy4W0jDo.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "gift-cards",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedAmount = ref(100);
    const selectedPhysicalAmount = ref(100);
    const giftCardFaqs = ref([
      {
        question: "How long are gift cards valid?",
        answer: "Our gift cards are valid for 5 years from the date of purchase and can be used for any menu items or experiences at Gourmet Restaurant.",
        open: true
      },
      {
        question: "Can I use gift cards for online ordering?",
        answer: "Yes! Gift cards can be used for both in-restaurant dining and online ordering. Simply enter the gift card number and PIN during checkout on our website.",
        open: false
      },
      {
        question: "How quickly will digital gift cards be delivered?",
        answer: "Digital gift cards are delivered instantly to the recipient's email address. If they don't receive it right away, please check spam or junk folders.",
        open: false
      },
      {
        question: "Can I check the balance on my gift card?",
        answer: "Yes, you can check your gift card balance by calling us, visiting the restaurant, or entering the card details in the 'Check Balance' section of our website.",
        open: false
      },
      {
        question: "What if my gift card is lost or stolen?",
        answer: "If your physical gift card is lost or stolen, please contact us immediately. With proof of purchase, we may be able to issue a replacement. Digital gift cards can be resent to the original email address if needed.",
        open: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c1b3b258><section class="relative pt-40 pb-20 text-white" data-v-c1b3b258><div class="absolute inset-0 z-0" data-v-c1b3b258><div class="absolute inset-0 bg-black/60 z-10" data-v-c1b3b258></div><img src="https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg" alt="Gift card background" class="absolute inset-0 w-full h-full object-cover object-center" data-v-c1b3b258></div><div class="container-custom relative z-20" data-v-c1b3b258><div class="max-w-3xl mx-auto text-center" data-v-c1b3b258><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-c1b3b258>Gift Cards</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-c1b3b258> Share the gift of exceptional dining with someone special </p></div></div></section><section class="py-20 bg-cream" data-v-c1b3b258><div class="container-custom" data-v-c1b3b258><div class="text-center mb-16" data-v-c1b3b258><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-c1b3b258>Choose a Gift Card</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-c1b3b258></div><p class="text-gray-700 max-w-3xl mx-auto" data-v-c1b3b258> Select from our digital or physical gift card options, available in various denominations. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto" data-v-c1b3b258><div class="bg-white rounded-lg shadow-xl overflow-hidden" data-v-c1b3b258><div class="h-48 bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center relative overflow-hidden" data-v-c1b3b258><div class="absolute inset-0 opacity-20" data-v-c1b3b258><div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-30" data-v-c1b3b258>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:gift",
        class: "w-64 h-64 text-white"
      }, null, _parent));
      _push(`</div></div><div class="relative z-10 text-center" data-v-c1b3b258><h3 class="font-serif text-3xl font-bold text-white mb-2" data-v-c1b3b258>Digital Gift Card</h3><p class="text-white/80" data-v-c1b3b258>Instant delivery to your recipient&#39;s email</p></div></div><div class="p-8" data-v-c1b3b258><div class="space-y-6" data-v-c1b3b258><p class="text-gray-700" data-v-c1b3b258> Our digital gift cards are delivered instantly via email and can be redeemed online or in-restaurant. Perfect for last-minute gifts! </p><div data-v-c1b3b258><label class="block mb-2 font-medium" data-v-c1b3b258>Select Amount:</label><div class="grid grid-cols-3 gap-3 mb-4" data-v-c1b3b258><!--[-->`);
      ssrRenderList([50, 100, 150, 200, 250, "Custom"], (amount) => {
        _push(`<button class="${ssrRenderClass([amount === selectedAmount.value ? "bg-primary-600 text-white border-primary-600" : "border-gray-300 hover:border-primary-600 text-gray-700", "py-2 border rounded-md transition-colors duration-200"])}" data-v-c1b3b258>${ssrInterpolate(typeof amount === "number" ? `$${amount}` : amount)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (selectedAmount.value === "Custom") {
        _push(`<div class="mt-4" data-v-c1b3b258><label for="custom-amount" class="block mb-2 font-medium" data-v-c1b3b258>Enter Custom Amount:</label><div class="relative" data-v-c1b3b258><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" data-v-c1b3b258><span class="text-gray-500" data-v-c1b3b258>$</span></div><input type="number" id="custom-amount" min="25" max="1000" class="w-full pl-7 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Enter amount" data-v-c1b3b258></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="btn btn-primary w-full" data-v-c1b3b258> Purchase Digital Gift Card </button></div></div></div><div class="bg-white rounded-lg shadow-xl overflow-hidden" data-v-c1b3b258><div class="h-48 bg-gradient-to-r from-secondary-500 to-secondary-600 flex items-center justify-center relative overflow-hidden" data-v-c1b3b258><div class="absolute inset-0 opacity-20" data-v-c1b3b258><div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-30" data-v-c1b3b258>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:envelope",
        class: "w-64 h-64 text-white"
      }, null, _parent));
      _push(`</div></div><div class="relative z-10 text-center" data-v-c1b3b258><h3 class="font-serif text-3xl font-bold text-white mb-2" data-v-c1b3b258>Physical Gift Card</h3><p class="text-white/80" data-v-c1b3b258>Elegantly packaged and delivered by mail</p></div></div><div class="p-8" data-v-c1b3b258><div class="space-y-6" data-v-c1b3b258><p class="text-gray-700" data-v-c1b3b258> Our physical gift cards come elegantly packaged and can be shipped directly to you or your recipient. Please allow 3-5 business days for delivery. </p><div data-v-c1b3b258><label class="block mb-2 font-medium" data-v-c1b3b258>Select Amount:</label><div class="grid grid-cols-3 gap-3 mb-4" data-v-c1b3b258><!--[-->`);
      ssrRenderList([50, 100, 150, 200, 250, "Custom"], (amount) => {
        _push(`<button class="${ssrRenderClass([amount === selectedPhysicalAmount.value ? "bg-secondary-500 text-white border-secondary-500" : "border-gray-300 hover:border-secondary-500 text-gray-700", "py-2 border rounded-md transition-colors duration-200"])}" data-v-c1b3b258>${ssrInterpolate(typeof amount === "number" ? `$${amount}` : amount)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (selectedPhysicalAmount.value === "Custom") {
        _push(`<div class="mt-4" data-v-c1b3b258><label for="custom-physical-amount" class="block mb-2 font-medium" data-v-c1b3b258>Enter Custom Amount:</label><div class="relative" data-v-c1b3b258><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" data-v-c1b3b258><span class="text-gray-500" data-v-c1b3b258>$</span></div><input type="number" id="custom-physical-amount" min="25" max="1000" class="w-full pl-7 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Enter amount" data-v-c1b3b258></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="btn btn-secondary w-full" data-v-c1b3b258> Purchase Physical Gift Card </button></div></div></div></div></div></section><section class="py-20 bg-white" data-v-c1b3b258><div class="container-custom" data-v-c1b3b258><div class="text-center mb-16" data-v-c1b3b258><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-c1b3b258>Gift Card FAQs</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-c1b3b258></div><p class="text-gray-700 max-w-3xl mx-auto" data-v-c1b3b258> Find answers to commonly asked questions about our gift cards. </p></div><div class="max-w-3xl mx-auto" data-v-c1b3b258><!--[-->`);
      ssrRenderList(giftCardFaqs.value, (faq, index) => {
        _push(`<div class="mb-4" data-v-c1b3b258><button class="w-full bg-gray-50 px-6 py-4 rounded-lg font-medium text-left flex justify-between items-center" data-v-c1b3b258><span data-v-c1b3b258>${ssrInterpolate(faq.question)}</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: faq.open ? "heroicons:minus-circle" : "heroicons:plus-circle",
          class: "w-6 h-6 text-primary-600"
        }, null, _parent));
        _push(`</button><div style="${ssrRenderStyle(faq.open ? null : { display: "none" })}" class="bg-white px-6 py-4 rounded-lg border-t-0 border border-gray-100" data-v-c1b3b258><p class="text-gray-700" data-v-c1b3b258>${ssrInterpolate(faq.answer)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-gray-50" data-v-c1b3b258><div class="container-custom" data-v-c1b3b258><div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden" data-v-c1b3b258><div class="grid grid-cols-1 md:grid-cols-2" data-v-c1b3b258><div class="p-8 md:p-12" data-v-c1b3b258><h2 class="font-serif text-3xl font-bold mb-6 text-primary-600" data-v-c1b3b258>Corporate Gift Cards</h2><div class="w-24 h-1 bg-secondary-500 mb-8" data-v-c1b3b258></div><div class="space-y-6" data-v-c1b3b258><p class="text-gray-700" data-v-c1b3b258> Looking for the perfect corporate gift or incentive? Our gift cards make excellent rewards for employees, clients, and business partners. </p><p class="text-gray-700" data-v-c1b3b258> For bulk orders of 10 or more gift cards, we offer special corporate discounts and customization options. </p><div class="space-y-4" data-v-c1b3b258><div class="flex items-start" data-v-c1b3b258>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:check-circle",
        class: "w-6 h-6 text-secondary-500 mr-3 flex-shrink-0"
      }, null, _parent));
      _push(`<p class="text-gray-700" data-v-c1b3b258>Bulk discounts available</p></div><div class="flex items-start" data-v-c1b3b258>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:check-circle",
        class: "w-6 h-6 text-secondary-500 mr-3 flex-shrink-0"
      }, null, _parent));
      _push(`<p class="text-gray-700" data-v-c1b3b258>Custom branding options</p></div><div class="flex items-start" data-v-c1b3b258>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:check-circle",
        class: "w-6 h-6 text-secondary-500 mr-3 flex-shrink-0"
      }, null, _parent));
      _push(`<p class="text-gray-700" data-v-c1b3b258>Personalized messages</p></div><div class="flex items-start" data-v-c1b3b258>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:check-circle",
        class: "w-6 h-6 text-secondary-500 mr-3 flex-shrink-0"
      }, null, _parent));
      _push(`<p class="text-gray-700" data-v-c1b3b258>Flexible delivery options</p></div></div><div class="pt-4" data-v-c1b3b258><button class="btn btn-primary" data-v-c1b3b258> Contact for Corporate Orders </button></div></div></div><div class="hidden md:block" data-v-c1b3b258><img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Corporate gift" class="w-full h-full object-cover" data-v-c1b3b258></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gift-cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const giftCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1b3b258"]]);

export { giftCards as default };
//# sourceMappingURL=gift-cards-YygfiTr5.mjs.map
