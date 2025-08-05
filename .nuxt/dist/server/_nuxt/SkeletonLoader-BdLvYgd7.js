import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "SkeletonLoader",
  __ssrInlineRender: true,
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "1rem"
    },
    additionalClasses: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse" }, _attrs))} data-v-3a5245fc><div style="${ssrRenderStyle({ width: __props.width, height: __props.height })}" class="${ssrRenderClass([__props.additionalClasses, "bg-gray-200 rounded"])}" data-v-3a5245fc></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonLoader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SkeletonLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a5245fc"]]);
export {
  SkeletonLoader as default
};
//# sourceMappingURL=SkeletonLoader-BdLvYgd7.js.map
