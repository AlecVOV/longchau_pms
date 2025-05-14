export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('vue-tilt.js').then((VueTilt) => {
      nuxtApp.vueApp.use(VueTilt.default);
    });
  }
});