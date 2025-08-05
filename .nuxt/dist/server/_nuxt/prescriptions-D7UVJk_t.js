import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "../server.mjs";
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
  __name: "prescriptions",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Prescriptions - Admin - Long Châu"
    });
    const prescriptions = ref([]);
    const totalPrescriptions = ref(0);
    const currentPage = ref(1);
    const itemsPerPage = ref(20);
    const selectedPrescription = ref(null);
    const filters = ref({
      status: "",
      dateFrom: "",
      dateTo: ""
    });
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const getStatusClass = (status) => {
      const statusClasses = {
        pending: "bg-yellow-100 text-yellow-800",
        approved: "bg-green-100 text-green-800",
        filled: "bg-blue-100 text-blue-800",
        rejected: "bg-red-100 text-red-800"
      };
      return statusClasses[status] || "bg-gray-100 text-gray-800";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-white shadow-sm border-b"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="py-6"><div class="flex items-center justify-between"><div><h1 class="text-3xl font-bold text-gray-900">Prescription Management</h1><p class="mt-1 text-sm text-gray-500">Review and manage customer prescriptions</p></div><div class="flex items-center space-x-4"><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">${ssrInterpolate(unref(totalPrescriptions))} Total Prescriptions </span></div></div></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="bg-white rounded-lg shadow-sm p-6 mb-6"><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Status</label><select class="w-full border border-gray-300 rounded-md px-3 py-2"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "") : ssrLooseEqual(unref(filters).status, "")) ? " selected" : ""}>All Status</option><option value="pending"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "pending") : ssrLooseEqual(unref(filters).status, "pending")) ? " selected" : ""}>Pending Review</option><option value="approved"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "approved") : ssrLooseEqual(unref(filters).status, "approved")) ? " selected" : ""}>Approved</option><option value="filled"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "filled") : ssrLooseEqual(unref(filters).status, "filled")) ? " selected" : ""}>Filled</option><option value="rejected"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "rejected") : ssrLooseEqual(unref(filters).status, "rejected")) ? " selected" : ""}>Rejected</option></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Date From</label><input${ssrRenderAttr("value", unref(filters).dateFrom)} type="date" class="w-full border border-gray-300 rounded-md px-3 py-2"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Date To</label><input${ssrRenderAttr("value", unref(filters).dateTo)} type="date" class="w-full border border-gray-300 rounded-md px-3 py-2"></div><div class="flex items-end"><button class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"> Apply Filters </button></div></div></div><div class="bg-white rounded-lg shadow-sm overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Prescription ID </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Patient </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Doctor </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Medication </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Date Submitted </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Status </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Actions </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
      ssrRenderList(unref(prescriptions), (prescription) => {
        _push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> #RX${ssrInterpolate(prescription.id)}</td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">${ssrInterpolate(prescription.patientName)}</div><div class="text-sm text-gray-500">DOB: ${ssrInterpolate(formatDate(prescription.patientDOB))}</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">${ssrInterpolate(prescription.doctorName)}</div><div class="text-sm text-gray-500">${ssrInterpolate(prescription.doctorLicense)}</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">${ssrInterpolate(prescription.medicationName)}</div><div class="text-sm text-gray-500">${ssrInterpolate(prescription.dosage)} - ${ssrInterpolate(prescription.quantity)}</div></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${ssrInterpolate(formatDate(prescription.submittedAt))}</td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([getStatusClass(prescription.status), "inline-flex px-2 py-1 text-xs font-semibold rounded-full"])}">${ssrInterpolate(prescription.status)}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium"><div class="flex space-x-2"><button class="text-blue-600 hover:text-blue-900"> View </button>`);
        if (prescription.status === "pending") {
          _push(`<button class="text-green-600 hover:text-green-900"> Approve </button>`);
        } else {
          _push(`<!---->`);
        }
        if (prescription.status === "pending") {
          _push(`<button class="text-red-600 hover:text-red-900"> Reject </button>`);
        } else {
          _push(`<!---->`);
        }
        if (prescription.status === "approved") {
          _push(`<button class="text-purple-600 hover:text-purple-900"> Fill </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="bg-gray-50 px-6 py-3 flex items-center justify-between"><div class="text-sm text-gray-700"> Showing ${ssrInterpolate((unref(currentPage) - 1) * unref(itemsPerPage) + 1)} to ${ssrInterpolate(Math.min(unref(currentPage) * unref(itemsPerPage), unref(totalPrescriptions)))} of ${ssrInterpolate(unref(totalPrescriptions))} prescriptions </div><div class="flex space-x-2"><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"> Previous </button><button${ssrIncludeBooleanAttr(unref(currentPage) * unref(itemsPerPage) >= unref(totalPrescriptions)) ? " disabled" : ""} class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"> Next </button></div></div></div></div>`);
      if (unref(selectedPrescription)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-96 overflow-y-auto"><div class="p-6"><div class="flex justify-between items-center mb-4"><h3 class="text-lg font-medium">Prescription #RX${ssrInterpolate(unref(selectedPrescription).id)}</h3><button class="text-gray-400 hover:text-gray-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-4"><div><h4 class="font-medium text-gray-900">Patient Information</h4><div class="mt-2 text-sm text-gray-600"><p><strong>Name:</strong> ${ssrInterpolate(unref(selectedPrescription).patientName)}</p><p><strong>Date of Birth:</strong> ${ssrInterpolate(formatDate(unref(selectedPrescription).patientDOB))}</p><p><strong>Phone:</strong> ${ssrInterpolate(unref(selectedPrescription).patientPhone)}</p><p><strong>Address:</strong> ${ssrInterpolate(unref(selectedPrescription).patientAddress)}</p></div></div><div><h4 class="font-medium text-gray-900">Doctor Information</h4><div class="mt-2 text-sm text-gray-600"><p><strong>Name:</strong> ${ssrInterpolate(unref(selectedPrescription).doctorName)}</p><p><strong>License:</strong> ${ssrInterpolate(unref(selectedPrescription).doctorLicense)}</p><p><strong>Contact:</strong> ${ssrInterpolate(unref(selectedPrescription).doctorContact)}</p></div></div></div><div class="space-y-4"><div><h4 class="font-medium text-gray-900">Prescription Details</h4><div class="mt-2 text-sm text-gray-600"><p><strong>Medication:</strong> ${ssrInterpolate(unref(selectedPrescription).medicationName)}</p><p><strong>Dosage:</strong> ${ssrInterpolate(unref(selectedPrescription).dosage)}</p><p><strong>Quantity:</strong> ${ssrInterpolate(unref(selectedPrescription).quantity)}</p><p><strong>Refills:</strong> ${ssrInterpolate(unref(selectedPrescription).refills)}</p><p><strong>Instructions:</strong> ${ssrInterpolate(unref(selectedPrescription).instructions)}</p></div></div><div><h4 class="font-medium text-gray-900">Prescription Image</h4><div class="mt-2"><img${ssrRenderAttr("src", unref(selectedPrescription).imageUrl)}${ssrRenderAttr("alt", `Prescription ${unref(selectedPrescription).id}`)} class="w-full h-48 object-cover border rounded-lg"></div></div></div></div><div class="mt-6 flex justify-end space-x-3">`);
        if (unref(selectedPrescription).status === "pending") {
          _push(`<button class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"> Reject </button>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(selectedPrescription).status === "pending") {
          _push(`<button class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"> Approve </button>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(selectedPrescription).status === "approved") {
          _push(`<button class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"> Mark as Filled </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/prescriptions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=prescriptions-D7UVJk_t.js.map
