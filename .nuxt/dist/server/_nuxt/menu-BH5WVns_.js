import { mergeProps, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/hookable/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/unctx/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/radix3/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/defu/dist/defu.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/ufo/dist/index.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/klona/dist/index.mjs";
const _sfc_main$1 = {
  __name: "MenuItemCard",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg", { "border-l-4 border-secondary-500": __props.item.isSignature }]
      }, _attrs))}><div class="flex flex-col md:flex-row"><div class="md:w-1/3"><img${ssrRenderAttr("src", __props.item.image)}${ssrRenderAttr("alt", __props.item.name)} class="w-full h-40 md:h-full object-cover"></div><div class="p-6 md:w-2/3"><div class="flex justify-between items-start mb-2"><h3 class="font-serif text-xl font-bold">${ssrInterpolate(__props.item.name)} `);
      if (__props.item.isSignature) {
        _push(`<span class="text-secondary-500 ml-2 text-sm">★ Chef&#39;s Signature</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h3><span class="font-semibold text-primary-600">$${ssrInterpolate(__props.item.price.toFixed(2))}</span></div><p class="text-gray-600 mb-4">${ssrInterpolate(__props.item.description)}</p><div class="flex space-x-2">`);
      if (__props.item.isVegetarian) {
        _push(`<span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"> Vegetarian </span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.item.isGlutenFree) {
        _push(`<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"> Gluten-Free </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/MenuItemCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "menu",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const activeCategory = ref("starters");
    const menuCategories = [
      {
        id: "starters",
        name: "Starters",
        description: "Begin your culinary journey with our selection of elegant appetizers crafted to excite the palate."
      },
      {
        id: "main-courses",
        name: "Main Courses",
        description: "Indulge in our chef's signature entrées, each plate a masterpiece of flavor and presentation."
      },
      {
        id: "seafood",
        name: "From the Sea",
        description: "Fresh seafood selections sourced sustainably from local and international waters."
      },
      {
        id: "vegetarian",
        name: "Vegetarian",
        description: "Creative and flavorful plant-based dishes that celebrate seasonal produce."
      },
      {
        id: "desserts",
        name: "Desserts",
        description: "Sweet creations that provide the perfect finale to your dining experience."
      },
      {
        id: "beverages",
        name: "Beverages",
        description: "Expertly crafted cocktails, fine wines, and non-alcoholic refreshments to complement your meal."
      }
    ];
    const menuItems = [
      // Starters
      {
        id: 101,
        category: "starters",
        name: "Seared Scallops",
        description: "Pan-seared sea scallops with cauliflower purée, pancetta crisp, and micro greens",
        price: 18.99,
        isVegetarian: false,
        isGlutenFree: true,
        isSignature: true,
        image: "https://images.pexels.com/photos/8311324/pexels-photo-8311324.jpeg"
      },
      {
        id: 102,
        category: "starters",
        name: "Wild Mushroom Bruschetta",
        description: "Toasted artisan bread topped with sautéed wild mushrooms, truffle oil, and shaved Parmesan",
        price: 14.99,
        isVegetarian: true,
        isGlutenFree: false,
        isSignature: false,
        image: "https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg"
      },
      {
        id: 103,
        category: "starters",
        name: "Tuna Tartare",
        description: "Fresh yellowfin tuna diced and seasoned with avocado, citrus, and wasabi vinaigrette",
        price: 17.99,
        isVegetarian: false,
        isGlutenFree: true,
        isSignature: false,
        image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg"
      },
      {
        id: 104,
        category: "starters",
        name: "Burrata Caprese",
        description: "Creamy burrata cheese with heirloom tomatoes, basil, aged balsamic, and extra virgin olive oil",
        price: 15.99,
        isVegetarian: true,
        isGlutenFree: true,
        isSignature: false,
        image: "https://images.pexels.com/photos/13271260/pexels-photo-13271260.jpeg"
      },
      // Main Courses
      {
        id: 201,
        category: "main-courses",
        name: "Filet Mignon",
        description: "8oz prime beef tenderloin with truffled mashed potatoes, seasonal vegetables, and red wine reduction",
        price: 45.99,
        isVegetarian: false,
        isGlutenFree: true,
        isSignature: true,
        image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg"
      },
      {
        id: 202,
        category: "main-courses",
        name: "Herb Roasted Chicken",
        description: "Free-range chicken with lemon thyme jus, root vegetable purée, and glazed baby carrots",
        price: 32.99,
        isVegetarian: false,
        isGlutenFree: true,
        isSignature: false,
        image: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg"
      },
      {
        id: 203,
        category: "main-courses",
        name: "Braised Short Rib",
        description: "Slow-cooked beef short rib with creamy polenta, roasted brussels sprouts, and natural jus",
        price: 38.99,
        isVegetarian: false,
        isGlutenFree: true,
        isSignature: true,
        image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg"
      },
      {
        id: 204,
        category: "main-courses",
        name: "Rack of Lamb",
        description: "Herb-crusted New Zealand lamb rack with mint pesto, potato gratin, and seasonal vegetables",
        price: 42.99,
        isVegetarian: false,
        isGlutenFree: false,
        isSignature: false,
        image: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg"
      },
      // Seafood
      {
        id: 301,
        category: "seafood",
        name: "Pan-Seared Salmon",
        description: "Atlantic salmon with lemon butter sauce, asparagus, and wild rice pilaf",
        price: 34.99,
        isVegetarian: false,
        isGlutenFree: true,
        isSignature: false,
        image: "https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg"
      },
      {
        id: 302,
        category: "seafood",
        name: "Lobster Risotto",
        description: "Creamy Arborio rice with Maine lobster, saffron, and fresh herbs",
        price: 48.99,
        isVegetarian: false,
        isGlutenFree: true,
        isSignature: true,
        image: "https://images.pexels.com/photos/13094362/pexels-photo-13094362.jpeg"
      },
      // Vegetarian
      {
        id: 401,
        category: "vegetarian",
        name: "Wild Mushroom Risotto",
        description: "Creamy Arborio rice with assorted wild mushrooms, truffles, and aged Parmesan",
        price: 28.99,
        isVegetarian: true,
        isGlutenFree: true,
        isSignature: false,
        image: "https://images.pexels.com/photos/5409027/pexels-photo-5409027.jpeg"
      },
      {
        id: 402,
        category: "vegetarian",
        name: "Eggplant Parmesan",
        description: "Layers of eggplant, house-made marinara, mozzarella, and fresh basil",
        price: 26.99,
        isVegetarian: true,
        isGlutenFree: false,
        isSignature: false,
        image: "https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg"
      },
      // Desserts
      {
        id: 501,
        category: "desserts",
        name: "Chocolate Fondant",
        description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream",
        price: 12.99,
        isVegetarian: true,
        isGlutenFree: false,
        isSignature: true,
        image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg"
      },
      {
        id: 502,
        category: "desserts",
        name: "Crème Brûlée",
        description: "Classic vanilla bean custard with caramelized sugar crust",
        price: 10.99,
        isVegetarian: true,
        isGlutenFree: true,
        isSignature: false,
        image: "https://images.pexels.com/photos/8599744/pexels-photo-8599744.jpeg"
      },
      // Beverages
      {
        id: 601,
        category: "beverages",
        name: "Signature Martini",
        description: "House-infused cucumber gin, elderflower liqueur, fresh lime, and mint",
        price: 14.99,
        isVegetarian: true,
        isGlutenFree: true,
        isSignature: true,
        image: "https://images.pexels.com/photos/2531187/pexels-photo-2531187.jpeg"
      },
      {
        id: 602,
        category: "beverages",
        name: "Artisanal Tea Selection",
        description: "Premium loose-leaf teas, served with honey and lemon",
        price: 6.99,
        isVegetarian: true,
        isGlutenFree: true,
        isSignature: false,
        image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg"
      }
    ];
    const dietaryInfo = [
      { label: "Vegetarian", color: "bg-green-500" },
      { label: "Gluten-Free", color: "bg-blue-500" },
      { label: "Signature Dish", color: "bg-secondary-500" }
    ];
    const getMenuItemsByCategory = (categoryId) => {
      return menuItems.filter((item) => item.category === categoryId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuItemCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-07eace13><section class="relative pt-40 pb-20 text-white" data-v-07eace13><div class="absolute inset-0 z-0" data-v-07eace13><div class="absolute inset-0 bg-black/70 z-10" data-v-07eace13></div><img src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg" alt="Menu background" class="absolute inset-0 w-full h-full object-cover object-center" data-v-07eace13></div><div class="container-custom relative z-20" data-v-07eace13><div class="max-w-3xl mx-auto text-center" data-v-07eace13><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-07eace13>Our Menu</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-07eace13> Explore our carefully curated selection of dishes, crafted with passion using only the finest seasonal ingredients. </p></div></div></section><section class="bg-white sticky top-20 z-30 shadow-md" data-v-07eace13><div class="container-custom py-4" data-v-07eace13><div class="flex overflow-x-auto hide-scrollbar space-x-8 justify-center" data-v-07eace13><!--[-->`);
      ssrRenderList(menuCategories, (category) => {
        _push(`<button class="${ssrRenderClass([activeCategory.value === category.id ? "border-secondary-500" : "border-transparent", "text-primary-600 hover:text-primary-800 whitespace-nowrap font-medium py-2 px-2 border-b-2 transition-all duration-200"])}" data-v-07eace13>${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-cream" data-v-07eace13><div class="container-custom" data-v-07eace13><!--[-->`);
      ssrRenderList(menuCategories, (category) => {
        _push(`<div${ssrRenderAttr("id", category.id)} class="mb-16 scroll-mt-32" data-v-07eace13><div class="text-center mb-12" data-v-07eace13><h2 class="font-serif text-4xl font-bold text-primary-600 mb-4" data-v-07eace13>${ssrInterpolate(category.name)}</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-6" data-v-07eace13></div><p class="text-gray-700 max-w-2xl mx-auto" data-v-07eace13>${ssrInterpolate(category.description)}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-07eace13><!--[-->`);
        ssrRenderList(getMenuItemsByCategory(category.id), (item) => {
          _push(ssrRenderComponent(_component_MenuItemCard, {
            key: item.id,
            item
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></section><section class="py-12 bg-gray-50" data-v-07eace13><div class="container-custom" data-v-07eace13><div class="max-w-3xl mx-auto text-center" data-v-07eace13><h3 class="font-serif text-2xl font-bold mb-6 text-primary-600" data-v-07eace13>Dietary Information</h3><p class="mb-8 text-gray-700" data-v-07eace13> We are committed to accommodating our guests with special dietary requirements. Many of our dishes can be adapted to suit your needs. </p><div class="flex flex-wrap justify-center gap-4" data-v-07eace13><!--[-->`);
      ssrRenderList(dietaryInfo, (info, index) => {
        _push(`<div class="px-4 py-2 bg-white rounded-full shadow flex items-center" data-v-07eace13><span class="${ssrRenderClass([info.color, "w-3 h-3 rounded-full mr-2"])}" data-v-07eace13></span><span data-v-07eace13>${ssrInterpolate(info.label)}</span></div>`);
      });
      _push(`<!--]--></div><p class="mt-8 text-gray-700" data-v-07eace13> Please inform your server of any allergies or dietary restrictions, and our chefs will be happy to accommodate your needs. </p></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07eace13"]]);
export {
  menu as default
};
//# sourceMappingURL=menu-BH5WVns_.js.map
