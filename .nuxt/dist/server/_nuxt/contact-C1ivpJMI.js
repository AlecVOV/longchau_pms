import { u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { reactive, ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacyAccepted: false
    });
    const errors = reactive({});
    const isSubmitting = ref(false);
    useHead({
      title: "Contact Us - Long Châu Pharmacy",
      meta: [
        {
          name: "description",
          content: "Contact Long Châu Pharmacy for prescription questions, order support, and consultation booking. Available 24/7 to help with your healthcare needs."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><nav class="flex mb-6 text-sm" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-neutral-500 hover:text-primary-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">Contact Us</span></div></li></ol></nav><div class="text-center mb-12"><h1 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Contact Us</h1><p class="text-lg text-neutral-600 max-w-2xl mx-auto"> We&#39;re here to help! Get in touch with our team for any questions about medications, prescriptions, or our services. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><div class="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><span class="i-iconify-ph-phone-fill text-2xl text-primary-600"></span></div><h3 class="text-lg font-semibold text-neutral-900 mb-2">Call Us</h3><p class="text-neutral-600 mb-3">Speak directly with our pharmacy team</p><a href="tel:+84287302345" class="text-primary-600 hover:text-primary-700 font-medium"> (028) 73023456 </a><p class="text-sm text-neutral-500 mt-2">Mon-Fri: 8AM-8PM<br>Sat-Sun: 9AM-6PM</p></div><div class="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"><div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><span class="i-iconify-ph-envelope-fill text-2xl text-green-600"></span></div><h3 class="text-lg font-semibold text-neutral-900 mb-2">Email Us</h3><p class="text-neutral-600 mb-3">Send us a message anytime</p><a href="mailto:sale@nhathuoclongchau.com.vn" class="text-primary-600 hover:text-primary-700 font-medium"> sale@nhathuoclongchau.com.vn </a><p class="text-sm text-neutral-500 mt-2">We respond within 24 hours</p></div><div class="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"><div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><span class="i-iconify-ph-chat-circle-fill text-2xl text-blue-600"></span></div><h3 class="text-lg font-semibold text-neutral-900 mb-2">Live Chat</h3><p class="text-neutral-600 mb-3">Chat with our support team</p><button class="text-primary-600 hover:text-primary-700 font-medium"> Start Live Chat </button><p class="text-sm text-neutral-500 mt-2">Available 24/7</p></div></div><div class="bg-white rounded-lg shadow-sm p-8 mb-12"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2><form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="firstName" class="block text-sm font-medium text-neutral-700 mb-2"> First Name <span class="text-red-500">*</span></label><input type="text" id="firstName"${ssrRenderAttr("value", form.firstName)} class="${ssrRenderClass([{ "border-red-500": errors.firstName }, "input"])}" required>`);
      if (errors.firstName) {
        _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(errors.firstName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="lastName" class="block text-sm font-medium text-neutral-700 mb-2"> Last Name <span class="text-red-500">*</span></label><input type="text" id="lastName"${ssrRenderAttr("value", form.lastName)} class="${ssrRenderClass([{ "border-red-500": errors.lastName }, "input"])}" required>`);
      if (errors.lastName) {
        _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(errors.lastName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="email" class="block text-sm font-medium text-neutral-700 mb-2"> Email Address <span class="text-red-500">*</span></label><input type="email" id="email"${ssrRenderAttr("value", form.email)} class="${ssrRenderClass([{ "border-red-500": errors.email }, "input"])}" required>`);
      if (errors.email) {
        _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="phone" class="block text-sm font-medium text-neutral-700 mb-2"> Phone Number </label><input type="tel" id="phone"${ssrRenderAttr("value", form.phone)} class="input" placeholder="(555) 123-4567"></div></div><div><label for="subject" class="block text-sm font-medium text-neutral-700 mb-2"> Subject <span class="text-red-500">*</span></label><select id="subject" class="${ssrRenderClass([{ "border-red-500": errors.subject }, "input"])}" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.subject) ? ssrLooseContain(form.subject, "") : ssrLooseEqual(form.subject, "")) ? " selected" : ""}>Select a subject</option><option value="prescription"${ssrIncludeBooleanAttr(Array.isArray(form.subject) ? ssrLooseContain(form.subject, "prescription") : ssrLooseEqual(form.subject, "prescription")) ? " selected" : ""}>Prescription Questions</option><option value="order"${ssrIncludeBooleanAttr(Array.isArray(form.subject) ? ssrLooseContain(form.subject, "order") : ssrLooseEqual(form.subject, "order")) ? " selected" : ""}>Order Support</option><option value="billing"${ssrIncludeBooleanAttr(Array.isArray(form.subject) ? ssrLooseContain(form.subject, "billing") : ssrLooseEqual(form.subject, "billing")) ? " selected" : ""}>Billing Inquiry</option><option value="technical"${ssrIncludeBooleanAttr(Array.isArray(form.subject) ? ssrLooseContain(form.subject, "technical") : ssrLooseEqual(form.subject, "technical")) ? " selected" : ""}>Technical Support</option><option value="consultation"${ssrIncludeBooleanAttr(Array.isArray(form.subject) ? ssrLooseContain(form.subject, "consultation") : ssrLooseEqual(form.subject, "consultation")) ? " selected" : ""}>Consultation Booking</option><option value="complaint"${ssrIncludeBooleanAttr(Array.isArray(form.subject) ? ssrLooseContain(form.subject, "complaint") : ssrLooseEqual(form.subject, "complaint")) ? " selected" : ""}>Complaint or Feedback</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(form.subject) ? ssrLooseContain(form.subject, "other") : ssrLooseEqual(form.subject, "other")) ? " selected" : ""}>Other</option></select>`);
      if (errors.subject) {
        _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(errors.subject)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="message" class="block text-sm font-medium text-neutral-700 mb-2"> Message <span class="text-red-500">*</span></label><textarea id="message" rows="5" class="${ssrRenderClass([{ "border-red-500": errors.message }, "input"])}" placeholder="Please provide details about your inquiry..." required>${ssrInterpolate(form.message)}</textarea>`);
      if (errors.message) {
        _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(errors.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-start"><div class="flex items-center h-5"><input id="privacy" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.privacyAccepted) ? ssrLooseContain(form.privacyAccepted, null) : form.privacyAccepted) ? " checked" : ""} class="${ssrRenderClass([{ "border-red-500": errors.privacyAccepted }, "rounded text-primary-600 focus:ring-primary-500 h-4 w-4"])}" required></div><div class="ml-3"><label for="privacy" class="text-sm text-neutral-600"> I agree to the `);
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
      _push(` and consent to Long Châu processing my personal information. <span class="text-red-500">*</span></label>`);
      if (errors.privacyAccepted) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.privacyAccepted)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex items-center justify-between"><button type="button" class="btn-outline"> Reset Form </button><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": isSubmitting.value }, "btn-primary"])}">`);
      if (isSubmitting.value) {
        _push(`<span class="i-iconify-ph-spinner animate-spin mr-2"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isSubmitting.value ? "Sending..." : "Send Message")}</button></div></form></div><div class="bg-white rounded-lg shadow-sm p-8 mb-12"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="flex items-start"><span class="i-iconify-ph-map-pin-fill text-xl text-primary-600 mr-3 mt-1"></span><div><h3 class="font-semibold text-neutral-900">Main Office</h3><p class="text-neutral-600"> 379-381 Hai Bà Trưng<br> P. Xuân Hoà<br> TP. Hồ Chí Minh </p></div></div><div class="flex items-start"><span class="i-iconify-ph-clock-fill text-xl text-primary-600 mr-3 mt-1"></span><div><h3 class="font-semibold text-neutral-900">Business Hours</h3><div class="text-neutral-600"><p>Monday - Friday: 8:00 AM - 8:00 PM</p><p>Saturday: 9:00 AM - 6:00 PM</p><p>Sunday: 10:00 AM - 4:00 PM</p></div></div></div><div class="flex items-start"><span class="i-iconify-ph-shield-check-fill text-xl text-primary-600 mr-3 mt-1"></span><div><h3 class="font-semibold text-neutral-900">Emergency</h3><p class="text-neutral-600"> For medical emergencies, please call 113<br> For urgent prescription questions: <a href="tel:+18005551234" class="text-primary-600 hover:text-primary-700">(028) 73023456</a></p></div></div></div></div><div class="bg-white rounded-lg shadow-sm p-8 mb-12"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Quick Links</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/upload-prescription",
        class: "flex items-center p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-neutral-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="i-iconify-ph-upload-simple text-2xl text-primary-600 mr-3"${_scopeId}></span><div${_scopeId}><h3 class="font-medium text-neutral-900 group-hover:text-primary-600"${_scopeId}>Upload Prescription</h3><p class="text-xs text-neutral-600"${_scopeId}>Start your medication order</p></div>`);
          } else {
            return [
              createVNode("span", { class: "i-iconify-ph-upload-simple text-2xl text-primary-600 mr-3" }),
              createVNode("div", null, [
                createVNode("h3", { class: "font-medium text-neutral-900 group-hover:text-primary-600" }, "Upload Prescription"),
                createVNode("p", { class: "text-xs text-neutral-600" }, "Start your medication order")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/book-consultation",
        class: "flex items-center p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-neutral-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="i-iconify-ph-video-camera text-2xl text-primary-600 mr-3"${_scopeId}></span><div${_scopeId}><h3 class="font-medium text-neutral-900 group-hover:text-primary-600"${_scopeId}>Book Consultation</h3><p class="text-xs text-neutral-600"${_scopeId}>Speak with our pharmacists</p></div>`);
          } else {
            return [
              createVNode("span", { class: "i-iconify-ph-video-camera text-2xl text-primary-600 mr-3" }),
              createVNode("div", null, [
                createVNode("h3", { class: "font-medium text-neutral-900 group-hover:text-primary-600" }, "Book Consultation"),
                createVNode("p", { class: "text-xs text-neutral-600" }, "Speak with our pharmacists")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/health-assessment",
        class: "flex items-center p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-neutral-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="i-iconify-ph-clipboard-text text-2xl text-primary-600 mr-3"${_scopeId}></span><div${_scopeId}><h3 class="font-medium text-neutral-900 group-hover:text-primary-600"${_scopeId}>Health Assessment</h3><p class="text-xs text-neutral-600"${_scopeId}>Take our health quiz</p></div>`);
          } else {
            return [
              createVNode("span", { class: "i-iconify-ph-clipboard-text text-2xl text-primary-600 mr-3" }),
              createVNode("div", null, [
                createVNode("h3", { class: "font-medium text-neutral-900 group-hover:text-primary-600" }, "Health Assessment"),
                createVNode("p", { class: "text-xs text-neutral-600" }, "Take our health quiz")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/prescriptions",
        class: "flex items-center p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-neutral-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="i-iconify-ph-file-text text-2xl text-primary-600 mr-3"${_scopeId}></span><div${_scopeId}><h3 class="font-medium text-neutral-900 group-hover:text-primary-600"${_scopeId}>My Prescriptions</h3><p class="text-xs text-neutral-600"${_scopeId}>Manage your prescriptions</p></div>`);
          } else {
            return [
              createVNode("span", { class: "i-iconify-ph-file-text text-2xl text-primary-600 mr-3" }),
              createVNode("div", null, [
                createVNode("h3", { class: "font-medium text-neutral-900 group-hover:text-primary-600" }, "My Prescriptions"),
                createVNode("p", { class: "text-xs text-neutral-600" }, "Manage your prescriptions")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-8"><h2 class="text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="space-y-6"><div class="border-b border-neutral-200 pb-4"><h3 class="font-semibold text-neutral-900 mb-2">How do I upload my prescription?</h3><p class="text-sm text-neutral-600"> You can upload your prescription by clicking the &quot;Upload Prescription&quot; button or visiting our upload page. Simply take a clear photo or scan of your prescription. </p></div><div class="border-b border-neutral-200 pb-4"><h3 class="font-semibold text-neutral-900 mb-2">How long does prescription processing take?</h3><p class="text-sm text-neutral-600"> Most prescriptions are processed within 2-4 hours during business hours. We&#39;ll contact you once your prescription is ready. </p></div></div><div class="space-y-6"><div class="border-b border-neutral-200 pb-4"><h3 class="font-semibold text-neutral-900 mb-2">Do you offer delivery services?</h3><p class="text-sm text-neutral-600"> Yes! We offer free delivery on orders over $50. Same-day delivery is available in select areas. </p></div><div><h3 class="font-semibold text-neutral-900 mb-2">Can I book a consultation online?</h3><p class="text-sm text-neutral-600"> Absolutely! You can book a consultation with our licensed pharmacists online or by calling our support number. </p></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-C1ivpJMI.js.map
