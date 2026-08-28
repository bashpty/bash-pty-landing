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
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
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
    defaultLocale: "es",
    fallbackLocale: "en",
    strategy: "no_prefix",
    bundle: { optimizeTranslationDirective: false },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "en",
    },
  },

  googleFonts: {
    families: {
      Geist: [400, 500, 600, 700],
      Inter: [400, 500, 600],
      "JetBrains+Mono": [400, 500],
    },
  },

  app: {
    baseURL: "/",
    head: {
      title: "Bash Pty",
      meta: [
        { name: "description", content: "Tu mejor elección tecnológica 🖥️" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/**": {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy":
          "camera=(), microphone=(), payment=(), geolocation=(self), xr-spatial-tracking=(self https://kuula.co)",
        "Content-Security-Policy":
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://googleads.g.doubleclick.net https://www.facebook.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://www.facebook.com https://www.google-analytics.com https://www.google.com https://www.google.com.pa https://stats.g.doubleclick.net https://fonts.gstatic.com data:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.google.com https://www.googletagmanager.com https://connect.facebook.net https://www.facebook.com; frame-src 'self' https://kuula.co https://www.googletagmanager.com https://forms.office.com https://www.facebook.com;",
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
});
