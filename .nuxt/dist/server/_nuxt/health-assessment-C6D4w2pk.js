import { _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { useCartStore } from "./cart-Cj2Ys50X.js";
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
const totalSteps = 4;
const _sfc_main = {
  __name: "health-assessment",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    const currentStep = ref(1);
    const showResults = ref(false);
    const healthConcerns = [
      "Weight management",
      "Digestive issues",
      "Heart health",
      "Joint pain",
      "Sleep issues",
      "Stress and anxiety",
      "Low energy/fatigue",
      "Immune system support",
      "Skin health",
      "Allergies",
      "Blood pressure",
      "Cholesterol",
      "Diabetes"
    ];
    const healthGoals = [
      "Improve overall health",
      "Lose weight",
      "Gain muscle",
      "Increase energy",
      "Better sleep",
      "Manage stress",
      "Improve digestion",
      "Support immune system",
      "Manage chronic condition",
      "Improve athletic performance",
      "Anti-aging",
      "Mental clarity"
    ];
    const assessment = ref({
      ageRange: "",
      gender: "",
      hasAllergies: null,
      allergies: "",
      concerns: [],
      takingMedications: null,
      medications: "",
      exercise: "",
      diet: "",
      stress: "",
      sleep: "",
      goals: [],
      additionalInfo: ""
    });
    const canContinue = computed(() => {
      if (currentStep.value === 1) {
        return assessment.value.ageRange && assessment.value.gender && assessment.value.hasAllergies !== null;
      }
      if (currentStep.value === 2) {
        return assessment.value.concerns.length > 0 && assessment.value.takingMedications !== null;
      }
      if (currentStep.value === 3) {
        return assessment.value.exercise && assessment.value.diet && assessment.value.stress && assessment.value.sleep;
      }
      return true;
    });
    const canSubmit = computed(() => {
      return assessment.value.goals.length > 0;
    });
    const recommendedProducts = ref([]);
    const healthTips = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Health Assessment Tool</h1><p class="text-neutral-600 mb-8 max-w-2xl">Complete this assessment to receive personalized health recommendations and product suggestions.</p><div class="bg-white rounded-lg shadow-sm p-6"><div class="mb-8"><div class="flex justify-between mb-2"><span class="text-sm font-medium text-neutral-700">Progress</span><span class="text-sm font-medium text-neutral-700">Step ${ssrInterpolate(currentStep.value)} of ${ssrInterpolate(totalSteps)}</span></div><div class="w-full bg-neutral-200 rounded-full h-2"><div class="bg-primary-600 h-2 rounded-full" style="${ssrRenderStyle(`width: ${currentStep.value / totalSteps * 100}%`)}"></div></div></div><form class="space-y-8">`);
      if (currentStep.value === 1) {
        _push(`<div><h2 class="text-xl font-semibold mb-6">Personal Information</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"><div><label class="block text-sm font-medium text-neutral-700 mb-1">Age Range</label><select class="input" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(assessment.value.ageRange) ? ssrLooseContain(assessment.value.ageRange, "") : ssrLooseEqual(assessment.value.ageRange, "")) ? " selected" : ""}>Select your age range</option><option value="18-30"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.ageRange) ? ssrLooseContain(assessment.value.ageRange, "18-30") : ssrLooseEqual(assessment.value.ageRange, "18-30")) ? " selected" : ""}>18-30</option><option value="31-45"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.ageRange) ? ssrLooseContain(assessment.value.ageRange, "31-45") : ssrLooseEqual(assessment.value.ageRange, "31-45")) ? " selected" : ""}>31-45</option><option value="46-60"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.ageRange) ? ssrLooseContain(assessment.value.ageRange, "46-60") : ssrLooseEqual(assessment.value.ageRange, "46-60")) ? " selected" : ""}>46-60</option><option value="60+"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.ageRange) ? ssrLooseContain(assessment.value.ageRange, "60+") : ssrLooseEqual(assessment.value.ageRange, "60+")) ? " selected" : ""}>60+</option></select></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">Gender</label><select class="input" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(assessment.value.gender) ? ssrLooseContain(assessment.value.gender, "") : ssrLooseEqual(assessment.value.gender, "")) ? " selected" : ""}>Select your gender</option><option value="male"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.gender) ? ssrLooseContain(assessment.value.gender, "male") : ssrLooseEqual(assessment.value.gender, "male")) ? " selected" : ""}>Male</option><option value="female"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.gender) ? ssrLooseContain(assessment.value.gender, "female") : ssrLooseEqual(assessment.value.gender, "female")) ? " selected" : ""}>Female</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.gender) ? ssrLooseContain(assessment.value.gender, "other") : ssrLooseEqual(assessment.value.gender, "other")) ? " selected" : ""}>Other</option></select></div></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">Do you have any known allergies?</label><div class="space-y-2"><div class="flex items-center"><input type="radio" id="allergies-yes"${ssrIncludeBooleanAttr(ssrLooseEqual(assessment.value.hasAllergies, true)) ? " checked" : ""}${ssrRenderAttr("value", true)} class="mr-2"><label for="allergies-yes">Yes</label></div><div class="flex items-center"><input type="radio" id="allergies-no"${ssrIncludeBooleanAttr(ssrLooseEqual(assessment.value.hasAllergies, false)) ? " checked" : ""}${ssrRenderAttr("value", false)} class="mr-2"><label for="allergies-no">No</label></div></div>`);
        if (assessment.value.hasAllergies) {
          _push(`<div class="mt-3"><label class="block text-sm font-medium text-neutral-700 mb-1">Please specify your allergies:</label><textarea class="input h-24" placeholder="List any allergies you have">${ssrInterpolate(assessment.value.allergies)}</textarea></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 2) {
        _push(`<div><h2 class="text-xl font-semibold mb-6">Health Concerns</h2><div class="space-y-6"><div><label class="block text-sm font-medium text-neutral-700 mb-2">What are your primary health concerns? (Select all that apply)</label><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><!--[-->`);
        ssrRenderList(healthConcerns, (concern, index) => {
          _push(`<div class="flex items-center"><input type="checkbox"${ssrRenderAttr("id", "concern-" + index)}${ssrIncludeBooleanAttr(Array.isArray(assessment.value.concerns) ? ssrLooseContain(assessment.value.concerns, concern) : assessment.value.concerns) ? " checked" : ""}${ssrRenderAttr("value", concern)} class="mr-2"><label${ssrRenderAttr("for", "concern-" + index)}>${ssrInterpolate(concern)}</label></div>`);
        });
        _push(`<!--]--></div></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">Are you currently taking any medications?</label><div class="space-y-2"><div class="flex items-center"><input type="radio" id="medications-yes"${ssrIncludeBooleanAttr(ssrLooseEqual(assessment.value.takingMedications, true)) ? " checked" : ""}${ssrRenderAttr("value", true)} class="mr-2"><label for="medications-yes">Yes</label></div><div class="flex items-center"><input type="radio" id="medications-no"${ssrIncludeBooleanAttr(ssrLooseEqual(assessment.value.takingMedications, false)) ? " checked" : ""}${ssrRenderAttr("value", false)} class="mr-2"><label for="medications-no">No</label></div></div>`);
        if (assessment.value.takingMedications) {
          _push(`<div class="mt-3"><label class="block text-sm font-medium text-neutral-700 mb-1">Please list your current medications:</label><textarea class="input h-24" placeholder="List any medications you are currently taking">${ssrInterpolate(assessment.value.medications)}</textarea></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 3) {
        _push(`<div><h2 class="text-xl font-semibold mb-6">Lifestyle Factors</h2><div class="space-y-6"><div><label class="block text-sm font-medium text-neutral-700 mb-1">How often do you exercise?</label><select class="input" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(assessment.value.exercise) ? ssrLooseContain(assessment.value.exercise, "") : ssrLooseEqual(assessment.value.exercise, "")) ? " selected" : ""}>Please select an option</option><option value="never"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.exercise) ? ssrLooseContain(assessment.value.exercise, "never") : ssrLooseEqual(assessment.value.exercise, "never")) ? " selected" : ""}>Rarely or never</option><option value="occasional"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.exercise) ? ssrLooseContain(assessment.value.exercise, "occasional") : ssrLooseEqual(assessment.value.exercise, "occasional")) ? " selected" : ""}>1-2 times per week</option><option value="regular"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.exercise) ? ssrLooseContain(assessment.value.exercise, "regular") : ssrLooseEqual(assessment.value.exercise, "regular")) ? " selected" : ""}>3-4 times per week</option><option value="daily"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.exercise) ? ssrLooseContain(assessment.value.exercise, "daily") : ssrLooseEqual(assessment.value.exercise, "daily")) ? " selected" : ""}>5+ times per week</option></select></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">How would you rate your diet?</label><select class="input" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(assessment.value.diet) ? ssrLooseContain(assessment.value.diet, "") : ssrLooseEqual(assessment.value.diet, "")) ? " selected" : ""}>Please select an option</option><option value="poor"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.diet) ? ssrLooseContain(assessment.value.diet, "poor") : ssrLooseEqual(assessment.value.diet, "poor")) ? " selected" : ""}>Poor (mostly processed foods)</option><option value="average"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.diet) ? ssrLooseContain(assessment.value.diet, "average") : ssrLooseEqual(assessment.value.diet, "average")) ? " selected" : ""}>Average (mix of healthy and processed foods)</option><option value="good"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.diet) ? ssrLooseContain(assessment.value.diet, "good") : ssrLooseEqual(assessment.value.diet, "good")) ? " selected" : ""}>Good (mostly whole foods)</option><option value="excellent"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.diet) ? ssrLooseContain(assessment.value.diet, "excellent") : ssrLooseEqual(assessment.value.diet, "excellent")) ? " selected" : ""}>Excellent (well-balanced, whole food diet)</option></select></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">How would you rate your stress level?</label><select class="input" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(assessment.value.stress) ? ssrLooseContain(assessment.value.stress, "") : ssrLooseEqual(assessment.value.stress, "")) ? " selected" : ""}>Please select an option</option><option value="low"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.stress) ? ssrLooseContain(assessment.value.stress, "low") : ssrLooseEqual(assessment.value.stress, "low")) ? " selected" : ""}>Low (rarely feel stressed)</option><option value="moderate"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.stress) ? ssrLooseContain(assessment.value.stress, "moderate") : ssrLooseEqual(assessment.value.stress, "moderate")) ? " selected" : ""}>Moderate (occasional stress)</option><option value="high"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.stress) ? ssrLooseContain(assessment.value.stress, "high") : ssrLooseEqual(assessment.value.stress, "high")) ? " selected" : ""}>High (frequently stressed)</option><option value="severe"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.stress) ? ssrLooseContain(assessment.value.stress, "severe") : ssrLooseEqual(assessment.value.stress, "severe")) ? " selected" : ""}>Severe (constant stress)</option></select></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">How many hours of sleep do you typically get?</label><select class="input" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(assessment.value.sleep) ? ssrLooseContain(assessment.value.sleep, "") : ssrLooseEqual(assessment.value.sleep, "")) ? " selected" : ""}>Please select an option</option><option value="less-than-5"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.sleep) ? ssrLooseContain(assessment.value.sleep, "less-than-5") : ssrLooseEqual(assessment.value.sleep, "less-than-5")) ? " selected" : ""}>Less than 5 hours</option><option value="5-6"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.sleep) ? ssrLooseContain(assessment.value.sleep, "5-6") : ssrLooseEqual(assessment.value.sleep, "5-6")) ? " selected" : ""}>5-6 hours</option><option value="7-8"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.sleep) ? ssrLooseContain(assessment.value.sleep, "7-8") : ssrLooseEqual(assessment.value.sleep, "7-8")) ? " selected" : ""}>7-8 hours</option><option value="more-than-8"${ssrIncludeBooleanAttr(Array.isArray(assessment.value.sleep) ? ssrLooseContain(assessment.value.sleep, "more-than-8") : ssrLooseEqual(assessment.value.sleep, "more-than-8")) ? " selected" : ""}>More than 8 hours</option></select></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 4) {
        _push(`<div><h2 class="text-xl font-semibold mb-6">Health Goals</h2><div class="space-y-6"><div><label class="block text-sm font-medium text-neutral-700 mb-2">What are your primary health goals? (Select all that apply)</label><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><!--[-->`);
        ssrRenderList(healthGoals, (goal, index) => {
          _push(`<div class="flex items-center"><input type="checkbox"${ssrRenderAttr("id", "goal-" + index)}${ssrIncludeBooleanAttr(Array.isArray(assessment.value.goals) ? ssrLooseContain(assessment.value.goals, goal) : assessment.value.goals) ? " checked" : ""}${ssrRenderAttr("value", goal)} class="mr-2"><label${ssrRenderAttr("for", "goal-" + index)}>${ssrInterpolate(goal)}</label></div>`);
        });
        _push(`<!--]--></div></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">Any additional information you&#39;d like to share?</label><textarea class="input h-24" placeholder="Add any additional information that may be relevant">${ssrInterpolate(assessment.value.additionalInfo)}</textarea></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showResults.value) {
        _push(`<div class="mt-8 border-t border-neutral-200 pt-8"><h2 class="text-xl font-semibold mb-6">Your Personalized Recommendations</h2><div class="p-4 border border-success-200 rounded-md bg-success-50 mb-6"><h3 class="font-medium text-success-700 mb-2">Thank you for completing the assessment!</h3><p class="text-success-600">Based on your responses, we&#39;ve prepared the following recommendations.</p></div><div class="mb-8"><h3 class="text-lg font-medium mb-4">Recommended Products</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(recommendedProducts.value, (product, index) => {
          _push(`<div class="border border-neutral-200 rounded-md overflow-hidden"><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} class="w-full h-36 object-cover"><div class="p-4"><h4 class="font-medium">${ssrInterpolate(product.name)}</h4><p class="text-sm text-neutral-500 mb-3">${ssrInterpolate(product.description)}</p><div class="flex items-center justify-between"><span class="font-medium">$${ssrInterpolate(product.price.toFixed(2))}</span><button class="btn-primary text-sm py-1 px-3">Add to Cart</button></div></div></div>`);
        });
        _push(`<!--]--></div></div><div><h3 class="text-lg font-medium mb-4">Health Tips</h3><ul class="space-y-3 text-neutral-700"><!--[-->`);
        ssrRenderList(healthTips.value, (tip, index) => {
          _push(`<li class="flex items-start"><span class="i-iconify-ph-check-circle-fill text-success-500 mr-2 mt-1"></span><span>${ssrInterpolate(tip)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-between">`);
      if (currentStep.value > 1 && !showResults.value) {
        _push(`<button type="button" class="btn-outline"> Previous </button>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value < totalSteps && !showResults.value) {
        _push(`<button type="button" class="btn-primary"${ssrIncludeBooleanAttr(!canContinue.value) ? " disabled" : ""}> Continue </button>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === totalSteps && !showResults.value) {
        _push(`<button type="submit" class="btn-primary"${ssrIncludeBooleanAttr(!canSubmit.value) ? " disabled" : ""}> Get Recommendations </button>`);
      } else {
        _push(`<!---->`);
      }
      if (showResults.value) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to Home `);
            } else {
              return [
                createTextVNode(" Back to Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/health-assessment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=health-assessment-C6D4w2pk.js.map
