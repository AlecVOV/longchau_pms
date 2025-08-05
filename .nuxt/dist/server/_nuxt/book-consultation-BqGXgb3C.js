import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "book-consultation",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        id: 1,
        name: "General Health Consultation",
        description: "20-minute consultation with a general practitioner",
        price: 45,
        icon: "i-iconify-ph-stethoscope-fill"
      },
      {
        id: 2,
        name: "Medication Review",
        description: "30-minute review of your current medications",
        price: 55,
        icon: "i-iconify-ph-pill-fill"
      },
      {
        id: 3,
        name: "Specialist Referral",
        description: "15-minute consultation to assess specialist needs",
        price: 35,
        icon: "i-iconify-ph-user-focus-fill"
      }
    ];
    const selectedService = ref(null);
    const selectedDateNum = ref(null);
    const selectedTime = ref(null);
    const availableTimes = [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM"
    ];
    (/* @__PURE__ */ new Date()).getFullYear();
    (/* @__PURE__ */ new Date()).toLocaleString("default", { month: "long" });
    const canBook = computed(() => {
      return selectedService.value && selectedDateNum.value && selectedTime.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Book a Virtual Consultation</h1><p class="text-neutral-600 mb-8 max-w-2xl">Speak with our professional healthcare providers from the comfort of your home.</p><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-sm p-6 mb-6"><h2 class="text-lg font-semibold text-neutral-800 mb-4">Our Services</h2><div class="space-y-4"><!--[-->`);
      ssrRenderList(services, (service) => {
        var _a;
        _push(`<div class="${ssrRenderClass([((_a = selectedService.value) == null ? void 0 : _a.id) === service.id ? "border-primary-500 bg-primary-50" : "border-neutral-200", "border rounded-lg p-4 cursor-pointer transition-colors"])}"><div class="flex items-center"><span class="${ssrRenderClass(`text-2xl ${service.icon} text-primary-600 mr-3`)}"></span><div><p class="font-medium">${ssrInterpolate(service.name)}</p><p class="text-sm text-neutral-500">${ssrInterpolate(service.description)}</p></div></div><div class="text-right mt-2"><span class="font-semibold">$${ssrInterpolate(service.price.toFixed(2))}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold text-neutral-800 mb-4">Select Date &amp; Time</h2><div class="grid grid-cols-7 gap-1 mb-6"><!--[-->`);
      ssrRenderList(7, (day) => {
        _push(`<div class="text-center font-medium text-neutral-500 text-sm py-2">${ssrInterpolate(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day - 1])}</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(31, (date) => {
        _push(`<div class="${ssrRenderClass([selectedDateNum.value === date ? "bg-primary-600 text-white" : "hover:bg-neutral-100", "text-center py-3 cursor-pointer transition-colors rounded-md"])}">${ssrInterpolate(date)}</div>`);
      });
      _push(`<!--]--></div><div class="mb-6"><h3 class="font-medium text-neutral-800 mb-3">Available Time Slots</h3><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(availableTimes, (time) => {
        _push(`<button class="${ssrRenderClass([selectedTime.value === time ? "bg-primary-600 text-white" : "bg-neutral-100 hover:bg-neutral-200", "py-2 px-4 rounded-md text-center transition-colors"])}">${ssrInterpolate(time)}</button>`);
      });
      _push(`<!--]--></div></div><button${ssrIncludeBooleanAttr(!canBook.value) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": !canBook.value }, "btn-primary w-full"])}"> Book Consultation </button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book-consultation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=book-consultation-BqGXgb3C.js.map
