import { _ as __nuxt_component_0 } from './nuxt-link-SDE-Tqte.mjs';
import __nuxt_component_0$1 from './Icon-V7KX5z6a.mjs';
import { mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './config-Dy4W0jDo.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const scrolled = ref(false);
    const mobileMenuOpen = ref(false);
    const navigationLinks = [
      { label: "Home", path: "/" },
      { label: "Menu", path: "/menu" },
      { label: "About", path: "/about" },
      { label: "Gallery", path: "/gallery" },
      { label: "Events", path: "/events" },
      { label: "Contact", path: "/contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed w-full top-0 z-50 transition-all duration-300",
          { "bg-black/80 backdrop-blur-md py-4": scrolled.value, "py-6": !scrolled.value }
        ]
      }, _attrs))}><div class="container-custom"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl font-serif font-bold text-white"${_scopeId}>Gourmet</span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl font-serif font-bold text-white" }, "Gourmet")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center space-x-8"><!--[-->`);
      ssrRenderList(navigationLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.path,
          to: link.path,
          class: "font-medium text-white opacity-90 hover:opacity-100 hover:text-secondary-500 transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/reservation",
        class: "btn btn-primary bg-secondary-500 hover:bg-secondary-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reserve a Table `);
          } else {
            return [
              createTextVNode(" Reserve a Table ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><button class="md:hidden text-white">`);
      if (!mobileMenuOpen.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:bars-3",
          class: "w-7 h-7"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:x-mark",
          class: "w-7 h-7"
        }, null, _parent));
      }
      _push(`</button></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md animate-fade-in"><div class="container-custom py-6"><div class="flex flex-col space-y-4"><!--[-->`);
        ssrRenderList(navigationLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.path,
            to: link.path,
            class: "py-2 font-medium text-white hover:text-secondary-500 transition-colors duration-300",
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/reservation",
          class: "btn btn-primary bg-secondary-500 hover:bg-secondary-600 text-center",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Reserve a Table `);
            } else {
              return [
                createTextVNode(" Reserve a Table ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const navigationLinks = [
      { label: "Home", path: "/" },
      { label: "Menu", path: "/menu" },
      { label: "About", path: "/about" },
      { label: "Gallery", path: "/gallery" },
      { label: "Events", path: "/events" },
      { label: "Careers", path: "/careers" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact", path: "/contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-white" }, _attrs))}><div class="container-custom py-16"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div class="md:col-span-1"><div class="mb-6"><h3 class="text-2xl font-serif font-bold mb-2">Gourmet</h3><p class="text-gray-400">Exquisite dining experience since 2010</p></div><div class="space-y-2"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:map-pin",
        class: "w-5 h-5 mr-2 text-secondary-500"
      }, null, _parent));
      _push(`<p>123 Culinary St, Foodie City</p></div><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:phone",
        class: "w-5 h-5 mr-2 text-secondary-500"
      }, null, _parent));
      _push(`<p>(555) 123-4567</p></div><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:envelope",
        class: "w-5 h-5 mr-2 text-secondary-500"
      }, null, _parent));
      _push(`<p>info@gourmetrestaurant.com</p></div></div></div><div class="md:col-span-1"><h4 class="text-xl font-serif mb-4">Hours of Operation</h4><ul class="space-y-2"><li class="flex justify-between"><span>Monday - Thursday</span><span>11am - 10pm</span></li><li class="flex justify-between"><span>Friday - Saturday</span><span>11am - 11pm</span></li><li class="flex justify-between"><span>Sunday</span><span>10am - 9pm</span></li></ul></div><div class="md:col-span-1"><h4 class="text-xl font-serif mb-4">Quick Links</h4><ul class="space-y-2"><!--[-->`);
      ssrRenderList(navigationLinks, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path,
          class: "hover:text-secondary-500 transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="md:col-span-1"><h4 class="text-xl font-serif mb-4">Join Our Newsletter</h4><p class="text-gray-400 mb-4">Stay updated with our latest offerings and events</p><form class="space-y-3"><input type="email" placeholder="Your email address" class="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-secondary-500"><button type="submit" class="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-2 rounded transition duration-300"> Subscribe </button></form></div></div><div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"><div class="flex space-x-4"><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:facebook",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</a><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:instagram",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</a><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:twitter",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</a><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:yelp",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</a></div><p class="text-gray-400"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Gourmet Restaurant. All rights reserved. </p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$2;
  const _component_AppFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="flex-grow">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-lWnKVurz.mjs.map
