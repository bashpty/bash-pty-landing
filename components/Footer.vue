<template>
  <footer class="bg-surface-dim border-t border-border-subtle">
    <div
      class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
      <div class="md:col-span-1">
        <NuxtLink to="/"
          class="font-headline-md text-headline-md font-bold text-on-surface mb-4 flex items-center gap-2">
          <img src="/favicon.ico" alt="BashPty" class="w-5 h-5 object-contain opacity-80" />
          BashPty
        </NuxtLink>
        <p class="font-body-sm text-body-sm text-text-muted mt-2">{{ $t('footer.legal.copyright') }} {{
          $t('footer.tagline') }}</p>
      </div>
      <div>
        <h4 class="font-label-md text-label-md uppercase text-on-surface mb-4">{{ $t('footer.foundation.title') }}</h4>
        <ul class="space-y-3 font-body-sm text-body-sm">
          <li>
            <NuxtLink to="/services/workflow-automation" class="text-text-muted hover:text-primary transition-colors">{{
              $t('footer.growth.intelligentAutomation') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services/business-intelligence" class="text-text-muted hover:text-primary transition-colors">
              {{ $t('footer.growth.businessIntelligence') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services/custom-software" class="text-text-muted hover:text-primary transition-colors">{{
              $t('footer.foundation.customSoftware') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-label-md text-label-md uppercase text-on-surface mb-4">{{ $t('footer.company.title') }}</h4>
        <ul class="space-y-3 font-body-sm text-body-sm">
          <li>
            <NuxtLink to="/case-studies" class="text-text-muted hover:text-primary transition-colors">{{
              $t('footer.company.caseStudies') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-label-md text-label-md uppercase text-on-surface mb-4">{{ $t('footer.legal.title') }}</h4>
        <ul class="space-y-3 font-body-sm text-body-sm">
          <li><a href="#" class="text-text-muted hover:text-primary transition-colors">{{
            $t('footer.legal.privacyPolicy') }}</a></li>
          <li><a href="#" class="text-text-muted hover:text-primary transition-colors">{{
            $t('footer.legal.termsAndConditions') }}</a></li>
        </ul>
      </div>
      <div class="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-border-subtle flex justify-between items-center">
        <p class="font-code-sm text-code-sm text-text-muted flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-secondary inline-block"></span>
          {{ $t('footer.systemStatus') }}
        </p>
      </div>
    </div>
  </footer>
</template>
