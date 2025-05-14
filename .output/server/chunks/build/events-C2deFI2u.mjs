import __nuxt_component_0 from './Icon-V7KX5z6a.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-SDE-Tqte.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "events",
  __ssrInlineRender: true,
  setup(__props) {
    const upcomingEvents = [
      {
        id: 1,
        title: "Wine Tasting Evening",
        date: "October 15, 2023",
        time: "6:00 PM - 9:00 PM",
        description: "Join us for an exclusive wine tasting event featuring selections from Napa Valley. Our sommelier will guide you through each tasting with paired appetizers.",
        price: "$85 per person",
        image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg"
      },
      {
        id: 2,
        title: "Chef's Table Experience",
        date: "October 22, 2023",
        time: "7:00 PM - 10:00 PM",
        description: "An intimate dining experience with Chef Laurent. Enjoy a seven-course tasting menu with commentary from the chef and premium wine pairings.",
        price: "$150 per person",
        image: "https://images.pexels.com/photos/5953591/pexels-photo-5953591.jpeg"
      },
      {
        id: 3,
        title: "Autumn Harvest Dinner",
        date: "November 5, 2023",
        time: "6:30 PM - 9:30 PM",
        description: "Celebrate the flavors of autumn with a special seasonal menu featuring locally sourced fall ingredients and harvest-inspired cocktails.",
        price: "$95 per person",
        image: "https://images.pexels.com/photos/5876296/pexels-photo-5876296.jpeg"
      },
      {
        id: 4,
        title: "Cooking Class: Holiday Desserts",
        date: "November 19, 2023",
        time: "2:00 PM - 4:30 PM",
        description: "Learn to create show-stopping holiday desserts with our pastry chef. Take home recipes and enjoy sampling your creations paired with coffee or dessert wine.",
        price: "$75 per person",
        image: "https://images.pexels.com/photos/6210764/pexels-photo-6210764.jpeg"
      }
    ];
    const currentPromotions = [
      {
        id: 1,
        title: "Happy Hour",
        description: "Enjoy 50% off select cocktails and appetizers every Monday through Thursday from 4PM to 6PM.",
        validity: "Valid until Dec 31, 2023",
        icon: "heroicons:beer-mug"
      },
      {
        id: 2,
        title: "Date Night Special",
        description: "Three-course dinner for two with a bottle of wine for $120 every Friday night.",
        validity: "Valid until Nov 30, 2023",
        icon: "heroicons:heart"
      },
      {
        id: 3,
        title: "Weekend Brunch",
        description: "Complimentary mimosa or bloody mary with any brunch entr\xE9e, Saturday and Sunday from 10AM to 2PM.",
        validity: "Ongoing",
        icon: "heroicons:sun"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b551f668><section class="relative pt-40 pb-20 text-white" data-v-b551f668><div class="absolute inset-0 z-0" data-v-b551f668><div class="absolute inset-0 bg-black/60 z-10" data-v-b551f668></div><img src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg" alt="Events background" class="absolute inset-0 w-full h-full object-cover object-center" data-v-b551f668></div><div class="container-custom relative z-20" data-v-b551f668><div class="max-w-3xl mx-auto text-center" data-v-b551f668><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-b551f668>Events &amp; Promotions</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-b551f668> Join us for special dining experiences and exclusive offers </p></div></div></section><section class="py-20 bg-cream" data-v-b551f668><div class="container-custom" data-v-b551f668><div class="text-center mb-16" data-v-b551f668><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-b551f668>Upcoming Events</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-b551f668></div><p class="text-gray-700 max-w-3xl mx-auto" data-v-b551f668> Mark your calendar for these special dining experiences at Gourmet Restaurant. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-v-b551f668><!--[-->`);
      ssrRenderList(upcomingEvents, (event) => {
        _push(`<div class="bg-white rounded-lg shadow-lg overflow-hidden" data-v-b551f668><img${ssrRenderAttr("src", event.image)}${ssrRenderAttr("alt", event.title)} class="w-full h-64 object-cover" data-v-b551f668><div class="p-8" data-v-b551f668><div class="flex justify-between items-start mb-4" data-v-b551f668><div data-v-b551f668><h3 class="font-serif text-2xl font-bold text-primary-600" data-v-b551f668>${ssrInterpolate(event.title)}</h3><p class="text-gray-500" data-v-b551f668>${ssrInterpolate(event.date)}</p></div><div class="bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold" data-v-b551f668>${ssrInterpolate(event.price)}</div></div><p class="text-gray-700 mb-6" data-v-b551f668>${ssrInterpolate(event.description)}</p><div class="border-t border-gray-200 pt-6 mt-6" data-v-b551f668><div class="flex justify-between items-center" data-v-b551f668><div class="flex items-center" data-v-b551f668>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:clock",
          class: "w-5 h-5 text-gray-500 mr-2"
        }, null, _parent));
        _push(`<span data-v-b551f668>${ssrInterpolate(event.time)}</span></div><button class="btn btn-outline" data-v-b551f668>Reserve</button></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-primary-600 text-white" data-v-b551f668><div class="container-custom" data-v-b551f668><div class="text-center mb-16" data-v-b551f668><h2 class="font-serif text-4xl font-bold mb-6" data-v-b551f668>Current Promotions</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-b551f668></div><p class="text-gray-200 max-w-3xl mx-auto" data-v-b551f668> Take advantage of these special offers when dining with us. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-v-b551f668><!--[-->`);
      ssrRenderList(currentPromotions, (promotion) => {
        _push(`<div class="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white" data-v-b551f668><div class="mb-6 flex items-center justify-center" data-v-b551f668><div class="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center" data-v-b551f668>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: promotion.icon,
          class: "w-10 h-10 text-secondary-500"
        }, null, _parent));
        _push(`</div></div><h3 class="font-serif text-2xl font-bold mb-4 text-center" data-v-b551f668>${ssrInterpolate(promotion.title)}</h3><p class="mb-6 text-center" data-v-b551f668>${ssrInterpolate(promotion.description)}</p><div class="text-center" data-v-b551f668><p class="text-secondary-500 font-bold mb-2" data-v-b551f668>${ssrInterpolate(promotion.validity)}</p><button class="btn btn-secondary w-full" data-v-b551f668>Learn More</button></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white" data-v-b551f668><div class="container-custom" data-v-b551f668><div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center" data-v-b551f668><div data-v-b551f668><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-b551f668>Host Your Private Event</h2><div class="w-24 h-1 bg-secondary-500 mb-8" data-v-b551f668></div><div class="space-y-6" data-v-b551f668><p class="text-gray-700 text-lg" data-v-b551f668> From intimate gatherings to grand celebrations, Gourmet Restaurant provides the perfect setting for your special occasion. Our private dining spaces can accommodate groups of various sizes. </p><p class="text-gray-700 text-lg" data-v-b551f668> Our events team will work closely with you to create a customized menu and experience that meets your specific needs and exceeds your expectations. </p><div class="space-y-4 mt-8" data-v-b551f668><div class="flex items-start" data-v-b551f668>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:check-circle",
        class: "w-6 h-6 text-secondary-500 mr-3 flex-shrink-0"
      }, null, _parent));
      _push(`<p class="text-gray-700" data-v-b551f668>Corporate meetings and dinners</p></div><div class="flex items-start" data-v-b551f668>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:check-circle",
        class: "w-6 h-6 text-secondary-500 mr-3 flex-shrink-0"
      }, null, _parent));
      _push(`<p class="text-gray-700" data-v-b551f668>Wedding rehearsals and receptions</p></div><div class="flex items-start" data-v-b551f668>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:check-circle",
        class: "w-6 h-6 text-secondary-500 mr-3 flex-shrink-0"
      }, null, _parent));
      _push(`<p class="text-gray-700" data-v-b551f668>Birthday and anniversary celebrations</p></div><div class="flex items-start" data-v-b551f668>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:check-circle",
        class: "w-6 h-6 text-secondary-500 mr-3 flex-shrink-0"
      }, null, _parent));
      _push(`<p class="text-gray-700" data-v-b551f668>Private cooking classes and tastings</p></div></div><div class="pt-4" data-v-b551f668>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/private-events",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Inquire About Private Events `);
          } else {
            return [
              createTextVNode(" Inquire About Private Events ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-2 gap-4" data-v-b551f668><div class="space-y-4" data-v-b551f668><img src="https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg" alt="Private dining room" class="rounded-lg shadow-lg w-full h-64 object-cover" data-v-b551f668><img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" alt="Event space" class="rounded-lg shadow-lg w-full h-48 object-cover" data-v-b551f668></div><div class="space-y-4 mt-8" data-v-b551f668><img src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg" alt="Wedding reception" class="rounded-lg shadow-lg w-full h-48 object-cover" data-v-b551f668><img src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg" alt="Banquet hall" class="rounded-lg shadow-lg w-full h-64 object-cover" data-v-b551f668></div></div></div></div></section><section class="py-16 bg-gray-50" data-v-b551f668><div class="container-custom" data-v-b551f668><div class="text-center mb-16" data-v-b551f668><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-b551f668>Events Calendar</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-b551f668></div><p class="text-gray-700 max-w-3xl mx-auto" data-v-b551f668> Stay updated with all upcoming events and special occasions at Gourmet Restaurant. </p></div><div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8" data-v-b551f668><p class="text-center text-gray-700 mb-4" data-v-b551f668> A calendar component would be implemented here to display all upcoming events. </p><div class="text-center" data-v-b551f668><button class="btn btn-primary" data-v-b551f668> View Full Calendar </button></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const events = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b551f668"]]);

export { events as default };
//# sourceMappingURL=events-C2deFI2u.mjs.map
