// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  ssr: false,

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
  }
})
