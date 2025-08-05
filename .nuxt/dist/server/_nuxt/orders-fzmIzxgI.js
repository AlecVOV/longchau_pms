import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { u as useHead, a as useAuthStore } from "../server.mjs";
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
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Orders - Admin - Long Châu"
    });
    useAuthStore();
    const orders = ref([]);
    const totalOrders = ref(0);
    const currentPage = ref(1);
    const itemsPerPage = ref(20);
    const selectedOrder = ref(null);
    const loading = ref(false);
    const showStatusUpdateModal = ref(false);
    const orderToUpdate = ref(null);
    const newStatus = ref("");
    const updating = ref(false);
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
    const formatShippingAddress = (shippingAddress) => {
      var _a;
      if (!shippingAddress) return "No shipping address provided";
      try {
        const addr = typeof shippingAddress === "string" ? JSON.parse(shippingAddress) : shippingAddress;
        let formattedAddress = "";
        if (addr.firstName || addr.lastName) {
          formattedAddress += `${addr.firstName || ""} ${addr.lastName || ""}`.trim() + "\n";
        }
        if (addr.address) {
          formattedAddress += addr.address + "\n";
        }
        let cityLine = "";
        if (addr.city) cityLine += addr.city;
        if (addr.state) cityLine += (cityLine ? ", " : "") + addr.state;
        if (addr.zipCode) cityLine += (cityLine ? " " : "") + addr.zipCode;
        if (cityLine) formattedAddress += cityLine + "\n";
        if (addr.country) {
          const countryNames = {
            "US": "United States",
            "VN": "Vietnam",
            "CA": "Canada",
            "UK": "United Kingdom"
          };
          formattedAddress += countryNames[addr.country] || addr.country;
        }
        if (addr.phone && addr.phone !== ((_a = selectedOrder.value) == null ? void 0 : _a.customerPhone)) {
          formattedAddress += "\n\nDelivery Phone: " + addr.phone;
        }
        if (addr.specialInstructions) {
          formattedAddress += "\n\nSpecial Instructions: " + addr.specialInstructions;
        }
        return formattedAddress.trim();
      } catch (error) {
        console.error("Error formatting shipping address:", error);
        return "Error displaying shipping address";
      }
    };
    const getStatusClass = (status) => {
      const statusClasses = {
        pending: "bg-yellow-100 text-yellow-800",
        processing: "bg-blue-100 text-blue-800",
        shipped: "bg-purple-100 text-purple-800",
        delivered: "bg-green-100 text-green-800",
        cancelled: "bg-red-100 text-red-800"
      };
      return statusClasses[status] || "bg-gray-100 text-gray-800";
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-white shadow-sm border-b"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="py-6"><div class="flex items-center justify-between"><div><h1 class="text-3xl font-bold text-gray-900">Order Management</h1><p class="mt-1 text-sm text-gray-500">View and manage all customer orders</p></div><div class="flex items-center space-x-4"><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">${ssrInterpolate(unref(totalOrders))} Total Orders </span></div></div></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="bg-white rounded-lg shadow-sm p-6 mb-6"><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Status</label><select class="w-full border border-gray-300 rounded-md px-3 py-2"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "") : ssrLooseEqual(unref(filters).status, "")) ? " selected" : ""}>All Status</option><option value="pending"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "pending") : ssrLooseEqual(unref(filters).status, "pending")) ? " selected" : ""}>Pending</option><option value="processing"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "processing") : ssrLooseEqual(unref(filters).status, "processing")) ? " selected" : ""}>Processing</option><option value="shipped"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "shipped") : ssrLooseEqual(unref(filters).status, "shipped")) ? " selected" : ""}>Shipped</option><option value="delivered"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "delivered") : ssrLooseEqual(unref(filters).status, "delivered")) ? " selected" : ""}>Delivered</option><option value="cancelled"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, "cancelled") : ssrLooseEqual(unref(filters).status, "cancelled")) ? " selected" : ""}>Cancelled</option></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Date Range</label><input${ssrRenderAttr("value", unref(filters).dateFrom)} type="date" class="w-full border border-gray-300 rounded-md px-3 py-2"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">To</label><input${ssrRenderAttr("value", unref(filters).dateTo)} type="date" class="w-full border border-gray-300 rounded-md px-3 py-2"></div><div class="flex items-end"><button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50">${ssrInterpolate(unref(loading) ? "Loading..." : "Apply Filters")}</button></div></div></div><div class="bg-white rounded-lg shadow-sm overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Order ID </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Customer </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Date </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Items </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Total </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Status </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Actions </th></tr></thead><tbody class="bg-white divide-y divide-gray-200">`);
      if (unref(loading)) {
        _push(`<tr><td colspan="7" class="px-6 py-8 text-center text-gray-500"><div class="flex items-center justify-center space-x-2"><svg class="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span>Loading orders...</span></div></td></tr>`);
      } else if (unref(orders).length === 0) {
        _push(`<tr><td colspan="7" class="px-6 py-8 text-center text-gray-500"> No orders found. Try adjusting your filters. </td></tr>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(orders), (order) => {
          _push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> #${ssrInterpolate(order.id)}</td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">${ssrInterpolate(order.customerName)}</div><div class="text-sm text-gray-500">${ssrInterpolate(order.customerEmail)}</div></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${ssrInterpolate(formatDate(order.createdAt))}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${ssrInterpolate(order.itemCount)} items </td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> $${ssrInterpolate(order.total.toFixed(2))}</td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([getStatusClass(order.status), "inline-flex px-2 py-1 text-xs font-semibold rounded-full"])}">${ssrInterpolate(order.status)}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium"><div class="flex space-x-2"><button class="text-blue-600 hover:text-blue-900"> View </button><button class="text-green-600 hover:text-green-900"> Update </button></div></td></tr>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</tbody></table></div><div class="bg-gray-50 px-6 py-3 flex items-center justify-between"><div class="text-sm text-gray-700"> Showing ${ssrInterpolate((unref(currentPage) - 1) * unref(itemsPerPage) + 1)} to ${ssrInterpolate(Math.min(unref(currentPage) * unref(itemsPerPage), unref(totalOrders)))} of ${ssrInterpolate(unref(totalOrders))} orders </div><div class="flex space-x-2"><button${ssrIncludeBooleanAttr(unref(currentPage) === 1 || unref(loading)) ? " disabled" : ""} class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"> Previous </button><button${ssrIncludeBooleanAttr(unref(currentPage) * unref(itemsPerPage) >= unref(totalOrders) || unref(loading)) ? " disabled" : ""} class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"> Next </button></div></div></div></div>`);
      if (unref(selectedOrder)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex justify-between items-center mb-6"><h3 class="text-xl font-semibold text-gray-900">Order #${ssrInterpolate(unref(selectedOrder).id)}</h3><button class="text-gray-400 hover:text-gray-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div class="space-y-4"><div><h4 class="text-lg font-medium text-gray-900 mb-3">Customer Information</h4><div class="bg-gray-50 p-4 rounded-lg space-y-2"><div class="flex justify-between"><span class="font-medium text-gray-700">Name:</span><span class="text-gray-900">${ssrInterpolate(unref(selectedOrder).customerName)}</span></div><div class="flex justify-between"><span class="font-medium text-gray-700">Email:</span><span class="text-gray-900">${ssrInterpolate(unref(selectedOrder).customerEmail)}</span></div>`);
        if (unref(selectedOrder).customerPhone) {
          _push(`<div class="flex justify-between"><span class="font-medium text-gray-700">Phone:</span><span class="text-gray-900">${ssrInterpolate(unref(selectedOrder).customerPhone)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div><h4 class="text-lg font-medium text-gray-900 mb-3">Order Information</h4><div class="bg-gray-50 p-4 rounded-lg space-y-2"><div class="flex justify-between"><span class="font-medium text-gray-700">Order Date:</span><span class="text-gray-900">${ssrInterpolate(formatDate(unref(selectedOrder).createdAt))}</span></div><div class="flex justify-between"><span class="font-medium text-gray-700">Status:</span><span class="${ssrRenderClass([getStatusClass(unref(selectedOrder).status), "inline-flex px-2 py-1 text-xs font-semibold rounded-full"])}">${ssrInterpolate(unref(selectedOrder).status.toUpperCase())}</span></div><div class="flex justify-between"><span class="font-medium text-gray-700">Total Items:</span><span class="text-gray-900">${ssrInterpolate(unref(selectedOrder).itemCount)}</span></div>`);
        if (unref(selectedOrder).trackingNumber) {
          _push(`<div class="flex justify-between"><span class="font-medium text-gray-700">Tracking Number:</span><span class="text-gray-900 font-mono">${ssrInterpolate(unref(selectedOrder).trackingNumber)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div><h4 class="text-lg font-medium text-gray-900 mb-3">Order Items</h4><div class="bg-gray-50 p-4 rounded-lg"><div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(selectedOrder).items, (item) => {
          _push(`<div class="flex justify-between items-center p-3 bg-white rounded border"><div class="flex-1"><div class="font-medium text-gray-900">${ssrInterpolate(item.name)}</div>`);
          if (item.manufacturer) {
            _push(`<div class="text-sm text-gray-500">${ssrInterpolate(item.manufacturer)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="text-sm text-gray-600">Quantity: ${ssrInterpolate(item.quantity)}</div><div class="text-sm text-gray-600">Unit Price: $${ssrInterpolate(item.price.toFixed(2))}</div></div><div class="text-right"><div class="font-semibold text-gray-900">$${ssrInterpolate((item.price * item.quantity).toFixed(2))}</div></div></div>`);
        });
        _push(`<!--]--></div><div class="border-t mt-4 pt-4"><div class="flex justify-between items-center"><span class="text-lg font-semibold text-gray-900">Total:</span><span class="text-lg font-bold text-gray-900">$${ssrInterpolate(unref(selectedOrder).total.toFixed(2))}</span></div></div></div></div></div>`);
        if (unref(selectedOrder).shippingAddress) {
          _push(`<div class="mb-6"><h4 class="text-lg font-medium text-gray-900 mb-3">Shipping Address</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-900 whitespace-pre-line">${ssrInterpolate(formatShippingAddress(unref(selectedOrder).shippingAddress))}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-end mt-6 pt-6 border-t"><button class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"> Close </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showStatusUpdateModal)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-lg max-w-md w-full mx-4"><div class="p-6"><div class="flex justify-between items-center mb-4"><h3 class="text-lg font-medium text-gray-900">Update Order Status</h3><button class="text-gray-400 hover:text-gray-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Order ID</label><input type="text"${ssrRenderAttr("value", `#${(_a = unref(orderToUpdate)) == null ? void 0 : _a.id}`)} readonly class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Customer</label><input type="text"${ssrRenderAttr("value", (_b = unref(orderToUpdate)) == null ? void 0 : _b.customerName)} readonly class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Current Status</label><span class="${ssrRenderClass([getStatusClass((_c = unref(orderToUpdate)) == null ? void 0 : _c.status), "inline-flex px-3 py-1 text-sm font-semibold rounded-full"])}">${ssrInterpolate((_e = (_d = unref(orderToUpdate)) == null ? void 0 : _d.status) == null ? void 0 : _e.toUpperCase())}</span></div><div><label class="block text-sm font-medium text-gray-700 mb-2">New Status</label><select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"><option value="pending"${ssrIncludeBooleanAttr(Array.isArray(unref(newStatus)) ? ssrLooseContain(unref(newStatus), "pending") : ssrLooseEqual(unref(newStatus), "pending")) ? " selected" : ""}>PENDING</option><option value="processing"${ssrIncludeBooleanAttr(Array.isArray(unref(newStatus)) ? ssrLooseContain(unref(newStatus), "processing") : ssrLooseEqual(unref(newStatus), "processing")) ? " selected" : ""}>PROCESSING</option><option value="shipped"${ssrIncludeBooleanAttr(Array.isArray(unref(newStatus)) ? ssrLooseContain(unref(newStatus), "shipped") : ssrLooseEqual(unref(newStatus), "shipped")) ? " selected" : ""}>SHIPPED</option><option value="delivered"${ssrIncludeBooleanAttr(Array.isArray(unref(newStatus)) ? ssrLooseContain(unref(newStatus), "delivered") : ssrLooseEqual(unref(newStatus), "delivered")) ? " selected" : ""}>DELIVERED</option><option value="cancelled"${ssrIncludeBooleanAttr(Array.isArray(unref(newStatus)) ? ssrLooseContain(unref(newStatus), "cancelled") : ssrLooseEqual(unref(newStatus), "cancelled")) ? " selected" : ""}>CANCELLED</option></select></div></div><div class="flex justify-end space-x-3 mt-6"><button class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"> Cancel </button><button${ssrIncludeBooleanAttr(unref(updating) || unref(newStatus) === ((_f = unref(orderToUpdate)) == null ? void 0 : _f.status)) ? " disabled" : ""} class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50">${ssrInterpolate(unref(updating) ? "Updating..." : "Update Status")}</button></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=orders-fzmIzxgI.js.map
