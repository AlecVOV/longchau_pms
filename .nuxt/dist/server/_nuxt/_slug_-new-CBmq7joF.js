import { c as useRoute, b as useRouter, u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import _sfc_main$1 from "./ProductCard-0zuHsmiv.js";
import { ref, computed, unref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useProductsStore } from "./products-SeWkcUmE.js";
import { useCartStore } from "./cart-Cj2Ys50X.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
  __name: "[slug]-new",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    useProductsStore();
    const cartStore = useCartStore();
    const loading = ref(true);
    const product = ref(null);
    const selectedImage = ref("");
    const quantity = ref(1);
    const relatedProducts = ref([]);
    const discountedPrice = computed(() => {
      var _a, _b;
      if (((_a = product.value) == null ? void 0 : _a.discount) > 0) {
        return product.value.price * (1 - product.value.discount / 100);
      }
      return ((_b = product.value) == null ? void 0 : _b.price) || 0;
    });
    const addToCart = () => {
      cartStore.addItem(product.value, quantity.value);
    };
    useHead({
      title: () => product.value ? `${product.value.name} - Long Châu` : "Product Not Found - Long Châu",
      meta: [
        {
          name: "description",
          content: () => {
            var _a;
            return ((_a = product.value) == null ? void 0 : _a.description) || "Product not found";
          }
        },
        {
          property: "og:title",
          content: () => product.value ? `${product.value.name} - Long Châu` : "Product Not Found"
        },
        {
          property: "og:description",
          content: () => {
            var _a;
            return ((_a = product.value) == null ? void 0 : _a.description) || "Product not found";
          }
        },
        {
          property: "og:image",
          content: () => {
            var _a;
            return ((_a = product.value) == null ? void 0 : _a.image) || "/placeholder-product.jpg";
          }
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ProductCard = _sfc_main$1;
      if (unref(loading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center min-h-screen" }, _attrs))} data-v-9ac1b113><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" data-v-9ac1b113></div></div>`);
      } else if (unref(product)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))} data-v-9ac1b113><div class="container mx-auto px-4" data-v-9ac1b113><nav class="flex mb-8" aria-label="Breadcrumb" data-v-9ac1b113><ol class="inline-flex items-center space-x-1 md:space-x-3" data-v-9ac1b113><li class="inline-flex items-center" data-v-9ac1b113>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-gray-500 hover:text-gray-700"
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
        _push(`</li><li data-v-9ac1b113><div class="flex items-center" data-v-9ac1b113><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" data-v-9ac1b113><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-9ac1b113></path></svg>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "ml-1 text-gray-500 hover:text-gray-700 md:ml-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Products`);
            } else {
              return [
                createTextVNode("Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></li>`);
        if (unref(product).category) {
          _push(`<li data-v-9ac1b113><div class="flex items-center" data-v-9ac1b113><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" data-v-9ac1b113><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-9ac1b113></path></svg>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/category/${unref(product).category.slug}`,
            class: "ml-1 text-gray-500 hover:text-gray-700 md:ml-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(product).category.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(product).category.name), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li data-v-9ac1b113><div class="flex items-center" data-v-9ac1b113><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" data-v-9ac1b113><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-9ac1b113></path></svg><span class="ml-1 text-gray-500 md:ml-2" data-v-9ac1b113>${ssrInterpolate(unref(product).name)}</span></div></li></ol></nav><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" data-v-9ac1b113><div class="space-y-4" data-v-9ac1b113><div class="aspect-square bg-gray-100 rounded-lg overflow-hidden" data-v-9ac1b113><img${ssrRenderAttr("src", unref(selectedImage) || unref(product).image || "/placeholder-product.jpg")}${ssrRenderAttr("alt", unref(product).name)} class="w-full h-full object-cover" data-v-9ac1b113></div>`);
        if (unref(product).images && unref(product).images.length > 1) {
          _push(`<div class="flex space-x-2 overflow-x-auto" data-v-9ac1b113><!--[-->`);
          ssrRenderList(unref(product).images, (image, index) => {
            _push(`<button class="${ssrRenderClass([{ "ring-2 ring-blue-500": unref(selectedImage) === image }, "flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden hover:ring-2 hover:ring-gray-300"])}" data-v-9ac1b113><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `${unref(product).name} ${index + 1}`)} class="w-full h-full object-cover" data-v-9ac1b113></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-6" data-v-9ac1b113><div data-v-9ac1b113><h1 class="text-3xl font-bold text-gray-900" data-v-9ac1b113>${ssrInterpolate(unref(product).name)}</h1>`);
        if (unref(product).brand) {
          _push(`<p class="text-lg text-gray-600 mt-2" data-v-9ac1b113>${ssrInterpolate(unref(product).brand)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center space-x-4" data-v-9ac1b113><div class="flex items-center" data-v-9ac1b113><div class="flex items-center" data-v-9ac1b113><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<svg class="${ssrRenderClass([i <= (unref(product).rating || 0) ? "text-yellow-400" : "text-gray-300", "w-5 h-5"])}" fill="currentColor" viewBox="0 0 20 20" data-v-9ac1b113><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-9ac1b113></path></svg>`);
        });
        _push(`<!--]--></div><span class="ml-2 text-sm text-gray-600" data-v-9ac1b113>${ssrInterpolate(unref(product).rating || 0)} (${ssrInterpolate(unref(product).reviewCount || 0)} reviews)</span></div></div><div class="space-y-2" data-v-9ac1b113>`);
        if (unref(product).discount > 0) {
          _push(`<div class="flex items-baseline space-x-3" data-v-9ac1b113><span class="text-3xl font-bold text-green-600" data-v-9ac1b113>$${ssrInterpolate(unref(discountedPrice).toFixed(2))}</span><span class="text-xl text-gray-500 line-through" data-v-9ac1b113>$${ssrInterpolate(unref(product).price.toFixed(2))}</span><span class="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full" data-v-9ac1b113>${ssrInterpolate(unref(product).discount)}% OFF </span></div>`);
        } else {
          _push(`<div class="text-3xl font-bold text-gray-900" data-v-9ac1b113> $${ssrInterpolate(unref(product).price.toFixed(2))}</div>`);
        }
        _push(`</div><div class="flex items-center space-x-4" data-v-9ac1b113>`);
        if (unref(product).stock > 0) {
          _push(`<div class="flex items-center text-green-600" data-v-9ac1b113><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-9ac1b113><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-9ac1b113></path></svg><span class="font-medium" data-v-9ac1b113>${ssrInterpolate(unref(product).stock)} in stock</span></div>`);
        } else {
          _push(`<div class="flex items-center text-red-600" data-v-9ac1b113><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-9ac1b113><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" data-v-9ac1b113></path></svg><span class="font-medium" data-v-9ac1b113>Out of stock</span></div>`);
        }
        _push(`</div><div class="space-y-2" data-v-9ac1b113>`);
        if (unref(product).prescriptionRequired) {
          _push(`<div class="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg" data-v-9ac1b113><svg class="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-9ac1b113><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" data-v-9ac1b113></path></svg><span class="text-red-800 text-sm font-medium" data-v-9ac1b113>Prescription required for this medication</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).stock <= 5 && unref(product).stock > 0) {
          _push(`<div class="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg" data-v-9ac1b113><svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-9ac1b113><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" data-v-9ac1b113></path></svg><span class="text-yellow-800 text-sm font-medium" data-v-9ac1b113>Only ${ssrInterpolate(unref(product).stock)} left in stock</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(product).stock > 0) {
          _push(`<div class="space-y-4" data-v-9ac1b113><div class="flex items-center space-x-4" data-v-9ac1b113><label class="text-sm font-medium text-gray-700" data-v-9ac1b113>Quantity:</label><div class="flex items-center border border-gray-300 rounded-lg" data-v-9ac1b113><button${ssrIncludeBooleanAttr(unref(quantity) <= 1) ? " disabled" : ""} class="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50" data-v-9ac1b113> - </button><input${ssrRenderAttr("value", unref(quantity))} type="number"${ssrRenderAttr("min", 1)}${ssrRenderAttr("max", unref(product).stock)} class="w-16 px-2 py-2 text-center border-0 focus:ring-0" data-v-9ac1b113><button${ssrIncludeBooleanAttr(unref(quantity) >= unref(product).stock) ? " disabled" : ""} class="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50" data-v-9ac1b113> + </button></div></div><div class="flex space-x-4" data-v-9ac1b113><button class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-v-9ac1b113> Add to Cart </button><button class="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" data-v-9ac1b113> Buy Now </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-8 space-y-6" data-v-9ac1b113><div data-v-9ac1b113><h3 class="text-lg font-medium text-gray-900 mb-4" data-v-9ac1b113>Product Description</h3><p class="text-gray-700" data-v-9ac1b113>${ssrInterpolate(unref(product).description)}</p></div></div></div></div>`);
        if (unref(relatedProducts).length > 0) {
          _push(`<div class="mt-16" data-v-9ac1b113><h2 class="text-2xl font-bold text-gray-900 mb-8" data-v-9ac1b113>Related Products</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-v-9ac1b113><!--[-->`);
          ssrRenderList(unref(relatedProducts), (relatedProduct) => {
            _push(ssrRenderComponent(_component_ProductCard, {
              key: relatedProduct.id,
              product: relatedProduct,
              onAddToCart: addToCart
            }, null, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 text-center" }, _attrs))} data-v-9ac1b113><div class="max-w-md mx-auto" data-v-9ac1b113><h1 class="text-2xl font-bold text-gray-900 mb-4" data-v-9ac1b113>Product Not Found</h1><p class="text-gray-600 mb-8" data-v-9ac1b113>The product you&#39;re looking for doesn&#39;t exist or has been removed.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse Products `);
            } else {
              return [
                createTextVNode(" Browse Products ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[slug]-new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_New = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ac1b113"]]);
export {
  _slug_New as default
};
//# sourceMappingURL=_slug_-new-CBmq7joF.js.map
