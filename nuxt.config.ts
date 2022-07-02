import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
      'cookie-universal-nuxt',
  ],
  ssr: process.env.NODE_ENV === 'production' ? true : false // for hot reloading
})

