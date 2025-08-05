import { ref, computed, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "PaymentForm-new",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "validation-change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const codDetails = ref({
      deliveryNotes: "",
      contactMethod: "sms"
    });
    const isValid = computed(() => true);
    watch(codDetails, (newValue) => {
      emit("update:modelValue", {
        method: "cod",
        ...newValue
      });
    }, { deep: true, immediate: true });
    watch(isValid, (newValue) => {
      emit("validation-change", newValue);
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-form" }, _attrs))} data-v-35b91779><div class="mb-6" data-v-35b91779><h3 class="font-medium text-gray-800 mb-4" data-v-35b91779>Payment Method</h3><div class="space-y-3" data-v-35b91779><div class="border rounded-lg p-4 flex items-center cursor-pointer transition-all duration-200 border-primary-500 bg-primary-50 ring-2 ring-primary-200" data-v-35b91779><div class="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 border-primary-600" data-v-35b91779><div class="w-3 h-3 rounded-full bg-primary-600" data-v-35b91779></div></div><div class="flex-grow flex items-center justify-between" data-v-35b91779><div class="flex items-center" data-v-35b91779><svg class="w-8 h-8 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-35b91779><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" data-v-35b91779></path></svg><div data-v-35b91779><p class="font-medium text-gray-800" data-v-35b91779>Cash on Delivery (COD)</p><p class="text-sm text-gray-500" data-v-35b91779>Pay when your order is delivered to your doorstep</p></div></div><div class="flex items-center text-xs text-green-600" data-v-35b91779><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" data-v-35b91779><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" data-v-35b91779></path></svg> Secure </div></div></div></div></div><div class="bg-gray-50 rounded-lg p-6" data-v-35b91779><div class="flex items-center justify-between mb-4" data-v-35b91779><h4 class="font-medium text-gray-800" data-v-35b91779>Cash on Delivery Details</h4><div class="flex items-center space-x-2" data-v-35b91779><span class="text-sm text-green-600 font-medium" data-v-35b91779>✓ No advance payment required</span></div></div><div class="space-y-4" data-v-35b91779><div class="bg-blue-50 border border-blue-200 rounded-lg p-4" data-v-35b91779><div class="flex items-start" data-v-35b91779><svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-v-35b91779><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-35b91779></path></svg><div data-v-35b91779><h5 class="text-sm font-medium text-blue-800 mb-2" data-v-35b91779>How Cash on Delivery Works:</h5><ul class="text-sm text-blue-700 space-y-1" data-v-35b91779><li data-v-35b91779>• Your order will be prepared and shipped to your address</li><li data-v-35b91779>• Pay the delivery person when your order arrives</li><li data-v-35b91779>• Exact change is appreciated, but not required</li><li data-v-35b91779>• You can inspect your order before making payment</li><li data-v-35b91779>• Delivery fee may apply based on location</li></ul></div></div></div><div data-v-35b91779><label for="deliveryNotes" class="block text-sm font-medium text-gray-700 mb-1" data-v-35b91779> Delivery Instructions (Optional) </label><textarea id="deliveryNotes" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 resize-none" placeholder="Special instructions for delivery (e.g., gate code, preferred delivery time, etc.)" data-v-35b91779>${ssrInterpolate(unref(codDetails).deliveryNotes)}</textarea><p class="text-xs text-gray-500 mt-1" data-v-35b91779> Help our delivery team find you easily by providing specific instructions </p></div><div data-v-35b91779><label class="block text-sm font-medium text-gray-700 mb-3" data-v-35b91779> Preferred Contact Method for Delivery Updates </label><div class="space-y-2" data-v-35b91779><div class="flex items-center" data-v-35b91779><input id="contact-sms"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(codDetails).contactMethod, "sms")) ? " checked" : ""} type="radio" value="sms" class="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300" data-v-35b91779><label for="contact-sms" class="ml-2 text-sm text-gray-700" data-v-35b91779> SMS/Text Messages </label></div><div class="flex items-center" data-v-35b91779><input id="contact-call"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(codDetails).contactMethod, "call")) ? " checked" : ""} type="radio" value="call" class="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300" data-v-35b91779><label for="contact-call" class="ml-2 text-sm text-gray-700" data-v-35b91779> Phone Call </label></div><div class="flex items-center" data-v-35b91779><input id="contact-both"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(codDetails).contactMethod, "both")) ? " checked" : ""} type="radio" value="both" class="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300" data-v-35b91779><label for="contact-both" class="ml-2 text-sm text-gray-700" data-v-35b91779> Both SMS and Call </label></div></div></div></div></div><div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg" data-v-35b91779><div class="flex items-start" data-v-35b91779><svg class="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-v-35b91779><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-35b91779></path></svg><div data-v-35b91779><h4 class="text-sm font-medium text-green-800 mb-1" data-v-35b91779>Secure Cash on Delivery</h4><div class="text-sm text-green-700 space-y-1" data-v-35b91779><p data-v-35b91779>• No need to share sensitive financial information online</p><p data-v-35b91779>• Pay only after receiving and inspecting your order</p><p data-v-35b91779>• Our delivery partners are verified and trusted</p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaymentForm-new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaymentFormNew = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35b91779"]]);
export {
  PaymentFormNew as default
};
//# sourceMappingURL=PaymentForm-new-DmWK1NQl.js.map
