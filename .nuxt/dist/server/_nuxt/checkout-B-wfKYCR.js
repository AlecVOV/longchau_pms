import { _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, watch, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useCartStore } from "./cart-Cj2Ys50X.js";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
import PaymentForm from "./PaymentForm-ydBufLUW.js";
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
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    useNotificationsStore();
    const checkoutSteps = [
      { id: "shipping", name: "Shipping" },
      { id: "payment", name: "Payment" },
      { id: "review", name: "Review" },
      { id: "confirmation", name: "Confirmation" }
    ];
    const activeStep = ref(0);
    const sameAsShipping = ref(true);
    const promoCode = ref("");
    const promoError = ref("");
    const promoSuccess = ref("");
    const discount = ref(0);
    const errors = ref({});
    const orderNumber = ref("");
    const isProcessingPayment = ref(false);
    const paymentValid = ref(false);
    const paymentFormRef = ref(null);
    const paymentData = ref({
      method: "credit-card",
      cardDetails: {}
    });
    const paymentMethod = computed(() => paymentData.value.method || "credit-card");
    const cartItems = computed(() => cartStore.items);
    const cartItemCount = computed(() => cartStore.itemCount);
    const cartTotal = computed(() => cartStore.total);
    const formData = ref({
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      address: "",
      zipCode: "",
      country: "VN",
      shippingMethod: "standard",
      specialInstructions: "",
      prescriptionFile: null
    });
    const billingAddress = ref({
      firstName: "",
      lastName: "",
      address: "",
      zipCode: "",
      country: "VN"
    });
    const paymentDetails = ref({
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: ""
    });
    const getShippingOptions = () => [
      {
        id: "standard",
        name: "Standard Shipping",
        price: cartTotal.value > 50 ? 0 : 5.99,
        description: "Delivery in 3-5 business days",
        eta: "Arrives by " + getFormattedDate(5)
      },
      {
        id: "express",
        name: "Express Shipping",
        price: 12.99,
        description: "Delivery in 2-3 business days",
        eta: "Arrives by " + getFormattedDate(3)
      },
      {
        id: "next-day",
        name: "Next Day Delivery",
        price: 19.99,
        description: "Guaranteed delivery on the next business day",
        eta: "Arrives by " + getFormattedDate(1)
      }
    ];
    const shippingOptions = computed(() => getShippingOptions());
    const selectedShippingOption = computed(() => {
      try {
        const found = shippingOptions.value.find((option) => option.id === formData.value.shippingMethod);
        return found || shippingOptions.value[0] || { id: "standard", name: "Standard Shipping", price: 5.99 };
      } catch (error) {
        console.warn("Error in selectedShippingOption computed:", error);
        return { id: "standard", name: "Standard Shipping", price: 5.99 };
      }
    });
    const tax = computed(() => {
      try {
        return cartTotal.value * 0.08;
      } catch (error) {
        console.warn("Error calculating tax:", error);
        return 0;
      }
    });
    const orderTotal = computed(() => {
      try {
        return cartTotal.value + selectedShippingOption.value.price + tax.value - discount.value;
      } catch (error) {
        console.warn("Error calculating order total:", error);
        return cartTotal.value || 0;
      }
    });
    const hasPrescriptionItems = computed(() => {
      return cartItems.value.some((item) => item.isRx);
    });
    const cardType = computed(() => {
      const number = paymentDetails.value.cardNumber.replace(/\D/g, "");
      if (!number) return null;
      if (number.startsWith("4")) return "ph-visa-logo";
      if (/^5[1-5]/.test(number)) return "ph-mastercard-logo";
      if (/^3[47]/.test(number)) return "ph-american-express-logo";
      if (/^6(?:011|5)/.test(number)) return "ph-discover-logo";
      return "ph-credit-card-fill";
    });
    const canProceedToNextStep = computed(() => {
      if (activeStep.value === 0) {
        const requiredFields = ["email", "phone", "firstName", "lastName", "address", "zipCode", "country"];
        const isAllRequired = requiredFields.every((field) => !!formData.value[field]);
        const isShippingSelected = !!formData.value.shippingMethod;
        const isPrescriptionUploaded = !hasPrescriptionItems.value || hasPrescriptionItems.value && formData.value.prescriptionFile;
        return isAllRequired && isShippingSelected && isPrescriptionUploaded;
      }
      if (activeStep.value === 1) {
        if (!sameAsShipping.value) {
          const requiredBillingFields = ["firstName", "lastName", "address", "zipCode", "country"];
          if (!requiredBillingFields.every((field) => !!billingAddress.value[field])) {
            return false;
          }
        }
        return paymentValid.value;
      }
      return true;
    });
    const canPlaceOrder = computed(() => {
      return canProceedToNextStep.value;
    });
    function getFormattedDate(daysFromNow) {
      const date = /* @__PURE__ */ new Date();
      date.setDate(date.getDate() + daysFromNow);
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    }
    function getCountryName(countryCode) {
      const countries = {
        "VN": "Vietnam",
        "US": "United States",
        "CA": "Canada"
      };
      return countries[countryCode] || countryCode;
    }
    function getShippingMethodName() {
      const option = shippingOptions.value.find((option2) => option2.id === formData.value.shippingMethod);
      return option ? option.name : "Standard Shipping";
    }
    const handlePaymentValidation = (isValid) => {
      console.log("Payment validation changed:", isValid);
      paymentValid.value = isValid;
    };
    watch(sameAsShipping, (newValue) => {
      if (newValue) {
        errors.value = {
          ...errors.value,
          billingFirstName: null,
          billingLastName: null,
          billingAddress: null,
          billingZipCode: null,
          billingCountry: null
        };
      }
    });
    watch(() => formData.value, (newValue) => {
      try {
        if (sameAsShipping.value && newValue) {
          billingAddress.value = {
            firstName: newValue.firstName || "",
            lastName: newValue.lastName || "",
            address: newValue.address || "",
            zipCode: newValue.zipCode || "",
            country: newValue.country || "VN"
          };
        }
      } catch (error) {
        console.warn("Error updating billing address:", error);
      }
    }, { deep: true });
    watch(promoCode, () => {
      promoError.value = "";
      promoSuccess.value = "";
    });
    watch(() => formData.value.shippingMethod, (newMethod, oldMethod) => {
      try {
        if (newMethod !== oldMethod && promoCode.value.toLowerCase() === "freeship") {
          const newOption = shippingOptions.value.find((option) => option.id === newMethod);
          if (newOption && typeof newOption.price === "number") {
            discount.value = newOption.price;
          }
        }
      } catch (error) {
        console.warn("Error updating shipping discount:", error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))} data-v-7c7dab79><div class="container-custom" data-v-7c7dab79><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-6" data-v-7c7dab79>Checkout</h1>`);
      if (cartItems.value.length === 0) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-8 text-center" data-v-7c7dab79><div class="w-20 h-20 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center" data-v-7c7dab79><span class="i-iconify-ph-shopping-cart-fill text-3xl text-neutral-400" data-v-7c7dab79></span></div><h2 class="text-xl font-semibold text-neutral-800 mb-3" data-v-7c7dab79>Your cart is empty</h2><p class="text-neutral-600 mb-6" data-v-7c7dab79>You need to add items to your cart before proceeding to checkout.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Browse Products`);
            } else {
              return [
                createTextVNode("Browse Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-v-7c7dab79><div class="lg:col-span-2 space-y-6" data-v-7c7dab79><div class="bg-white rounded-lg shadow-sm p-6" data-v-7c7dab79><div class="flex items-center justify-between" data-v-7c7dab79><!--[-->`);
        ssrRenderList(checkoutSteps, (step, index) => {
          _push(`<div class="flex-1 flex flex-col items-center" data-v-7c7dab79><div class="${ssrRenderClass([[
            activeStep.value === index ? "bg-primary-600 text-white" : activeStep.value > index ? "bg-primary-500 text-white" : "bg-neutral-200 text-neutral-600"
          ], "w-8 h-8 rounded-full flex items-center justify-center mb-2 relative text-sm"])}" data-v-7c7dab79>`);
          if (activeStep.value <= index) {
            _push(`<span data-v-7c7dab79>${ssrInterpolate(index + 1)}</span>`);
          } else {
            _push(`<span class="i-iconify-ph-check-bold" data-v-7c7dab79></span>`);
          }
          if (index < checkoutSteps.length - 1) {
            _push(`<div class="${ssrRenderClass([[
              activeStep.value > index ? "bg-primary-500" : "bg-neutral-200"
            ], "absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 left-1/2"])}" data-v-7c7dab79></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><span class="${ssrRenderClass([[
            activeStep.value === index ? "text-primary-600" : activeStep.value > index ? "text-primary-500" : "text-neutral-500"
          ], "text-sm font-medium hidden md:block"])}" data-v-7c7dab79>${ssrInterpolate(step.name)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (activeStep.value === 0) {
          _push(`<div class="bg-white rounded-lg shadow-sm p-6 animate-fade-in" data-v-7c7dab79><h2 class="text-xl font-semibold mb-6 flex items-center" data-v-7c7dab79><span class="i-iconify-ph-truck-fill text-xl text-primary-600 mr-2" data-v-7c7dab79></span> Shipping Information </h2><div class="space-y-4" data-v-7c7dab79><div data-v-7c7dab79><h3 class="font-medium text-neutral-800 mb-3" data-v-7c7dab79>Contact Information</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-7c7dab79><div data-v-7c7dab79><label for="email" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Email Address <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="email" id="email"${ssrRenderAttr("value", formData.value.email)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.email }, "input"])}" required data-v-7c7dab79>`);
          if (errors.value.email) {
            _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.email)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div data-v-7c7dab79><label for="phone" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Phone Number <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="tel" id="phone"${ssrRenderAttr("value", formData.value.phone)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.phone }, "input"])}" required data-v-7c7dab79>`);
          if (errors.value.phone) {
            _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.phone)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="mt-6" data-v-7c7dab79><h3 class="font-medium text-neutral-800 mb-3" data-v-7c7dab79>Shipping Address</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-7c7dab79><div data-v-7c7dab79><label for="firstName" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>First Name <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="text" id="firstName"${ssrRenderAttr("value", formData.value.firstName)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.firstName }, "input"])}" required data-v-7c7dab79>`);
          if (errors.value.firstName) {
            _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.firstName)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div data-v-7c7dab79><label for="lastName" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Last Name <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="text" id="lastName"${ssrRenderAttr("value", formData.value.lastName)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.lastName }, "input"])}" required data-v-7c7dab79>`);
          if (errors.value.lastName) {
            _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.lastName)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="md:col-span-2" data-v-7c7dab79><label for="address" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Address <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="text" id="address"${ssrRenderAttr("value", formData.value.address)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.address }, "input"])}" required data-v-7c7dab79>`);
          if (errors.value.address) {
            _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.address)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div data-v-7c7dab79><label for="zipCode" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Postal Code <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="text" id="zipCode"${ssrRenderAttr("value", formData.value.zipCode)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.zipCode }, "input"])}" required data-v-7c7dab79>`);
          if (errors.value.zipCode) {
            _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.zipCode)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div data-v-7c7dab79><label for="country" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Country <span class="text-accent-500" data-v-7c7dab79>*</span></label><select id="country" class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.country }, "input"])}" required data-v-7c7dab79><option value="VN" data-v-7c7dab79${ssrIncludeBooleanAttr(Array.isArray(formData.value.country) ? ssrLooseContain(formData.value.country, "VN") : ssrLooseEqual(formData.value.country, "VN")) ? " selected" : ""}>Vietnam</option></select>`);
          if (errors.value.country) {
            _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.country)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="mt-6" data-v-7c7dab79><h3 class="font-medium text-neutral-800 mb-3" data-v-7c7dab79>Shipping Method</h3><div class="space-y-3" data-v-7c7dab79><!--[-->`);
          ssrRenderList(shippingOptions.value, (option, index) => {
            _push(`<div class="${ssrRenderClass([formData.value.shippingMethod === option.id ? "border-primary-500 bg-primary-50" : "border-neutral-200 hover:border-primary-300", "border rounded-lg p-4 flex items-center cursor-pointer transition-colors"])}" data-v-7c7dab79><div class="${ssrRenderClass([formData.value.shippingMethod === option.id ? "border-primary-600" : "border-neutral-300", "w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3"])}" data-v-7c7dab79>`);
            if (formData.value.shippingMethod === option.id) {
              _push(`<div class="w-3 h-3 rounded-full bg-primary-600" data-v-7c7dab79></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="flex-grow" data-v-7c7dab79><p class="font-medium text-neutral-800" data-v-7c7dab79>${ssrInterpolate(option.name)}</p><p class="text-sm text-neutral-500" data-v-7c7dab79>${ssrInterpolate(option.description)}</p></div><div class="text-right" data-v-7c7dab79><p class="font-semibold text-neutral-800" data-v-7c7dab79>${ssrInterpolate(option.price === 0 ? "Free" : "$" + option.price.toFixed(2))}</p><p class="text-xs text-neutral-500" data-v-7c7dab79>${ssrInterpolate(option.eta)}</p></div></div>`);
          });
          _push(`<!--]--></div></div><div class="mt-6" data-v-7c7dab79><label for="instructions" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Special Instructions (Optional)</label><textarea id="instructions" class="input h-20" placeholder="Any special delivery instructions or notes" data-v-7c7dab79>${ssrInterpolate(formData.value.specialInstructions)}</textarea></div>`);
          if (hasPrescriptionItems.value) {
            _push(`<div class="mt-6 bg-primary-50 border border-primary-100 rounded-md p-4" data-v-7c7dab79><div class="flex" data-v-7c7dab79><span class="i-iconify-ph-prescription-fill text-xl text-primary-600 mr-2 mt-0.5" data-v-7c7dab79></span><div data-v-7c7dab79><h3 class="font-medium text-primary-700 mb-1" data-v-7c7dab79>Prescription Required</h3><p class="text-sm text-primary-600 mb-3" data-v-7c7dab79> One or more items in your order require a prescription. Please upload a valid prescription below. </p><div class="flex items-center" data-v-7c7dab79><label for="prescription" class="btn-outline text-sm py-1.5 cursor-pointer" data-v-7c7dab79><span class="i-iconify-ph-upload-simple text-lg mr-1" data-v-7c7dab79></span> Upload Prescription <input type="file" id="prescription" class="hidden" accept=".jpg,.jpeg,.png,.pdf" data-v-7c7dab79></label>`);
            if (formData.value.prescriptionFile) {
              _push(`<span class="ml-3 text-sm text-primary-600" data-v-7c7dab79>${ssrInterpolate(formData.value.prescriptionFile.name)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex justify-between mt-8" data-v-7c7dab79>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/cart",
            class: "btn-outline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Return to Cart`);
              } else {
                return [
                  createTextVNode("Return to Cart")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<button class="btn-primary"${ssrIncludeBooleanAttr(!canProceedToNextStep.value) ? " disabled" : ""} data-v-7c7dab79>Continue to Payment</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeStep.value === 1) {
          _push(`<div class="bg-white rounded-lg shadow-sm p-6 animate-fade-in" data-v-7c7dab79><h2 class="text-xl font-semibold mb-6 flex items-center" data-v-7c7dab79><span class="i-iconify-ph-credit-card-fill text-xl text-primary-600 mr-2" data-v-7c7dab79></span> Payment Method </h2><div class="space-y-4" data-v-7c7dab79><div data-v-7c7dab79><div class="flex items-center mb-4" data-v-7c7dab79><h3 class="font-medium text-neutral-800" data-v-7c7dab79>Billing Address</h3><div class="ml-6 flex items-center" data-v-7c7dab79><input type="checkbox" id="sameAsShipping"${ssrIncludeBooleanAttr(Array.isArray(sameAsShipping.value) ? ssrLooseContain(sameAsShipping.value, null) : sameAsShipping.value) ? " checked" : ""} class="rounded text-primary-600 focus:ring-primary-500 h-4 w-4" data-v-7c7dab79><label for="sameAsShipping" class="ml-2 text-sm text-neutral-700" data-v-7c7dab79> Same as shipping address </label></div></div>`);
          if (!sameAsShipping.value) {
            _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-7c7dab79><div data-v-7c7dab79><label for="billingFirstName" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>First Name <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="text" id="billingFirstName"${ssrRenderAttr("value", billingAddress.value.firstName)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.billingFirstName }, "input"])}" required data-v-7c7dab79>`);
            if (errors.value.billingFirstName) {
              _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.billingFirstName)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div data-v-7c7dab79><label for="billingLastName" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Last Name <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="text" id="billingLastName"${ssrRenderAttr("value", billingAddress.value.lastName)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.billingLastName }, "input"])}" required data-v-7c7dab79>`);
            if (errors.value.billingLastName) {
              _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.billingLastName)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="md:col-span-2" data-v-7c7dab79><label for="billingAddress" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Street Address <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="text" id="billingAddress"${ssrRenderAttr("value", billingAddress.value.address)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.billingAddress }, "input"])}" required data-v-7c7dab79>`);
            if (errors.value.billingAddress) {
              _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.billingAddress)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div data-v-7c7dab79><label for="billingZipCode" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Postal Code <span class="text-accent-500" data-v-7c7dab79>*</span></label><input type="text" id="billingZipCode"${ssrRenderAttr("value", billingAddress.value.zipCode)} class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.billingZipCode }, "input"])}" required data-v-7c7dab79>`);
            if (errors.value.billingZipCode) {
              _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.billingZipCode)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div data-v-7c7dab79><label for="billingCountry" class="block text-sm font-medium text-neutral-700 mb-1" data-v-7c7dab79>Country <span class="text-accent-500" data-v-7c7dab79>*</span></label><select id="billingCountry" class="${ssrRenderClass([{ "border-accent-500 focus:ring-accent-500": errors.value.billingCountry }, "input"])}" required data-v-7c7dab79><option value="VN" data-v-7c7dab79${ssrIncludeBooleanAttr(Array.isArray(billingAddress.value.country) ? ssrLooseContain(billingAddress.value.country, "VN") : ssrLooseEqual(billingAddress.value.country, "VN")) ? " selected" : ""}>Vietnam</option></select>`);
            if (errors.value.billingCountry) {
              _push(`<p class="text-accent-600 text-xs mt-1" data-v-7c7dab79>${ssrInterpolate(errors.value.billingCountry)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(PaymentForm, {
            ref_key: "paymentFormRef",
            ref: paymentFormRef,
            modelValue: paymentData.value,
            "onUpdate:modelValue": ($event) => paymentData.value = $event,
            disabled: isProcessingPayment.value,
            onValidationChange: handlePaymentValidation
          }, null, _parent));
          _push(`<div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg" data-v-7c7dab79><div class="flex items-start" data-v-7c7dab79><svg class="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-v-7c7dab79><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-7c7dab79></path></svg><div data-v-7c7dab79><h4 class="text-sm font-medium text-blue-800 mb-1" data-v-7c7dab79>Payment Information</h4><div class="text-sm text-blue-700 space-y-1" data-v-7c7dab79><p data-v-7c7dab79>• Your payment will be processed securely using 256-bit SSL encryption</p><p data-v-7c7dab79>• No payment will be charged until your order is confirmed</p><p data-v-7c7dab79>• You can review your order before completing the purchase</p></div></div></div></div>`);
          if (paymentMethod.value === "paypal") {
            _push(`<div class="mt-6 p-4 border border-neutral-200 rounded-lg" data-v-7c7dab79><div class="text-center" data-v-7c7dab79><p class="mb-4 text-neutral-700" data-v-7c7dab79>You will be redirected to PayPal to complete your payment securely.</p><img src="https://placehold.co/200x60?text=PayPal" alt="PayPal" class="h-8 mx-auto" data-v-7c7dab79></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex justify-between mt-8" data-v-7c7dab79><button class="btn-outline" data-v-7c7dab79>Back to Shipping</button><button class="btn-primary"${ssrIncludeBooleanAttr(!paymentValid.value) ? " disabled" : ""} data-v-7c7dab79>Continue to Review</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeStep.value === 2) {
          _push(`<div class="bg-white rounded-lg shadow-sm p-6 animate-fade-in" data-v-7c7dab79><h2 class="text-xl font-semibold mb-6 flex items-center" data-v-7c7dab79><span class="i-iconify-ph-clipboard-text-fill text-xl text-primary-600 mr-2" data-v-7c7dab79></span> Review Your Order </h2><div class="space-y-6" data-v-7c7dab79><div data-v-7c7dab79><h3 class="font-medium text-neutral-800 mb-3" data-v-7c7dab79>Order Items (${ssrInterpolate(cartItemCount.value)})</h3><div class="space-y-4 max-h-60 overflow-y-auto pr-2" data-v-7c7dab79><!--[-->`);
          ssrRenderList(cartItems.value, (item, index) => {
            _push(`<div class="flex items-center gap-3 py-2 border-b border-neutral-100 last:border-b-0" data-v-7c7dab79><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="w-14 h-14 object-cover rounded-md" data-v-7c7dab79><div class="flex-grow" data-v-7c7dab79><p class="font-medium text-neutral-800" data-v-7c7dab79>${ssrInterpolate(item.name)}</p><div class="flex justify-between mt-1" data-v-7c7dab79><p class="text-sm text-neutral-500" data-v-7c7dab79>Qty: ${ssrInterpolate(item.quantity)}</p><p class="font-medium text-neutral-800" data-v-7c7dab79>$${ssrInterpolate((item.price * item.quantity).toFixed(2))}</p></div></div></div>`);
          });
          _push(`<!--]--></div></div><div class="border-t border-neutral-200 pt-4" data-v-7c7dab79><div class="flex justify-between items-center mb-2" data-v-7c7dab79><h3 class="font-medium text-neutral-800" data-v-7c7dab79>Shipping Information</h3><button class="text-sm text-primary-600 hover:text-primary-700" data-v-7c7dab79> Edit </button></div><div class="bg-neutral-50 rounded-lg p-3 text-sm" data-v-7c7dab79><p class="font-medium text-neutral-800" data-v-7c7dab79>${ssrInterpolate(formData.value.firstName)} ${ssrInterpolate(formData.value.lastName)}</p><p data-v-7c7dab79>${ssrInterpolate(formData.value.address)}</p><p data-v-7c7dab79>${ssrInterpolate(formData.value.zipCode)}</p><p data-v-7c7dab79>${ssrInterpolate(getCountryName(formData.value.country))}</p><p class="mt-1" data-v-7c7dab79>${ssrInterpolate(formData.value.email)}</p><p data-v-7c7dab79>${ssrInterpolate(formData.value.phone)}</p>`);
          if (formData.value.specialInstructions) {
            _push(`<p class="mt-2 text-neutral-600 italic" data-v-7c7dab79><span class="font-medium" data-v-7c7dab79>Special Instructions:</span> ${ssrInterpolate(formData.value.specialInstructions)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="mt-2 text-neutral-600" data-v-7c7dab79><span class="font-medium" data-v-7c7dab79>Shipping Method:</span> ${ssrInterpolate(getShippingMethodName())}</p></div></div><div class="border-t border-neutral-200 pt-4" data-v-7c7dab79><div class="flex justify-between items-center mb-2" data-v-7c7dab79><h3 class="font-medium text-neutral-800" data-v-7c7dab79>Payment Information</h3><button class="text-sm text-primary-600 hover:text-primary-700" data-v-7c7dab79> Edit </button></div><div class="bg-neutral-50 rounded-lg p-3 text-sm" data-v-7c7dab79>`);
          if (paymentMethod.value === "credit-card") {
            _push(`<div data-v-7c7dab79><div class="flex items-center" data-v-7c7dab79>`);
            if (cardType.value) {
              _push(`<span class="${ssrRenderClass(`i-iconify-${cardType.value} text-xl mr-2`)}" data-v-7c7dab79></span>`);
            } else {
              _push(`<span class="i-iconify-ph-credit-card-fill text-xl mr-2 text-neutral-400" data-v-7c7dab79></span>`);
            }
            _push(`<div data-v-7c7dab79><p class="font-medium" data-v-7c7dab79>Credit Card</p><p data-v-7c7dab79>**** **** **** ${ssrInterpolate(paymentDetails.value.cardNumber.slice(-4))}</p></div></div></div>`);
          } else if (paymentMethod.value === "paypal") {
            _push(`<div data-v-7c7dab79><div class="flex items-center" data-v-7c7dab79><span class="i-iconify-ph-paypal-logo-fill text-xl mr-2 text-[#003087]" data-v-7c7dab79></span><p class="font-medium" data-v-7c7dab79>PayPal</p></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (!sameAsShipping.value) {
            _push(`<div class="mt-2" data-v-7c7dab79><p class="font-medium mt-3" data-v-7c7dab79>Billing Address:</p><p data-v-7c7dab79>${ssrInterpolate(billingAddress.value.firstName)} ${ssrInterpolate(billingAddress.value.lastName)}</p><p data-v-7c7dab79>${ssrInterpolate(billingAddress.value.address)}</p><p data-v-7c7dab79>${ssrInterpolate(billingAddress.value.zipCode)}</p><p data-v-7c7dab79>${ssrInterpolate(getCountryName(billingAddress.value.country))}</p></div>`);
          } else {
            _push(`<div class="mt-2" data-v-7c7dab79><p class="text-neutral-600" data-v-7c7dab79><span class="font-medium" data-v-7c7dab79>Billing Address:</span> Same as shipping</p></div>`);
          }
          _push(`</div></div>`);
          if (hasPrescriptionItems.value) {
            _push(`<div class="border-t border-neutral-200 pt-4" data-v-7c7dab79><h3 class="font-medium text-neutral-800 mb-2" data-v-7c7dab79>Prescription Information</h3><div class="bg-neutral-50 rounded-lg p-3 text-sm" data-v-7c7dab79>`);
            if (formData.value.prescriptionFile) {
              _push(`<div data-v-7c7dab79><div class="flex items-center" data-v-7c7dab79><span class="i-iconify-ph-check-circle-fill text-lg text-success-500 mr-2" data-v-7c7dab79></span><p data-v-7c7dab79>Prescription uploaded: <span class="font-medium" data-v-7c7dab79>${ssrInterpolate(formData.value.prescriptionFile.name)}</span></p></div></div>`);
            } else {
              _push(`<div class="text-accent-600" data-v-7c7dab79><span class="i-iconify-ph-warning-circle-fill text-lg mr-2 align-text-bottom" data-v-7c7dab79></span><span data-v-7c7dab79>Prescription not uploaded. Please go back to the shipping step to upload your prescription.</span></div>`);
            }
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex justify-between mt-8" data-v-7c7dab79><button class="btn-outline" data-v-7c7dab79>Back to Payment</button><button class="btn-primary"${ssrIncludeBooleanAttr(!canPlaceOrder.value) ? " disabled" : ""} data-v-7c7dab79> Place Order </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeStep.value === 3) {
          _push(`<div class="bg-white rounded-lg shadow-sm p-6 text-center animate-fade-in" data-v-7c7dab79><div class="w-20 h-20 mx-auto mb-4 rounded-full bg-success-100 flex items-center justify-center" data-v-7c7dab79><span class="i-iconify-ph-check-fill text-4xl text-success-500" data-v-7c7dab79></span></div><h2 class="text-2xl font-bold text-neutral-900 mb-3" data-v-7c7dab79>Thank You for Your Order!</h2><p class="text-neutral-600 mb-6" data-v-7c7dab79>Your order has been placed successfully.</p><div class="max-w-md mx-auto bg-neutral-50 rounded-lg p-4 text-left mb-8" data-v-7c7dab79><p class="font-semibold text-neutral-800 mb-2" data-v-7c7dab79>Order #${ssrInterpolate(orderNumber.value)}</p><p class="text-sm text-neutral-600 mb-4" data-v-7c7dab79>A confirmation email has been sent to ${ssrInterpolate(formData.value.email)}</p><div class="border-t border-neutral-200 pt-3 mt-3" data-v-7c7dab79><p class="font-medium text-neutral-800 mb-1" data-v-7c7dab79>Order Summary</p><div class="flex justify-between text-sm text-neutral-600 mb-1" data-v-7c7dab79><span data-v-7c7dab79>Subtotal (${ssrInterpolate(cartItemCount.value)} items):</span><span data-v-7c7dab79>$${ssrInterpolate(cartTotal.value.toFixed(2))}</span></div><div class="flex justify-between text-sm text-neutral-600 mb-1" data-v-7c7dab79><span data-v-7c7dab79>Shipping:</span>`);
          if (selectedShippingOption.value.price === 0) {
            _push(`<span data-v-7c7dab79>Free</span>`);
          } else {
            _push(`<span data-v-7c7dab79>$${ssrInterpolate(selectedShippingOption.value.price.toFixed(2))}</span>`);
          }
          _push(`</div><div class="flex justify-between text-sm text-neutral-600 mb-1" data-v-7c7dab79><span data-v-7c7dab79>Tax:</span><span data-v-7c7dab79>$${ssrInterpolate(tax.value.toFixed(2))}</span></div><div class="flex justify-between font-semibold text-neutral-800 mt-2 text-base" data-v-7c7dab79><span data-v-7c7dab79>Total:</span><span data-v-7c7dab79>$${ssrInterpolate(orderTotal.value.toFixed(2))}</span></div></div></div><div class="space-x-4" data-v-7c7dab79>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/account/orders",
            class: "btn-primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View Your Orders `);
              } else {
                return [
                  createTextVNode(" View Your Orders ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: "btn-outline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Continue Shopping `);
              } else {
                return [
                  createTextVNode(" Continue Shopping ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
          if (cartItems.value.length > 0) {
            _push(`<div class="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg" data-v-7c7dab79><div class="text-center" data-v-7c7dab79><p class="text-sm text-amber-700 mb-3" data-v-7c7dab79><span class="i-iconify-ph-warning-fill text-lg mr-1" data-v-7c7dab79></span> Your cart still contains items. This might be a technical issue. </p><button class="btn-outline text-sm" data-v-7c7dab79> Clear Cart Manually </button></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="lg:col-span-1" data-v-7c7dab79><div class="bg-white rounded-lg shadow-sm overflow-hidden lg:sticky lg:top-8 lg:max-h-[calc(100vh-6rem)]" data-v-7c7dab79><div class="p-4 sm:p-6 border-b border-neutral-200" data-v-7c7dab79><h2 class="text-lg font-semibold text-neutral-800" data-v-7c7dab79>Order Summary</h2></div><div class="p-4 sm:p-6 lg:overflow-y-auto lg:max-h-[calc(100vh-12rem)]" data-v-7c7dab79>`);
        if (cartItems.value.length > 0) {
          _push(`<div class="max-h-60 lg:max-h-none overflow-y-auto mb-4" data-v-7c7dab79><!--[-->`);
          ssrRenderList(cartItems.value, (item, index) => {
            _push(`<div class="flex items-center py-2 border-b border-neutral-100 last:border-b-0" data-v-7c7dab79><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="w-12 h-12 object-cover rounded-md" data-v-7c7dab79><div class="ml-3 flex-1" data-v-7c7dab79><p class="text-sm font-medium text-neutral-800 line-clamp-1" data-v-7c7dab79>${ssrInterpolate(item.name)}</p><div class="flex items-center justify-between mt-1" data-v-7c7dab79><p class="text-sm text-neutral-500" data-v-7c7dab79>${ssrInterpolate(item.quantity)} × $${ssrInterpolate(item.price.toFixed(2))}</p><p class="text-sm font-medium" data-v-7c7dab79>$${ssrInterpolate((item.price * item.quantity).toFixed(2))}</p></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="space-y-3 mb-6" data-v-7c7dab79><div class="flex justify-between" data-v-7c7dab79><span class="text-neutral-600" data-v-7c7dab79>Subtotal</span><span class="font-medium text-neutral-800" data-v-7c7dab79>$${ssrInterpolate(cartTotal.value.toFixed(2))}</span></div><div class="flex justify-between" data-v-7c7dab79><span class="text-neutral-600" data-v-7c7dab79>Shipping</span>`);
        if (selectedShippingOption.value.price === 0) {
          _push(`<span class="text-success-500 font-medium" data-v-7c7dab79>Free</span>`);
        } else {
          _push(`<span class="font-medium text-neutral-800" data-v-7c7dab79>$${ssrInterpolate(selectedShippingOption.value.price.toFixed(2))}</span>`);
        }
        _push(`</div><div class="flex justify-between" data-v-7c7dab79><span class="text-neutral-600" data-v-7c7dab79>Tax (8%)</span><span class="font-medium text-neutral-800" data-v-7c7dab79>$${ssrInterpolate(tax.value.toFixed(2))}</span></div>`);
        if (discount.value > 0) {
          _push(`<div class="flex justify-between text-success-600" data-v-7c7dab79><span data-v-7c7dab79>Discount</span><span data-v-7c7dab79>-$${ssrInterpolate(discount.value.toFixed(2))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="border-t border-neutral-200 pt-3 mt-3" data-v-7c7dab79><div class="flex justify-between" data-v-7c7dab79><span class="font-semibold text-neutral-800" data-v-7c7dab79>Total</span><span class="font-bold text-lg text-neutral-900" data-v-7c7dab79>$${ssrInterpolate(orderTotal.value.toFixed(2))}</span></div></div></div>`);
        if (activeStep.value === 0) {
          _push(`<div class="mb-6" data-v-7c7dab79><div class="flex gap-2" data-v-7c7dab79><input type="text" placeholder="Promo code"${ssrRenderAttr("value", promoCode.value)} class="input flex-grow" data-v-7c7dab79><button class="btn-outline px-4 whitespace-nowrap" data-v-7c7dab79>Apply</button></div>`);
          if (promoError.value) {
            _push(`<p class="text-sm text-accent-600 mt-1" data-v-7c7dab79>${ssrInterpolate(promoError.value)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (promoSuccess.value) {
            _push(`<p class="text-sm text-success-600 mt-1" data-v-7c7dab79>${ssrInterpolate(promoSuccess.value)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-6 bg-neutral-50 rounded-lg p-3" data-v-7c7dab79><h3 class="font-medium text-neutral-800 mb-2 text-sm" data-v-7c7dab79>Order Information</h3><ul class="text-xs space-y-1.5 text-neutral-600" data-v-7c7dab79><li class="flex" data-v-7c7dab79><span class="i-iconify-ph-shield-check-fill text-success-500 mr-1.5" data-v-7c7dab79></span><span data-v-7c7dab79>All transactions are secure and encrypted</span></li><li class="flex" data-v-7c7dab79><span class="i-iconify-ph-truck-fill text-primary-500 mr-1.5" data-v-7c7dab79></span><span data-v-7c7dab79>Orders are typically processed within 24 hours</span></li><li class="flex" data-v-7c7dab79><span class="i-iconify-ph-info-fill text-warning-500 mr-1.5" data-v-7c7dab79></span><span data-v-7c7dab79>Prescription items require verification before shipping</span></li><li class="flex" data-v-7c7dab79><span class="i-iconify-ph-first-aid-fill text-primary-500 mr-1.5" data-v-7c7dab79></span><span data-v-7c7dab79>Free shipping on orders over $50</span></li></ul></div></div></div></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c7dab79"]]);
export {
  checkout as default
};
//# sourceMappingURL=checkout-B-wfKYCR.js.map
