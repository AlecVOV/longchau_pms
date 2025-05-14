import __nuxt_component_0 from './Icon-V7KX5z6a.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-SDE-Tqte.mjs';
import { ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeCategory = ref("general");
    const faqCategories = [
      { id: "general", name: "General" },
      { id: "reservations", name: "Reservations" },
      { id: "dining", name: "Dining Experience" },
      { id: "menu", name: "Menu & Dietary" },
      { id: "events", name: "Events & Private Dining" },
      { id: "ordering", name: "Online Ordering" }
    ];
    const faqsData = {
      general: [
        {
          question: "What are your hours of operation?",
          answer: "We are open Monday through Thursday from 11:00 AM to 10:00 PM, Friday and Saturday from 11:00 AM to 11:00 PM, and Sunday from 10:00 AM to 9:00 PM.",
          open: true
        },
        {
          question: "Where are you located?",
          answer: "We are located at 123 Culinary St, Foodie City, FC 12345. We're in the heart of downtown, just two blocks from Central Park.",
          open: false
        },
        {
          question: "Is parking available?",
          answer: "Yes, we offer validated parking at the garage adjacent to our restaurant. Street parking is also available, though it can be limited during peak hours.",
          open: false
        },
        {
          question: "Do you have gift cards available?",
          answer: "Yes, we offer both physical and digital gift cards in various denominations. They can be purchased online or in the restaurant.",
          open: false
        },
        {
          question: "How can I provide feedback about my dining experience?",
          answer: "We value your feedback! You can share your experience with us via our contact form, by emailing us at feedback@gourmetrestaurant.com, or by speaking with a manager during your visit.",
          open: false
        }
      ],
      reservations: [
        {
          question: "How can I make a reservation?",
          answer: "Reservations can be made online through our website, by phone at (555) 123-4567, or through popular reservation platforms like OpenTable.",
          open: true
        },
        {
          question: "How far in advance should I make a reservation?",
          answer: "For weekday dining, we recommend booking 2-3 days in advance. For weekends and special occasions, we suggest booking 1-2 weeks in advance to ensure availability.",
          open: false
        },
        {
          question: "What is your cancellation policy?",
          answer: "We appreciate 24 hours' notice for cancellations. For parties of 6 or more, we require 48 hours' notice. Failure to cancel within these timeframes may result in a cancellation fee.",
          open: false
        },
        {
          question: "Can I request a specific table?",
          answer: "While we cannot guarantee specific tables, we make every effort to accommodate special requests. Please note your preference when making your reservation.",
          open: false
        }
      ],
      dining: [
        {
          question: "Is there a dress code?",
          answer: "We recommend smart casual attire. While we don't enforce a strict dress code, we ask that guests refrain from wearing athletic wear, beachwear, or flip flops.",
          open: true
        },
        {
          question: "Do you charge a corkage fee?",
          answer: "Yes, we charge a $25 corkage fee per 750ml bottle, with a limit of two bottles per table. Our corkage policy is waived if you purchase a bottle from our wine list.",
          open: false
        },
        {
          question: "Do you offer a children's menu?",
          answer: "Yes, we offer a children's menu with smaller portions suitable for younger guests. We're happy to accommodate children of all ages.",
          open: false
        },
        {
          question: "What is your tipping policy?",
          answer: "For parties of 8 or more, an 18% gratuity is automatically added to the bill. For all other tables, gratuity is at the discretion of the guest.",
          open: false
        }
      ],
      menu: [
        {
          question: "Do you accommodate dietary restrictions?",
          answer: "Yes, we can accommodate most dietary restrictions and allergies. Please inform your server of any dietary needs, and our chefs will do their best to provide suitable options.",
          open: true
        },
        {
          question: "Do you offer vegetarian and vegan options?",
          answer: "Yes, we have several vegetarian options on our menu, and many dishes can be modified to be vegan. Please ask your server for recommendations.",
          open: false
        },
        {
          question: "Are your ingredients sourced locally?",
          answer: "We prioritize locally sourced ingredients whenever possible. Our meat and produce are primarily sourced from farms within a 100-mile radius, and we work with local fisheries for our seafood.",
          open: false
        },
        {
          question: "How often does your menu change?",
          answer: "Our core menu changes seasonally (four times per year), with special items and chef's selections rotating more frequently based on ingredient availability and chef inspiration.",
          open: false
        }
      ],
      events: [
        {
          question: "Do you offer private dining?",
          answer: "Yes, we have private dining rooms that can accommodate groups of various sizes. Our event coordinator can work with you to create a customized experience.",
          open: true
        },
        {
          question: "What types of events can you host?",
          answer: "We can host a variety of events including corporate dinners, wedding rehearsals, birthday celebrations, anniversary parties, wine tastings, and cooking classes.",
          open: false
        },
        {
          question: "Is there a minimum spend for private events?",
          answer: "Yes, minimum spend requirements vary based on the day of the week, time of day, and the specific private dining space. Please contact our events team for details.",
          open: false
        },
        {
          question: "Do you offer off-site catering?",
          answer: "Yes, we offer full-service catering for events of all sizes. Our catering menu can be customized to suit your preferences and dietary needs.",
          open: false
        }
      ],
      ordering: [
        {
          question: "How do I place an online order?",
          answer: "You can place an order through our website or mobile app. Simply browse our menu, select your items, and proceed to checkout.",
          open: true
        },
        {
          question: "What is the delivery area?",
          answer: "We currently deliver within a 5-mile radius of our restaurant. You can check if your address is within our delivery zone during the checkout process.",
          open: false
        },
        {
          question: "How long will delivery take?",
          answer: "Delivery times typically range from 30-60 minutes depending on your location and current order volume. You'll receive an estimated delivery time when you place your order.",
          open: false
        },
        {
          question: "Can I schedule an order in advance?",
          answer: "Yes, you can schedule orders up to 7 days in advance. This is especially useful for planning meals for special occasions or meetings.",
          open: false
        }
      ]
    };
    const getFaqsByCategory = (categoryId) => {
      return faqsData[categoryId] || [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b29e5394><section class="relative pt-40 pb-20 text-white" data-v-b29e5394><div class="absolute inset-0 z-0" data-v-b29e5394><div class="absolute inset-0 bg-black/60 z-10" data-v-b29e5394></div><img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" alt="FAQ background" class="absolute inset-0 w-full h-full object-cover object-center" data-v-b29e5394></div><div class="container-custom relative z-20" data-v-b29e5394><div class="max-w-3xl mx-auto text-center" data-v-b29e5394><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-b29e5394>Frequently Asked Questions</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-b29e5394> Find answers to common questions about dining with us </p></div></div></section><section class="py-8 bg-white border-b border-gray-200 sticky top-20 z-30" data-v-b29e5394><div class="container-custom" data-v-b29e5394><div class="flex overflow-x-auto hide-scrollbar space-x-6 justify-center" data-v-b29e5394><!--[-->`);
      ssrRenderList(faqCategories, (category) => {
        _push(`<button class="${ssrRenderClass([activeCategory.value === category.id ? "border-secondary-500" : "border-transparent", "text-primary-600 hover:text-primary-800 whitespace-nowrap font-medium py-2 px-2 border-b-2 transition-all duration-200"])}" data-v-b29e5394>${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-cream" data-v-b29e5394><div class="container-custom" data-v-b29e5394><!--[-->`);
      ssrRenderList(faqCategories, (category) => {
        _push(`<div style="${ssrRenderStyle(activeCategory.value === category.id ? null : { display: "none" })}" class="max-w-3xl mx-auto" data-v-b29e5394><div class="bg-white rounded-lg shadow-lg p-8" data-v-b29e5394><h2 class="font-serif text-3xl font-bold mb-8 text-primary-600 text-center" data-v-b29e5394>${ssrInterpolate(category.name)}</h2><div class="space-y-4" data-v-b29e5394><!--[-->`);
        ssrRenderList(getFaqsByCategory(category.id), (faq2, index) => {
          _push(`<div class="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0 mb-4 last:mb-0" data-v-b29e5394><button class="w-full text-left flex justify-between items-center py-4" data-v-b29e5394><span class="font-medium text-lg pr-8" data-v-b29e5394>${ssrInterpolate(faq2.question)}</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: faq2.open ? "heroicons:minus-circle" : "heroicons:plus-circle",
            class: "w-6 h-6 text-primary-600 flex-shrink-0"
          }, null, _parent));
          _push(`</button><div style="${ssrRenderStyle(faq2.open ? null : { display: "none" })}" class="pl-0 pr-12 pb-4 text-gray-700" data-v-b29e5394><p data-v-b29e5394>${ssrInterpolate(faq2.answer)}</p></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></section><section class="py-16 bg-gray-50" data-v-b29e5394><div class="container-custom" data-v-b29e5394><div class="max-w-3xl mx-auto text-center" data-v-b29e5394><h2 class="font-serif text-3xl font-bold mb-6 text-primary-600" data-v-b29e5394>Still Have Questions?</h2><p class="text-gray-700 mb-8" data-v-b29e5394> If you couldn&#39;t find the answer to your question, please don&#39;t hesitate to reach out to us directly. </p><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-b29e5394><div class="bg-white rounded-lg shadow-md p-6" data-v-b29e5394><div class="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" data-v-b29e5394>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:phone",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><h3 class="font-serif text-lg font-bold mb-2 text-primary-600" data-v-b29e5394>Call Us</h3><p class="text-gray-700" data-v-b29e5394>(555) 123-4567</p></div><div class="bg-white rounded-lg shadow-md p-6" data-v-b29e5394><div class="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" data-v-b29e5394>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:envelope",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><h3 class="font-serif text-lg font-bold mb-2 text-primary-600" data-v-b29e5394>Email Us</h3><p class="text-gray-700" data-v-b29e5394>info@gourmetrestaurant.com</p></div><div class="bg-white rounded-lg shadow-md p-6" data-v-b29e5394><div class="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" data-v-b29e5394>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chat-bubble-left-right",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><h3 class="font-serif text-lg font-bold mb-2 text-primary-600" data-v-b29e5394>Live Chat</h3><p class="text-gray-700" data-v-b29e5394>Available 9AM - 6PM daily</p></div></div><div class="mt-12" data-v-b29e5394>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b29e5394"]]);

export { faq as default };
//# sourceMappingURL=faq-CR5pRhp6.mjs.map
