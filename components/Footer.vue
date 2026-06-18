<template>
  <footer class="w-full bg-surface border-t border-zinc-800">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-bento-gap py-section-padding px-gutter max-w-container-max mx-auto">
      <div class="space-y-4">
        <span class="text-headline-md font-headline-md font-bold text-on-surface block">BashPty</span>
        <p class="font-body-sm text-body-sm text-on-surface-variant">© 2024 BashPty. {{ $t('footer.tagline') }}</p>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">{{ $t('footer.foundation.title') }}</span>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.foundation.customSoftware') }}</a>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.foundation.managedIT') }}</a>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.foundation.web3Lab') }}</a>
      </div>
       <div class="flex flex-col space-y-2">
        <span class="font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">{{ $t('footer.growth.title') }}</span>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.growth.intelligentAutomation') }}</a>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.growth.businessIntelligence') }}</a>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.growth.digitalMarketing') }}</a>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">{{ $t('footer.company.title') }}</span>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.company.caseStudies') }}</a>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.company.aboutUs') }}</a>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.company.blog') }}</a>
        <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">{{ $t('footer.company.contact') }}</a>
      </div>
    </div>
  </footer>
</template>
