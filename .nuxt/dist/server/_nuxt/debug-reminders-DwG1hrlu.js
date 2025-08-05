import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { a as useAuthStore } from "../server.mjs";
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
  __name: "debug-reminders",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const loading = ref(false);
    const currentState = ref(null);
    const createResult = ref(null);
    const loadResult = ref(null);
    const deleteResult = ref(null);
    const deleteId = ref(1);
    const logs = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto p-6" }, _attrs))}><h1 class="text-2xl font-bold mb-6">Medication Reminder Debug Test</h1><div class="space-y-6"><div class="bg-gray-100 p-4 rounded-lg"><h2 class="text-lg font-semibold mb-3">Current State</h2><button class="btn-primary mb-3"> Check Current State </button>`);
      if (currentState.value) {
        _push(`<pre class="bg-white p-3 rounded text-sm overflow-auto">${ssrInterpolate(JSON.stringify(currentState.value, null, 2))}</pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-blue-50 p-4 rounded-lg"><h2 class="text-lg font-semibold mb-3">Create Test Reminder</h2><button class="btn-primary mb-3"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}>${ssrInterpolate(loading.value ? "Creating..." : "Create Test Reminder")}</button>`);
      if (createResult.value) {
        _push(`<pre class="bg-white p-3 rounded text-sm overflow-auto">${ssrInterpolate(JSON.stringify(createResult.value, null, 2))}</pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-green-50 p-4 rounded-lg"><h2 class="text-lg font-semibold mb-3">Load Reminders</h2><button class="btn-primary mb-3"> Load Reminders from API </button>`);
      if (loadResult.value) {
        _push(`<pre class="bg-white p-3 rounded text-sm overflow-auto">${ssrInterpolate(JSON.stringify(loadResult.value, null, 2))}</pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-red-50 p-4 rounded-lg"><h2 class="text-lg font-semibold mb-3">Delete Test</h2><div class="flex gap-2 mb-3"><input${ssrRenderAttr("value", deleteId.value)} type="number" placeholder="Reminder ID to delete" class="form-input flex-1"><button class="btn-primary"> Delete </button></div>`);
      if (deleteResult.value) {
        _push(`<pre class="bg-white p-3 rounded text-sm overflow-auto">${ssrInterpolate(JSON.stringify(deleteResult.value, null, 2))}</pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-yellow-50 p-4 rounded-lg"><h2 class="text-lg font-semibold mb-3">Console Log</h2><div class="bg-white p-3 rounded text-sm max-h-40 overflow-auto"><!--[-->`);
      ssrRenderList(logs.value, (log) => {
        _push(`<div class="border-b py-1"><span class="text-gray-500 text-xs">${ssrInterpolate(log.time)}</span> - ${ssrInterpolate(log.message)}</div>`);
      });
      _push(`<!--]--></div><button class="btn-outline mt-2">Clear Logs</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/debug-reminders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=debug-reminders-DwG1hrlu.js.map
