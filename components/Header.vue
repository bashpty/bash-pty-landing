<template>
  <nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-zinc-800 shadow-sm">
    <div class="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
      <div class="flex items-center gap-2">
        <img src="/sources/bashpty_2.svg" alt="BashPty Logo" class="h-8 w-8">
        <span class="text-headline-md font-headline-md font-bold text-on-surface">BashPty</span>
      </div>
      <div class="hidden md:flex space-x-8">
        <a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">{{ $t('header.services') }}</a>
        <a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">{{ $t('header.caseStudies') }}</a>
        <a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">{{ $t('header.aboutUs') }}</a>
        <a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">{{ $t('header.blog') }}</a>
      </div>
      <div class="flex items-center gap-4">
        <button class="hidden lg:block px-4 py-2 text-on-surface border border-zinc-800 rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors">{{ $t('header.contact') }}</button>
        <button class="px-4 py-2 bg-primary-container text-white rounded-lg font-label-md text-label-md hover:scale-95 transition-transform">{{ $t('header.scheduleCall') }}</button>
        <div class="relative">
          <select v-model="$i18n.locale" class="bg-surface border border-zinc-800 rounded-lg text-on-surface">
            <option v-for="locale in $i18n.locales" :key="locale.code" :value="locale.code">{{ locale.code.toUpperCase() }}</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>
