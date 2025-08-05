import { d as defineStore, a as useAuthStore, u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { computed, ref, watch, mergeProps, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
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
const useOrdersStore = defineStore("orders", {
  state: () => ({
    orders: [],
    currentOrder: null,
    orderHistory: [],
    loading: false,
    trackingInfo: null,
    orderStatuses: [
      "pending",
      "confirmed",
      "processing",
      "packed",
      "shipped",
      "delivered",
      "cancelled"
    ]
  }),
  getters: {
    getOrderById: (state) => {
      return (id) => state.orders.find((order) => order.id === id);
    },
    getPendingOrders: (state) => {
      return state.orders.filter((order) => order.status === "pending");
    },
    getCompletedOrders: (state) => {
      return state.orders.filter((order) => order.status === "delivered");
    },
    getOrdersByStatus: (state) => {
      return (status) => state.orders.filter((order) => order.status === status);
    },
    getTotalOrderValue: (state) => {
      return state.orders.reduce((total, order) => total + order.total, 0);
    },
    getRecentOrders: (state) => {
      return state.orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
    }
  },
  actions: {
    async createOrder(orderData) {
      var _a;
      this.loading = true;
      try {
        const authStore = useAuthStore();
        const currentUserId = ((_a = authStore.user) == null ? void 0 : _a.id) || "demo-user";
        console.log("Creating order with data:", orderData);
        const apiOrderData = {
          orderNumber: orderData.orderNumber,
          items: orderData.items.map((item) => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price
          })),
          shipping: orderData.shipping,
          billing: orderData.billing,
          paymentMethod: orderData.paymentMethod,
          subtotal: orderData.subtotal,
          tax: orderData.tax,
          shippingFee: orderData.shippingFee,
          total: orderData.total
        };
        console.log("Sending to API:", apiOrderData);
        let createdOrder = null;
        try {
          const apiResponse = await $fetch("/api/orders", {
            method: "POST",
            body: apiOrderData,
            headers: authStore.token ? {
              Authorization: `Bearer ${authStore.token}`
            } : {}
          });
          console.log("API Response:", apiResponse);
          if (apiResponse.success && apiResponse.order) {
            createdOrder = apiResponse.order;
            console.log("Order created via API successfully:", createdOrder.id);
          }
        } catch (apiError) {
          console.error("API order creation failed:", apiError);
          throw new Error(`Order creation failed: ${apiError.message || "Unknown API error"}`);
        }
        if (createdOrder && false) ;
        return createdOrder;
      } catch (error) {
        console.error("Error creating order:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async fetchOrders(params = {}) {
      var _a;
      this.loading = true;
      try {
        let authStore;
        let currentUserId = "demo-user";
        try {
          authStore = useAuthStore();
          currentUserId = ((_a = authStore.user) == null ? void 0 : _a.id) || "demo-user";
        } catch (authError) {
          console.warn("Auth store not available, using demo user:", authError);
        }
        let apiOrders = [];
        const previousOrders = [...this.orders];
        try {
          const cacheBuster = Date.now();
          const response = await $fetch(`/api/orders?_t=${cacheBuster}`, {
            headers: authStore && authStore.token ? {
              Authorization: `Bearer ${authStore.token}`,
              "Cache-Control": "no-cache",
              "Pragma": "no-cache"
            } : {}
          });
          if (response && response.success && Array.isArray(response.data)) {
            apiOrders = response.data;
          } else if (Array.isArray(response)) {
            apiOrders = response;
          } else {
            console.warn("Unexpected API response format:", response);
            apiOrders = [];
          }
        } catch (apiError) {
          console.warn("API orders fetch failed, loading from localStorage:", apiError);
          apiOrders = [];
        }
        if (false) ;
        else {
          if (Array.isArray(apiOrders)) {
            this.orders = apiOrders;
          } else {
            console.warn("apiOrders is not an array in fallback, using empty array:", apiOrders);
            this.orders = [];
          }
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        this.orders = [];
      } finally {
        this.loading = false;
      }
    },
    async fetchOrderById(id) {
      this.loading = true;
      try {
        const authStore = useAuthStore();
        const cacheBuster = Date.now();
        const response = await $fetch(`/api/orders/${id}?_t=${cacheBuster}`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
            "Cache-Control": "no-cache",
            "Pragma": "no-cache"
          }
        });
        this.currentOrder = response.order || response;
        const orderIndex = this.orders.findIndex((order) => order.id === id);
        if (orderIndex !== -1) {
          this.orders[orderIndex] = this.currentOrder;
        }
        return this.currentOrder;
      } catch (error) {
        console.error("Error fetching order:", error);
        this.currentOrder = null;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async refreshOrderById(id) {
      try {
        const authStore = useAuthStore();
        const cacheBuster = Date.now();
        const response = await $fetch(`/api/orders/${id}?_t=${cacheBuster}`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
            "Cache-Control": "no-cache",
            "Pragma": "no-cache"
          }
        });
        const updatedOrder = response.order || response;
        const orderIndex = this.orders.findIndex((order) => order.id === id);
        if (orderIndex !== -1) {
          this.orders[orderIndex] = updatedOrder;
          console.log(`Order ${id} status updated to:`, updatedOrder.status);
        }
        return updatedOrder;
      } catch (error) {
        console.error("Error refreshing order:", error);
        throw error;
      }
    },
    checkForStatusChanges(previousOrders, currentOrders) {
      try {
        const { useNotificationsStore: useNotificationsStore2 } = require("~/stores/notifications");
        const notifications = useNotificationsStore2();
        previousOrders.forEach((prevOrder) => {
          const currentOrder = currentOrders.find((order) => order.id === prevOrder.id);
          if (currentOrder && currentOrder.status !== prevOrder.status) {
            console.log(`Order ${prevOrder.id} status changed from ${prevOrder.status} to ${currentOrder.status}`);
            const statusMessages = {
              "pending": "Your order is pending confirmation",
              "processing": "Your order is being processed",
              "shipped": "Your order has been shipped",
              "delivered": "Your order has been delivered",
              "cancelled": "Your order has been cancelled"
            };
            const message = statusMessages[currentOrder.status.toLowerCase()] || `Order status updated to ${currentOrder.status}`;
            notifications.success(`Order #${currentOrder.orderNumber}: ${message}`);
          }
        });
      } catch (error) {
        console.error("Error checking status changes:", error);
      }
    },
    async updateOrderStatus(id, status) {
      try {
        const authStore = useAuthStore();
        const response = await $fetch(`/api/orders/${id}/status`, {
          method: "PATCH",
          body: { status },
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        const orderIndex = this.orders.findIndex((order) => order.id === id);
        if (orderIndex !== -1) {
          this.orders[orderIndex] = response.order || response;
        }
        if (this.currentOrder && this.currentOrder.id === id) {
          this.currentOrder = response.order || response;
        }
        return response;
      } catch (error) {
        console.error("Error updating order status:", error);
        throw error;
      }
    },
    async cancelOrder(id, reason = "") {
      try {
        const authStore = useAuthStore();
        const response = await $fetch(`/api/orders/${id}/cancel`, {
          method: "POST",
          body: { reason },
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        const orderIndex = this.orders.findIndex((order) => order.id === id);
        if (orderIndex !== -1) {
          this.orders[orderIndex].status = "cancelled";
          this.orders[orderIndex].cancelReason = reason;
        }
        return response;
      } catch (error) {
        console.error("Error cancelling order:", error);
        throw error;
      }
    },
    async fetchOrderHistory(userId) {
      this.loading = true;
      try {
        const authStore = useAuthStore();
        const response = await $fetch(`/api/users/${userId}/orders`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        this.orderHistory = response.orders || response.data || [];
      } catch (error) {
        console.error("Error fetching order history:", error);
        this.orderHistory = [];
      } finally {
        this.loading = false;
      }
    },
    async trackOrder(orderId) {
      this.loading = true;
      try {
        const authStore = useAuthStore();
        const response = await $fetch(`/api/orders/${orderId}/tracking`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        this.trackingInfo = response.tracking || response;
        return this.trackingInfo;
      } catch (error) {
        console.error("Error tracking order:", error);
        this.trackingInfo = null;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async processPayment(orderId, paymentData) {
      this.loading = true;
      try {
        const authStore = useAuthStore();
        const response = await $fetch(`/api/orders/${orderId}/payment`, {
          method: "POST",
          body: paymentData,
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        const orderIndex = this.orders.findIndex((order) => order.id === orderId);
        if (orderIndex !== -1) {
          this.orders[orderIndex].paymentStatus = "paid";
          this.orders[orderIndex].status = "confirmed";
        }
        return response;
      } catch (error) {
        console.error("Error processing payment:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async reorderItems(orderId) {
      try {
        const authStore = useAuthStore();
        const response = await $fetch(`/api/orders/${orderId}/reorder`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        try {
          const { useCartStore } = await import("./cart-Cj2Ys50X.js");
          const cartStore = useCartStore();
          response.items.forEach((item) => {
            cartStore.addItem(item.product, item.quantity);
          });
        } catch (cartError) {
          console.warn("Failed to add items to cart:", cartError);
        }
        return response;
      } catch (error) {
        console.error("Error reordering items:", error);
        throw error;
      }
    },
    async downloadInvoice(orderId) {
      try {
        const authStore = useAuthStore();
        const response = await $fetch(`/api/orders/${orderId}/invoice`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        if (false) ;
        return response;
      } catch (error) {
        console.error("Error downloading invoice:", error);
        throw error;
      }
    },
    clearCurrentOrder() {
      this.currentOrder = null;
    },
    clearTrackingInfo() {
      this.trackingInfo = null;
    }
  }
});
const itemsPerPage = 10;
const _sfc_main = {
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Order History - Long Châu",
      meta: [
        { name: "description", content: "View and track your order history, reorder items, and manage returns." }
      ]
    });
    const ordersStore = useOrdersStore();
    useNotificationsStore();
    const authStore = useAuthStore();
    const getOrderItems = (order) => {
      const items = order.orderItems || order.items || [];
      console.log("getOrderItems called for order:", order.orderNumber, "items:", items);
      return items;
    };
    computed(() => {
      const userRole = authStore.getUserRole;
      console.log("Current user role:", userRole, "Is admin:", userRole === "ADMIN" || userRole === "admin");
      return userRole === "ADMIN" || userRole === "admin";
    });
    const loading = ref(false);
    const searchQuery = ref("");
    const statusFilter = ref("");
    const dateFilter = ref("");
    const currentPage = ref(1);
    const lastRefreshTime = ref("");
    const orders = computed(() => ordersStore.orders || []);
    const filteredOrders = computed(() => {
      let filtered = orders.value;
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (order) => {
            var _a;
            return ((_a = order.orderNumber) == null ? void 0 : _a.toLowerCase().includes(query)) || getOrderItems(order).some(
              (item) => {
                var _a2;
                return (((_a2 = item.product) == null ? void 0 : _a2.name) || item.name || "").toLowerCase().includes(query);
              }
            );
          }
        );
      }
      if (statusFilter.value) {
        filtered = filtered.filter((order) => order.status === statusFilter.value);
      }
      if (dateFilter.value) {
        const now = /* @__PURE__ */ new Date();
        const filterDate = /* @__PURE__ */ new Date();
        switch (dateFilter.value) {
          case "last30":
            filterDate.setDate(now.getDate() - 30);
            break;
          case "last90":
            filterDate.setDate(now.getDate() - 90);
            break;
          case "lastyear":
            filterDate.setFullYear(now.getFullYear() - 1);
            break;
        }
        filtered = filtered.filter((order) => new Date(order.createdAt) >= filterDate);
      }
      return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    });
    const paginatedOrders = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredOrders.value.slice(start, end);
    });
    const totalPages = computed(() => Math.ceil(filteredOrders.value.length / itemsPerPage));
    const totalOrders = computed(() => orders.value.length);
    const totalSpent = computed(() => orders.value.reduce((sum, order) => sum + (order.total || order.totalAmount || 0), 0));
    const averageOrder = computed(() => totalOrders.value > 0 ? totalSpent.value / totalOrders.value : 0);
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const getOrderStatusClass = (status) => {
      const classes = {
        "pending": "bg-yellow-100 text-yellow-800",
        "processing": "bg-blue-100 text-blue-800",
        "shipped": "bg-purple-100 text-purple-800",
        "delivered": "bg-green-100 text-green-800",
        "cancelled": "bg-red-100 text-red-800"
      };
      return classes[status == null ? void 0 : status.toLowerCase()] || "bg-gray-100 text-gray-800";
    };
    const canReorder = (order) => {
      var _a;
      const reorderableStatuses = ["delivered", "completed"];
      return reorderableStatuses.includes((_a = order.status) == null ? void 0 : _a.toLowerCase());
    };
    const canReturn = (order) => {
      var _a;
      const returnableStatuses = ["delivered", "completed"];
      if (!returnableStatuses.includes((_a = order.status) == null ? void 0 : _a.toLowerCase())) {
        return false;
      }
      const orderDate = new Date(order.createdAt);
      const now = /* @__PURE__ */ new Date();
      const daysDifference = Math.floor((now - orderDate) / (1e3 * 60 * 60 * 24));
      return daysDifference <= 30;
    };
    const visiblePages = computed(() => {
      const pages = [];
      const total = totalPages.value;
      const current = currentPage.value;
      if (total <= 7) {
        for (let i = 1; i <= total; i++) {
          pages.push(i);
        }
      } else {
        const start = Math.max(1, current - 2);
        const end = Math.min(total, current + 2);
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        if (start > 1) {
          pages.unshift(1);
          if (start > 2) {
            pages.splice(1, 0, "...");
          }
        }
        if (end < total) {
          if (end < total - 1) {
            pages.push("...");
          }
          pages.push(total);
        }
      }
      return pages;
    });
    watch([searchQuery, statusFilter, dateFilter], () => {
      currentPage.value = 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="py-6"><div class="flex items-center justify-between"><div><h1 class="text-3xl font-bold text-gray-900">Order History</h1><p class="mt-1 text-sm text-gray-500">View and track your orders</p></div><div class="flex items-center space-x-4"><div class="text-sm text-gray-500"> Last updated: ${ssrInterpolate(lastRefreshTime.value)}</div><button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> Download History </button><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">`);
      if (loading.value) {
        _push(`<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>`);
      }
      _push(` ${ssrInterpolate(loading.value ? "Refreshing..." : "Refresh Orders")}</button></div></div></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="grid grid-cols-1 lg:grid-cols-4 gap-8"><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-sm p-6"><h3 class="font-semibold text-gray-900 mb-4">Filter Orders</h3><div class="mb-6"><label class="block text-sm font-medium text-gray-700 mb-2">Order Status</label><select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "") : ssrLooseEqual(statusFilter.value, "")) ? " selected" : ""}>All Orders</option><option value="pending"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "pending") : ssrLooseEqual(statusFilter.value, "pending")) ? " selected" : ""}>Pending</option><option value="processing"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "processing") : ssrLooseEqual(statusFilter.value, "processing")) ? " selected" : ""}>Processing</option><option value="shipped"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "shipped") : ssrLooseEqual(statusFilter.value, "shipped")) ? " selected" : ""}>Shipped</option><option value="delivered"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "delivered") : ssrLooseEqual(statusFilter.value, "delivered")) ? " selected" : ""}>Delivered</option><option value="cancelled"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "cancelled") : ssrLooseEqual(statusFilter.value, "cancelled")) ? " selected" : ""}>Cancelled</option></select></div><div class="mb-6"><label class="block text-sm font-medium text-gray-700 mb-2">Date Range</label><select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(dateFilter.value) ? ssrLooseContain(dateFilter.value, "") : ssrLooseEqual(dateFilter.value, "")) ? " selected" : ""}>All Time</option><option value="last30"${ssrIncludeBooleanAttr(Array.isArray(dateFilter.value) ? ssrLooseContain(dateFilter.value, "last30") : ssrLooseEqual(dateFilter.value, "last30")) ? " selected" : ""}>Last 30 Days</option><option value="last90"${ssrIncludeBooleanAttr(Array.isArray(dateFilter.value) ? ssrLooseContain(dateFilter.value, "last90") : ssrLooseEqual(dateFilter.value, "last90")) ? " selected" : ""}>Last 90 Days</option><option value="lastyear"${ssrIncludeBooleanAttr(Array.isArray(dateFilter.value) ? ssrLooseContain(dateFilter.value, "lastyear") : ssrLooseEqual(dateFilter.value, "lastyear")) ? " selected" : ""}>Last Year</option></select></div><div class="border-t border-gray-200 pt-4"><h4 class="font-medium text-gray-900 mb-3">Order Summary</h4><div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-gray-500">Total Orders:</span><span class="font-medium">${ssrInterpolate(totalOrders.value)}</span></div><div class="flex justify-between"><span class="text-gray-500">Total Spent:</span><span class="font-medium">$${ssrInterpolate((totalSpent.value || 0).toFixed(2))}</span></div><div class="flex justify-between"><span class="text-gray-500">Avg. Order:</span><span class="font-medium">$${ssrInterpolate((averageOrder.value || 0).toFixed(2))}</span></div></div></div></div><div class="bg-white rounded-lg shadow-sm p-6 mt-6"><h3 class="font-semibold text-gray-900 mb-4">Quick Actions</h3><div class="space-y-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/track-order",
        class: "w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"${_scopeId}></path></svg> Track Order `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                })
              ])),
              createTextVNode(" Track Order ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/return-policy",
        class: "w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg> Return Policy `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                })
              ])),
              createTextVNode(" Return Policy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"${_scopeId}></path></svg> Support `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                })
              ])),
              createTextVNode(" Support ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="lg:col-span-3"><div class="bg-white rounded-lg shadow-sm p-4 mb-6"><div class="relative"><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search orders by order number, product name..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div></div>`);
      if (loading.value) {
        _push(`<div class="text-center py-12"><div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div><p class="mt-2 text-gray-500">Loading orders...</p></div>`);
      } else if (filteredOrders.value.length === 0) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-12 text-center"><svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg><h3 class="text-lg font-medium text-gray-900 mb-2">No orders found</h3><p class="text-gray-500 mb-6">You haven&#39;t placed any orders matching your filters.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Start Shopping `);
            } else {
              return [
                createTextVNode(" Start Shopping ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="space-y-6"><!--[-->`);
        ssrRenderList(paginatedOrders.value, (order) => {
          var _a;
          _push(`<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"><div class="bg-gray-50 px-6 py-4 border-b border-gray-200"><div class="flex items-center justify-between"><div class="flex items-center space-x-6"><div><p class="text-sm font-medium text-gray-900">Order #${ssrInterpolate(order.orderNumber)}</p><p class="text-sm text-gray-500">Placed ${ssrInterpolate(formatDate(order.createdAt))}</p></div><div><p class="text-sm text-gray-500">Total</p><p class="text-sm font-medium text-gray-900">$${ssrInterpolate((order.total || order.totalAmount || 0).toFixed(2))}</p></div><div><p class="text-sm text-gray-500">Status</p><span class="${ssrRenderClass([getOrderStatusClass(order.status), "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${ssrInterpolate(order.status)}</span></div></div></div></div><div class="px-6 py-4"><div class="space-y-3"><!--[-->`);
          ssrRenderList(getOrderItems(order).slice(0, 3), (item) => {
            var _a2, _b, _c, _d, _e;
            _push(`<div class="flex items-center space-x-4"><img${ssrRenderAttr("src", ((_b = (_a2 = item.product) == null ? void 0 : _a2.images) == null ? void 0 : _b[0]) || item.image || "/images/default-product.jpg")}${ssrRenderAttr("alt", ((_c = item.product) == null ? void 0 : _c.name) || item.name || "Product")} class="w-16 h-16 object-cover rounded-lg border border-gray-200"><div class="flex-1 min-w-0"><h4 class="text-sm font-medium text-gray-900 truncate">${ssrInterpolate(((_d = item.product) == null ? void 0 : _d.name) || item.name || "Unknown Product")}</h4><p class="text-sm text-gray-500">${ssrInterpolate(((_e = item.product) == null ? void 0 : _e.manufacturer) || "Unknown Brand")}</p><p class="text-sm text-gray-500">Qty: ${ssrInterpolate(item.quantity)}</p></div><div class="text-sm font-medium text-gray-900"> $${ssrInterpolate(((item.price || 0) * (item.quantity || 0)).toFixed(2))}</div></div>`);
          });
          _push(`<!--]-->`);
          if (getOrderItems(order).length > 3) {
            _push(`<div class="text-sm text-gray-500 border-t border-gray-200 pt-3"> +${ssrInterpolate(getOrderItems(order).length - 3)} more items </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200"><div class="flex items-center space-x-4 text-sm"><span class="text-gray-500"> Delivered to: ${ssrInterpolate(((_a = order.shippingAddress) == null ? void 0 : _a.name) || "Default Address")}</span>`);
          if (order.estimatedDelivery) {
            _push(`<span class="text-gray-500"> • Est. delivery: ${ssrInterpolate(formatDate(order.estimatedDelivery))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center space-x-2">`);
          if (canReorder(order)) {
            _push(`<button class="text-sm text-blue-600 hover:text-blue-500 font-medium"> Reorder </button>`);
          } else {
            _push(`<!---->`);
          }
          if (canReturn(order)) {
            _push(`<button class="text-sm text-blue-600 hover:text-blue-500 font-medium"> Return Items </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="text-sm text-blue-600 hover:text-blue-500 font-medium"> Invoice </button></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (filteredOrders.value.length > itemsPerPage) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-4 mt-6"><div class="flex items-center justify-between"><div class="text-sm text-gray-500"> Showing ${ssrInterpolate((currentPage.value - 1) * itemsPerPage + 1)} to ${ssrInterpolate(Math.min(currentPage.value * itemsPerPage, filteredOrders.value.length))} of ${ssrInterpolate(filteredOrders.value.length)} orders </div><div class="flex items-center space-x-2"><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"> Previous </button><div class="flex items-center space-x-1"><!--[-->`);
        ssrRenderList(visiblePages.value, (page) => {
          _push(`<button class="${ssrRenderClass([page === currentPage.value ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-50", "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded"])}">${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--></div><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"> Next </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=orders-epe-K-xW.js.map
