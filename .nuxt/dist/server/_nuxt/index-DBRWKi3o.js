import { u as useHead, a as useAuthStore, _ as __nuxt_component_0 } from "../server.mjs";
import { computed, ref, watch, mergeProps, unref, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
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
      title: "My Account - Long Châu",
      meta: [
        { name: "description", content: "Manage your account, view orders, prescriptions, and update your profile information." }
      ]
    });
    const authStore = useAuthStore();
    const user = computed(() => authStore.user);
    const isEditing = ref(false);
    const updateLoading = ref(false);
    const profileForm = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });
    const recentOrders = ref([]);
    const prescriptionsNeedingRefill = ref([]);
    const fullName = computed(() => {
      if (!user.value) return "User";
      return `${user.value.firstName || ""} ${user.value.lastName || ""}`.trim();
    });
    const userInitials = computed(() => {
      if (!user.value) return "U";
      const firstName = user.value.firstName || "";
      const lastName = user.value.lastName || "";
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    });
    const memberSince = computed(() => {
      var _a;
      if (!((_a = user.value) == null ? void 0 : _a.createdAt)) return "Unknown";
      return new Date(user.value.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long"
      });
    });
    const getOrderStatusClass = (status) => {
      const classes = {
        "pending": "bg-yellow-100 text-yellow-800",
        "processing": "bg-blue-100 text-blue-800",
        "shipped": "bg-purple-100 text-purple-800",
        "delivered": "bg-green-100 text-green-800",
        "cancelled": "bg-red-100 text-red-800"
      };
      return classes[status.toLowerCase()] || "bg-gray-100 text-gray-800";
    };
    watch(user, (newUser) => {
      if (newUser) {
        profileForm.value = {
          firstName: newUser.firstName || "",
          lastName: newUser.lastName || "",
          email: newUser.email || "",
          phone: newUser.phone || ""
        };
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="py-6"><div class="flex items-center justify-between"><div><h1 class="text-3xl font-bold text-gray-900">My Account</h1><p class="mt-1 text-sm text-gray-500">Manage your profile and account settings</p></div><div class="flex items-center space-x-4"><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"><span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span> Active Account </span></div></div></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><nav class="bg-white rounded-lg shadow-sm"><div class="p-6"><div class="flex items-center space-x-3 mb-6"><div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"><span class="text-blue-600 font-semibold text-lg">${ssrInterpolate(unref(userInitials))}</span></div><div><h3 class="font-semibold text-gray-900">${ssrInterpolate(unref(fullName))}</h3><p class="text-sm text-gray-500">${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.email)}</p></div></div><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ["flex items-center px-3 py-2 text-sm font-medium rounded-md", _ctx.$route.path === "/account" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg> My Profile `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-3",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                })
              ])),
              createTextVNode(" My Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: ["flex items-center px-3 py-2 text-sm font-medium rounded-md", _ctx.$route.path === "/account/orders" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"${_scopeId}></path></svg> Order History `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-3",
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
              ])),
              createTextVNode(" Order History ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/prescriptions",
        class: ["flex items-center px-3 py-2 text-sm font-medium rounded-md", _ctx.$route.path === "/account/prescriptions" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg> Prescriptions `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-3",
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
              ])),
              createTextVNode(" Prescriptions ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/medication-reminders",
        class: ["flex items-center px-3 py-2 text-sm font-medium rounded-md", _ctx.$route.path === "/account/medication-reminders" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM8.5 14C7.12 14 6 12.88 6 11.5S7.12 9 8.5 9 11 10.12 11 11.5 9.88 14 8.5 14z"${_scopeId}></path></svg> Medication Reminders `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-3",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 17h5l-5 5v-5zM8.5 14C7.12 14 6 12.88 6 11.5S7.12 9 8.5 9 11 10.12 11 11.5 9.88 14 8.5 14z"
                })
              ])),
              createTextVNode(" Medication Reminders ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/addresses",
        class: ["flex items-center px-3 py-2 text-sm font-medium rounded-md", _ctx.$route.path === "/account/addresses" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg> Addresses `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-3",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                })
              ])),
              createTextVNode(" Addresses ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/settings",
        class: ["flex items-center px-3 py-2 text-sm font-medium rounded-md", _ctx.$route.path === "/account/settings" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg> Account Settings `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-3",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                })
              ])),
              createTextVNode(" Account Settings ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (unref(authStore).getUserRole === "admin") {
        _push(`<li class="pt-4 mt-4 border-t border-gray-200"><div class="px-3 py-2"><p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Admin Panel</p></div></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authStore).getUserRole === "admin") {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/products",
          class: "flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"${_scopeId}></path></svg> Manage Products `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5 mr-3",
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
                ])),
                createTextVNode(" Manage Products ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authStore).getUserRole === "admin") {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/inventory",
          class: "flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"${_scopeId}></path></svg> Inventory Management `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5 mr-3",
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
                ])),
                createTextVNode(" Inventory Management ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authStore).getUserRole === "admin") {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/categories",
          class: "flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"${_scopeId}></path></svg> Categories `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5 mr-3",
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
                ])),
                createTextVNode(" Categories ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><button class="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-700 hover:text-red-600 hover:bg-red-50"><svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg> Sign Out </button></li></ul></div></nav></div><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-sm mb-8"><div class="p-6"><div class="flex items-center justify-between mb-6"><h2 class="text-xl font-semibold text-gray-900">Profile Information</h2><button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> ${ssrInterpolate(unref(isEditing) ? "Cancel" : "Edit Profile")}</button></div>`);
      if (unref(isEditing)) {
        _push(`<form><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium text-gray-700 mb-2">First Name</label><input${ssrRenderAttr("value", unref(profileForm).firstName)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label><input${ssrRenderAttr("value", unref(profileForm).lastName)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Email</label><input${ssrRenderAttr("value", unref(profileForm).email)} type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Phone</label><input${ssrRenderAttr("value", unref(profileForm).phone)} type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div></div><div class="flex justify-end space-x-3 mt-6"><button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(updateLoading)) ? " disabled" : ""} class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50">${ssrInterpolate(unref(updateLoading) ? "Saving..." : "Save Changes")}</button></div></form>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium text-gray-500">First Name</label><p class="mt-1 text-sm text-gray-900">${ssrInterpolate(((_b = unref(user)) == null ? void 0 : _b.firstName) || "Not provided")}</p></div><div><label class="block text-sm font-medium text-gray-500">Last Name</label><p class="mt-1 text-sm text-gray-900">${ssrInterpolate(((_c = unref(user)) == null ? void 0 : _c.lastName) || "Not provided")}</p></div><div><label class="block text-sm font-medium text-gray-500">Email</label><p class="mt-1 text-sm text-gray-900">${ssrInterpolate((_d = unref(user)) == null ? void 0 : _d.email)}</p></div><div><label class="block text-sm font-medium text-gray-500">Phone</label><p class="mt-1 text-sm text-gray-900">${ssrInterpolate(((_e = unref(user)) == null ? void 0 : _e.phone) || "Not provided")}</p></div><div><label class="block text-sm font-medium text-gray-500">Member Since</label><p class="mt-1 text-sm text-gray-900">${ssrInterpolate(unref(memberSince))}</p></div><div><label class="block text-sm font-medium text-gray-500">Account Status</label><span class="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"> Active </span></div></div>`);
      }
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>`);
      if (unref(recentOrders).length === 0) {
        _push(`<div class="text-center py-4"><svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg><p class="text-gray-500 text-sm">No orders yet</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "text-blue-600 hover:text-blue-500 text-sm font-medium"
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
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(recentOrders), (order) => {
          _push(`<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><div><p class="font-medium text-gray-900">Order #${ssrInterpolate(order.id.slice(-8))}</p><p class="text-sm text-gray-500">${ssrInterpolate(order.date)}</p></div><div class="text-right"><p class="font-medium text-gray-900">$${ssrInterpolate(order.total.toFixed(2))}</p><span class="${ssrRenderClass([getOrderStatusClass(order.status), "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${ssrInterpolate(order.status)}</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="mt-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: "inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View all orders <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" View all orders "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 5l7 7-7 7"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-lg font-semibold text-gray-900 mb-4">Prescription Refills</h3>`);
      if (unref(prescriptionsNeedingRefill).length === 0) {
        _push(`<div class="text-center py-4"><svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><p class="text-gray-500 text-sm">No prescriptions need refilling</p></div>`);
      } else {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(prescriptionsNeedingRefill), (prescription) => {
          _push(`<div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200"><div><p class="font-medium text-gray-900">${ssrInterpolate(prescription.medication)}</p><p class="text-sm text-yellow-700">${ssrInterpolate(prescription.daysLeft)} days remaining</p></div><button class="px-3 py-1 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700"> Refill </button></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="mt-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/prescriptions",
        class: "inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage prescriptions <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Manage prescriptions "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 5l7 7-7 7"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DBRWKi3o.js.map
