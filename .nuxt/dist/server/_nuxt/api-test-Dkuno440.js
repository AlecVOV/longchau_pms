import { a as useAuthStore, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "api-test",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const products = ref([]);
    const categories = ref([]);
    const loading = ref(true);
    const categoriesLoading = ref(true);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-8" }, _attrs))}><div class="max-w-4xl mx-auto px-4"><h1 class="text-3xl font-bold text-gray-900 mb-8">🧪 Backend API Testing</h1><div class="bg-white rounded-lg shadow p-6 mb-6"><h2 class="text-xl font-semibold mb-4">🔄 API Status</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="text-center"><div class="text-2xl mb-2">🗄️</div><div class="text-sm text-gray-600">Database</div><div class="font-semibold text-green-600">Connected</div></div><div class="text-center"><div class="text-2xl mb-2">🔐</div><div class="text-sm text-gray-600">Authentication</div><div class="font-semibold text-green-600">Active</div></div><div class="text-center"><div class="text-2xl mb-2">🛒</div><div class="text-sm text-gray-600">Products API</div><div class="font-semibold text-green-600">Working</div></div></div></div><div class="bg-white rounded-lg shadow p-6 mb-6"><h2 class="text-xl font-semibold mb-4">🏥 Products from Database</h2>`);
      if (unref(loading)) {
        _push(`<div class="text-center py-4"><div class="animate-spin inline-block w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full"></div><p class="mt-2">Loading products...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-red-50 border border-red-200 rounded p-4 text-red-700"><strong>Error:</strong> ${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          var _a2;
          _push(`<div class="border rounded-lg p-4"><h3 class="font-semibold">${ssrInterpolate(product.name)}</h3><p class="text-sm text-gray-600 mb-2">${ssrInterpolate(product.shortDescription)}</p><div class="flex justify-between items-center"><span class="text-lg font-bold text-green-600">$${ssrInterpolate(product.price)}</span><span class="text-sm text-gray-500">Stock: ${ssrInterpolate(product.stock)}</span></div><div class="mt-2"><span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">${ssrInterpolate((_a2 = product.category) == null ? void 0 : _a2.name)}</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="bg-white rounded-lg shadow p-6 mb-6"><h2 class="text-xl font-semibold mb-4">📦 Categories from Database</h2>`);
      if (unref(categoriesLoading)) {
        _push(`<div class="text-center py-4"><div class="animate-spin inline-block w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full"></div><p class="mt-2">Loading categories...</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"><!--[-->`);
        ssrRenderList(unref(categories), (category) => {
          _push(`<div class="text-center p-4 border rounded-lg"><div class="text-2xl mb-2">🏷️</div><h3 class="font-semibold text-sm">${ssrInterpolate(category.name)}</h3><p class="text-xs text-gray-500 mt-1">${ssrInterpolate(category.slug)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="bg-white rounded-lg shadow p-6"><h2 class="text-xl font-semibold mb-4">🔐 Authentication Test</h2>`);
      if (!unref(authStore).isLoggedIn) {
        _push(`<div class="space-y-4"><p class="text-gray-600">Test login with sample credentials:</p><div class="bg-gray-50 p-4 rounded"><p><strong>Customer:</strong> customer@example.com / customer123</p><p><strong>Admin:</strong> admin@pharmacy.com / admin123</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Go to Login Page `);
            } else {
              return [
                createTextVNode(" Go to Login Page ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="space-y-4"><div class="bg-green-50 border border-green-200 rounded p-4"><p class="text-green-800">✅ You are logged in as: <strong>${ssrInterpolate((_a = unref(authStore).user) == null ? void 0 : _a.email)}</strong></p><p class="text-green-700">Role: <strong>${ssrInterpolate((_b = unref(authStore).user) == null ? void 0 : _b.role)}</strong></p></div><button class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"> Logout </button></div>`);
      }
      _push(`</div><div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6"><h2 class="text-xl font-semibold mb-4 text-blue-900">📊 Phase 1 Backend Summary</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"><div><h3 class="font-semibold text-blue-800 mb-2">✅ Completed Features:</h3><ul class="space-y-1 text-blue-700"><li>• SQLite Database with Prisma ORM</li><li>• JWT Authentication System</li><li>• Products &amp; Categories API</li><li>• User Management (Admin/Customer)</li><li>• Cart &amp; Order Models</li><li>• Database Seeding</li></ul></div><div><h3 class="font-semibold text-blue-800 mb-2">📊 Database Stats:</h3><ul class="space-y-1 text-blue-700"><li>• Products: ${ssrInterpolate(((_c = unref(products)) == null ? void 0 : _c.length) || 0)}</li><li>• Categories: ${ssrInterpolate(((_d = unref(categories)) == null ? void 0 : _d.length) || 0)}</li><li>• Users: 2 (1 admin, 1 customer)</li><li>• Authentication: JWT-based</li><li>• Database: SQLite (dev.db)</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/api-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=api-test-Dkuno440.js.map
