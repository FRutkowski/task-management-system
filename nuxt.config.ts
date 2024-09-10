// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', 'nuxt-icon', '@nuxt/image', '@nuxtjs/tailwindcss'],
  target: 'static',
  ui: {
    global: true
  },

  // app: {
  //   layoutTransition: { name: 'layout', mode: 'out-in' }
  // },

  components: [
    { path: '~/components/buttons', pathPrefix: false },
    { path: '~/components/dashboard', pathPrefix: false },
    { path: '~/components/ui', pathPrefix: false },
    '~/components'
  ],

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  compatibilityDate: '2024-09-07'
})