import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "OrderSummaryItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center py-2 border-b border-neutral-100 last:border-b-0" }, _attrs))}><img${ssrRenderAttr("src", __props.item.image)}${ssrRenderAttr("alt", __props.item.name)} class="w-12 h-12 object-cover rounded-md"><div class="ml-3 flex-1"><p class="text-sm font-medium text-neutral-800 line-clamp-1">${ssrInterpolate(__props.item.name)}</p><div class="flex items-center justify-between mt-1"><p class="text-sm text-neutral-500">${ssrInterpolate(__props.item.quantity)} × $${ssrInterpolate(__props.item.price.toFixed(2))}</p><p class="text-sm font-medium">$${ssrInterpolate((__props.item.price * __props.item.quantity).toFixed(2))}</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderSummaryItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=OrderSummaryItem-DqtSxP3x.js.map
