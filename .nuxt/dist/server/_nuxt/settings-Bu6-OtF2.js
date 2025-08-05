import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrLooseContain } from "vue/server-renderer";
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
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Account Settings - Long Châu",
      meta: [
        { name: "description", content: "Manage your account settings, privacy preferences, and security options." }
      ]
    });
    useAuthStore();
    const showPasswordForm = ref(false);
    const showDeleteConfirm = ref(false);
    const changingPassword = ref(false);
    const savingSettings = ref(false);
    const twoFactorEnabled = ref(false);
    const pushNotificationsEnabled = ref(false);
    const passwordForm = ref({
      current: "",
      new: "",
      confirm: ""
    });
    const privacySettings = ref({
      analytics: true,
      marketing: false,
      profileVisible: false
    });
    const notifications = ref({
      orderUpdates: true,
      prescriptionReminders: true,
      healthTips: false,
      specialOffers: false
    });
    const activeSessions = ref([
      {
        id: "1",
        browser: "Chrome",
        os: "Windows",
        location: "Ho Chi Minh City, Vietnam",
        lastActive: "2 minutes ago",
        device: "desktop",
        current: true
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="py-6"><h1 class="text-3xl font-bold text-gray-900">Account Settings</h1><p class="mt-1 text-sm text-gray-500">Manage your account preferences and security settings</p></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="space-y-8"><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2><div class="border-b border-gray-200 pb-6 mb-6"><div class="flex items-center justify-between"><div><h3 class="text-lg font-medium text-gray-900">Password</h3><p class="text-sm text-gray-500">Update your password to keep your account secure</p></div><button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">${ssrInterpolate(unref(showPasswordForm) ? "Cancel" : "Change Password")}</button></div>`);
      if (unref(showPasswordForm)) {
        _push(`<div class="mt-6"><form class="space-y-4 max-w-md"><div><label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label><input${ssrRenderAttr("value", unref(passwordForm).current)} type="password" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">New Password</label><input${ssrRenderAttr("value", unref(passwordForm).new)} type="password" required minlength="8" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label><input${ssrRenderAttr("value", unref(passwordForm).confirm)} type="password" required minlength="8" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div class="flex space-x-3"><button type="submit"${ssrIncludeBooleanAttr(unref(changingPassword)) ? " disabled" : ""} class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50">${ssrInterpolate(unref(changingPassword) ? "Updating..." : "Update Password")}</button><button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"> Cancel </button></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border-b border-gray-200 pb-6 mb-6"><div class="flex items-center justify-between"><div><h3 class="text-lg font-medium text-gray-900">Two-Factor Authentication</h3><p class="text-sm text-gray-500">Add an extra layer of security to your account</p></div><div class="flex items-center"><span class="text-sm text-gray-500 mr-3">${ssrInterpolate(unref(twoFactorEnabled) ? "Enabled" : "Disabled")}</span><button class="${ssrRenderClass([unref(twoFactorEnabled) ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700", "relative inline-flex items-center h-6 w-11 rounded-full transition-colors"])}"><span class="${ssrRenderClass([unref(twoFactorEnabled) ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 bg-white rounded-full transition-transform"])}"></span></button></div></div></div><div><div class="flex items-center justify-between mb-4"><div><h3 class="text-lg font-medium text-gray-900">Active Sessions</h3><p class="text-sm text-gray-500">Manage devices that are signed into your account</p></div><button class="text-sm text-red-600 hover:text-red-500 font-medium"> Sign out all devices </button></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(activeSessions), (session) => {
        _push(`<div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg"><div class="flex items-center"><div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
        if (session.device === "desktop") {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>`);
        } else {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>`);
        }
        _push(`</svg></div><div><div class="font-medium text-gray-900">${ssrInterpolate(session.browser)} on ${ssrInterpolate(session.os)}</div><div class="text-sm text-gray-500">${ssrInterpolate(session.location)} • ${ssrInterpolate(session.lastActive)}</div>`);
        if (session.current) {
          _push(`<div class="text-xs text-green-600 font-medium">Current session</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (!session.current) {
          _push(`<button class="text-sm text-red-600 hover:text-red-500 font-medium"> Sign out </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-xl font-semibold text-gray-900 mb-6">Privacy Settings</h2><div class="space-y-6"><div class="flex items-center justify-between"><div><h3 class="text-lg font-medium text-gray-900">Analytics &amp; Cookies</h3><p class="text-sm text-gray-500">Help us improve by sharing usage data</p></div><button class="${ssrRenderClass([unref(privacySettings).analytics ? "bg-blue-600" : "bg-gray-300", "relative inline-flex items-center h-6 w-11 rounded-full transition-colors"])}"><span class="${ssrRenderClass([unref(privacySettings).analytics ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 bg-white rounded-full transition-transform"])}"></span></button></div><div class="flex items-center justify-between"><div><h3 class="text-lg font-medium text-gray-900">Marketing Communications</h3><p class="text-sm text-gray-500">Receive promotional emails and updates</p></div><button class="${ssrRenderClass([unref(privacySettings).marketing ? "bg-blue-600" : "bg-gray-300", "relative inline-flex items-center h-6 w-11 rounded-full transition-colors"])}"><span class="${ssrRenderClass([unref(privacySettings).marketing ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 bg-white rounded-full transition-transform"])}"></span></button></div><div class="flex items-center justify-between"><div><h3 class="text-lg font-medium text-gray-900">Profile Visibility</h3><p class="text-sm text-gray-500">Make your profile visible to other users</p></div><button class="${ssrRenderClass([unref(privacySettings).profileVisible ? "bg-blue-600" : "bg-gray-300", "relative inline-flex items-center h-6 w-11 rounded-full transition-colors"])}"><span class="${ssrRenderClass([unref(privacySettings).profileVisible ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 bg-white rounded-full transition-transform"])}"></span></button></div></div></div><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2><div class="space-y-6"><div><h3 class="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3><div class="space-y-4"><div class="flex items-center justify-between"><div><span class="text-sm font-medium text-gray-900">Order Updates</span><p class="text-sm text-gray-500">Receive emails about your order status</p></div><input${ssrIncludeBooleanAttr(Array.isArray(unref(notifications).orderUpdates) ? ssrLooseContain(unref(notifications).orderUpdates, null) : unref(notifications).orderUpdates) ? " checked" : ""} type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded"></div><div class="flex items-center justify-between"><div><span class="text-sm font-medium text-gray-900">Prescription Reminders</span><p class="text-sm text-gray-500">Get reminded when it&#39;s time to refill</p></div><input${ssrIncludeBooleanAttr(Array.isArray(unref(notifications).prescriptionReminders) ? ssrLooseContain(unref(notifications).prescriptionReminders, null) : unref(notifications).prescriptionReminders) ? " checked" : ""} type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded"></div><div class="flex items-center justify-between"><div><span class="text-sm font-medium text-gray-900">Health Tips</span><p class="text-sm text-gray-500">Receive weekly health and wellness tips</p></div><input${ssrIncludeBooleanAttr(Array.isArray(unref(notifications).healthTips) ? ssrLooseContain(unref(notifications).healthTips, null) : unref(notifications).healthTips) ? " checked" : ""} type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded"></div><div class="flex items-center justify-between"><div><span class="text-sm font-medium text-gray-900">Special Offers</span><p class="text-sm text-gray-500">Get notified about discounts and promotions</p></div><input${ssrIncludeBooleanAttr(Array.isArray(unref(notifications).specialOffers) ? ssrLooseContain(unref(notifications).specialOffers, null) : unref(notifications).specialOffers) ? " checked" : ""} type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded"></div></div></div><div><h3 class="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3><div class="space-y-4"><div class="flex items-center justify-between"><div><span class="text-sm font-medium text-gray-900">Browser Notifications</span><p class="text-sm text-gray-500">Get notifications in your browser</p></div><button class="${ssrRenderClass([unref(pushNotificationsEnabled) ? "bg-blue-600" : "bg-gray-300", "relative inline-flex items-center h-6 w-11 rounded-full transition-colors"])}"><span class="${ssrRenderClass([unref(pushNotificationsEnabled) ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 bg-white rounded-full transition-transform"])}"></span></button></div></div></div></div></div><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-xl font-semibold text-gray-900 mb-6">Account Actions</h2><div class="space-y-6"><div class="flex items-center justify-between border-b border-gray-200 pb-6"><div><h3 class="text-lg font-medium text-gray-900">Download Your Data</h3><p class="text-sm text-gray-500">Get a copy of all your account data</p></div><button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"> Download </button></div><div class="flex items-center justify-between"><div><h3 class="text-lg font-medium text-red-900">Delete Account</h3><p class="text-sm text-red-600">Permanently delete your account and all data</p></div><button class="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50"> Delete Account </button></div></div></div><div class="flex justify-end"><button${ssrIncludeBooleanAttr(unref(savingSettings)) ? " disabled" : ""} class="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 disabled:opacity-50">${ssrInterpolate(unref(savingSettings) ? "Saving..." : "Save Settings")}</button></div></div></div>`);
      if (unref(showDeleteConfirm)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-lg p-6 max-w-md w-full mx-4"><h3 class="text-lg font-medium text-gray-900 mb-4">Delete Account</h3><p class="text-sm text-gray-600 mb-6"> Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed. </p><div class="flex space-x-3"><button class="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"> Cancel </button><button class="flex-1 px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"> Delete Account </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=settings-Bu6-OtF2.js.map
