import { y as klona, z as defuFn } from '../_/nitro.mjs';
import { b as useNuxtApp } from './server.mjs';

const inlineConfig = {
  "nuxt": {}
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  nuxtApp._appConfig || (nuxtApp._appConfig = klona(__appConfig));
  return nuxtApp._appConfig;
}

export { useAppConfig as u };
//# sourceMappingURL=config-Dy4W0jDo.mjs.map
