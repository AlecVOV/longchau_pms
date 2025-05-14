// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      title: 'Gourmet Restaurant',
      meta: [
        { name: 'description', content: 'Experience exquisite dining at Gourmet Restaurant. Enjoy our carefully crafted menu of delicious dishes in an elegant atmosphere.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    },
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    }
  },
  googleFonts: {
    families: {
      'Playfair+Display': [400, 500, 600, 700],
      'Lato': [300, 400, 700],
    },
    display: 'swap'
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  }
})