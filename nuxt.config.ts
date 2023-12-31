// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: ['@/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
  },
});
