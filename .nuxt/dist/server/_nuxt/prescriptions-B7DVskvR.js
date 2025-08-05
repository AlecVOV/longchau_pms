import { u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
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
  __name: "prescriptions",
  __ssrInlineRender: true,
  setup(__props) {
    const activeFilter = ref("All");
    const searchQuery = ref("");
    const selectedPrescription = ref(null);
    const statusFilters = ["All", "Active", "Pending", "Expired", "Completed"];
    const prescriptions = ref([
      {
        id: "RX-001234",
        status: "Active",
        doctorName: "Sarah Johnson",
        issueDate: "2025-06-15",
        expiryDate: "2025-12-15",
        medications: ["Lisinopril", "Metformin"],
        medicationDetails: [
          {
            name: "Lisinopril 10mg",
            dosage: "10mg once daily",
            quantity: "30 tablets",
            instructions: "Take with or without food. Monitor blood pressure."
          },
          {
            name: "Metformin 500mg",
            dosage: "500mg twice daily",
            quantity: "60 tablets",
            instructions: "Take with meals to reduce stomach upset."
          }
        ],
        orderStatus: "Delivered",
        uploadDate: "2025-06-15"
      },
      {
        id: "RX-001235",
        status: "Pending",
        doctorName: "Michael Chen",
        issueDate: "2025-06-20",
        expiryDate: "2025-09-20",
        medications: ["Amoxicillin"],
        medicationDetails: [
          {
            name: "Amoxicillin 250mg",
            dosage: "250mg three times daily",
            quantity: "21 capsules",
            instructions: "Complete full course even if feeling better. Take with food."
          }
        ],
        orderStatus: "Processing",
        uploadDate: "2025-06-20"
      },
      {
        id: "RX-001236",
        status: "Active",
        doctorName: "Emily Rodriguez",
        issueDate: "2025-06-18",
        expiryDate: "2026-06-18",
        medications: ["Levothyroxine", "Vitamin D3"],
        medicationDetails: [
          {
            name: "Levothyroxine 50mcg",
            dosage: "50mcg once daily",
            quantity: "90 tablets",
            instructions: "Take on empty stomach, 30-60 minutes before breakfast."
          },
          {
            name: "Vitamin D3 1000 IU",
            dosage: "1000 IU daily",
            quantity: "90 tablets",
            instructions: "Take with food for better absorption."
          }
        ],
        orderStatus: "Ready for Pickup",
        uploadDate: "2025-06-18"
      },
      {
        id: "RX-001237",
        status: "Expired",
        doctorName: "David Wilson",
        issueDate: "2024-12-15",
        expiryDate: "2025-06-15",
        medications: ["Ibuprofen"],
        medicationDetails: [
          {
            name: "Ibuprofen 400mg",
            dosage: "400mg as needed",
            quantity: "20 tablets",
            instructions: "Take with food. Do not exceed 3 doses per day."
          }
        ],
        orderStatus: "Completed",
        uploadDate: "2024-12-15"
      },
      {
        id: "RX-001238",
        status: "Active",
        doctorName: "Lisa Thompson",
        issueDate: "2025-06-22",
        expiryDate: "2025-08-22",
        medications: ["Albuterol Inhaler"],
        medicationDetails: [
          {
            name: "Albuterol Inhaler 90mcg",
            dosage: "2 puffs as needed",
            quantity: "1 inhaler",
            instructions: "Shake well before use. Rinse mouth after use."
          }
        ],
        orderStatus: "In Transit",
        uploadDate: "2025-06-22"
      }
    ]);
    const totalPrescriptions = computed(() => prescriptions.value.length);
    const activePrescriptions = computed(() => prescriptions.value.filter((p) => p.status === "Active").length);
    const pendingPrescriptions = computed(() => prescriptions.value.filter((p) => p.status === "Pending").length);
    const expiringSoon = computed(() => {
      const thirtyDaysFromNow = /* @__PURE__ */ new Date();
      thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
      return prescriptions.value.filter((p) => {
        const expiryDate = new Date(p.expiryDate);
        return expiryDate <= thirtyDaysFromNow && p.status === "Active";
      }).length;
    });
    const filteredPrescriptions = computed(() => {
      let filtered = prescriptions.value;
      if (activeFilter.value !== "All") {
        filtered = filtered.filter((p) => p.status === activeFilter.value);
      }
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (p) => p.id.toLowerCase().includes(query) || p.doctorName.toLowerCase().includes(query) || p.medications.some((med) => med.toLowerCase().includes(query))
        );
      }
      return filtered.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
    });
    function getStatusBadgeClass(status) {
      const classes = {
        "Active": "bg-green-500",
        "Pending": "bg-yellow-500",
        "Expired": "bg-red-500",
        "Completed": "bg-blue-500"
      };
      return classes[status] || "bg-neutral-500";
    }
    function getStatusTextClass(status) {
      const classes = {
        "Active": "bg-green-100 text-green-800",
        "Pending": "bg-yellow-100 text-yellow-800",
        "Expired": "bg-red-100 text-red-800",
        "Completed": "bg-blue-100 text-blue-800"
      };
      return classes[status] || "bg-neutral-100 text-neutral-800";
    }
    function getProgressWidth(orderStatus) {
      const progressMap = {
        "Processing": "25%",
        "Verified": "50%",
        "Ready for Pickup": "75%",
        "In Transit": "85%",
        "Delivered": "100%",
        "Completed": "100%"
      };
      return progressMap[orderStatus] || "0%";
    }
    useHead({
      title: "My Prescriptions - Long Châu Pharmacy",
      meta: [
        {
          name: "description",
          content: "Manage your prescriptions, track medication orders, and reorder your medications easily."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="container-custom"><nav class="flex mb-6 text-sm" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-neutral-500 hover:text-primary-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="inline-flex items-center"><span class="mx-2 text-neutral-400">/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: "text-neutral-500 hover:text-primary-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Account`);
          } else {
            return [
              createTextVNode("Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-neutral-400">/</span><span class="text-neutral-700">My Prescriptions</span></div></li></ol></nav><div class="flex justify-between items-center mb-8"><div><h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">My Prescriptions</h1><p class="text-neutral-600">Manage your prescriptions and medication orders</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/upload-prescription",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="i-iconify-ph-plus text-lg mr-2"${_scopeId}></span> Upload New Prescription `);
          } else {
            return [
              createVNode("span", { class: "i-iconify-ph-plus text-lg mr-2" }),
              createTextVNode(" Upload New Prescription ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"><div class="bg-white rounded-lg shadow-sm p-4"><div class="flex items-center"><div class="p-2 bg-blue-100 rounded-lg"><span class="i-iconify-ph-file-text-fill text-xl text-blue-600"></span></div><div class="ml-3"><p class="text-sm text-neutral-500">Total Prescriptions</p><p class="text-lg font-semibold text-neutral-900">${ssrInterpolate(totalPrescriptions.value)}</p></div></div></div><div class="bg-white rounded-lg shadow-sm p-4"><div class="flex items-center"><div class="p-2 bg-green-100 rounded-lg"><span class="i-iconify-ph-check-circle-fill text-xl text-green-600"></span></div><div class="ml-3"><p class="text-sm text-neutral-500">Active</p><p class="text-lg font-semibold text-neutral-900">${ssrInterpolate(activePrescriptions.value)}</p></div></div></div><div class="bg-white rounded-lg shadow-sm p-4"><div class="flex items-center"><div class="p-2 bg-yellow-100 rounded-lg"><span class="i-iconify-ph-clock-fill text-xl text-yellow-600"></span></div><div class="ml-3"><p class="text-sm text-neutral-500">Pending</p><p class="text-lg font-semibold text-neutral-900">${ssrInterpolate(pendingPrescriptions.value)}</p></div></div></div><div class="bg-white rounded-lg shadow-sm p-4"><div class="flex items-center"><div class="p-2 bg-orange-100 rounded-lg"><span class="i-iconify-ph-calendar-fill text-xl text-orange-600"></span></div><div class="ml-3"><p class="text-sm text-neutral-500">Expiring Soon</p><p class="text-lg font-semibold text-neutral-900">${ssrInterpolate(expiringSoon.value)}</p></div></div></div></div><div class="bg-white rounded-lg shadow-sm p-4 mb-6"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(statusFilters, (filter) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-1 text-sm rounded-full transition-colors",
          activeFilter.value === filter ? "bg-primary-600 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
        ])}">${ssrInterpolate(filter)}</button>`);
      });
      _push(`<!--]--></div><div class="flex gap-2"><div class="relative"><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="Search prescriptions..." class="input pl-10 w-64"><span class="i-iconify-ph-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"></span></div></div></div></div><div class="space-y-4">`);
      if (filteredPrescriptions.value.length === 0) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-12 text-center"><span class="i-iconify-ph-file-text text-5xl text-neutral-300 mb-4 inline-block"></span><h3 class="text-lg font-medium text-neutral-800 mb-2">No prescriptions found</h3><p class="text-neutral-500 mb-6">Upload your first prescription to get started with your medication orders.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/upload-prescription",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="i-iconify-ph-upload-simple text-lg mr-2"${_scopeId}></span> Upload Prescription `);
            } else {
              return [
                createVNode("span", { class: "i-iconify-ph-upload-simple text-lg mr-2" }),
                createTextVNode(" Upload Prescription ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(filteredPrescriptions.value, (prescription) => {
          _push(`<div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"><div class="flex items-start justify-between"><div class="flex items-start space-x-4 flex-1"><div class="flex-shrink-0"><div class="${ssrRenderClass([getStatusBadgeClass(prescription.status), "w-3 h-3 rounded-full"])}"></div></div><div class="flex-1"><div class="flex items-center justify-between mb-2"><h3 class="text-lg font-semibold text-neutral-900">${ssrInterpolate(prescription.medications.join(", "))}</h3><span class="${ssrRenderClass([getStatusTextClass(prescription.status), "px-2 py-1 text-xs font-medium rounded-full"])}">${ssrInterpolate(prescription.status)}</span></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-600 mb-4"><div class="flex items-center"><span class="i-iconify-ph-user-circle mr-2"></span><span>Dr. ${ssrInterpolate(prescription.doctorName)}</span></div><div class="flex items-center"><span class="i-iconify-ph-calendar mr-2"></span><span>Issued: ${ssrInterpolate(prescription.issueDate)}</span></div><div class="flex items-center"><span class="i-iconify-ph-clock mr-2"></span><span>Expires: ${ssrInterpolate(prescription.expiryDate)}</span></div></div><div class="mb-4"><h4 class="font-medium text-neutral-800 mb-2">Medications:</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-2"><!--[-->`);
          ssrRenderList(prescription.medicationDetails, (medication, index) => {
            _push(`<div class="bg-neutral-50 rounded-lg p-3"><div class="flex justify-between items-start"><div><p class="font-medium text-neutral-800">${ssrInterpolate(medication.name)}</p><p class="text-sm text-neutral-600">${ssrInterpolate(medication.dosage)}</p><p class="text-xs text-neutral-500">${ssrInterpolate(medication.instructions)}</p></div><span class="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">${ssrInterpolate(medication.quantity)}</span></div></div>`);
          });
          _push(`<!--]--></div></div>`);
          if (prescription.orderStatus) {
            _push(`<div class="mb-4"><div class="flex items-center justify-between text-sm mb-2"><span class="font-medium text-neutral-700">Order Progress</span><span class="text-neutral-500">${ssrInterpolate(prescription.orderStatus)}</span></div><div class="w-full bg-neutral-200 rounded-full h-2"><div class="bg-primary-600 h-2 rounded-full transition-all duration-300" style="${ssrRenderStyle({ width: getProgressWidth(prescription.orderStatus) })}"></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="flex items-center space-x-2 ml-4"><button class="p-2 text-neutral-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors" title="View Details"><span class="i-iconify-ph-eye text-lg"></span></button>`);
          if (prescription.status === "Active") {
            _push(`<button class="p-2 text-neutral-500 hover:text-success-600 hover:bg-success-50 rounded-lg transition-colors" title="Reorder"><span class="i-iconify-ph-shopping-cart text-lg"></span></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="p-2 text-neutral-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Download"><span class="i-iconify-ph-download text-lg"></span></button><button class="p-2 text-neutral-500 hover:text-error-600 hover:bg-error-50 rounded-lg transition-colors" title="Delete"><span class="i-iconify-ph-trash text-lg"></span></button></div></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      if (selectedPrescription.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"><div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6 border-b border-neutral-200"><div class="flex justify-between items-center"><h2 class="text-xl font-bold text-neutral-900">Prescription Details</h2><button class="text-neutral-400 hover:text-neutral-600"><span class="i-iconify-ph-x text-xl"></span></button></div></div><div class="p-6"><div class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label class="text-sm font-medium text-neutral-700">Prescription ID</label><p class="text-neutral-900">${ssrInterpolate(selectedPrescription.value.id)}</p></div><div><label class="text-sm font-medium text-neutral-700">Status</label><p class="${ssrRenderClass(getStatusTextClass(selectedPrescription.value.status))}">${ssrInterpolate(selectedPrescription.value.status)}</p></div></div><div class="grid grid-cols-2 gap-4"><div><label class="text-sm font-medium text-neutral-700">Doctor</label><p class="text-neutral-900">Dr. ${ssrInterpolate(selectedPrescription.value.doctorName)}</p></div><div><label class="text-sm font-medium text-neutral-700">Issue Date</label><p class="text-neutral-900">${ssrInterpolate(selectedPrescription.value.issueDate)}</p></div></div><div><label class="text-sm font-medium text-neutral-700">Medications</label><div class="mt-2 space-y-2"><!--[-->`);
        ssrRenderList(selectedPrescription.value.medicationDetails, (medication, index) => {
          _push(`<div class="bg-neutral-50 rounded-lg p-4"><h4 class="font-medium text-neutral-800">${ssrInterpolate(medication.name)}</h4><p class="text-sm text-neutral-600">${ssrInterpolate(medication.dosage)}</p><p class="text-sm text-neutral-600">Quantity: ${ssrInterpolate(medication.quantity)}</p><p class="text-xs text-neutral-500">${ssrInterpolate(medication.instructions)}</p></div>`);
        });
        _push(`<!--]--></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/prescriptions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=prescriptions-B7DVskvR.js.map
