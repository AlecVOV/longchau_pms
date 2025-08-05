import { u as useHead, a as useAuthStore, b as useRouter, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Login - Long Châu",
      meta: [
        { name: "description", content: "Sign in to your Long Châu account to access your orders, prescriptions, and health records." }
      ]
    });
    const authStore = useAuthStore();
    useRouter();
    const form = ref({
      email: "",
      password: "",
      rememberMe: false
    });
    const showPassword = ref(false);
    const error = ref("");
    const success = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-55625235><div class="max-w-md w-full space-y-8" data-v-55625235><div class="text-center" data-v-55625235>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-3xl font-bold text-indigo-600" data-v-55625235${_scopeId}>Long Châu</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-3xl font-bold text-indigo-600" }, "Long Châu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="mt-6 text-3xl font-extrabold text-gray-900" data-v-55625235> Sign in to your account </h2><p class="mt-2 text-sm text-gray-600" data-v-55625235> Or `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "font-medium text-indigo-600 hover:text-indigo-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` create a new account `);
          } else {
            return [
              createTextVNode(" create a new account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><form class="mt-8 space-y-6" data-v-55625235><div class="bg-white p-8 rounded-lg shadow-lg" data-v-55625235>`);
      if (unref(error)) {
        _push(`<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" data-v-55625235>${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" data-v-55625235>${ssrInterpolate(unref(success))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-4" data-v-55625235><div data-v-55625235><label for="email" class="block text-sm font-medium text-gray-700" data-v-55625235> Email address </label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" data-v-55625235></div><div data-v-55625235><label for="password" class="block text-sm font-medium text-gray-700" data-v-55625235> Password </label><div class="mt-1 relative" data-v-55625235><input id="password"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} required class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" data-v-55625235><button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center" data-v-55625235>`);
      if (!unref(showPassword)) {
        _push(`<svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-55625235><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-55625235></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-55625235></path></svg>`);
      } else {
        _push(`<svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-55625235><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m-3.122-3.122l4.243 4.243M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3" data-v-55625235></path></svg>`);
      }
      _push(`</button></div></div><div class="flex items-center justify-between" data-v-55625235><div class="flex items-center" data-v-55625235><input id="remember-me"${ssrIncludeBooleanAttr(Array.isArray(unref(form).rememberMe) ? ssrLooseContain(unref(form).rememberMe, null) : unref(form).rememberMe) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" data-v-55625235><label for="remember-me" class="ml-2 block text-sm text-gray-900" data-v-55625235> Remember me </label></div><div class="text-sm" data-v-55625235>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/forgot-password",
        class: "font-medium text-indigo-600 hover:text-indigo-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Forgot your password? `);
          } else {
            return [
              createTextVNode(" Forgot your password? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div data-v-55625235><button type="submit"${ssrIncludeBooleanAttr(unref(authStore).loading) ? " disabled" : ""} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" data-v-55625235>`);
      if (unref(authStore).loading) {
        _push(`<span class="absolute left-0 inset-y-0 flex items-center pl-3" data-v-55625235><svg class="animate-spin h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-55625235><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-55625235></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-55625235></path></svg></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(authStore).loading ? "Signing in..." : "Sign in")}</button></div></div></div></form><div class="text-center text-sm text-gray-600" data-v-55625235><p data-v-55625235> By signing in, you agree to our `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-indigo-600 hover:text-indigo-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` and `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-indigo-600 hover:text-indigo-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55625235"]]);
export {
  login as default
};
//# sourceMappingURL=login-DIr9p4R1.js.map
