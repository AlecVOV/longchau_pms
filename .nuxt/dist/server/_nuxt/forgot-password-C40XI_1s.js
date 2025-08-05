import { u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Forgot Password - Long Châu",
      meta: [
        { name: "description", content: "Reset your Long Châu account password. Enter your email to receive a password reset link." }
      ]
    });
    const email = ref("");
    const loading = ref(false);
    const error = ref("");
    const success = ref("");
    const emailSent = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-f052cf14><div class="max-w-md w-full space-y-8" data-v-f052cf14><div class="text-center" data-v-f052cf14>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-3xl font-bold text-purple-600" data-v-f052cf14${_scopeId}>Long Châu</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-3xl font-bold text-purple-600" }, "Long Châu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="mt-6 text-3xl font-extrabold text-gray-900" data-v-f052cf14> Reset your password </h2><p class="mt-2 text-sm text-gray-600" data-v-f052cf14> Enter your email address and we&#39;ll send you a link to reset your password. </p></div><form class="mt-8 space-y-6" data-v-f052cf14><div class="bg-white p-8 rounded-lg shadow-lg" data-v-f052cf14>`);
      if (unref(error)) {
        _push(`<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" data-v-f052cf14>${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" data-v-f052cf14>${ssrInterpolate(unref(success))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(emailSent)) {
        _push(`<div class="space-y-4" data-v-f052cf14><div data-v-f052cf14><label for="email" class="block text-sm font-medium text-gray-700" data-v-f052cf14> Email address </label><input id="email"${ssrRenderAttr("value", unref(email))} type="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Enter your email address" data-v-f052cf14></div><div data-v-f052cf14><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed" data-v-f052cf14>`);
        if (unref(loading)) {
          _push(`<span class="absolute left-0 inset-y-0 flex items-center pl-3" data-v-f052cf14><svg class="animate-spin h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-f052cf14><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-f052cf14></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-f052cf14></path></svg></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(unref(loading) ? "Sending..." : "Send reset link")}</button></div></div>`);
      } else {
        _push(`<div class="text-center space-y-4" data-v-f052cf14><div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100" data-v-f052cf14><svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f052cf14><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-f052cf14></path></svg></div><div data-v-f052cf14><h3 class="text-lg font-medium text-gray-900" data-v-f052cf14>Check your email</h3><p class="mt-2 text-sm text-gray-600" data-v-f052cf14> We&#39;ve sent a password reset link to <strong data-v-f052cf14>${ssrInterpolate(unref(email))}</strong></p><p class="mt-2 text-xs text-gray-500" data-v-f052cf14> Didn&#39;t receive the email? Check your spam folder or <button class="text-purple-600 hover:text-purple-500 underline" data-v-f052cf14> resend </button></p></div></div>`);
      }
      _push(`</div></form><div class="text-center" data-v-f052cf14>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-purple-600 hover:text-purple-500 text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← Back to sign in `);
          } else {
            return [
              createTextVNode(" ← Back to sign in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f052cf14"]]);
export {
  forgotPassword as default
};
//# sourceMappingURL=forgot-password-C40XI_1s.js.map
