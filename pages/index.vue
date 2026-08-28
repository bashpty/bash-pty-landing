<template>
  <main class="flex-grow">
    <!-- Hero Section -->
    <section
      class="relative pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col items-center text-center">
      <div class="absolute inset-0 grid-bg opacity-30 -z-10 pointer-events-none"></div>
      <div
        class="w-24 h-24 mb-8 rounded-xl bg-surface-card border border-border-subtle p-4 shadow-[0_0_30px_rgba(29,85,178,0.2)] flex items-center justify-center">
        <img alt="BashPty Logo" :src="publicUrl('/bashpty.svg')" class="w-full h-full object-contain opacity-90" />
      </div>
      <h1 class="font-display-lg text-display-lg text-on-surface max-w-4xl mb-6">
        {{ $t('homepage.hero.title') }}
      </h1>
      <p class="font-body-lg text-body-lg text-text-muted max-w-2xl mb-10">
        {{ $t('homepage.hero.subtitle') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <NuxtLink to="/services/workflow-automation"
          class="bg-primary-container text-on-primary px-6 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary transition-colors glow-button active:scale-95 duration-100">
          {{ $t('homepage.hero.exploreServices') }}
        </NuxtLink>
        <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
          class="bg-transparent text-on-surface border border-border-subtle px-6 py-3 rounded font-label-md text-label-md hover:bg-surface-elevated hover:border-outline-variant transition-colors active:scale-95 duration-100">
          {{ $t('homepage.hero.scheduleAudit') }}
        </a>
      </div>
      <!-- Trust signals -->
      <div class="mt-20 pt-10 border-t border-border-subtle w-full max-w-3xl">
        <p class="font-label-md text-label-md text-text-muted uppercase tracking-widest mb-6">{{
          $t('trustSignals.trustedBy') }}</p>
        <div class="flex justify-center gap-8 md:gap-16 opacity-50 grayscale">
          <span class="material-symbols-outlined text-4xl">domain</span>
          <span class="material-symbols-outlined text-4xl">account_balance</span>
          <span class="material-symbols-outlined text-4xl">factory</span>
          <span class="material-symbols-outlined text-4xl">local_shipping</span>
          <span class="material-symbols-outlined text-4xl">storefront</span>
        </div>
      </div>
    </section>

    <!-- Core Architecture Bento -->
    <section
      class="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-border-subtle relative">
      <div class="mb-12">
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">{{
          $t('homepage.bento.sectionTitle') }}</h2>
        <p class="font-body-md text-body-md text-text-muted max-w-2xl">{{ $t('homepage.bento.sectionSubtitle') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento-gap">
        <!-- Custom Software — spans 2 cols -->
        <NuxtLink to="/services/custom-software"
          class="bento-item rounded-xl p-6 lg:col-span-2 flex flex-col justify-between relative overflow-hidden group">
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-50">
          </div>
          <div>
            <div
              class="w-10 h-10 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center mb-6 text-primary">
              <span class="material-symbols-outlined">code_blocks</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
              $t('homepage.bento.customSoftware.title') }}</h3>
            <p class="font-body-sm text-body-sm text-text-muted mb-6 max-w-md">{{
              $t('homepage.bento.customSoftware.description') }}</p>
          </div>
          <div class="flex gap-2">
            <span
              class="px-2 py-1 bg-surface-elevated border border-border-subtle rounded text-[10px] font-code-sm text-text-muted uppercase">React</span>
            <span
              class="px-2 py-1 bg-surface-elevated border border-border-subtle rounded text-[10px] font-code-sm text-text-muted uppercase">Node.js</span>
            <span
              class="px-2 py-1 bg-surface-elevated border border-border-subtle rounded text-[10px] font-code-sm text-text-muted uppercase">PostgreSQL</span>
          </div>
        </NuxtLink>
        <!-- Workflow Automation -->
        <NuxtLink to="/services/workflow-automation" class="bento-item rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div
              class="w-10 h-10 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center mb-6 text-secondary">
              <span class="material-symbols-outlined">schema</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
              $t('homepage.bento.workflowAutomation.title') }}</h3>
            <p class="font-body-sm text-body-sm text-text-muted">{{ $t('homepage.bento.workflowAutomation.description')
              }}</p>
          </div>
        </NuxtLink>
        <!-- Business Intelligence + Managed IT — full-width 2-col row -->
        <div class="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
          <!-- Business Intelligence -->
          <NuxtLink to="/services/business-intelligence" class="bento-item rounded-xl p-6 flex flex-col">
            <div
              class="w-10 h-10 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center mb-6 text-tertiary">
              <span class="material-symbols-outlined">bar_chart</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
              $t('homepage.bento.businessIntelligence.title') }}</h3>
            <p class="font-body-sm text-body-sm text-text-muted mb-4">{{
              $t('homepage.bento.businessIntelligence.description') }}</p>
            <div class="w-full rounded-lg overflow-hidden border border-border-subtle mt-auto">
              <img :src="publicUrl('/bi.png')" alt="Business Intelligence" class="w-full h-auto object-cover" />
            </div>
          </NuxtLink>
          <!-- Managed IT -->
          <NuxtLink to="/services/managed-it" class="bento-item rounded-xl p-6 flex flex-col">
            <div
              class="w-10 h-10 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center mb-6 text-primary">
              <span class="material-symbols-outlined">dns</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{ $t('homepage.bento.managedIT.title') }}
            </h3>
            <p class="font-body-sm text-body-sm text-text-muted mb-4">{{ $t('homepage.bento.managedIT.description') }}</p>
            <div class="w-full rounded-lg overflow-hidden border border-border-subtle mt-auto">
              <img :src="publicUrl('/itcloud.png')" alt="Managed IT & Infrastructure" class="w-full h-auto object-cover" />
            </div>
          </NuxtLink>
        </div>
        <!-- Strategic Growth — full width -->
        <NuxtLink to="/services/strategic-growth" class="bento-item rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-6 items-center">
          <div class="flex-1 w-full rounded-lg overflow-hidden border border-border-subtle">
            <img alt="Strategic Growth" class="w-full h-auto object-cover"
              :src="publicUrl('/strategic-growth.png')" onerror="this.style.display='none'" />
          </div>
          <div class="flex-1">
            <div
              class="w-10 h-10 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center mb-6 text-secondary">
              <span class="material-symbols-outlined">trending_up</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
              $t('homepage.bento.digitalMarketing.title') }}</h3>
            <p class="font-body-sm text-body-sm text-text-muted">{{ $t('homepage.bento.digitalMarketing.description') }}
            </p>
          </div>
        </NuxtLink>
        <!-- Emerging Tech -->
        <NuxtLink to="/services/emerging-tech" class="bento-item rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-6 items-center">
          <div class="flex-1">
            <div
              class="w-10 h-10 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center mb-6 text-tertiary">
              <span class="material-symbols-outlined">hub</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
              $t('homepage.bento.web3Lab.title') }}</h3>
            <p class="font-body-sm text-body-sm text-text-muted">{{ $t('homepage.bento.web3Lab.description') }}</p>
          </div>
          <div class="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div v-for="chip in ['currency_bitcoin', 'view_in_ar', 'smart_toy', 'hub']" :key="chip"
              class="flex flex-col items-center gap-2 p-3 rounded-lg bg-surface-elevated border border-border-subtle">
              <span class="material-symbols-outlined text-2xl text-tertiary">{{ chip }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Case Study Highlight -->
    <section
      class="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-border-subtle">
      <div
        class="bento-item rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none"></div>
        <div class="flex-1 z-10">
          <div
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-container/10 border border-secondary/20 mb-6">
            <div class="w-1.5 h-1.5 rounded-full bg-secondary"></div>
            <span class="font-code-sm text-code-sm text-secondary uppercase tracking-wider text-[10px]">{{
              $t('caseStudyCard.badge') }}</span>
          </div>
          <h2 class="font-display-lg text-display-lg text-on-surface mb-4">{{ $t('caseStudyCard.title') }}</h2>
          <p class="font-body-lg text-body-lg text-text-muted mb-8 max-w-lg">{{ $t('caseStudyCard.description') }}</p>
          <NuxtLink to="/case-studies"
            class="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-secondary-fixed transition-colors">
            {{ $t('caseStudyCard.readMore') }}
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </NuxtLink>
        </div>
        <div
          class="flex-1 w-full aspect-video rounded-lg border border-border-subtle overflow-hidden relative bg-surface-elevated">
          <img :src="studycaseImage" alt="Case Study" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section
      class="py-24 px-margin-mobile md:px-margin-desktop text-center border-t border-border-subtle bg-surface-elevated/30">
      <h2 class="font-display-lg text-display-lg text-on-surface mb-4">{{ $t('heroCta.title') }}</h2>
      <p class="font-body-lg text-body-lg text-text-muted max-w-xl mx-auto mb-8">{{ $t('heroCta.description') }}</p>
      <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
        class="inline-block bg-primary-container text-on-primary px-8 py-4 rounded font-label-md text-label-md hover:bg-inverse-primary transition-colors glow-button active:scale-95 duration-100 text-lg">
        {{ $t('heroCta.button') }}
      </a>
    </section>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const publicUrl = usePublicUrl()
const supported = ['en', 'es', 'pt']
const studycaseImage = computed(() =>
  publicUrl(`/studycase-${supported.includes(locale.value) ? locale.value : 'en'}.png`)
)
</script>
