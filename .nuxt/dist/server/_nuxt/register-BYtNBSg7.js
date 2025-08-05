import { u as useHead, a as useAuthStore, b as useRouter, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderDynamicModel, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Register - Long Châu",
      meta: [
        { name: "description", content: "Create your Long Châu account to access personalized healthcare services, track prescriptions, and manage your health records." }
      ]
    });
    const authStore = useAuthStore();
    useRouter();
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      newsletter: false
    });
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const error = ref("");
    const success = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const confirmPasswordError = ref("");
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
      return form.value.firstName && form.value.lastName && form.value.email && form.value.phone && form.value.dateOfBirth && form.value.password && form.value.confirmPassword && form.value.acceptTerms && !emailError.value && !passwordError.value && !confirmPasswordError.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-8eefe232><div class="max-w-md w-full space-y-8" data-v-8eefe232><div class="text-center" data-v-8eefe232>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-3xl font-bold text-green-600" data-v-8eefe232${_scopeId}>Long Châu</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-3xl font-bold text-green-600" }, "Long Châu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="mt-6 text-3xl font-extrabold text-gray-900" data-v-8eefe232> Create your account </h2><p class="mt-2 text-sm text-gray-600" data-v-8eefe232> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "font-medium text-green-600 hover:text-green-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign in here `);
          } else {
            return [
              createTextVNode(" Sign in here ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><form class="mt-8 space-y-6" data-v-8eefe232><div class="bg-white p-8 rounded-lg shadow-lg" data-v-8eefe232>`);
      if (unref(error)) {
        _push(`<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" data-v-8eefe232>${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" data-v-8eefe232>${ssrInterpolate(unref(success))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-4" data-v-8eefe232><div class="grid grid-cols-2 gap-4" data-v-8eefe232><div data-v-8eefe232><label for="firstName" class="block text-sm font-medium text-gray-700" data-v-8eefe232> First Name </label><input id="firstName"${ssrRenderAttr("value", unref(form).firstName)} type="text" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="First name" data-v-8eefe232></div><div data-v-8eefe232><label for="lastName" class="block text-sm font-medium text-gray-700" data-v-8eefe232> Last Name </label><input id="lastName"${ssrRenderAttr("value", unref(form).lastName)} type="text" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Last name" data-v-8eefe232></div></div><div data-v-8eefe232><label for="email" class="block text-sm font-medium text-gray-700" data-v-8eefe232> Email address </label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" required class="${ssrRenderClass([{ "border-red-500": unref(emailError) }, "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"])}" placeholder="Enter your email" data-v-8eefe232>`);
      if (unref(emailError)) {
        _push(`<p class="mt-1 text-sm text-red-600" data-v-8eefe232>${ssrInterpolate(unref(emailError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-8eefe232><label for="phone" class="block text-sm font-medium text-gray-700" data-v-8eefe232> Phone Number </label><input id="phone"${ssrRenderAttr("value", unref(form).phone)} type="tel" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter your phone number" data-v-8eefe232></div><div data-v-8eefe232><label for="dateOfBirth" class="block text-sm font-medium text-gray-700" data-v-8eefe232> Date of Birth </label><input id="dateOfBirth"${ssrRenderAttr("value", unref(form).dateOfBirth)} type="date" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" data-v-8eefe232></div><div data-v-8eefe232><label for="password" class="block text-sm font-medium text-gray-700" data-v-8eefe232> Password </label><div class="mt-1 relative" data-v-8eefe232><input id="password"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} required class="${ssrRenderClass([{ "border-red-500": unref(passwordError) }, "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"])}" placeholder="Create a password" data-v-8eefe232><button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center" data-v-8eefe232>`);
      if (!unref(showPassword)) {
        _push(`<svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-8eefe232><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-8eefe232></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-8eefe232></path></svg>`);
      } else {
        _push(`<svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-8eefe232><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m-3.122-3.122l4.243 4.243M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3" data-v-8eefe232></path></svg>`);
      }
      _push(`</button></div><div class="mt-2" data-v-8eefe232><div class="flex space-x-1" data-v-8eefe232><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="${ssrRenderClass([getPasswordStrengthClass(i), "h-1 w-1/4 rounded"])}" data-v-8eefe232></div>`);
      });
      _push(`<!--]--></div><p class="mt-1 text-xs text-gray-600" data-v-8eefe232> Password strength: ${ssrInterpolate(unref(passwordStrengthText))}</p></div>`);
      if (unref(passwordError)) {
        _push(`<p class="mt-1 text-sm text-red-600" data-v-8eefe232>${ssrInterpolate(unref(passwordError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-8eefe232><label for="confirmPassword" class="block text-sm font-medium text-gray-700" data-v-8eefe232> Confirm Password </label><input id="confirmPassword"${ssrRenderDynamicModel(unref(showConfirmPassword) ? "text" : "password", unref(form).confirmPassword, null)}${ssrRenderAttr("type", unref(showConfirmPassword) ? "text" : "password")} required class="${ssrRenderClass([{ "border-red-500": unref(confirmPasswordError) }, "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"])}" placeholder="Confirm your password" data-v-8eefe232><button type="button" class="absolute right-3 top-2 text-gray-400" data-v-8eefe232></button>`);
      if (unref(confirmPasswordError)) {
        _push(`<p class="mt-1 text-sm text-red-600" data-v-8eefe232>${ssrInterpolate(unref(confirmPasswordError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center" data-v-8eefe232><input id="acceptTerms"${ssrIncludeBooleanAttr(Array.isArray(unref(form).acceptTerms) ? ssrLooseContain(unref(form).acceptTerms, null) : unref(form).acceptTerms) ? " checked" : ""} type="checkbox" required class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" data-v-8eefe232><label for="acceptTerms" class="ml-2 block text-sm text-gray-900" data-v-8eefe232> I agree to the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-green-600 hover:text-green-500"
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
        class: "text-green-600 hover:text-green-500"
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
      _push(`</label></div><div class="flex items-center" data-v-8eefe232><input id="newsletter"${ssrIncludeBooleanAttr(Array.isArray(unref(form).newsletter) ? ssrLooseContain(unref(form).newsletter, null) : unref(form).newsletter) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" data-v-8eefe232><label for="newsletter" class="ml-2 block text-sm text-gray-900" data-v-8eefe232> Subscribe to our newsletter for health tips and special offers </label></div><div data-v-8eefe232><button type="submit"${ssrIncludeBooleanAttr(unref(authStore).loading || !unref(isFormValid)) ? " disabled" : ""} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed" data-v-8eefe232>`);
      if (unref(authStore).loading) {
        _push(`<span class="absolute left-0 inset-y-0 flex items-center pl-3" data-v-8eefe232><svg class="animate-spin h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-8eefe232><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-8eefe232></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-8eefe232></path></svg></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(authStore).loading ? "Creating account..." : "Create account")}</button></div></div></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8eefe232"]]);
export {
  register as default
};
//# sourceMappingURL=register-BYtNBSg7.js.map
