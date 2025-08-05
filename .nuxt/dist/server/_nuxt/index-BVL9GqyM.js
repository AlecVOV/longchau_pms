import { _ as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const drugCategories = [
      { id: "pain-relief", name: "Pain Relief", description: "Medications for managing pain and inflammation" },
      { id: "antibiotics", name: "Antibiotics", description: "Medications that fight bacterial infections" },
      { id: "antidepressants", name: "Antidepressants", description: "Medications for treating depression and anxiety" },
      { id: "heart-health", name: "Heart Health", description: "Medications for cardiovascular health" },
      { id: "diabetes", name: "Diabetes", description: "Medications for managing blood sugar levels" },
      { id: "allergies", name: "Allergies", description: "Medications for relieving allergy symptoms" },
      { id: "respiratory", name: "Respiratory", description: "Medications for asthma and lung conditions" },
      { id: "gastrointestinal", name: "Gastrointestinal", description: "Medications for digestive system issues" }
    ];
    const popularDrugs = [
      {
        name: "Acetaminophen",
        genericName: "Acetaminophen (paracetamol)",
        overview: "Used to treat pain and reduce fever.",
        slug: "acetaminophen"
      },
      {
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        overview: "Used to reduce inflammation, pain, and fever.",
        slug: "ibuprofen"
      },
      {
        name: "Lisinopril",
        genericName: "Lisinopril",
        overview: "ACE inhibitor used to treat high blood pressure and heart failure.",
        slug: "lisinopril"
      },
      {
        name: "Metformin",
        genericName: "Metformin hydrochloride",
        overview: "Used to treat type 2 diabetes by improving blood sugar control.",
        slug: "metformin"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Drug Information Database</h1><p class="text-neutral-600 mb-8 max-w-3xl">Browse our comprehensive drug information database for detailed information about medications, including usage, side effects, precautions, and more.</p><div class="max-w-2xl mb-8"><div class="relative"><input type="text" placeholder="Search medications by name..."${ssrRenderAttr("value", searchQuery.value)} class="input pr-12 w-full"><button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white p-1.5 rounded-md hover:bg-primary-700"><span class="i-iconify-ph-magnifying-glass-bold text-lg"></span></button></div></div><div class="mb-8"><h2 class="text-xl font-bold text-neutral-900 mb-4">Browse by Category</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(drugCategories, (category) => {
        _push(`<div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-neutral-100"><h3 class="font-medium text-neutral-800 mb-2">${ssrInterpolate(category.name)}</h3><p class="text-sm text-neutral-500 mb-3">${ssrInterpolate(category.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/drug-info?category=${category.id}`,
          class: "text-primary-600 hover:text-primary-700 text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Medications <span class="i-iconify-ph-arrow-right-bold ml-1"${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(" View Medications "),
                createVNode("span", { class: "i-iconify-ph-arrow-right-bold ml-1" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div><h2 class="text-xl font-bold text-neutral-900 mb-4">Popular Medications</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(popularDrugs, (drug) => {
        _push(`<div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"><div class="p-4"><h3 class="font-medium text-neutral-800 mb-1">${ssrInterpolate(drug.name)}</h3><p class="text-sm text-neutral-500 mb-3">${ssrInterpolate(drug.genericName)}</p><p class="text-sm text-neutral-600 mb-4 line-clamp-2">${ssrInterpolate(drug.overview)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/drug-info/${drug.slug}`,
          class: "text-primary-600 hover:text-primary-700 text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Details <span class="i-iconify-ph-arrow-right-bold ml-1"${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(" View Details "),
                createVNode("span", { class: "i-iconify-ph-arrow-right-bold ml-1" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/drug-info/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BVL9GqyM.js.map
