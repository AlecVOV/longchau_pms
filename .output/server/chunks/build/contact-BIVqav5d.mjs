import __nuxt_component_0 from './Icon-V7KX5z6a.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = ref([
      {
        question: "Do I need to make a reservation?",
        answer: "While walk-ins are welcome, we highly recommend making a reservation, especially for weekend dining. You can book a table online through our reservations page or by calling us directly.",
        open: true
      },
      {
        question: "Is there a dress code?",
        answer: "We recommend smart casual attire. While there is no strict dress code, we do ask that guests refrain from wearing athletic wear, beachwear, or flip flops.",
        open: false
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer: "Yes, our chefs are happy to accommodate most dietary restrictions and allergies. Please inform your server or note your needs when making your reservation so we can prepare accordingly.",
        open: false
      },
      {
        question: "Do you offer private dining?",
        answer: "Yes, we have a private dining room that can accommodate groups of up to 20 people. For larger events, please inquire about our catering services or full restaurant buyouts.",
        open: false
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, and cash. For large parties or private events, we may require a deposit or prepayment.",
        open: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b3d79232><section class="relative pt-40 pb-20 text-white" data-v-b3d79232><div class="absolute inset-0 z-0" data-v-b3d79232><div class="absolute inset-0 bg-black/60 z-10" data-v-b3d79232></div><img src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg" alt="Contact background" class="absolute inset-0 w-full h-full object-cover object-center" data-v-b3d79232></div><div class="container-custom relative z-20" data-v-b3d79232><div class="max-w-3xl mx-auto text-center" data-v-b3d79232><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-b3d79232>Contact Us</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-b3d79232> We&#39;d love to hear from you. Reach out for reservations, inquiries, or feedback. </p></div></div></section><section class="py-20 bg-cream" data-v-b3d79232><div class="container-custom" data-v-b3d79232><div class="grid grid-cols-1 lg:grid-cols-3 gap-12" data-v-b3d79232><div class="lg:col-span-1 bg-white rounded-lg shadow-lg p-8" data-v-b3d79232><h2 class="font-serif text-3xl font-bold mb-6 text-primary-600" data-v-b3d79232>Get In Touch</h2><div class="space-y-6" data-v-b3d79232><div class="flex items-start" data-v-b3d79232><div class="bg-primary-600 rounded-full p-3 mr-4" data-v-b3d79232>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:map-pin",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><div data-v-b3d79232><h4 class="font-bold text-lg mb-1" data-v-b3d79232>Our Location</h4><p class="text-gray-700" data-v-b3d79232>123 Culinary St<br data-v-b3d79232>Foodie City, FC 12345</p></div></div><div class="flex items-start" data-v-b3d79232><div class="bg-primary-600 rounded-full p-3 mr-4" data-v-b3d79232>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:phone",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><div data-v-b3d79232><h4 class="font-bold text-lg mb-1" data-v-b3d79232>Phone</h4><p class="text-gray-700" data-v-b3d79232>(555) 123-4567</p></div></div><div class="flex items-start" data-v-b3d79232><div class="bg-primary-600 rounded-full p-3 mr-4" data-v-b3d79232>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:envelope",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><div data-v-b3d79232><h4 class="font-bold text-lg mb-1" data-v-b3d79232>Email</h4><p class="text-gray-700" data-v-b3d79232>info@gourmetrestaurant.com</p></div></div><div class="flex items-start" data-v-b3d79232><div class="bg-primary-600 rounded-full p-3 mr-4" data-v-b3d79232>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:clock",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><div data-v-b3d79232><h4 class="font-bold text-lg mb-1" data-v-b3d79232>Hours</h4><p class="text-gray-700" data-v-b3d79232>Monday - Thursday: 11am - 10pm<br data-v-b3d79232> Friday - Saturday: 11am - 11pm<br data-v-b3d79232> Sunday: 10am - 9pm</p></div></div></div><div class="mt-8" data-v-b3d79232><h4 class="font-bold text-lg mb-3" data-v-b3d79232>Follow Us</h4><div class="flex space-x-4" data-v-b3d79232><a href="#" class="bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors duration-300" data-v-b3d79232>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:facebook",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a><a href="#" class="bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors duration-300" data-v-b3d79232>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:instagram",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a><a href="#" class="bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors duration-300" data-v-b3d79232>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:twitter",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a><a href="#" class="bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors duration-300" data-v-b3d79232>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:yelp",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a></div></div></div><div class="lg:col-span-2 bg-white rounded-lg shadow-lg p-8" data-v-b3d79232><h2 class="font-serif text-3xl font-bold mb-6 text-primary-600" data-v-b3d79232>Send Us a Message</h2><form class="space-y-6" data-v-b3d79232><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-b3d79232><div data-v-b3d79232><label for="name" class="block mb-2 font-medium" data-v-b3d79232>Name</label><input type="text" id="name" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your name" data-v-b3d79232></div><div data-v-b3d79232><label for="email" class="block mb-2 font-medium" data-v-b3d79232>Email</label><input type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your email address" data-v-b3d79232></div></div><div data-v-b3d79232><label for="subject" class="block mb-2 font-medium" data-v-b3d79232>Subject</label><input type="text" id="subject" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Subject of your message" data-v-b3d79232></div><div data-v-b3d79232><label for="message" class="block mb-2 font-medium" data-v-b3d79232>Message</label><textarea id="message" rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your message" data-v-b3d79232></textarea></div><div class="flex items-start" data-v-b3d79232><div class="flex items-center h-5" data-v-b3d79232><input id="privacy" type="checkbox" class="w-4 h-4 accent-secondary-500" data-v-b3d79232></div><label for="privacy" class="ml-3 text-sm text-gray-600" data-v-b3d79232> I agree to the privacy policy and consent to having my data processed to be contacted. </label></div><button type="submit" class="btn btn-primary w-full md:w-auto" data-v-b3d79232> Send Message </button></form></div></div></div></section><section class="h-[500px] w-full relative" data-v-b3d79232><div class="absolute inset-0 bg-gray-300 flex items-center justify-center" data-v-b3d79232><p class="text-gray-700 text-center px-4" data-v-b3d79232> Google Maps would be embedded here with your restaurant&#39;s exact location.<br data-v-b3d79232> For implementation, you would need to add your Google Maps API key. </p></div></section><section class="py-20 bg-white" data-v-b3d79232><div class="container-custom" data-v-b3d79232><div class="text-center mb-16" data-v-b3d79232><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-b3d79232>Frequently Asked Questions</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-b3d79232></div><p class="text-gray-700 max-w-3xl mx-auto" data-v-b3d79232> Here are answers to some common questions about our restaurant and services. </p></div><div class="max-w-3xl mx-auto" data-v-b3d79232><!--[-->`);
      ssrRenderList(faqs.value, (faq, index) => {
        _push(`<div class="mb-4" data-v-b3d79232><button class="w-full bg-gray-50 px-6 py-4 rounded-lg font-medium text-left flex justify-between items-center" data-v-b3d79232><span data-v-b3d79232>${ssrInterpolate(faq.question)}</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: faq.open ? "heroicons:minus-circle" : "heroicons:plus-circle",
          class: "w-6 h-6 text-primary-600"
        }, null, _parent));
        _push(`</button><div style="${ssrRenderStyle(faq.open ? null : { display: "none" })}" class="bg-white px-6 py-4 rounded-lg border-t-0 border border-gray-100" data-v-b3d79232><p class="text-gray-700" data-v-b3d79232>${ssrInterpolate(faq.answer)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3d79232"]]);

export { contact as default };
//# sourceMappingURL=contact-BIVqav5d.mjs.map
