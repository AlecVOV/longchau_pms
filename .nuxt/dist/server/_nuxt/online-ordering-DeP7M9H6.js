import __nuxt_component_0$1 from "./Icon-V7KX5z6a.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-SDE-Tqte.js";
import { _ as _export_sfc } from "../server.mjs";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./config-Dy4W0jDo.js";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/klona/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/hookable/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/defu/dist/defu.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/unctx/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/radix3/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/ufo/dist/index.mjs";
const _sfc_main$1 = {
  __name: "MenuCard",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/menu",
        class: ["menu-card relative overflow-hidden rounded-lg shadow-lg group cursor-pointer", { "large": __props.large }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", __props.imageUrl)}${ssrRenderAttr("alt", __props.name)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-v-9ebd3ff2${_scopeId}><div class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" data-v-9ebd3ff2${_scopeId}><div class="absolute bottom-0 left-0 right-0 p-6 text-white" data-v-9ebd3ff2${_scopeId}><h3 class="font-serif text-2xl font-bold mb-2" data-v-9ebd3ff2${_scopeId}>${ssrInterpolate(__props.name)}</h3><p class="text-white/90" data-v-9ebd3ff2${_scopeId}>${ssrInterpolate(__props.description)}</p></div></div>`);
          } else {
            return [
              createVNode("img", {
                src: __props.imageUrl,
                alt: __props.name,
                class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              }, null, 8, ["src", "alt"]),
              createVNode("div", { class: "absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" }, [
                createVNode("div", { class: "absolute bottom-0 left-0 right-0 p-6 text-white" }, [
                  createVNode("h3", { class: "font-serif text-2xl font-bold mb-2" }, toDisplayString(__props.name), 1),
                  createVNode("p", { class: "text-white/90" }, toDisplayString(__props.description), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/MenuCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MenuCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9ebd3ff2"]]);
const _sfc_main = {
  __name: "online-ordering",
  __ssrInlineRender: true,
  setup(__props) {
    const orderTestimonials = [
      {
        name: "Robert Johnson",
        rating: 5,
        comment: "The delivery arrived hot and right on time. Everything was packed carefully and tasted just as good as dining in!"
      },
      {
        name: "Lisa Nguyen",
        rating: 5,
        comment: "Ordering online was so easy, and the food quality was exceptional. Will definitely be ordering again!"
      },
      {
        name: "Carlos Mendez",
        rating: 4,
        comment: "Great takeout experience. The family meal option was perfect for our Sunday dinner and had generous portions."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c3b96817><section class="relative pt-40 pb-20 text-white" data-v-c3b96817><div class="absolute inset-0 z-0" data-v-c3b96817><div class="absolute inset-0 bg-black/60 z-10" data-v-c3b96817></div><img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg" alt="Online ordering background" class="absolute inset-0 w-full h-full object-cover object-center" data-v-c3b96817></div><div class="container-custom relative z-20" data-v-c3b96817><div class="max-w-3xl mx-auto text-center" data-v-c3b96817><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-c3b96817>Online Ordering</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-c3b96817> Enjoy our exquisite cuisine in the comfort of your home </p></div></div></section><section class="py-16 bg-cream" data-v-c3b96817><div class="container-custom" data-v-c3b96817><div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" data-v-c3b96817><div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl" data-v-c3b96817><div class="h-48 bg-primary-600 flex items-center justify-center" data-v-c3b96817>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:truck",
        class: "w-24 h-24 text-white"
      }, null, _parent));
      _push(`</div><div class="p-8 text-center" data-v-c3b96817><h3 class="font-serif text-2xl font-bold mb-4 text-primary-600" data-v-c3b96817>Delivery</h3><p class="text-gray-700 mb-6" data-v-c3b96817> Have our delicious meals delivered directly to your doorstep. Available within a 5-mile radius. </p><button class="btn btn-primary w-full" data-v-c3b96817>Order Delivery</button></div></div><div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl" data-v-c3b96817><div class="h-48 bg-secondary-500 flex items-center justify-center" data-v-c3b96817>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:shopping-bag",
        class: "w-24 h-24 text-white"
      }, null, _parent));
      _push(`</div><div class="p-8 text-center" data-v-c3b96817><h3 class="font-serif text-2xl font-bold mb-4 text-primary-600" data-v-c3b96817>Pickup</h3><p class="text-gray-700 mb-6" data-v-c3b96817> Order ahead and pick up your meal at your convenience. Skip the line and save on delivery fees. </p><button class="btn btn-primary w-full" data-v-c3b96817>Order Pickup</button></div></div></div></div></section><section class="py-16 bg-white" data-v-c3b96817><div class="container-custom" data-v-c3b96817><div class="text-center mb-16" data-v-c3b96817><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-c3b96817>Online Menu</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-c3b96817></div><p class="text-gray-700 max-w-3xl mx-auto" data-v-c3b96817> Browse our takeaway menu and place your order online for a convenient dining experience. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-c3b96817>`);
      _push(ssrRenderComponent(MenuCard, {
        name: "Starters",
        description: "Begin your meal with our delectable appetizers",
        imageUrl: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg"
      }, null, _parent));
      _push(ssrRenderComponent(MenuCard, {
        name: "Main Courses",
        description: "Indulge in our chef's finest entrées",
        imageUrl: "https://images.pexels.com/photos/4147875/pexels-photo-4147875.jpeg",
        large: ""
      }, null, _parent));
      _push(ssrRenderComponent(MenuCard, {
        name: "Sides",
        description: "Perfect accompaniments to your meal",
        imageUrl: "https://images.pexels.com/photos/6419730/pexels-photo-6419730.jpeg"
      }, null, _parent));
      _push(ssrRenderComponent(MenuCard, {
        name: "Desserts",
        description: "Sweet endings to complete your dining experience",
        imageUrl: "https://images.pexels.com/photos/4669237/pexels-photo-4669237.jpeg"
      }, null, _parent));
      _push(ssrRenderComponent(MenuCard, {
        name: "Beverages",
        description: "Refreshing drinks and fine wines",
        imageUrl: "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg"
      }, null, _parent));
      _push(ssrRenderComponent(MenuCard, {
        name: "Family Meals",
        description: "Special packages for sharing with loved ones",
        imageUrl: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
        large: ""
      }, null, _parent));
      _push(`</div></div></section><section class="py-20 bg-gray-50" data-v-c3b96817><div class="container-custom" data-v-c3b96817><div class="text-center mb-16" data-v-c3b96817><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-c3b96817>How It Works</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-c3b96817></div><p class="text-gray-700 max-w-3xl mx-auto" data-v-c3b96817> Ordering from Gourmet Restaurant is simple and convenient. Follow these easy steps: </p></div><div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto" data-v-c3b96817><div class="flex flex-col items-center text-center" data-v-c3b96817><div class="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6" data-v-c3b96817> 1 </div><h3 class="font-serif text-xl font-bold mb-4 text-primary-600" data-v-c3b96817>Browse Menu</h3><p class="text-gray-700" data-v-c3b96817> Explore our full menu and select your favorite dishes. </p></div><div class="flex flex-col items-center text-center" data-v-c3b96817><div class="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6" data-v-c3b96817> 2 </div><h3 class="font-serif text-xl font-bold mb-4 text-primary-600" data-v-c3b96817>Add to Cart</h3><p class="text-gray-700" data-v-c3b96817> Add items to your cart and customize as needed. </p></div><div class="flex flex-col items-center text-center" data-v-c3b96817><div class="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6" data-v-c3b96817> 3 </div><h3 class="font-serif text-xl font-bold mb-4 text-primary-600" data-v-c3b96817>Checkout</h3><p class="text-gray-700" data-v-c3b96817> Provide delivery or pickup details and payment information. </p></div><div class="flex flex-col items-center text-center" data-v-c3b96817><div class="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6" data-v-c3b96817> 4 </div><h3 class="font-serif text-xl font-bold mb-4 text-primary-600" data-v-c3b96817>Enjoy!</h3><p class="text-gray-700" data-v-c3b96817> Relax while we prepare your order and deliver it to your door. </p></div></div></div></section><section class="py-16 bg-white" data-v-c3b96817><div class="container-custom" data-v-c3b96817><div class="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-8" data-v-c3b96817><h3 class="font-serif text-2xl font-bold mb-6 text-primary-600" data-v-c3b96817>Delivery Information</h3><div class="space-y-6" data-v-c3b96817><div data-v-c3b96817><h4 class="font-serif text-lg font-bold mb-2" data-v-c3b96817>Delivery Hours</h4><p class="text-gray-700" data-v-c3b96817> Monday - Thursday: 11:30am - 9:30pm<br data-v-c3b96817> Friday - Saturday: 11:30am - 10:30pm<br data-v-c3b96817> Sunday: 11:00am - 8:30pm </p></div><div data-v-c3b96817><h4 class="font-serif text-lg font-bold mb-2" data-v-c3b96817>Delivery Area</h4><p class="text-gray-700" data-v-c3b96817> We currently deliver within a 5-mile radius of our restaurant. For addresses outside this range, please consider our pickup option. </p></div><div data-v-c3b96817><h4 class="font-serif text-lg font-bold mb-2" data-v-c3b96817>Delivery Fee</h4><p class="text-gray-700" data-v-c3b96817> A delivery fee of $5.99 applies to all orders. This fee is waived for orders over $75. </p></div><div data-v-c3b96817><h4 class="font-serif text-lg font-bold mb-2" data-v-c3b96817>Minimum Order</h4><p class="text-gray-700" data-v-c3b96817> The minimum order amount for delivery is $25 (before tax and delivery fee). </p></div><div data-v-c3b96817><h4 class="font-serif text-lg font-bold mb-2" data-v-c3b96817>Estimated Delivery Time</h4><p class="text-gray-700" data-v-c3b96817> Delivery times typically range from 30-60 minutes depending on your location and current order volume. You&#39;ll receive an estimated delivery time when you place your order. </p></div></div></div></div></section><section class="py-16 bg-gray-50" data-v-c3b96817><div class="container-custom" data-v-c3b96817><div class="text-center mb-12" data-v-c3b96817><h2 class="font-serif text-3xl font-bold mb-6 text-primary-600" data-v-c3b96817>What Our Customers Say</h2><div class="w-24 h-1 bg-secondary-500 mx-auto" data-v-c3b96817></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-v-c3b96817><!--[-->`);
      ssrRenderList(orderTestimonials, (testimonial, index) => {
        _push(`<div class="bg-white rounded-lg shadow-md p-6" data-v-c3b96817><div class="flex justify-center mb-4" data-v-c3b96817><div class="flex" data-v-c3b96817><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(ssrRenderComponent(_component_Icon, {
            key: i,
            name: "heroicons:star",
            class: ["w-5 h-5", i <= testimonial.rating ? "text-secondary-500" : "text-gray-300"]
          }, null, _parent));
        });
        _push(`<!--]--></div></div><p class="text-gray-700 mb-4 text-center italic" data-v-c3b96817>${ssrInterpolate(testimonial.comment)}</p><div class="text-center" data-v-c3b96817><p class="font-bold text-primary-600" data-v-c3b96817>${ssrInterpolate(testimonial.name)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/online-ordering.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onlineOrdering = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3b96817"]]);
export {
  onlineOrdering as default
};
//# sourceMappingURL=online-ordering-DeP7M9H6.js.map
