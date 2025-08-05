import { c as useRoute, e as useSeoMeta, _ as __nuxt_component_0 } from "../server.mjs";
import _sfc_main$1 from "./ProductCard-0zuHsmiv.js";
import { ref, watch, computed, unref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderStyle } from "vue/server-renderer";
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
  __name: "[slug]-final",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useProductsStore();
    const cartStore = useCartStore();
    const loading = ref(true);
    const product = ref(null);
    const relatedProducts = ref([]);
    const selectedImage = ref("");
    ref(0);
    const quantity = ref(1);
    const activeTab = ref(0);
    const tabs = [
      { id: "description", name: "Description" },
      { id: "ingredients", name: "Ingredients" },
      { id: "directions", name: "Directions" },
      { id: "reviews", name: "Reviews" }
    ];
    const loadProduct = async () => {
      var _a;
      try {
        loading.value = true;
        const slug = route.params.slug;
        const { data: productData } = await $fetch(`/api/products?slug=${slug}`);
        if (productData && productData.length > 0) {
          product.value = productData[0];
          if (product.value.gallery && product.value.gallery.length > 0) {
            selectedImage.value = product.value.gallery[0];
          } else {
            selectedImage.value = product.value.image;
          }
          if ((_a = product.value.category) == null ? void 0 : _a.id) {
            const { data: relatedData } = await $fetch(`/api/categories/${product.value.category.id}/products`);
            relatedProducts.value = relatedData.filter((p) => p.id !== product.value.id).slice(0, 4);
          }
        }
      } catch (error) {
        console.error("Error loading product:", error);
        product.value = null;
      } finally {
        loading.value = false;
      }
    };
    const addRelatedToCart = (relatedProduct) => {
      const cartItem = {
        id: relatedProduct.id,
        name: relatedProduct.name,
        price: relatedProduct.price,
        image: relatedProduct.image,
        quantity: 1
      };
      cartStore.addItem(cartItem);
      alert(`${relatedProduct.name} added to cart!`);
    };
    watch(() => route.params.slug, () => {
      loadProduct();
    });
    useSeoMeta({
      title: computed(() => {
        var _a;
        return ((_a = product.value) == null ? void 0 : _a.name) || "Product";
      }),
      description: computed(() => {
        var _a;
        return ((_a = product.value) == null ? void 0 : _a.description) || "Product details";
      }),
      ogTitle: computed(() => {
        var _a;
        return ((_a = product.value) == null ? void 0 : _a.name) || "Product";
      }),
      ogDescription: computed(() => {
        var _a;
        return ((_a = product.value) == null ? void 0 : _a.description) || "Product details";
      }),
      ogImage: computed(() => {
        var _a;
        return ((_a = product.value) == null ? void 0 : _a.image) || "/placeholder-product.jpg";
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ProductCard = _sfc_main$1;
      if (unref(loading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center min-h-screen" }, _attrs))} data-v-794776d5><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" data-v-794776d5></div></div>`);
      } else if (unref(product)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))} data-v-794776d5><div class="container mx-auto px-4" data-v-794776d5><nav class="flex mb-8" aria-label="Breadcrumb" data-v-794776d5><ol class="inline-flex items-center space-x-1 md:space-x-3" data-v-794776d5><li class="inline-flex items-center" data-v-794776d5>`);
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
        _push(`</li><li data-v-794776d5><div class="flex items-center" data-v-794776d5><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" data-v-794776d5><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-794776d5></path></svg>`);
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
          _push(`<li data-v-794776d5><div class="flex items-center" data-v-794776d5><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" data-v-794776d5><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-794776d5></path></svg>`);
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
        _push(`<li data-v-794776d5><div class="flex items-center" data-v-794776d5><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" data-v-794776d5><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-794776d5></path></svg><span class="ml-1 text-gray-500 md:ml-2" data-v-794776d5>${ssrInterpolate(unref(product).name)}</span></div></li></ol></nav><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" data-v-794776d5><div class="space-y-4" data-v-794776d5><div class="aspect-square bg-gray-100 rounded-lg overflow-hidden" data-v-794776d5><img${ssrRenderAttr("src", unref(selectedImage) || unref(product).image || "/placeholder-product.jpg")}${ssrRenderAttr("alt", unref(product).name)} class="w-full h-full object-cover" data-v-794776d5></div>`);
        if (unref(product).gallery && unref(product).gallery.length > 1) {
          _push(`<div class="flex space-x-2 overflow-x-auto" data-v-794776d5><!--[-->`);
          ssrRenderList(unref(product).gallery, (image, index) => {
            _push(`<button class="${ssrRenderClass([{ "ring-2 ring-blue-500": unref(selectedImage) === image }, "flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden hover:ring-2 hover:ring-gray-300"])}" data-v-794776d5><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `${unref(product).name} ${index + 1}`)} class="w-full h-full object-cover" data-v-794776d5></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-6" data-v-794776d5><div data-v-794776d5><h1 class="text-3xl font-bold text-gray-900" data-v-794776d5>${ssrInterpolate(unref(product).name)}</h1>`);
        if (unref(product).brand) {
          _push(`<p class="text-lg text-gray-600 mt-2" data-v-794776d5>${ssrInterpolate(unref(product).brand)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center space-x-4" data-v-794776d5><div class="flex items-center" data-v-794776d5><div class="flex items-center" data-v-794776d5><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<svg class="${ssrRenderClass([i <= unref(product).rating ? "text-yellow-400" : "text-gray-300", "w-5 h-5"])}" fill="currentColor" viewBox="0 0 20 20" data-v-794776d5><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-794776d5></path></svg>`);
        });
        _push(`<!--]--></div><span class="ml-2 text-sm text-gray-600" data-v-794776d5>${ssrInterpolate(unref(product).rating)} (${ssrInterpolate(unref(product).reviews)} reviews)</span></div></div><div class="space-y-2" data-v-794776d5>`);
        if (unref(product).discount > 0) {
          _push(`<div class="flex items-baseline space-x-3" data-v-794776d5><span class="text-3xl font-bold text-green-600" data-v-794776d5>$${ssrInterpolate(unref(product).price.toFixed(2))}</span><span class="text-xl text-gray-500 line-through" data-v-794776d5>$${ssrInterpolate((unref(product).price * (1 + unref(product).discount / 100)).toFixed(2))}</span><span class="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full" data-v-794776d5>${ssrInterpolate(unref(product).discount)}% OFF </span></div>`);
        } else {
          _push(`<div class="text-3xl font-bold text-gray-900" data-v-794776d5> $${ssrInterpolate(unref(product).price.toFixed(2))}</div>`);
        }
        _push(`</div><div class="flex items-center space-x-4" data-v-794776d5>`);
        if (unref(product).inStock) {
          _push(`<div class="flex items-center text-green-600" data-v-794776d5><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-794776d5><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-794776d5></path></svg><span class="font-medium" data-v-794776d5>In Stock</span></div>`);
        } else {
          _push(`<div class="flex items-center text-red-600" data-v-794776d5><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-794776d5><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" data-v-794776d5></path></svg><span class="font-medium" data-v-794776d5>Out of stock</span></div>`);
        }
        _push(`</div><div class="space-y-2" data-v-794776d5>`);
        if (unref(product).isRx) {
          _push(`<div class="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg" data-v-794776d5><svg class="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-794776d5><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" data-v-794776d5></path></svg><span class="text-red-800 text-sm font-medium" data-v-794776d5>Prescription required for this medication</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(product).inStock) {
          _push(`<div class="space-y-4" data-v-794776d5><div class="flex items-center space-x-4" data-v-794776d5><label class="text-sm font-medium text-gray-700" data-v-794776d5>Quantity:</label><div class="flex items-center border border-gray-300 rounded-lg" data-v-794776d5><button${ssrIncludeBooleanAttr(unref(quantity) <= 1) ? " disabled" : ""} class="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50" data-v-794776d5> - </button><input${ssrRenderAttr("value", unref(quantity))} type="number"${ssrRenderAttr("min", 1)}${ssrRenderAttr("max", unref(product).maxQuantity || 10)} class="w-16 px-2 py-2 text-center border-0 focus:ring-0" data-v-794776d5><button${ssrIncludeBooleanAttr(unref(quantity) >= (unref(product).maxQuantity || 10)) ? " disabled" : ""} class="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50" data-v-794776d5> + </button></div></div><div class="flex space-x-4" data-v-794776d5><button class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-v-794776d5> Add to Cart </button><button class="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" data-v-794776d5> Buy Now </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-8" data-v-794776d5><div class="border-b border-gray-200" data-v-794776d5><nav class="-mb-px flex space-x-8" data-v-794776d5><!--[-->`);
        ssrRenderList(tabs, (tab, index) => {
          _push(`<button class="${ssrRenderClass([{
            "border-blue-500 text-blue-600": unref(activeTab) === index,
            "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": unref(activeTab) !== index
          }, "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}" data-v-794776d5>${ssrInterpolate(tab.name)}</button>`);
        });
        _push(`<!--]--></nav></div><div class="mt-6" data-v-794776d5><div style="${ssrRenderStyle(unref(activeTab) === 0 ? null : { display: "none" })}" class="prose max-w-none" data-v-794776d5><p class="text-gray-700 mb-4" data-v-794776d5>${ssrInterpolate(unref(product).description)}</p></div><div style="${ssrRenderStyle(unref(activeTab) === 1 ? null : { display: "none" })}" class="prose max-w-none" data-v-794776d5>`);
        if (unref(product).ingredients) {
          _push(`<div data-v-794776d5>`);
          if (Array.isArray(unref(product).ingredients)) {
            _push(`<div class="mb-4" data-v-794776d5><h4 class="font-semibold text-lg mb-2" data-v-794776d5>Active Ingredients:</h4><ul class="list-disc pl-5" data-v-794776d5><!--[-->`);
            ssrRenderList(unref(product).ingredients, (ingredient, index) => {
              _push(`<li class="mb-1" data-v-794776d5>${ssrInterpolate(ingredient)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<div class="mb-4" data-v-794776d5><p data-v-794776d5>${ssrInterpolate(unref(product).ingredients)}</p></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="text-gray-500" data-v-794776d5>Information about the ingredients is currently not available for this product.</div>`);
        }
        _push(`</div><div style="${ssrRenderStyle(unref(activeTab) === 2 ? null : { display: "none" })}" class="prose max-w-none" data-v-794776d5>`);
        if (unref(product).directions) {
          _push(`<div data-v-794776d5><p class="mb-4" data-v-794776d5>${ssrInterpolate(unref(product).directions)}</p>`);
          if (unref(product).dosage) {
            _push(`<div class="mb-4" data-v-794776d5><h4 class="font-semibold text-lg mb-2" data-v-794776d5>Recommended Dosage:</h4><p data-v-794776d5>${ssrInterpolate(unref(product).dosage)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(product).warnings && unref(product).warnings.length > 0) {
            _push(`<div class="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-4" data-v-794776d5><h4 class="font-semibold text-yellow-700 mb-2" data-v-794776d5>Important Warnings:</h4><ul class="list-disc pl-5 text-yellow-700" data-v-794776d5><!--[-->`);
            ssrRenderList(unref(product).warnings, (warning, index) => {
              _push(`<li class="mb-1" data-v-794776d5>${ssrInterpolate(warning)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="text-gray-500" data-v-794776d5>Detailed usage directions are currently not available for this product.</div>`);
        }
        _push(`</div><div style="${ssrRenderStyle(unref(activeTab) === 3 ? null : { display: "none" })}" data-v-794776d5><div class="space-y-6" data-v-794776d5><div class="flex items-center justify-between" data-v-794776d5><h3 class="text-lg font-medium" data-v-794776d5>Customer Reviews</h3><button class="text-blue-600 hover:text-blue-700 text-sm font-medium" data-v-794776d5>Write a Review</button></div>`);
        if (unref(product).reviewList && unref(product).reviewList.length > 0) {
          _push(`<div class="space-y-4" data-v-794776d5><!--[-->`);
          ssrRenderList(unref(product).reviewList, (review, index) => {
            _push(`<div class="border-b border-gray-200 pb-4" data-v-794776d5><div class="flex items-center justify-between mb-2" data-v-794776d5><div class="flex items-center space-x-2" data-v-794776d5><div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-lg" data-v-794776d5>${ssrInterpolate(review.name.charAt(0))}</div><div data-v-794776d5><p class="font-medium text-gray-800" data-v-794776d5>${ssrInterpolate(review.name)}</p><p class="text-xs text-gray-500" data-v-794776d5>${ssrInterpolate(review.date)}</p></div></div><div class="flex items-center" data-v-794776d5><!--[-->`);
            ssrRenderList(5, (i) => {
              _push(`<svg class="${ssrRenderClass([i <= review.rating ? "text-yellow-400" : "text-gray-300", "w-4 h-4"])}" fill="currentColor" viewBox="0 0 20 20" data-v-794776d5><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-794776d5></path></svg>`);
            });
            _push(`<!--]--></div></div><p class="text-gray-700" data-v-794776d5>${ssrInterpolate(review.comment)}</p></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="text-center py-8" data-v-794776d5><p class="text-gray-500 mb-3" data-v-794776d5>No reviews yet</p><button class="text-blue-600 hover:text-blue-700 text-sm font-medium" data-v-794776d5>Be the first to write a review</button></div>`);
        }
        _push(`</div></div></div></div></div></div><div class="mt-16" data-v-794776d5><h2 class="text-2xl font-bold text-gray-900 mb-8" data-v-794776d5>Related Products</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-v-794776d5><!--[-->`);
        ssrRenderList(unref(relatedProducts), (relatedProduct) => {
          _push(ssrRenderComponent(_component_ProductCard, {
            key: relatedProduct.id,
            product: relatedProduct,
            onAddToCart: addRelatedToCart
          }, null, _parent));
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 text-center" }, _attrs))} data-v-794776d5><div class="max-w-md mx-auto" data-v-794776d5><h1 class="text-2xl font-bold text-gray-900 mb-4" data-v-794776d5>Product Not Found</h1><p class="text-gray-600 mb-8" data-v-794776d5>The product you&#39;re looking for doesn&#39;t exist or has been removed.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[slug]-final.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_Final = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-794776d5"]]);
export {
  _slug_Final as default
};
//# sourceMappingURL=_slug_-final-DO44IKTs.js.map
