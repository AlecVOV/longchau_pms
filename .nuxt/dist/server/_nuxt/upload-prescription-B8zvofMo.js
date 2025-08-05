import { _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/unctx/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/radix3/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/defu/dist/defu.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/ufo/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/klona/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "upload-prescription",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const selectedFile = ref(null);
    const formData = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      doctorName: "",
      notes: "",
      termsAgreed: false
    });
    const errors = ref({});
    const showSuccess = ref(false);
    const referenceNumber = ref("");
    const canSubmit = computed(() => {
      return selectedFile.value && formData.value.termsAgreed;
    });
    function formatFileSize(bytes) {
      if (bytes < 1024) {
        return bytes + " bytes";
      } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + " KB";
      } else {
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Upload Your Prescription</h1><p class="text-neutral-600 mb-8 max-w-2xl"> Upload your prescription securely to purchase prescription medications. Your privacy and security are our top priorities. </p><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold text-neutral-800 mb-6">Prescription Upload</h2><div class="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center mb-6 hover:border-primary-300 transition-colors">`);
      if (!selectedFile.value) {
        _push(`<div class="py-8"><span class="i-iconify-ph-upload-simple text-5xl text-neutral-400 mb-4 inline-block"></span><p class="text-neutral-700 font-medium mb-2">Drag and drop your prescription file here</p><p class="text-neutral-500 mb-6">or</p><button class="btn-primary">Select File</button><p class="text-xs text-neutral-500 mt-4">Supported formats: JPG, PNG, PDF (Max: 10MB)</p><input type="file" class="hidden" accept=".jpg,.jpeg,.png,.pdf"></div>`);
      } else {
        _push(`<div class="py-4"><div class="flex items-center justify-center"><span class="i-iconify-ph-check-circle-fill text-3xl text-success-500 mr-3"></span><div class="text-left"><p class="font-medium text-neutral-800">${ssrInterpolate(selectedFile.value.name)}</p><p class="text-sm text-neutral-500">${ssrInterpolate(formatFileSize(selectedFile.value.size))}</p></div></div><button class="btn-outline mt-4"><span class="i-iconify-ph-trash text-lg mr-1"></span> Remove </button></div>`);
      }
      _push(`</div><form class="space-y-6"><div><h3 class="font-medium text-neutral-800 mb-3">Patient Information</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="firstName" class="block text-sm font-medium text-neutral-700 mb-1">First Name <span class="text-accent-500">*</span></label><input type="text" id="firstName"${ssrRenderAttr("value", formData.value.firstName)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.firstName }, "input"])}" required>`);
      if (errors.value.firstName) {
        _push(`<p class="text-accent-600 text-xs mt-1">${ssrInterpolate(errors.value.firstName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="lastName" class="block text-sm font-medium text-neutral-700 mb-1">Last Name <span class="text-accent-500">*</span></label><input type="text" id="lastName"${ssrRenderAttr("value", formData.value.lastName)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.lastName }, "input"])}" required>`);
      if (errors.value.lastName) {
        _push(`<p class="text-accent-600 text-xs mt-1">${ssrInterpolate(errors.value.lastName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="email" class="block text-sm font-medium text-neutral-700 mb-1">Email Address <span class="text-accent-500">*</span></label><input type="email" id="email"${ssrRenderAttr("value", formData.value.email)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.email }, "input"])}" required>`);
      if (errors.value.email) {
        _push(`<p class="text-accent-600 text-xs mt-1">${ssrInterpolate(errors.value.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="phone" class="block text-sm font-medium text-neutral-700 mb-1">Phone Number <span class="text-accent-500">*</span></label><input type="tel" id="phone"${ssrRenderAttr("value", formData.value.phone)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.phone }, "input"])}" required>`);
      if (errors.value.phone) {
        _push(`<p class="text-accent-600 text-xs mt-1">${ssrInterpolate(errors.value.phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div><h3 class="font-medium text-neutral-800 mb-3">Prescription Details</h3><div class="grid grid-cols-1 gap-4"><div><label for="doctorName" class="block text-sm font-medium text-neutral-700 mb-1">Doctor&#39;s Name <span class="text-accent-500">*</span></label><input type="text" id="doctorName"${ssrRenderAttr("value", formData.value.doctorName)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.doctorName }, "input"])}" required>`);
      if (errors.value.doctorName) {
        _push(`<p class="text-accent-600 text-xs mt-1">${ssrInterpolate(errors.value.doctorName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="notes" class="block text-sm font-medium text-neutral-700 mb-1">Additional Notes (Optional)</label><textarea id="notes" class="input h-24" placeholder="Include any special instructions or information about your prescription">${ssrInterpolate(formData.value.notes)}</textarea></div></div></div><div><div class="flex items-start mb-4"><div class="flex items-center h-5"><input id="terms" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(formData.value.termsAgreed) ? ssrLooseContain(formData.value.termsAgreed, null) : formData.value.termsAgreed) ? " checked" : ""} class="${ssrRenderClass([{ "border-accent-500": errors.value.termsAgreed }, "rounded text-primary-600 focus:ring-primary-500 h-4 w-4 mr-2"])}" required></div><div class="ml-2"><label for="terms" class="text-sm text-neutral-600"> I confirm that I have a valid prescription and consent to Long Châu processing my personal data in accordance with the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "text-primary-600 hover:text-primary-700"
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
      _push(`</label>`);
      if (errors.value.termsAgreed) {
        _push(`<p class="text-accent-600 text-xs mt-1">${ssrInterpolate(errors.value.termsAgreed)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="i-iconify-ph-arrow-left text-lg mr-1"${_scopeId}></span> Back to Home `);
          } else {
            return [
              createVNode("span", { class: "i-iconify-ph-arrow-left text-lg mr-1" }),
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="submit"${ssrIncludeBooleanAttr(!canSubmit.value) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": !canSubmit.value }, "btn-primary"])}"> Submit Prescription </button></div></div></form></div></div><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-sm p-6 mb-6"><h2 class="text-lg font-semibold text-neutral-800 mb-4">How It Works</h2><ul class="space-y-4"><li class="flex"><div class="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">1</div><div><p class="font-medium text-neutral-800">Upload Your Prescription</p><p class="text-sm text-neutral-500">Take a clear photo or scan of your valid prescription</p></div></li><li class="flex"><div class="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">2</div><div><p class="font-medium text-neutral-800">Verification</p><p class="text-sm text-neutral-500">Our pharmacists will review your prescription</p></div></li><li class="flex"><div class="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">3</div><div><p class="font-medium text-neutral-800">Order Confirmation</p><p class="text-sm text-neutral-500">We&#39;ll contact you to confirm your medication order</p></div></li><li class="flex"><div class="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">4</div><div><p class="font-medium text-neutral-800">Delivery</p><p class="text-sm text-neutral-500">Your medication will be securely delivered to your doorstep</p></div></li></ul></div><div class="bg-neutral-50 rounded-lg p-6"><h3 class="font-medium text-neutral-800 mb-3">Prescription Requirements</h3><ul class="text-sm text-neutral-600 space-y-2"><li class="flex items-start"><span class="i-iconify-ph-check-circle-fill text-primary-600 mt-1 mr-2"></span><span>Prescription must be valid and not expired</span></li><li class="flex items-start"><span class="i-iconify-ph-check-circle-fill text-primary-600 mt-1 mr-2"></span><span>Must include doctor&#39;s signature, patient name, and medication details</span></li><li class="flex items-start"><span class="i-iconify-ph-check-circle-fill text-primary-600 mt-1 mr-2"></span><span>Image must be clear and fully legible</span></li><li class="flex items-start"><span class="i-iconify-ph-check-circle-fill text-primary-600 mt-1 mr-2"></span><span>File size should not exceed 10MB</span></li></ul><div class="mt-6 bg-primary-50 border border-primary-100 rounded-md p-4"><div class="flex"><span class="i-iconify-ph-info-fill text-xl text-primary-600 mr-2 mt-0.5"></span><p class="text-sm text-primary-600"> Need help? Contact our pharmacy team at <a href="tel:+84287302345" class="font-medium">(028) 73023456</a> or <a href="mailto:sale@nhathuoclongchau.com.vn" class="font-medium">sale@nhathuoclongchau.com.vn</a></p></div></div></div></div></div>`);
      if (showSuccess.value) {
        _push(`<div class="fixed inset-0 bg-neutral-900/75 flex items-center justify-center z-50 animate-fade-in"><div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4"><div class="text-center mb-6"><div class="w-16 h-16 rounded-full bg-success-100 text-success-500 flex items-center justify-center mx-auto mb-4"><span class="i-iconify-ph-check-bold text-4xl"></span></div><h3 class="text-xl font-bold text-neutral-900 mb-2">Prescription Uploaded Successfully!</h3><p class="text-neutral-600"> Thank you for submitting your prescription. Our pharmacy team will review it shortly and contact you within 24 hours. </p></div><div class="bg-neutral-50 rounded-md p-4 mb-6"><p class="text-sm font-medium text-neutral-700 mb-1">Reference Number:</p><p class="text-neutral-800 font-bold">${ssrInterpolate(referenceNumber.value)}</p></div><div class="flex justify-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Return to Homepage `);
            } else {
              return [
                createTextVNode(" Return to Homepage ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/upload-prescription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=upload-prescription-B8zvofMo.js.map
