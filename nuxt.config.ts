// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],
  
  app: {
    head: {
      title: 'Long Châu - Online Pharmacy & Medical Equipment',
      meta: [
        { name: 'description', content: 'Your trusted online pharmacy for medications and medical equipment' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.webp' }
      ]
    }
  },
  
  // Temporarily disable problematic features
  ssr: true,
  nitro: {
    experimental: {
      wasm: true
    }
  },

  // Add runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    databaseUrl: process.env.DATABASE_URL || 'file:./prisma/dev.db',
    jwtSecret: process.env.JWT_SECRET || 'your-jwt-secret-key',
    // Public keys (exposed to client-side)
    public: {
      apiBase: '/api'
    }
  },
  
  colorMode: {
    preference: 'light',
    classSuffix: ''
  },
  
  pinia: {
    storesDirs: ['./stores/**']
  },
  
  imports: {
    dirs: ['stores']
  },
  
  components: {
    global: true,
    dirs: ['~/components']
  },
  
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: false,
  }
})