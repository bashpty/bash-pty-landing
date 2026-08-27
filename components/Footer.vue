<template>
  <footer class="bg-surface-dim border-t border-border-subtle">
    <div
      class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
      <div class="md:col-span-1">
        <NuxtLink to="/"
          class="font-headline-md text-headline-md font-bold text-on-surface mb-4 flex items-center gap-2">
          <img src="/bashpty.svg" alt="BashPty" class="w-5 h-5 object-contain opacity-80" />
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
          <li><NuxtLink to="/privacy-policy" class="text-text-muted hover:text-primary transition-colors">{{ $t('footer.legal.privacyPolicy') }}</NuxtLink></li>
          <li><NuxtLink to="/terms" class="text-text-muted hover:text-primary transition-colors">{{ $t('footer.legal.termsAndConditions') }}</NuxtLink></li>
        </ul>
      </div>
      <div class="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="font-code-sm text-code-sm text-text-muted flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-secondary inline-block"></span>
          {{ $t('footer.systemStatus') }}
        </p>
        <!-- Social & contact links -->
        <div class="flex items-center gap-4">
          <a href="tel:+50768723220" aria-label="Phone"
            class="text-text-muted hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
              <path d="M222.37,158.46l-47.11-21.11a16,16,0,0,0-15.66,1.77L134,153.83a76.26,76.26,0,0,1-31.83-31.83l14.71-25.57a16,16,0,0,0,1.77-15.66L97.54,33.63a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.89-48.92A16,16,0,0,0,222.37,158.46Z"/>
            </svg>
          </a>
          <a href="mailto:info@bashpty.com" aria-label="Email"
            class="text-text-muted hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,57.95,53.15H52.76ZM157.29,128,216,74.18V181.82Z"/>
            </svg>
          </a>
          <a href="https://wa.link/y18jd0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            class="text-text-muted hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
              <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72,24,24,0,0,1,19.29-23.54l11.48,22.95L101,118.1a8,8,0,0,0-.73,7.65,56.56,56.56,0,0,0,30,30,8,8,0,0,0,7.65-.73l14.69-9.8,22.95,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a88.11,88.11,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216l12.47-37.4a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/bashpty507/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            class="text-text-muted hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
