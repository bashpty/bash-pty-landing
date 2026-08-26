import Aura from "@primevue/themes/aura";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2026-08-26",
  srcDir: ".",
  modules: ["@primevue/nuxt-module", "@nuxtjs/i18n", "@nuxtjs/google-fonts"],
  pages: true,

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".dark",
          cssLayer: { name: "primevue", order: "tailwind-base, primevue, tailwind-utilities" },
        },
      },
    },
  },

  i18n: {
    locales: [
      { code: "en", language: "en-US", name: "English", file: "en.ts" },
      { code: "es", language: "es-ES", name: "Español", file: "es.ts" },
      { code: "pt", language: "pt-BR", name: "Português", file: "pt.ts" },
    ],
    lazy: false,
    langDir: "locales",
    defaultLocale: "en",
    bundle: { optimizeTranslationDirective: false },
  },

  googleFonts: {
    families: {
      Geist: [400, 500, 600, 700],
      Inter: [400, 500, 600],
      'JetBrains+Mono': [400, 500],
    },
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
});
