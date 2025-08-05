import { _ as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [
      { name: "Pain Relief", slug: "pain-relief" },
      { name: "Cold & Flu", slug: "cold-flu" },
      { name: "Allergy", slug: "allergy" },
      { name: "Diabetes Care", slug: "diabetes-care" },
      { name: "First Aid", slug: "first-aid" },
      { name: "Vitamins & Supplements", slug: "vitamins-supplements" },
      { name: "Personal Care", slug: "personal-care" },
      { name: "Skin Care", slug: "skin-care" },
      { name: "Medical Devices", slug: "medical-devices" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-neutral-800 text-neutral-300 pt-12 pb-8" }, _attrs))}><div class="container-custom"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div><h4 class="text-white font-semibold text-lg mb-4">Long Châu</h4><p class="mb-4 text-sm leading-relaxed"> Your trusted online pharmacy for medications and medical equipment. We&#39;re committed to providing quality healthcare products with excellent service. </p><div class="flex items-center space-x-4 mt-6"><a href="#" class="text-neutral-400 hover:text-white"><span class="i-iconify-ph-facebook-logo-fill text-xl"></span></a><a href="#" class="text-neutral-400 hover:text-white"><span class="i-iconify-ph-twitter-logo-fill text-xl"></span></a><a href="#" class="text-neutral-400 hover:text-white"><span class="i-iconify-ph-instagram-logo-fill text-xl"></span></a><a href="#" class="text-neutral-400 hover:text-white"><span class="i-iconify-ph-linkedin-logo-fill text-xl"></span></a></div></div><div><h4 class="text-white font-semibold text-lg mb-4">Quick Links</h4><ul class="space-y-2 text-sm"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "inline-block py-1 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-block py-1 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "inline-block py-1 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Health Articles`);
          } else {
            return [
              createTextVNode("Health Articles")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "inline-block py-1 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQs`);
          } else {
            return [
              createTextVNode("FAQs")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shipping-policy",
        class: "inline-block py-1 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shipping Policy`);
          } else {
            return [
              createTextVNode("Shipping Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/return-policy",
        class: "inline-block py-1 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Return &amp; Refund Policy`);
          } else {
            return [
              createTextVNode("Return & Refund Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h4 class="text-white font-semibold text-lg mb-4">Categories</h4><ul class="space-y-2 text-sm"><!--[-->`);
      ssrRenderList(categories.slice(0, 6), (category) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/category/${category.slug}`,
          class: "inline-block py-1 hover:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="text-white font-semibold text-lg mb-4">Contact Us</h4><ul class="space-y-3 text-sm"><li class="flex"><span class="i-iconify-ph-map-pin-fill text-xl mr-3 text-primary-400 mt-0.5"></span><span>379-381 Hai Bà Trưng, P. Xuân Hoà, TP. Hồ Chí Minh</span></li><li class="flex"><span class="i-iconify-ph-phone-fill text-xl mr-3 text-primary-400 mt-0.5"></span><span>(028) 73023456</span></li><li class="flex"><span class="i-iconify-ph-envelope-fill text-xl mr-3 text-primary-400 mt-0.5"></span><span>sale@nhathuoclongchau.com.vn</span></li><li class="flex"><span class="i-iconify-ph-clock-fill text-xl mr-3 text-primary-400 mt-0.5"></span><span>Monday - Friday: 8am - 10pm<br>Saturday - Sunday: 9am - 7pm</span></li></ul></div></div><div class="mt-8 flex flex-col md:flex-row justify-between items-center"><p class="text-sm mb-4 md:mb-0">© 2025 Long Châu. All rights reserved.</p><div class="flex flex-wrap justify-center gap-4 text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms-of-service",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/accessibility",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Accessibility`);
          } else {
            return [
              createTextVNode("Accessibility")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=SiteFooter-jq22aoSA.js.map
