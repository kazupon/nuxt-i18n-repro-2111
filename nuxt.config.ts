// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    precompile: {
      strictMessage: false,
    },
    strategy: "prefix_and_default",
    defaultLocale: "it",
    locales: ["it", "en"],
    vueI18n: "./i18n.config.ts",
  },
});
