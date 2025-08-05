import { u as useHead, c as useRoute, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderDynamicModel, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
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
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Reset Password - Long Châu",
      meta: [
        { name: "description", content: "Reset your Long Châu account password. Enter your new password to regain access to your account." }
      ]
    });
    const route = useRoute();
    route.query.token;
    route.query.email;
    const form = ref({
      password: "",
      confirmPassword: ""
    });
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const loading = ref(false);
    const error = ref("");
    const success = ref("");
    const passwordError = ref("");
    const confirmPasswordError = ref("");
    const invalidToken = ref(false);
    const passwordReset = ref(false);
    const passwordStrength = computed(() => {
      const password = form.value.password;
      let strength = 0;
      if (password.length >= 8) strength++;
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
      if (/\d/.test(password)) strength++;
      if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
      return strength;
    });
    const passwordStrengthText = computed(() => {
      const strength = passwordStrength.value;
      if (strength === 0) return "Very weak";
      if (strength === 1) return "Weak";
      if (strength === 2) return "Fair";
      if (strength === 3) return "Good";
      return "Strong";
    });
    const getPasswordStrengthClass = (index) => {
      const strength = passwordStrength.value;
      if (index <= strength) {
        if (strength <= 1) return "bg-red-500";
        if (strength === 2) return "bg-yellow-500";
        if (strength === 3) return "bg-blue-500";
        return "bg-green-500";
      }
      return "bg-gray-200";
    };
    const isFormValid = computed(() => {
      return form.value.password && form.value.confirmPassword && !passwordError.value && !confirmPasswordError.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-778baff8><div class="max-w-md w-full space-y-8" data-v-778baff8><div class="text-center" data-v-778baff8>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-3xl font-bold text-purple-600" data-v-778baff8${_scopeId}>Long Châu</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-3xl font-bold text-purple-600" }, "Long Châu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="mt-6 text-3xl font-extrabold text-gray-900" data-v-778baff8> Set new password </h2><p class="mt-2 text-sm text-gray-600" data-v-778baff8> Enter your new password below. </p></div><form class="mt-8 space-y-6" data-v-778baff8><div class="bg-white p-8 rounded-lg shadow-lg" data-v-778baff8>`);
      if (unref(error)) {
        _push(`<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" data-v-778baff8>${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" data-v-778baff8>${ssrInterpolate(unref(success))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(invalidToken)) {
        _push(`<div class="text-center space-y-4" data-v-778baff8><div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100" data-v-778baff8><svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-778baff8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-778baff8></path></svg></div><div data-v-778baff8><h3 class="text-lg font-medium text-gray-900" data-v-778baff8>Invalid or expired link</h3><p class="mt-2 text-sm text-gray-600" data-v-778baff8> This password reset link is invalid or has expired. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/forgot-password",
          class: "mt-4 inline-block text-purple-600 hover:text-purple-500 text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Request a new reset link `);
            } else {
              return [
                createTextVNode(" Request a new reset link ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else if (!unref(passwordReset)) {
        _push(`<div class="space-y-4" data-v-778baff8><div data-v-778baff8><label for="password" class="block text-sm font-medium text-gray-700" data-v-778baff8> New Password </label><div class="mt-1 relative" data-v-778baff8><input id="password"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} required class="${ssrRenderClass([{ "border-red-500": unref(passwordError) }, "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"])}" placeholder="Enter new password" data-v-778baff8><button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center" data-v-778baff8>`);
        if (!unref(showPassword)) {
          _push(`<svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-778baff8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-778baff8></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-778baff8></path></svg>`);
        } else {
          _push(`<svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-778baff8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m-3.122-3.122l4.243 4.243M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3" data-v-778baff8></path></svg>`);
        }
        _push(`</button></div><div class="mt-2" data-v-778baff8><div class="flex space-x-1" data-v-778baff8><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="${ssrRenderClass([getPasswordStrengthClass(i), "h-1 w-1/4 rounded"])}" data-v-778baff8></div>`);
        });
        _push(`<!--]--></div><p class="mt-1 text-xs text-gray-600" data-v-778baff8> Password strength: ${ssrInterpolate(unref(passwordStrengthText))}</p></div>`);
        if (unref(passwordError)) {
          _push(`<p class="mt-1 text-sm text-red-600" data-v-778baff8>${ssrInterpolate(unref(passwordError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-778baff8><label for="confirmPassword" class="block text-sm font-medium text-gray-700" data-v-778baff8> Confirm New Password </label><input id="confirmPassword"${ssrRenderDynamicModel(unref(showConfirmPassword) ? "text" : "password", unref(form).confirmPassword, null)}${ssrRenderAttr("type", unref(showConfirmPassword) ? "text" : "password")} required class="${ssrRenderClass([{ "border-red-500": unref(confirmPasswordError) }, "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"])}" placeholder="Confirm new password" data-v-778baff8>`);
        if (unref(confirmPasswordError)) {
          _push(`<p class="mt-1 text-sm text-red-600" data-v-778baff8>${ssrInterpolate(unref(confirmPasswordError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-778baff8><button type="submit"${ssrIncludeBooleanAttr(unref(loading) || !unref(isFormValid)) ? " disabled" : ""} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed" data-v-778baff8>`);
        if (unref(loading)) {
          _push(`<span class="absolute left-0 inset-y-0 flex items-center pl-3" data-v-778baff8><svg class="animate-spin h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-778baff8><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-778baff8></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-778baff8></path></svg></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(unref(loading) ? "Updating password..." : "Update password")}</button></div></div>`);
      } else {
        _push(`<div class="text-center space-y-4" data-v-778baff8><div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100" data-v-778baff8><svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-778baff8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-778baff8></path></svg></div><div data-v-778baff8><h3 class="text-lg font-medium text-gray-900" data-v-778baff8>Password updated successfully</h3><p class="mt-2 text-sm text-gray-600" data-v-778baff8> Your password has been updated. You can now sign in with your new password. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Sign in now `);
            } else {
              return [
                createTextVNode(" Sign in now ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-778baff8"]]);
export {
  resetPassword as default
};
//# sourceMappingURL=reset-password-B_3L5Z_K.js.map
