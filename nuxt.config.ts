// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', 'nuxt-icon', '@nuxt/image', '@nuxtjs/tailwindcss'],
  ui: {
    global: true
  },

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

  nitro: {
    prerender: {
      routes: ['/200.html', '/404.html'],
      ignore: ['/']
    }
  }
})
