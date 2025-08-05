import { c as useRoute, _ as __nuxt_component_0 } from "../server.mjs";
import { computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "[drug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const drugSlug = route.params.drug;
    const drugsDatabase = {
      acetaminophen: {
        name: "Acetaminophen",
        genericName: "Acetaminophen (paracetamol)",
        overview: "Acetaminophen is used to treat mild to moderate pain and reduce fever.",
        uses: "This medication is used to treat mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, and reactions to vaccinations, and to reduce fever.",
        howToUse: "Take this medication by mouth as directed. Follow all directions on the product package. If you are uncertain about any of the information, consult your doctor or pharmacist.",
        sideEffects: "This drug usually has no side effects. If you have any unusual effects, contact your doctor or pharmacist promptly.",
        seriousSideEffects: [
          "Signs of an allergic reaction (rash, itching/swelling, severe dizziness, trouble breathing)",
          "Pain/tenderness in the upper stomach",
          "Unusual tiredness",
          "Yellowing eyes/skin",
          "Dark urine"
        ],
        precautions: "Before using this product, tell your doctor or pharmacist if you are allergic to acetaminophen; or if you have any other allergies.",
        interactions: "Drug interactions may change how your medications work or increase your risk for serious side effects. This document does not contain all possible drug interactions.",
        drugClass: "Analgesics (pain relievers), antipyretics (fever reducers)",
        availableForms: ["Tablet", "Capsule", "Liquid", "Suppository"],
        requiresPrescription: false,
        storage: "Store at room temperature away from light and moisture.",
        productSlug: "acetaminophen-500mg-tablets"
      },
      ibuprofen: {
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        overview: "Ibuprofen is used to relieve pain from various conditions such as headache, dental pain, muscle aches, and arthritis. It also reduces fever and inflammation.",
        uses: "Ibuprofen is used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injuries.",
        howToUse: "Take this medication by mouth, usually every 4 to 6 hours with a full glass of water. Do not lie down for at least 10 minutes after taking this drug.",
        sideEffects: "Upset stomach, nausea, vomiting, headache, diarrhea, constipation, dizziness, or drowsiness may occur.",
        seriousSideEffects: [
          "Stomach/abdominal pain that doesn't go away",
          "Easy bruising/bleeding",
          "Hearing changes (e.g., ringing in the ears)",
          "Mental/mood changes",
          "Unexplained stiff neck"
        ],
        precautions: "Before taking ibuprofen, tell your doctor or pharmacist if you are allergic to it; or to aspirin or other NSAIDs; or if you have any other allergies.",
        interactions: 'Some products that may interact with this drug include: aliskiren, ACE inhibitors, angiotensin II receptor blockers, cidofovir, corticosteroids, lithium, methotrexate, "water pills" (diuretics).',
        drugClass: "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
        availableForms: ["Tablet", "Capsule", "Liquid", "Gel"],
        requiresPrescription: false,
        storage: "Store at room temperature away from moisture and heat.",
        productSlug: "ibuprofen-200mg-tablets"
      }
    };
    const drugInfo = computed(() => {
      return drugsDatabase[drugSlug] || drugsDatabase.acetaminophen;
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
      _push(`</li><li><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/drug-info",
        class: "text-neutral-500 hover:text-primary-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Drug Information`);
          } else {
            return [
              createTextVNode("Drug Information")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">${ssrInterpolate(unref(drugInfo).name)}</span></div></li></ol></nav><div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8"><div class="p-6 border-b border-neutral-200"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900">${ssrInterpolate(unref(drugInfo).name)}</h1><p class="text-neutral-600 mt-2">${ssrInterpolate(unref(drugInfo).genericName)}</p></div><div class="p-6"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="prose max-w-none"><h2>Overview</h2><p>${ssrInterpolate(unref(drugInfo).overview)}</p><h2>Uses</h2><p>${ssrInterpolate(unref(drugInfo).uses)}</p><h3>How to Use</h3><p>${ssrInterpolate(unref(drugInfo).howToUse)}</p><h2>Side Effects</h2><p>${ssrInterpolate(unref(drugInfo).sideEffects)}</p><h3>Serious Side Effects</h3><ul><!--[-->`);
      ssrRenderList(unref(drugInfo).seriousSideEffects, (effect, index) => {
        _push(`<li>${ssrInterpolate(effect)}</li>`);
      });
      _push(`<!--]--></ul><h2>Precautions</h2><p>${ssrInterpolate(unref(drugInfo).precautions)}</p><h2>Interactions</h2><p>${ssrInterpolate(unref(drugInfo).interactions)}</p></div></div><div class="lg:col-span-1"><div class="bg-neutral-50 rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">Quick Facts</h3><div class="space-y-4"><div><p class="text-sm font-medium text-neutral-500">Drug Class</p><p>${ssrInterpolate(unref(drugInfo).drugClass)}</p></div><div><p class="text-sm font-medium text-neutral-500">Available Forms</p><p>${ssrInterpolate(unref(drugInfo).availableForms.join(", "))}</p></div><div><p class="text-sm font-medium text-neutral-500">Requires Prescription</p><p>${ssrInterpolate(unref(drugInfo).requiresPrescription ? "Yes" : "No")}</p></div><div><p class="text-sm font-medium text-neutral-500">Storage</p><p>${ssrInterpolate(unref(drugInfo).storage)}</p></div></div><div class="mt-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${unref(drugInfo).productSlug}`,
        class: "btn-primary w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Product `);
          } else {
            return [
              createTextVNode(" View Product ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">Related Medications</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/drug-info/[drug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_drug_-CJ1s13QQ.js.map
