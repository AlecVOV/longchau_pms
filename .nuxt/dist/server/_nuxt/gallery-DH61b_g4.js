import __nuxt_component_0 from "./Icon-V7KX5z6a.js";
import { ref, computed, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const activeFilter = ref("all");
    const showGalleryModal = ref(false);
    const currentImageIndex = ref(0);
    const galleryImages = [
      // Food
      {
        src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
        alt: "Gourmet steak dish",
        category: "food"
      },
      {
        src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        alt: "Fresh pasta dish",
        category: "food"
      },
      {
        src: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
        alt: "Seafood platter",
        category: "food",
        widespan: true
      },
      {
        src: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
        alt: "Elegant dessert",
        category: "food"
      },
      {
        src: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
        alt: "Artisan burger",
        category: "food"
      },
      // Drinks
      {
        src: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg",
        alt: "Craft cocktail",
        category: "drinks"
      },
      {
        src: "https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg",
        alt: "Wine selection",
        category: "drinks"
      },
      {
        src: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg",
        alt: "Signature martini",
        category: "drinks"
      },
      // Interior
      {
        src: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
        alt: "Restaurant table setting",
        category: "interior"
      },
      {
        src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
        alt: "Elegant dining area",
        category: "interior",
        widespan: true
      },
      {
        src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
        alt: "Bar area",
        category: "interior"
      },
      {
        src: "https://images.pexels.com/photos/960856/pexels-photo-960856.jpeg",
        alt: "Private dining room",
        category: "interior"
      },
      // Events
      {
        src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
        alt: "Wedding reception",
        category: "events",
        widespan: true
      },
      {
        src: "https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg",
        alt: "Chef's table event",
        category: "events"
      },
      {
        src: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
        alt: "Corporate dinner",
        category: "events"
      }
    ];
    const filteredGalleryImages = computed(() => {
      if (activeFilter.value === "all") {
        return galleryImages;
      }
      return galleryImages.filter((image) => image.category === activeFilter.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d4b25cec><section class="relative pt-40 pb-20 text-white" data-v-d4b25cec><div class="absolute inset-0 z-0" data-v-d4b25cec><div class="absolute inset-0 bg-black/60 z-10" data-v-d4b25cec></div><img src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg" alt="Gallery background" class="absolute inset-0 w-full h-full object-cover object-center" data-v-d4b25cec></div><div class="container-custom relative z-20" data-v-d4b25cec><div class="max-w-3xl mx-auto text-center" data-v-d4b25cec><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-d4b25cec>Gallery</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-d4b25cec> Step into our world of culinary artistry and elegant ambiance </p></div></div></section><section class="bg-white py-8" data-v-d4b25cec><div class="container-custom" data-v-d4b25cec><div class="flex flex-wrap justify-center gap-4" data-v-d4b25cec><!--[-->`);
      ssrRenderList(["All", "Food", "Drinks", "Interior", "Events"], (category) => {
        _push(`<button class="${ssrRenderClass([activeFilter.value === category.toLowerCase() ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200", "px-6 py-2 rounded-full transition-all duration-200 text-lg"])}" data-v-d4b25cec>${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-cream" data-v-d4b25cec><div class="container-custom" data-v-d4b25cec><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-v-d4b25cec><!--[-->`);
      ssrRenderList(filteredGalleryImages.value, (image, index) => {
        _push(`<div class="${ssrRenderClass([{ "sm:col-span-2": image.widespan }, "group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl"])}" data-v-d4b25cec><div class="relative pb-[75%]" data-v-d4b25cec><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" data-v-d4b25cec><div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" data-v-d4b25cec>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:plus-circle",
          class: "w-12 h-12 text-white"
        }, null, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (filteredGalleryImages.value.length === 0) {
        _push(`<div class="py-12 text-center" data-v-d4b25cec>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:photo",
          class: "w-16 h-16 text-gray-400 mx-auto mb-4"
        }, null, _parent));
        _push(`<h3 class="text-2xl font-serif font-bold text-gray-500" data-v-d4b25cec>No images found</h3><p class="text-gray-500 mt-2" data-v-d4b25cec> Try selecting a different category or check back later for new additions. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
      if (showGalleryModal.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300" data-v-d4b25cec><button class="absolute top-6 right-6 text-white" data-v-d4b25cec>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:x-mark",
          class: "w-8 h-8"
        }, null, _parent));
        _push(`</button><button class="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200" data-v-d4b25cec>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:chevron-left",
          class: "w-10 h-10"
        }, null, _parent));
        _push(`</button><div class="max-w-5xl max-h-[80vh] px-8" data-v-d4b25cec><img${ssrRenderAttr("src", galleryImages[currentImageIndex.value].src)}${ssrRenderAttr("alt", galleryImages[currentImageIndex.value].alt)} class="max-w-full max-h-[80vh] object-contain" data-v-d4b25cec></div><button class="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200" data-v-d4b25cec>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:chevron-right",
          class: "w-10 h-10"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d4b25cec"]]);
export {
  gallery as default
};
//# sourceMappingURL=gallery-DH61b_g4.js.map
