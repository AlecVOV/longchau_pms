import { u as useHead, a as useAuthStore, _ as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, unref, withCtx, createVNode, createBlock, openBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Admin Dashboard - Long Châu",
      meta: [
        { name: "description", content: "Admin dashboard for managing pharmacy operations." }
      ]
    });
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="py-6"><div class="flex items-center justify-between"><div><h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1><p class="mt-1 text-sm text-gray-500">Welcome back, ${ssrInterpolate((_a = unref(authStore).user) == null ? void 0 : _a.firstName)}! Manage your pharmacy operations.</p></div><div class="flex items-center space-x-4"><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Administrator </span></div></div></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"><div class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500"><div class="flex items-center"><div class="flex-shrink-0"><svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Total Products</p><p class="text-2xl font-bold text-gray-900">1,247</p><p class="text-xs text-green-600">+12 this week</p></div></div></div><div class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500"><div class="flex items-center"><div class="flex-shrink-0"><svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Orders Today</p><p class="text-2xl font-bold text-gray-900">89</p><p class="text-xs text-green-600">+23% from yesterday</p></div></div></div><div class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-500"><div class="flex items-center"><div class="flex-shrink-0"><svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Low Stock Items</p><p class="text-2xl font-bold text-gray-900">23</p><p class="text-xs text-red-600">Needs attention</p></div></div></div><div class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500"><div class="flex items-center"><div class="flex-shrink-0"><svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg></div><div class="ml-4"><p class="text-sm font-medium text-gray-600">Active Users</p><p class="text-2xl font-bold text-gray-900">1,429</p><p class="text-xs text-green-600">+5.2% this month</p></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products",
        class: "bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="flex-shrink-0"${_scopeId}><div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"${_scopeId}><svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"${_scopeId}></path></svg></div></div><div class="ml-4"${_scopeId}><h3 class="text-lg font-semibold text-gray-900"${_scopeId}>Manage Products</h3><p class="text-sm text-gray-600"${_scopeId}>Add, edit, and organize your product catalog</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "flex-shrink-0" }, [
                  createVNode("div", { class: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-6 h-6 text-blue-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", { class: "ml-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Manage Products"),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Add, edit, and organize your product catalog")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: "bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="flex-shrink-0"${_scopeId}><div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"${_scopeId}><svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"${_scopeId}></path></svg></div></div><div class="ml-4"${_scopeId}><h3 class="text-lg font-semibold text-gray-900"${_scopeId}>Orders</h3><p class="text-sm text-gray-600"${_scopeId}>View and manage customer orders</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "flex-shrink-0" }, [
                  createVNode("div", { class: "w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-6 h-6 text-green-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", { class: "ml-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Orders"),
                  createVNode("p", { class: "text-sm text-gray-600" }, "View and manage customer orders")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/prescriptions",
        class: "bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="flex-shrink-0"${_scopeId}><div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center"${_scopeId}><svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg></div></div><div class="ml-4"${_scopeId}><h3 class="text-lg font-semibold text-gray-900"${_scopeId}>Prescriptions</h3><p class="text-sm text-gray-600"${_scopeId}>Review and manage prescriptions</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "flex-shrink-0" }, [
                  createVNode("div", { class: "w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-6 h-6 text-red-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", { class: "ml-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Prescriptions"),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Review and manage prescriptions")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/inventory",
        class: "bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="flex-shrink-0"${_scopeId}><div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center"${_scopeId}><svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"${_scopeId}></path></svg></div></div><div class="ml-4"${_scopeId}><h3 class="text-lg font-semibold text-gray-900"${_scopeId}>Inventory Management</h3><p class="text-sm text-gray-600"${_scopeId}>Track stock levels and manage inventory</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "flex-shrink-0" }, [
                  createVNode("div", { class: "w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-6 h-6 text-yellow-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", { class: "ml-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Inventory Management"),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Track stock levels and manage inventory")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/categories",
        class: "bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="flex-shrink-0"${_scopeId}><div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"${_scopeId}><svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"${_scopeId}></path></svg></div></div><div class="ml-4"${_scopeId}><h3 class="text-lg font-semibold text-gray-900"${_scopeId}>Categories</h3><p class="text-sm text-gray-600"${_scopeId}>Organize products into categories</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "flex-shrink-0" }, [
                  createVNode("div", { class: "w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-6 h-6 text-purple-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", { class: "ml-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Categories"),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Organize products into categories")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="bg-white rounded-lg shadow-sm p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold text-gray-900">Recent Orders</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: "text-sm text-blue-600 hover:text-blue-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View all →`);
          } else {
            return [
              createTextVNode("View all →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-3"><div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><div><p class="font-medium text-gray-900">#ORD-2025-001</p><p class="text-sm text-gray-600">John Doe • $89.99</p></div><span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completed</span></div><div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><div><p class="font-medium text-gray-900">#ORD-2025-002</p><p class="text-sm text-gray-600">Jane Smith • $156.75</p></div><span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Processing</span></div><div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><div><p class="font-medium text-gray-900">#ORD-2025-003</p><p class="text-sm text-gray-600">Bob Johnson • $45.20</p></div><span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Pending</span></div></div></div><div class="bg-white rounded-lg shadow-sm p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold text-gray-900">Pending Prescriptions</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/prescriptions",
        class: "text-sm text-red-600 hover:text-red-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View all →`);
          } else {
            return [
              createTextVNode("View all →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-3"><div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200"><div><p class="font-medium text-gray-900">#RX2001</p><p class="text-sm text-gray-600">John Doe • Lisinopril</p></div><span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span></div><div class="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"><div><p class="font-medium text-gray-900">#RX2002</p><p class="text-sm text-gray-600">Jane Smith • Metformin</p></div><span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Approved</span></div><div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200"><div><p class="font-medium text-gray-900">#RX2003</p><p class="text-sm text-gray-600">Bob Johnson • Atorvastatin</p></div><span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Filled</span></div></div></div><div class="bg-white rounded-lg shadow-sm p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold text-gray-900">Low Stock Alerts</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/inventory",
        class: "text-sm text-red-600 hover:text-red-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View all →`);
          } else {
            return [
              createTextVNode("View all →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-3"><div class="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"><div><p class="font-medium text-gray-900">Aspirin 500mg</p><p class="text-sm text-gray-600">Only 5 units left</p></div><span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Critical</span></div><div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200"><div><p class="font-medium text-gray-900">Blood Pressure Monitor</p><p class="text-sm text-gray-600">12 units left</p></div><span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Low</span></div><div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200"><div><p class="font-medium text-gray-900">Vitamin D3</p><p class="text-sm text-gray-600">18 units left</p></div><span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Low</span></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DMfa0F8a.js.map
