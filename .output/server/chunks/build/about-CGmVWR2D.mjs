import __nuxt_component_0 from './Icon-V7KX5z6a.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './config-Dy4W0jDo.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const teamMembers = [
      {
        name: "Michel Laurent",
        role: "Executive Chef & Founder",
        bio: "With over 25 years of culinary experience and training from Le Cordon Bleu, Chef Laurent brings his passion for innovative cuisine to every dish.",
        image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
      },
      {
        name: "Sophia Martinez",
        role: "Pastry Chef",
        bio: "Award-winning pastry artist who transforms simple desserts into extraordinary culinary experiences with her creative approach.",
        image: "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg"
      },
      {
        name: "James Chen",
        role: "Sommelier",
        bio: "Certified sommelier with an exceptional talent for wine pairings that complement and elevate the flavors of our menu.",
        image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg"
      },
      {
        name: "Olivia Jackson",
        role: "Restaurant Manager",
        bio: "Ensures every aspect of your dining experience meets our high standards of excellence and hospitality.",
        image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
      },
      {
        name: "Daniel Rodriguez",
        role: "Sous Chef",
        bio: "Brings creativity and precision to the kitchen, working closely with Chef Laurent to maintain consistent quality.",
        image: "https://images.pexels.com/photos/8477129/pexels-photo-8477129.jpeg"
      },
      {
        name: "Emma Wilson",
        role: "Mixologist",
        bio: "Creates signature cocktails that pair perfectly with our menu using house-infused spirits and fresh ingredients.",
        image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8ea8ca6b><section class="relative pt-40 pb-20 text-white" data-v-8ea8ca6b><div class="absolute inset-0 z-0" data-v-8ea8ca6b><div class="absolute inset-0 bg-black/60 z-10" data-v-8ea8ca6b></div><img src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg" alt="Restaurant interior" class="absolute inset-0 w-full h-full object-cover object-center" data-v-8ea8ca6b></div><div class="container-custom relative z-20" data-v-8ea8ca6b><div class="max-w-3xl mx-auto text-center" data-v-8ea8ca6b><h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up" data-v-8ea8ca6b>Our Story</h1><p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200" data-v-8ea8ca6b> From humble beginnings to a celebrated culinary destination </p></div></div></section><section class="py-20 bg-cream" data-v-8ea8ca6b><div class="container-custom" data-v-8ea8ca6b><div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-v-8ea8ca6b><div data-v-8ea8ca6b><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-8ea8ca6b>Our History</h2><div class="w-24 h-1 bg-secondary-500 mb-8" data-v-8ea8ca6b></div><div class="space-y-6" data-v-8ea8ca6b><p class="text-gray-700 text-lg" data-v-8ea8ca6b> Gourmet Restaurant was established in 2010 by acclaimed Chef Michel Laurent, who brought his vision of combining traditional culinary techniques with modern innovation to life. </p><p class="text-gray-700 text-lg" data-v-8ea8ca6b> What began as an intimate 40-seat bistro has evolved into one of the city&#39;s premier dining destinations, earning numerous accolades including two Michelin stars and the coveted James Beard Award. </p><p class="text-gray-700 text-lg" data-v-8ea8ca6b> Despite our growth and success, we remain committed to our founding principles: sourcing the finest ingredients, respecting classic techniques, and delivering exceptional hospitality to each guest who walks through our doors. </p></div></div><div class="relative" data-v-8ea8ca6b><div class="absolute inset-0 translate-x-5 translate-y-5 border-2 border-secondary-500 rounded-lg -z-10" data-v-8ea8ca6b></div><img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" alt="Restaurant history" class="rounded-lg shadow-xl w-full h-auto" data-v-8ea8ca6b></div></div></div></section><section class="py-20 bg-primary-600 text-white" data-v-8ea8ca6b><div class="container-custom" data-v-8ea8ca6b><div class="max-w-3xl mx-auto text-center" data-v-8ea8ca6b><h2 class="font-serif text-4xl font-bold mb-6" data-v-8ea8ca6b>Our Philosophy</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-12" data-v-8ea8ca6b></div><div class="grid grid-cols-1 md:grid-cols-3 gap-12" data-v-8ea8ca6b><div class="flex flex-col items-center" data-v-8ea8ca6b><div class="bg-white/10 rounded-full p-6 mb-6" data-v-8ea8ca6b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:sparkles",
        class: "w-12 h-12 text-secondary-500"
      }, null, _parent));
      _push(`</div><h3 class="font-serif text-xl font-bold mb-4" data-v-8ea8ca6b>Quality Ingredients</h3><p class="text-gray-200" data-v-8ea8ca6b> We source only the finest seasonal ingredients from local farmers and sustainable suppliers. </p></div><div class="flex flex-col items-center" data-v-8ea8ca6b><div class="bg-white/10 rounded-full p-6 mb-6" data-v-8ea8ca6b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:beaker",
        class: "w-12 h-12 text-secondary-500"
      }, null, _parent));
      _push(`</div><h3 class="font-serif text-xl font-bold mb-4" data-v-8ea8ca6b>Culinary Innovation</h3><p class="text-gray-200" data-v-8ea8ca6b> We respect tradition while embracing creativity to craft unique dining experiences. </p></div><div class="flex flex-col items-center" data-v-8ea8ca6b><div class="bg-white/10 rounded-full p-6 mb-6" data-v-8ea8ca6b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:heart",
        class: "w-12 h-12 text-secondary-500"
      }, null, _parent));
      _push(`</div><h3 class="font-serif text-xl font-bold mb-4" data-v-8ea8ca6b>Exceptional Service</h3><p class="text-gray-200" data-v-8ea8ca6b> We believe that genuine hospitality and attention to detail create memorable moments. </p></div></div></div></div></section><section class="py-20 bg-white" data-v-8ea8ca6b><div class="container-custom" data-v-8ea8ca6b><div class="max-w-5xl mx-auto" data-v-8ea8ca6b><div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-v-8ea8ca6b><div class="order-2 md:order-1" data-v-8ea8ca6b><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-8ea8ca6b>Meet Chef Laurent</h2><div class="w-24 h-1 bg-secondary-500 mb-8" data-v-8ea8ca6b></div><div class="space-y-6" data-v-8ea8ca6b><p class="text-gray-700 text-lg" data-v-8ea8ca6b> Classically trained at Le Cordon Bleu in Paris, Chef Michel Laurent honed his skills in prestigious kitchens throughout Europe before realizing his dream of opening Gourmet Restaurant. </p><p class="text-gray-700 text-lg" data-v-8ea8ca6b> With over 25 years of culinary experience, Chef Laurent combines his French heritage with global influences to create dishes that are both familiar and surprising. </p><p class="text-gray-700 text-lg" data-v-8ea8ca6b> &quot;My cooking philosophy is simple: respect the ingredients, understand their natural flavors, and enhance them through technique rather than mask them with complexity.&quot; - Chef Michel Laurent </p><div class="pt-4" data-v-8ea8ca6b><div class="flex items-center" data-v-8ea8ca6b><img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg" alt="Chef&#39;s signature" class="h-16 w-auto" data-v-8ea8ca6b></div></div></div></div><div class="order-1 md:order-2" data-v-8ea8ca6b><img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg" alt="Chef Michel Laurent" class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-xl border-4 border-white" data-v-8ea8ca6b></div></div></div></div></section><section class="py-20 bg-gray-50" data-v-8ea8ca6b><div class="container-custom" data-v-8ea8ca6b><div class="text-center mb-16" data-v-8ea8ca6b><h2 class="font-serif text-4xl font-bold mb-6 text-primary-600" data-v-8ea8ca6b>Our Team</h2><div class="w-24 h-1 bg-secondary-500 mx-auto mb-8" data-v-8ea8ca6b></div><p class="text-gray-700 max-w-3xl mx-auto" data-v-8ea8ca6b> Meet the talented individuals who work tirelessly to create exceptional dining experiences for our guests. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-v-8ea8ca6b><!--[-->`);
      ssrRenderList(teamMembers, (member, index) => {
        _push(`<div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300" data-v-8ea8ca6b><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} class="w-full h-80 object-cover object-center" data-v-8ea8ca6b><div class="p-6" data-v-8ea8ca6b><h3 class="font-serif text-xl font-bold text-primary-600 mb-1" data-v-8ea8ca6b>${ssrInterpolate(member.name)}</h3><p class="text-secondary-500 font-medium mb-4" data-v-8ea8ca6b>${ssrInterpolate(member.role)}</p><p class="text-gray-600" data-v-8ea8ca6b>${ssrInterpolate(member.bio)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ea8ca6b"]]);

export { about as default };
//# sourceMappingURL=about-CGmVWR2D.mjs.map
