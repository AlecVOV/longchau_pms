import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ProductCardSkeleton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card animate-pulse" }, _attrs))} data-v-7d986937><div class="w-full h-48 bg-gray-200 rounded-t-lg" data-v-7d986937></div><div class="p-4 space-y-3" data-v-7d986937><div class="h-4 bg-gray-200 rounded w-3/4" data-v-7d986937></div><div class="space-y-2" data-v-7d986937><div class="h-3 bg-gray-200 rounded" data-v-7d986937></div><div class="h-3 bg-gray-200 rounded w-5/6" data-v-7d986937></div></div><div class="flex items-center justify-between pt-2" data-v-7d986937><div class="h-6 bg-gray-200 rounded w-20" data-v-7d986937></div><div class="h-8 bg-gray-200 rounded w-24" data-v-7d986937></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCardSkeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d986937"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=ProductCardSkeleton-Bg6tKffj.js.map
