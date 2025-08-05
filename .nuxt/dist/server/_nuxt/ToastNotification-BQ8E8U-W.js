import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ToastNotification",
  __ssrInlineRender: true,
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const toastClasses = computed(() => {
      const baseClasses = "toast-notification-base";
      const typeClasses = {
        success: "toast-success",
        error: "toast-error",
        warning: "toast-warning",
        info: "toast-info"
      };
      return [baseClasses, typeClasses[props.notification.type] || typeClasses.info];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["toast-notification", unref(toastClasses)],
        role: "alert",
        "aria-live": __props.notification.type === "error" ? "assertive" : "polite"
      }, _attrs))} data-v-06803e37><div class="toast-icon" data-v-06803e37>`);
      if (__props.notification.showSpinner) {
        _push(`<div class="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full" data-v-06803e37></div>`);
      } else if (__props.notification.type === "success") {
        _push(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-v-06803e37><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-06803e37></path></svg>`);
      } else if (__props.notification.type === "error") {
        _push(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-v-06803e37><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" data-v-06803e37></path></svg>`);
      } else if (__props.notification.type === "warning") {
        _push(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-v-06803e37><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" data-v-06803e37></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-v-06803e37><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-06803e37></path></svg>`);
      }
      _push(`</div><div class="toast-content" data-v-06803e37>`);
      if (__props.notification.title) {
        _push(`<div class="toast-title" data-v-06803e37>${ssrInterpolate(__props.notification.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="toast-message" data-v-06803e37>${ssrInterpolate(__props.notification.message)}</div>`);
      if (__props.notification.actions && __props.notification.actions.length) {
        _push(`<div class="toast-actions" data-v-06803e37><!--[-->`);
        ssrRenderList(__props.notification.actions, (action) => {
          _push(`<button class="${ssrRenderClass([action.class || "btn-ghost", "toast-action-btn"])}" data-v-06803e37>${ssrInterpolate(action.label)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!__props.notification.showSpinner) {
        _push(`<button class="toast-close" aria-label="Close notification" data-v-06803e37><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-v-06803e37><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-06803e37></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToastNotification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ToastNotification = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06803e37"]]);
export {
  ToastNotification as default
};
//# sourceMappingURL=ToastNotification-BQ8E8U-W.js.map
