export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stratosfare',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-bg text-white font-body antialiased overflow-x-hidden',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;800&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vue-awesome-swiper', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/strapi'],

  // Strapi Doku: https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/integrations/nuxt-js.html
  strapi: {
    entities: ['home'],
    url: process.env.BACKEND_URL || 'http://localhost:1337',
  },

  // Tailwind module configuration: https://tailwindcss.nuxtjs.org/options
  tailwindcss: {
    jit: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
