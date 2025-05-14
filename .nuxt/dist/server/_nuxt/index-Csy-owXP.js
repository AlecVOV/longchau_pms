import { mergeProps, withCtx, createTextVNode, useSSRContext, createVNode, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-SDE-Tqte.js";
import __nuxt_component_0$1 from "./Icon-V7KX5z6a.js";
import { _ as _export_sfc } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/ufo/dist/index.mjs";
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
const backgroundImage = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg";
const _sfc_main$5 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen text-white overflow-hidden" }, _attrs))} data-v-82fd5acd><div class="absolute inset-0 z-0" data-v-82fd5acd><div class="absolute inset-0 bg-black/60 z-10" data-v-82fd5acd></div><img${ssrRenderAttr("src", backgroundImage)} alt="Restaurant hero image" class="absolute inset-0 w-full h-full object-cover object-center" data-v-82fd5acd></div><div class="container-custom relative z-20 h-full flex flex-col justify-center" data-v-82fd5acd><div class="max-w-2xl" data-v-82fd5acd><h1 class="font-serif text-5xl md:text-7xl font-bold mb-6 animate-slide-up" data-v-82fd5acd> Exquisite Dining Experience </h1><p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl animate-slide-up animation-delay-200" data-v-82fd5acd> Indulge in our carefully crafted menu of culinary delights, prepared with passion and the finest ingredients. </p><div class="flex flex-wrap gap-4 animate-slide-up animation-delay-300" data-v-82fd5acd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/menu",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Our Menu `);
          } else {
            return [
              createTextVNode(" View Our Menu ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/reservation",
        class: "btn btn-secondary"
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
      _push(`</div></div></div><div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce" data-v-82fd5acd><button class="text-white flex flex-col items-center" data-v-82fd5acd><span class="mb-2" data-v-82fd5acd>Scroll Down</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chevron-down",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-82fd5acd"]]);
const _sfc_main$4 = {
  __name: "FeaturedSection",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredDishes = [
      {
        id: 1,
        name: "Pan-Seared Salmon",
        description: "Fresh Atlantic salmon seared to perfection, served with lemon butter sauce and seasonal vegetables.",
        price: 32.99,
        image: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg"
      },
      {
        id: 2,
        name: "Truffle Risotto",
        description: "Creamy Arborio rice cooked with wild mushrooms, finished with truffle oil and aged Parmesan.",
        price: 28.99,
        image: "https://images.pexels.com/photos/6541091/pexels-photo-6541091.jpeg"
      },
      {
        id: 3,
        name: "Filet Mignon",
        description: "Prime beef tenderloin grilled to your preference, accompanied by garlic mashed potatoes and red wine reduction.",
        price: 45.99,
        image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "featured-section",
        class: "py-20 bg-white"
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Our Signature Dishes</h2><div class="w-24 h-1 bg-secondary-500 mx-auto"></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(featuredDishes, (dish, index) => {
        _push(`<div class="${ssrRenderClass([{ "animate-fade-in": true }, "rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"])}" style="${ssrRenderStyle({ animationDelay: `${index * 0.2}s` })}"><img${ssrRenderAttr("src", dish.image)}${ssrRenderAttr("alt", dish.name)} class="w-full h-64 object-cover"><div class="p-6"><h3 class="font-serif text-2xl font-bold mb-2">${ssrInterpolate(dish.name)}</h3><p class="text-gray-700 mb-4">${ssrInterpolate(dish.description)}</p><div class="flex items-center justify-between"><span class="text-primary-600 font-bold text-xl">$${ssrInterpolate(dish.price.toFixed(2))}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/menu",
          class: "text-secondary-500 hover:text-secondary-600 font-medium flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Details `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:arrow-right",
                class: "w-4 h-4 ml-1"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" View Details "),
                createVNode(_component_Icon, {
                  name: "heroicons:arrow-right",
                  class: "w-4 h-4 ml-1"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/menu",
        class: "btn btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Full Menu `);
          } else {
            return [
              createTextVNode(" Explore Full Menu ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/FeaturedSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-gray-50" }, _attrs))}><div class="container-custom"><div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div class="relative"><div class="absolute inset-0 translate-x-5 translate-y-5 border-2 border-secondary-500 rounded-lg -z-10"></div><img src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg" alt="Chef preparing food" class="rounded-lg shadow-xl w-full h-auto md:h-[500px] object-cover"></div><div class="md:pl-8"><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Our Story</h2><div class="w-24 h-1 bg-secondary-500 mb-8"></div><p class="text-gray-700 mb-6 text-lg"> Founded in 2010 by award-winning Chef Michel Laurent, Gourmet Restaurant has been delighting patrons with exceptional culinary creations for over a decade. </p><p class="text-gray-700 mb-8 text-lg"> Our commitment to using only the freshest local ingredients and sustainable practices sets us apart, creating an unforgettable dining experience that harmonizes flavor, presentation, and ambiance. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "btn btn-outline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read Our Full Story `);
      } else {
        return [
          createTextVNode(" Read Our Full Story ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/AboutPreview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AboutPreview = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "TestimonialSection",
  __ssrInlineRender: true,
  setup(__props) {
    const SwiperAutoplay = Autoplay;
    const SwiperPagination = Pagination;
    const testimonials = [
      {
        id: 1,
        name: "Sophie Turner",
        rating: 5,
        comment: "The pan-seared salmon was absolutely divine! The attentive service and elegant ambiance made our anniversary dinner truly special.",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
      },
      {
        id: 2,
        name: "James Wilson",
        rating: 5,
        comment: "Chef Laurent's tasting menu was a culinary journey I won't forget. Each course was more impressive than the last.",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        id: 3,
        name: "Emma Rodriguez",
        rating: 4,
        comment: "The wine pairing suggestions from their sommelier perfectly complemented our meal. A must-visit for food enthusiasts!",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
      },
      {
        id: 4,
        name: "Michael Chang",
        rating: 5,
        comment: "Exceptional flavors, beautiful presentation, and impeccable service. Gourmet exceeds expectations in every way.",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-primary-600 text-white" }, _attrs))}><div class="container-custom relative"><div class="absolute top-0 left-0 opacity-5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:quote-left",
        class: "w-40 h-40"
      }, null, _parent));
      _push(`</div><div class="text-center mb-16 relative z-10"><h2 class="font-serif text-4xl font-bold mb-6">What Our Guests Say</h2><div class="w-24 h-1 bg-secondary-500 mx-auto"></div></div><div class="relative z-10">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(SwiperAutoplay), unref(SwiperPagination)],
        "slides-per-view": 1,
        "space-between": 30,
        pagination: { clickable: true },
        autoplay: { delay: 5e3, disableOnInteraction: false },
        breakpoints: {
          "640": { slidesPerView: 2 },
          "1024": { slidesPerView: 3 }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(testimonials, (testimonial) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: testimonial.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-white/10 backdrop-blur-sm p-8 rounded-lg"${_scopeId2}><div class="flex items-center mb-6"${_scopeId2}><div class="mr-4"${_scopeId2}><img${ssrRenderAttr("src", testimonial.avatar)}${ssrRenderAttr("alt", testimonial.name)} class="w-16 h-16 rounded-full object-cover"${_scopeId2}></div><div${_scopeId2}><h4 class="font-serif font-bold text-xl"${_scopeId2}>${ssrInterpolate(testimonial.name)}</h4><div class="flex mt-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(5, (i) => {
                      _push3(ssrRenderComponent(_component_Icon, {
                        key: i,
                        name: "heroicons:star",
                        class: ["w-5 h-5 text-secondary-500", { "text-gray-400": i > testimonial.rating }]
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></div></div><p class="italic"${_scopeId2}>${ssrInterpolate(testimonial.comment)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bg-white/10 backdrop-blur-sm p-8 rounded-lg" }, [
                        createVNode("div", { class: "flex items-center mb-6" }, [
                          createVNode("div", { class: "mr-4" }, [
                            createVNode("img", {
                              src: testimonial.avatar,
                              alt: testimonial.name,
                              class: "w-16 h-16 rounded-full object-cover"
                            }, null, 8, ["src", "alt"])
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", { class: "font-serif font-bold text-xl" }, toDisplayString(testimonial.name), 1),
                            createVNode("div", { class: "flex mt-1" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                                return createVNode(_component_Icon, {
                                  key: i,
                                  name: "heroicons:star",
                                  class: ["w-5 h-5 text-secondary-500", { "text-gray-400": i > testimonial.rating }]
                                }, null, 8, ["class"]);
                              }), 64))
                            ])
                          ])
                        ]),
                        createVNode("p", { class: "italic" }, toDisplayString(testimonial.comment), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(testimonials, (testimonial) => {
                return createVNode(unref(SwiperSlide), {
                  key: testimonial.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-white/10 backdrop-blur-sm p-8 rounded-lg" }, [
                      createVNode("div", { class: "flex items-center mb-6" }, [
                        createVNode("div", { class: "mr-4" }, [
                          createVNode("img", {
                            src: testimonial.avatar,
                            alt: testimonial.name,
                            class: "w-16 h-16 rounded-full object-cover"
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", { class: "font-serif font-bold text-xl" }, toDisplayString(testimonial.name), 1),
                          createVNode("div", { class: "flex mt-1" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                              return createVNode(_component_Icon, {
                                key: i,
                                name: "heroicons:star",
                                class: ["w-5 h-5 text-secondary-500", { "text-gray-400": i > testimonial.rating }]
                              }, null, 8, ["class"]);
                            }), 64))
                          ])
                        ])
                      ]),
                      createVNode("p", { class: "italic" }, toDisplayString(testimonial.comment), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-center mt-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/reviews",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read More Reviews `);
          } else {
            return [
              createTextVNode(" Read More Reviews ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/TestimonialSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-20" }, _attrs))}><div class="absolute inset-0"><div class="absolute inset-0 bg-black/70 z-10"></div><img src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg" alt="Restaurant interior" class="w-full h-full object-cover"></div><div class="container-custom relative z-20"><div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div class="bg-white rounded-lg shadow-xl p-8"><h3 class="font-serif text-3xl font-bold mb-6 text-primary-600">Get in Touch</h3><form class="space-y-4"><div><label for="name" class="block mb-1 font-medium">Name</label><input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your name"></div><div><label for="email" class="block mb-1 font-medium">Email</label><input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your email address"></div><div><label for="message" class="block mb-1 font-medium">Message</label><textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500" placeholder="Your message"></textarea></div><button type="submit" class="btn btn-primary w-full">Send Message</button></form></div><div class="text-white self-center"><h3 class="font-serif text-3xl font-bold mb-6">Contact Information</h3><div class="space-y-6 text-lg"><div class="flex items-start">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "heroicons:map-pin",
    class: "w-6 h-6 mr-4 text-secondary-500 flex-shrink-0 mt-1"
  }, null, _parent));
  _push(`<p>123 Culinary St<br>Foodie City, FC 12345</p></div><div class="flex items-center">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "heroicons:phone",
    class: "w-6 h-6 mr-4 text-secondary-500 flex-shrink-0"
  }, null, _parent));
  _push(`<p>(555) 123-4567</p></div><div class="flex items-center">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "heroicons:envelope",
    class: "w-6 h-6 mr-4 text-secondary-500 flex-shrink-0"
  }, null, _parent));
  _push(`<p>info@gourmetrestaurant.com</p></div><div class="flex items-start">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "heroicons:clock",
    class: "w-6 h-6 mr-4 text-secondary-500 flex-shrink-0 mt-1"
  }, null, _parent));
  _push(`<div><p>Monday - Thursday: 11am - 10pm</p><p>Friday - Saturday: 11am - 11pm</p><p>Sunday: 10am - 9pm</p></div></div></div><div class="mt-8">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "btn btn-secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Location `);
      } else {
        return [
          createTextVNode(" View Location ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ContactCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactCta = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GalleryPreview = resolveComponent("GalleryPreview");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(AboutPreview, null, null, _parent));
      _push(ssrRenderComponent(_component_GalleryPreview, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(ContactCta, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Csy-owXP.js.map
