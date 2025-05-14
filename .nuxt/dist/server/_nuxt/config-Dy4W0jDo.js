import "vue";
import { klona } from "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/klona/dist/index.mjs";
import { b as useNuxtApp } from "../server.mjs";
import "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/hookable/dist/index.mjs";
import { defuFn } from "C:/Users/Admin/Desktop/project-bolt-sb1-m6lavhab/project/node_modules/defu/dist/defu.mjs";
const inlineConfig = {
  "nuxt": {}
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  nuxtApp._appConfig || (nuxtApp._appConfig = klona(__appConfig));
  return nuxtApp._appConfig;
}
export {
  useAppConfig as u
};
//# sourceMappingURL=config-Dy4W0jDo.js.map
