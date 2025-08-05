import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "AdminTableSkeleton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse" }, _attrs))} data-v-5d197648><div class="mb-8" data-v-5d197648><div class="h-8 bg-gray-200 rounded w-1/3 mb-4" data-v-5d197648></div><div class="h-4 bg-gray-200 rounded w-1/2" data-v-5d197648></div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" data-v-5d197648><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="bg-white rounded-lg shadow-sm p-6" data-v-5d197648><div class="flex items-center" data-v-5d197648><div class="w-12 h-12 bg-gray-200 rounded-lg mr-4" data-v-5d197648></div><div class="space-y-2" data-v-5d197648><div class="h-4 bg-gray-200 rounded w-20" data-v-5d197648></div><div class="h-6 bg-gray-200 rounded w-16" data-v-5d197648></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="bg-white rounded-lg shadow-sm overflow-hidden" data-v-5d197648><div class="p-6 border-b" data-v-5d197648><div class="h-6 bg-gray-200 rounded w-48" data-v-5d197648></div></div><div class="overflow-x-auto" data-v-5d197648><table class="min-w-full" data-v-5d197648><thead class="bg-gray-50" data-v-5d197648><tr data-v-5d197648><!--[-->`);
      ssrRenderList(6, (i) => {
        _push(`<th class="px-6 py-3" data-v-5d197648><div class="h-4 bg-gray-200 rounded w-20" data-v-5d197648></div></th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="divide-y divide-gray-200" data-v-5d197648><!--[-->`);
      ssrRenderList(8, (i) => {
        _push(`<tr data-v-5d197648><!--[-->`);
        ssrRenderList(6, (j) => {
          _push(`<td class="px-6 py-4" data-v-5d197648><div class="${ssrRenderClass([j === 1 ? "w-32" : "w-16", "h-4 bg-gray-200 rounded"])}" data-v-5d197648></div></td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminTableSkeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminTableSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d197648"]]);
export {
  AdminTableSkeleton as default
};
//# sourceMappingURL=AdminTableSkeleton-CaWkfBDs.js.map
