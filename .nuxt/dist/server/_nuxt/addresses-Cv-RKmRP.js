import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderList } from "vue/server-renderer";
import { u as useHead, a as useAuthStore } from "../server.mjs";
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
  __name: "addresses",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Shipping Addresses - Long Châu",
      meta: [
        { name: "description", content: "Manage your shipping addresses for faster checkout and delivery." }
      ]
    });
    useAuthStore();
    const showAddForm = ref(false);
    const editingAddress = ref(null);
    const saving = ref(false);
    const addressForm = ref({
      type: "home",
      name: "",
      phone: "",
      line1: "",
      line2: "",
      city: "",
      zipCode: "",
      country: "VN",
      isDefault: false
    });
    const addresses = ref([
      // Start with empty array - no sample data to avoid persistence issues
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="py-6"><div class="flex items-center justify-between"><div><h1 class="text-3xl font-bold text-gray-900">Shipping Addresses</h1><p class="mt-1 text-sm text-gray-500">Manage your delivery addresses</p></div><button class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Add New Address </button></div></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
      if (unref(showAddForm) || unref(editingAddress)) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-6 mb-8"><div class="flex items-center justify-between mb-6"><h2 class="text-xl font-semibold text-gray-900">${ssrInterpolate(unref(editingAddress) ? "Edit Address" : "Add New Address")}</h2><button class="text-gray-400 hover:text-gray-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><form class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="md:col-span-2"><label class="block text-sm font-medium text-gray-700 mb-2">Address Type</label><div class="flex space-x-4"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(addressForm).type, "home")) ? " checked" : ""} type="radio" value="home" class="mr-2"><span class="text-sm text-gray-700">Home</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(addressForm).type, "work")) ? " checked" : ""} type="radio" value="work" class="mr-2"><span class="text-sm text-gray-700">Work</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(addressForm).type, "other")) ? " checked" : ""} type="radio" value="other" class="mr-2"><span class="text-sm text-gray-700">Other</span></label></div></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label><input${ssrRenderAttr("value", unref(addressForm).name)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label><input${ssrRenderAttr("value", unref(addressForm).phone)} type="tel" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div class="md:col-span-2"><label class="block text-sm font-medium text-gray-700 mb-2">Address Line 1 *</label><input${ssrRenderAttr("value", unref(addressForm).line1)} type="text" required placeholder="Street address, P.O. box, company name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div class="md:col-span-2"><label class="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label><input${ssrRenderAttr("value", unref(addressForm).line2)} type="text" placeholder="Apartment, suite, unit, building, floor, etc." class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">City *</label><input${ssrRenderAttr("value", unref(addressForm).city)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label><input${ssrRenderAttr("value", unref(addressForm).zipCode)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Country *</label><select required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"><option value="VN"${ssrIncludeBooleanAttr(Array.isArray(unref(addressForm).country) ? ssrLooseContain(unref(addressForm).country, "VN") : ssrLooseEqual(unref(addressForm).country, "VN")) ? " selected" : ""}>Vietnam</option></select></div><div class="md:col-span-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(addressForm).isDefault) ? ssrLooseContain(unref(addressForm).isDefault, null) : unref(addressForm).isDefault) ? " checked" : ""} type="checkbox" class="mr-2"><span class="text-sm text-gray-700">Set as default shipping address</span></label></div><div class="md:col-span-2 flex justify-end space-x-3 pt-4 border-t border-gray-200"><button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50">${ssrInterpolate(unref(saving) ? "Saving..." : unref(editingAddress) ? "Update Address" : "Save Address")}</button></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(addresses).length === 0 && !unref(showAddForm)) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-12 text-center"><svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><h3 class="text-lg font-medium text-gray-900 mb-2">No addresses yet</h3><p class="text-gray-500 mb-6">Add your first shipping address to get started.</p><button class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"> Add Address </button></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(addresses), (address) => {
          _push(`<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative">`);
          if (address.isDefault) {
            _push(`<div class="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"> Default </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex items-center mb-4"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">`);
          if (address.type === "home") {
            _push(`<svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`);
          } else if (address.type === "work") {
            _push(`<svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`);
          } else {
            _push(`<svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>`);
          }
          _push(`</div><div><h3 class="font-semibold text-gray-900 capitalize">${ssrInterpolate(address.type)}</h3><p class="text-sm text-gray-500">${ssrInterpolate(address.name)}</p></div></div><div class="text-sm text-gray-600 space-y-1 mb-4"><p>${ssrInterpolate(address.line1)}</p>`);
          if (address.line2) {
            _push(`<p>${ssrInterpolate(address.line2)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p>${ssrInterpolate(address.city)}, ${ssrInterpolate(address.state)} ${ssrInterpolate(address.zipCode)}</p><p>${ssrInterpolate(address.country === "US" ? "United States" : address.country)}</p><p class="text-gray-500">${ssrInterpolate(address.phone)}</p></div><div class="flex items-center justify-between pt-4 border-t border-gray-200"><div class="flex space-x-2"><button class="text-sm text-blue-600 hover:text-blue-500 font-medium"> Edit </button>`);
          if (!address.isDefault) {
            _push(`<button class="text-sm text-blue-600 hover:text-blue-500 font-medium"> Set Default </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><button class="text-sm text-red-600 hover:text-red-500 font-medium"> Delete </button></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/addresses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=addresses-Cv-RKmRP.js.map
