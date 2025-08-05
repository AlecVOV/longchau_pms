import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
import { a as useAuthStore } from "../server.mjs";
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
  __name: "medication-reminders",
  __ssrInlineRender: true,
  setup(__props) {
    useNotificationsStore();
    useAuthStore();
    const reminders = ref([]);
    const loading = ref(false);
    const showActive = ref(true);
    const isEditing = ref(false);
    ref(null);
    const newReminder = ref({
      medicationName: "",
      dosage: "",
      frequency: "daily",
      timeSlots: ["08:00"],
      notes: ""
    });
    const filteredReminders = computed(() => {
      let filtered = reminders.value;
      if (showActive.value) {
        filtered = reminders.value.filter((r) => r.isActive);
      }
      return sortReminders([...filtered]);
    });
    const sortReminders = (reminders2) => {
      return reminders2.sort((a, b) => {
        if (a.isActive !== b.isActive) {
          return b.isActive - a.isActive;
        }
        if (a.nextReminder && b.nextReminder) {
          return new Date(a.nextReminder) - new Date(b.nextReminder);
        }
        return a.medicationName.localeCompare(b.medicationName);
      });
    };
    const formatFrequency = (frequency) => {
      const frequencies = {
        "daily": "Once daily",
        "twice-daily": "Twice daily",
        "three-times-daily": "Three times daily",
        "every-8-hours": "Every 8 hours",
        "every-12-hours": "Every 12 hours",
        "weekly": "Weekly",
        "as-needed": "As needed"
      };
      return frequencies[frequency] || frequency;
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Medication Reminders</h1><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold text-neutral-800 mb-4">${ssrInterpolate(isEditing.value ? "Edit Reminder" : "Add New Reminder")}</h2><form class="space-y-4"><div><label class="block text-sm font-medium text-neutral-700 mb-1">Medication Name *</label><input${ssrRenderAttr("value", newReminder.value.medicationName)} type="text" class="input" required placeholder="Enter medication name"></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">Dosage</label><input${ssrRenderAttr("value", newReminder.value.dosage)} type="text" class="input" placeholder="e.g., 1 tablet, 5ml"></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">Frequency *</label><select class="input" required><option value="daily"${ssrIncludeBooleanAttr(Array.isArray(newReminder.value.frequency) ? ssrLooseContain(newReminder.value.frequency, "daily") : ssrLooseEqual(newReminder.value.frequency, "daily")) ? " selected" : ""}>Daily</option><option value="twice-daily"${ssrIncludeBooleanAttr(Array.isArray(newReminder.value.frequency) ? ssrLooseContain(newReminder.value.frequency, "twice-daily") : ssrLooseEqual(newReminder.value.frequency, "twice-daily")) ? " selected" : ""}>Twice Daily</option><option value="three-times-daily"${ssrIncludeBooleanAttr(Array.isArray(newReminder.value.frequency) ? ssrLooseContain(newReminder.value.frequency, "three-times-daily") : ssrLooseEqual(newReminder.value.frequency, "three-times-daily")) ? " selected" : ""}>Three Times Daily</option><option value="every-8-hours"${ssrIncludeBooleanAttr(Array.isArray(newReminder.value.frequency) ? ssrLooseContain(newReminder.value.frequency, "every-8-hours") : ssrLooseEqual(newReminder.value.frequency, "every-8-hours")) ? " selected" : ""}>Every 8 hours</option><option value="every-12-hours"${ssrIncludeBooleanAttr(Array.isArray(newReminder.value.frequency) ? ssrLooseContain(newReminder.value.frequency, "every-12-hours") : ssrLooseEqual(newReminder.value.frequency, "every-12-hours")) ? " selected" : ""}>Every 12 hours</option><option value="weekly"${ssrIncludeBooleanAttr(Array.isArray(newReminder.value.frequency) ? ssrLooseContain(newReminder.value.frequency, "weekly") : ssrLooseEqual(newReminder.value.frequency, "weekly")) ? " selected" : ""}>Weekly</option><option value="as-needed"${ssrIncludeBooleanAttr(Array.isArray(newReminder.value.frequency) ? ssrLooseContain(newReminder.value.frequency, "as-needed") : ssrLooseEqual(newReminder.value.frequency, "as-needed")) ? " selected" : ""}>As Needed</option></select></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">Reminder Times</label><div class="space-y-2"><!--[-->`);
      ssrRenderList(newReminder.value.timeSlots, (time, index) => {
        _push(`<div class="flex items-center gap-2"><input${ssrRenderAttr("value", newReminder.value.timeSlots[index])} type="time" class="input flex-1"><button type="button" class="text-red-500 hover:text-red-700 p-1 rounded border hover:bg-red-50"> 🗑️ </button></div>`);
      });
      _push(`<!--]--><button type="button" class="text-sm text-primary-600 hover:text-primary-700"> + Add Time </button></div></div><div><label class="block text-sm font-medium text-neutral-700 mb-1">Notes</label><textarea class="input h-20" placeholder="Any additional notes">${ssrInterpolate(newReminder.value.notes)}</textarea></div><div class="flex gap-2"><button type="submit" class="btn-primary flex-1"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}>`);
      if (loading.value) {
        _push(`<span class="i-iconify-ph-spinner text-lg animate-spin mr-2"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isEditing.value ? "Update Reminder" : "Add Reminder")}</button>`);
      if (isEditing.value) {
        _push(`<button type="button" class="btn-outline px-4"> Cancel </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div></div><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-sm overflow-hidden"><div class="p-6 border-b border-neutral-200"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold text-neutral-800">Your Active Reminders</h2><div class="flex items-center gap-2"><button class="btn-outline text-sm px-3 py-1" title="Refresh reminders"> Refresh </button><button class="${ssrRenderClass([showActive.value ? "btn-primary" : "btn-outline", "text-sm px-3 py-1"])}"> Active </button><button class="${ssrRenderClass([!showActive.value ? "btn-primary" : "btn-outline", "text-sm px-3 py-1"])}"> All </button></div></div></div>`);
      if (loading.value) {
        _push(`<div class="p-6 text-center"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div><p class="text-neutral-500 mt-2">Loading reminders...</p></div>`);
      } else if (filteredReminders.value.length === 0) {
        _push(`<div class="p-6 text-center"><div class="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center"><span class="text-2xl">🔕</span></div><p class="text-neutral-500">${ssrInterpolate(showActive.value ? "No active reminders set up yet." : "No reminders found.")}</p></div>`);
      } else {
        _push(`<div class="divide-y divide-neutral-100"><!--[-->`);
        ssrRenderList(filteredReminders.value, (reminder) => {
          _push(`<div class="p-6"><div class="flex items-start justify-between"><div class="flex-1"><div class="flex items-center gap-3 mb-2"><h3 class="font-semibold text-neutral-900">${ssrInterpolate(reminder.medicationName)}</h3><span class="${ssrRenderClass([reminder.isActive ? "bg-success-100 text-success-800" : "bg-neutral-100 text-neutral-800", "px-2 py-1 text-xs rounded-full"])}">${ssrInterpolate(reminder.isActive ? "Active" : "Inactive")}</span></div><div class="space-y-1 text-sm text-neutral-600">`);
          if (reminder.dosage) {
            _push(`<p class="flex items-center gap-2"><span class="text-primary-500">💊</span><span>${ssrInterpolate(reminder.dosage)}</span></p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="flex items-center gap-2"><span class="text-primary-500">⏰</span><span>${ssrInterpolate(formatFrequency(reminder.frequency))}</span></p>`);
          if (reminder.timeSlots && reminder.timeSlots.length > 0) {
            _push(`<div class="flex items-center gap-2"><span class="text-primary-500">🔔</span><span>${ssrInterpolate(reminder.timeSlots.join(", "))}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          if (reminder.nextReminder) {
            _push(`<p class="flex items-center gap-2"><span class="text-primary-500">📅</span><span>Next: ${ssrInterpolate(formatDate(reminder.nextReminder))}</span></p>`);
          } else {
            _push(`<!---->`);
          }
          if (reminder.notes) {
            _push(`<p class="flex items-start gap-2 mt-2"><span class="text-primary-500 mt-0.5">📝</span><span>${ssrInterpolate(reminder.notes)}</span></p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="flex items-center gap-2 ml-4"><button class="${ssrRenderClass([reminder.isActive ? "text-orange-600 hover:text-orange-700 hover:bg-orange-50" : "text-green-600 hover:text-green-700 hover:bg-green-50", "p-2 rounded-lg transition-colors border border-gray-200 hover:border-current"])}"${ssrRenderAttr("title", reminder.isActive ? "Pause reminder" : "Resume reminder")}>${ssrInterpolate(reminder.isActive ? "⏸️" : "▶️")} <span class="sr-only">${ssrInterpolate(reminder.isActive ? "Pause" : "Resume")}</span></button><button class="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-300" title="Edit reminder"> ✏️ <span class="sr-only">Edit</span></button><button class="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors border border-gray-200 hover:border-red-300" title="Delete reminder"> 🗑️ <span class="sr-only">Delete</span></button></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/medication-reminders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=medication-reminders-Ds_ZSLOM.js.map
