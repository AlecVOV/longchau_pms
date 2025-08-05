import { computed, unref, useSSRContext } from "vue";
import { ssrRenderTeleport, ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
import ToastNotification from "./ToastNotification-BQ8E8U-W.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
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
  __name: "ToastContainer",
  __ssrInlineRender: true,
  setup(__props) {
    const notificationsStore = useNotificationsStore();
    const notifications = computed(() => notificationsStore.notifications);
    const removeNotification = (id) => {
      notificationsStore.remove(id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(notifications).length) {
          _push2(`<div class="toast-container" data-v-a01c25af><div${ssrRenderAttrs({ name: "toast" })} data-v-a01c25af>`);
          ssrRenderList(unref(notifications), (notification) => {
            _push2(ssrRenderComponent(ToastNotification, {
              key: notification.id,
              notification,
              onClose: ($event) => removeNotification(notification.id)
            }, null, _parent));
          });
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToastContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a01c25af"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=ToastContainer-CQ3ixB8e.js.map
