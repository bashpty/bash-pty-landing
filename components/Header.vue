<template>
  <nav
    class="sticky top-0 bg-surface/95 backdrop-blur-md z-50 w-full border-b border-border-subtle transition-colors duration-300">
    <div
      class="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/favicon.ico" alt="BashPty" class="w-7 h-7 object-contain" />
        <span class="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">BashPty</span>
      </NuxtLink>

      <!-- Nav links (desktop) -->
      <div class="hidden md:flex gap-8 items-center">
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
          class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200"
          active-class="text-primary border-b-2 border-primary pb-1">{{ $t(link.key) }}</NuxtLink>
      </div>

      <!-- Right side actions -->
      <div class="flex items-center gap-2">
        <NuxtLink to="/contact"
          class="hidden lg:block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-3 py-2">
          {{ $t('header.contact') }}
        </NuxtLink>
        <NuxtLink to="/contact"
          class="bg-primary-container text-on-primary px-4 py-2 rounded font-label-md text-label-md hover:brightness-110 transition-all active:scale-95 hidden sm:block">
          {{ $t('header.scheduleCall') }}
        </NuxtLink>

        <!-- Theme toggle -->
        <button
          class="flex items-center justify-center w-9 h-9 rounded border border-border-subtle bg-surface-elevated hover:border-outline-variant transition-colors"
          :title="$t(`theme.${theme}`)" @click="cycle()">
          <!-- sun icon -->
          <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-on-surface-variant"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M18.66 5.34l1.41-1.41" />
          </svg>
          <!-- moon icon -->
          <svg v-else-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-on-surface-variant"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <!-- monitor icon for system -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-on-surface-variant" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8m-4-4v4" />
          </svg>
        </button>

        <!-- Language switcher -->
        <div class="relative">
          <div v-if="langOpen" class="fixed inset-0 z-40" @click="langOpen = false" />
          <button
            class="flex items-center gap-1.5 border border-border-subtle rounded px-2 py-1.5 hover:border-outline-variant transition-colors bg-surface-elevated"
            @click="langOpen = !langOpen" :aria-label="$t('header.language')">
            <img :src="`/flags/${locale}.svg`" :alt="locale" class="w-5 h-4 object-cover rounded-sm" />
            <!-- chevron-down SVG -->
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5 text-on-surface-variant transition-transform duration-200"
              :class="{ 'rotate-180': langOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div v-if="langOpen"
            class="absolute right-0 mt-1 bg-surface-elevated border border-border-subtle rounded shadow-lg overflow-hidden z-50 min-w-[130px]">
            <button v-for="l in locales" :key="l.code"
              class="flex items-center gap-2 w-full px-3 py-2 text-left font-body-sm text-body-sm hover:bg-surface-container transition-colors"
              :class="l.code === locale ? 'text-primary' : 'text-on-surface-variant'"
              @click="setLocale(l.code as string); langOpen = false">
              <img :src="`/flags/${l.code}.svg`" :alt="String(l.code)" class="w-5 h-4 object-cover rounded-sm" />
              {{ l.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const { theme, cycle } = useTheme()
const langOpen = ref(false)

const navLinks = [
  { key: 'header.automation', to: '/services/workflow-automation' },
  { key: 'header.intelligence', to: '/services/business-intelligence' },
  { key: 'header.customStack', to: '/services/custom-software' },
  { key: 'header.caseStudiesNav', to: '/case-studies' },
]
</script>
