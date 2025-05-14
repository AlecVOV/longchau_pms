import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { computed, useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/hookable/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/unctx/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/radix3/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/defu/dist/defu.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/ufo/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/klona/dist/index.mjs";
const _sfc_main = {
  __name: "reservation",
  __ssrInlineRender: true,
  setup(__props) {
    const today = computed(() => {
      const date = /* @__PURE__ */ new Date();
      return date.toISOString().split("T")[0];
    });
    const availableTimes = [
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM",
      "8:30 PM",
      "9:00 PM",
      "9:30 PM"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b5a95750><section class="relative pt-40 pb-20 text-white" data-v-b5a95750><div class="absolute inset-0 z-0" data-v-b5a95750><div class="absolute inset-0 bg-black/60 z-10" data-v-b5a95750></div><img src="https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg" alt="Table setting" class="absolute inset-0 w-full h-full object-cover object-center" data-v-b5a95750></div><div class="container-custom relative z-20" data-v-b5a95750><div class="max-w-3xl mx-auto text-center" data-v-b5a95750><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-b5a95750>Reserve a Table</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-b5a95750> Book your table online and experience our exquisite cuisine and hospitality </p></div></div></section><section class="py-20 bg-cream" data-v-b5a95750><div class="container-custom" data-v-b5a95750><div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden" data-v-b5a95750><div class="grid grid-cols-1 md:grid-cols-5" data-v-b5a95750><div class="md:col-span-2 h-full" data-v-b5a95750><img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" alt="Restaurant interior" class="w-full h-full object-cover" data-v-b5a95750></div><div class="md:col-span-3 p-8" data-v-b5a95750><h2 class="font-serif text-3xl font-bold mb-6 text-primary-600" data-v-b5a95750>Make a Reservation</h2><form class="space-y-6" data-v-b5a95750><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-b5a95750><div data-v-b5a95750><label for="name" class="block mb-2 font-medium" data-v-b5a95750>Name</label><input type="text" id="name" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your full name" data-v-b5a95750></div><div data-v-b5a95750><label for="email" class="block mb-2 font-medium" data-v-b5a95750>Email</label><input type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your email address" data-v-b5a95750></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-b5a95750><div data-v-b5a95750><label for="phone" class="block mb-2 font-medium" data-v-b5a95750>Phone</label><input type="tel" id="phone" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your phone number" data-v-b5a95750></div><div data-v-b5a95750><label for="guests" class="block mb-2 font-medium" data-v-b5a95750>Number of Guests</label><select id="guests" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" data-v-b5a95750><option value="1" data-v-b5a95750>1 Guest</option><option value="2" selected data-v-b5a95750>2 Guests</option><option value="3" data-v-b5a95750>3 Guests</option><option value="4" data-v-b5a95750>4 Guests</option><option value="5" data-v-b5a95750>5 Guests</option><option value="6" data-v-b5a95750>6 Guests</option><option value="7+" data-v-b5a95750>7+ Guests</option></select></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-b5a95750><div data-v-b5a95750><label for="date" class="block mb-2 font-medium" data-v-b5a95750>Date</label><input type="date" id="date"${ssrRenderAttr("min", today.value)} class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" data-v-b5a95750></div><div data-v-b5a95750><label for="time" class="block mb-2 font-medium" data-v-b5a95750>Time</label><select id="time" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" data-v-b5a95750><option value="" disabled selected data-v-b5a95750>Select a time</option><!--[-->`);
      ssrRenderList(availableTimes, (time) => {
        _push(`<option${ssrRenderAttr("value", time)} data-v-b5a95750>${ssrInterpolate(time)}</option>`);
      });
      _push(`<!--]--></select></div></div><div data-v-b5a95750><label for="special-requests" class="block mb-2 font-medium" data-v-b5a95750>Special Requests</label><textarea id="special-requests" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Any special requests or dietary requirements?" data-v-b5a95750></textarea></div><div data-v-b5a95750><button type="submit" class="btn btn-primary w-full" data-v-b5a95750> Confirm Reservation </button><p class="text-sm text-gray-500 mt-4 text-center" data-v-b5a95750> By making a reservation, you agree to our reservation policy. </p></div></form></div></div></div></div></section><section class="py-16 bg-white" data-v-b5a95750><div class="container-custom" data-v-b5a95750><div class="max-w-3xl mx-auto" data-v-b5a95750><h2 class="font-serif text-3xl font-bold mb-6 text-primary-600 text-center" data-v-b5a95750>Reservation Policies</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-12" data-v-b5a95750></div><div class="space-y-8" data-v-b5a95750><div data-v-b5a95750><h3 class="font-serif text-xl font-bold mb-2 text-primary-600" data-v-b5a95750>Confirmation</h3><p class="text-gray-700" data-v-b5a95750> All reservations will be confirmed via email. Please check your spam folder if you do not receive a confirmation within a few minutes of booking. </p></div><div data-v-b5a95750><h3 class="font-serif text-xl font-bold mb-2 text-primary-600" data-v-b5a95750>Cancellation Policy</h3><p class="text-gray-700" data-v-b5a95750> We understand that plans change. We kindly ask that you notify us at least 24 hours in advance if you need to cancel or modify your reservation. For parties of 6 or more, we require 48 hours&#39; notice. </p></div><div data-v-b5a95750><h3 class="font-serif text-xl font-bold mb-2 text-primary-600" data-v-b5a95750>Late Arrivals</h3><p class="text-gray-700" data-v-b5a95750> We&#39;ll hold your table for 15 minutes past your reservation time. If you&#39;re running late, please call us to let us know, and we&#39;ll do our best to accommodate you. </p></div><div data-v-b5a95750><h3 class="font-serif text-xl font-bold mb-2 text-primary-600" data-v-b5a95750>Large Parties</h3><p class="text-gray-700" data-v-b5a95750> For groups of 7 or more, please contact us directly by phone to arrange your reservation. A credit card may be required to secure the booking, and a gratuity of 18% will be added to the final bill. </p></div><div data-v-b5a95750><h3 class="font-serif text-xl font-bold mb-2 text-primary-600" data-v-b5a95750>Children</h3><p class="text-gray-700" data-v-b5a95750> We welcome guests of all ages. If you&#39;ll be dining with young children, please let us know so we can provide appropriate seating and accommodations. </p></div></div><div class="mt-12 text-center" data-v-b5a95750><p class="text-gray-700" data-v-b5a95750> If you have any questions about our reservation policies, please contact us at <a href="tel:5551234567" class="text-primary-600 font-medium" data-v-b5a95750>(555) 123-4567</a>. </p></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reservation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reservation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5a95750"]]);
export {
  reservation as default
};
//# sourceMappingURL=reservation-D-xz74pc.js.map
