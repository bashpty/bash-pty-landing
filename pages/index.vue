<template>
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="py-section-padding px-gutter max-w-container-max mx-auto flex flex-col items-center text-center relative">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container/20 via-background to-background"></div>
      <div class="mb-8 p-4 bg-surface rounded-2xl ghost-border inline-block shadow-lg">
        <img alt="BashPty Logo" class="w-32 h-32 object-contain" src="/sources/bashpty_2.svg"/>
      </div>
      <h1 class="font-display-lg text-display-lg text-on-surface max-w-4xl mx-auto mb-6 leading-tight">
        Your Partner for Data-Driven <br class="hidden md:block"/> Automation &amp; Integrated Growth
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
        Architecting high-performance workflows and delivering deep analytics with surgical precision for Panama's leading enterprises.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
        <button class="bg-primary-container text-white px-8 py-4 rounded-lg font-label-md text-label-md hover:scale-95 transition-transform shadow-lg shadow-primary-container/20">
          Accelerate Your Stack
        </button>
        <button class="bg-transparent text-on-surface border border-zinc-800 px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors">
          View Case Studies
        </button>
      </div>
    </section>
    <!-- Trust Signals -->
    <section class="py-12 border-y border-zinc-800 bg-surface/50">
      <div class="max-w-container-max mx-auto px-gutter text-center">
        <p class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-8">Trusted by Panama's Leading Businesses</p>
        <div class="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
          <!-- Placeholders for logos -->
          <span class="material-symbols-outlined text-4xl">domain</span>
          <span class="material-symbols-outlined text-4xl">account_balance</span>
          <span class="material-symbols-outlined text-4xl">factory</span>
          <span class="material-symbols-outlined text-4xl">local_shipping</span>
          <span class="material-symbols-outlined text-4xl">storefront</span>
        </div>
      </div>
    </section>
    <!-- Bento Grid: Core Services -->
    <section class="py-section-padding px-gutter max-w-container-max mx-auto">
      <div class="mb-12">
        <h2 class="font-headline-lg text-headline-lg md:text-headline-lg text-on-surface mb-4">Core Architecture</h2>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">Modular solutions designed for resilience, clarity, and exponential scale.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento-gap">
        <!-- Service 1 -->
        <div class="bento-card ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div class="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-6 text-primary">
            <span class="material-symbols-outlined">terminal</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-3">Custom Software</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">Bespoke applications engineered from the ground up to solve complex enterprise operational bottlenecks.</p>
        </div>
        <!-- Service 2 -->
        <div class="bento-card ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div class="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6 text-secondary">
            <span class="material-symbols-outlined">account_tree</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-3">Workflow Automation</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">Eliminate manual overhead by connecting siloed systems into seamless, self-executing data pipelines.</p>
        </div>
        <!-- Service 3 -->
        <div class="bento-card ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div class="w-12 h-12 bg-tertiary-container/20 rounded-lg flex items-center justify-center mb-6 text-tertiary">
            <span class="material-symbols-outlined">monitoring</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-3">Business Intelligence</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">Transform raw data streams into actionable executive dashboards with surgical precision and clarity.</p>
        </div>
        <!-- Service 4 -->
        <div class="bento-card ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div class="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-6 text-primary">
            <span class="material-symbols-outlined">dns</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-3">Managed IT</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">Industrial-grade infrastructure management ensuring 99.99% uptime and uncompromised data sovereignty.</p>
        </div>
        <!-- Service 5 -->
        <div class="bento-card ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors lg:col-span-2">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="flex-1">
              <div class="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6 text-secondary">
                <span class="material-symbols-outlined">trending_up</span>
              </div>
              <h3 class="font-headline-md text-headline-md text-on-surface mb-3">Strategic Growth</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Data-backed consulting designed to identify untapped market opportunities and operational efficiencies.</p>
            </div>
            <div class="w-full md:w-1/2 h-32 bg-surface-variant rounded-lg ghost-border relative overflow-hidden">
              <div class="bg-cover bg-center w-full h-full opacity-60 mix-blend-luminosity" data-alt="A sleek, modern data visualization dashboard interface in a dark mode setting. The dashboard features complex graphs, a rising trendline in a vibrant green hue, and subtle geometric patterns. The overall lighting is dim but the charts are illuminated, conveying a sense of high-tech analytical precision and business growth." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCv8SyCEgHP0-6KBO8S3HSJVNCBx0zcG6Z1lK9EfBc6YDQcQAuRZm0cxUseL0w8NjMHXOwMjkZ2F8yNAPjg95s9Lej-9l_6aquNjCGmjznYLqtQsksK5fuaK-GKPYYhvp0C_8jHPJiEh_GUwLeWt7MPpjmeQOa5CJZ0YBkK2C8R_fzTzPBjJoA7rut0vOONjW73cQKONfahXlTdygmEOhCAxmkSS836Fy7ElPVIScBOTLN7YomSwWpQ1ToZNfyFd14z5CEH_JR8gBI')"></div>
            </div>
          </div>
        </div>
        <!-- Service 6 -->
        <div class="bento-card ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div class="w-12 h-12 bg-tertiary-container/20 rounded-lg flex items-center justify-center mb-6 text-tertiary">
            <span class="material-symbols-outlined">memory</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-3">Emerging Tech</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">Integration of advanced AI and machine learning models to future-proof your operational stack.</p>
        </div>
      </div>
    </section>
    <!-- Case Study Highlight -->
    <section class="py-section-padding px-gutter max-w-container-max mx-auto">
      <div class="bg-surface rounded-2xl ghost-border overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div class="p-12 lg:p-16 flex flex-col justify-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border border-secondary/20 rounded-full mb-8 w-fit">
            <span class="w-2 h-2 rounded-full bg-secondary"></span>
            <span class="font-label-md text-label-md text-secondary uppercase tracking-wider text-xs">Success Metric</span>
          </div>
          <h2 class="font-display-lg text-display-lg text-on-surface mb-6">67% reduction in manual processing</h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
            See how we engineered an automated logistics pipeline that completely bypassed legacy data entry protocols, resulting in unprecedented operational velocity.
          </p>
          <a class="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:text-primary-fixed transition-colors group w-fit" href="#">
            Read Full Case Study
            <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        <div class="relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-zinc-800 bg-surface-variant overflow-hidden">
          <div class="absolute inset-0 bg-cover bg-center opacity-80" data-alt="An abstract 3D rendering representing a fast, automated data pipeline. Glowing lines of digital code and energy flow rapidly through a dark, industrial server room environment. The color palette focuses on deep blacks, dark greys, and intense streaks of primary blue and secondary green light, creating a highly technical, efficient, and dynamic mood." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDL66T3Soe_bAfUhftoI_VKgLceIhi1ATZe3ZWg4GwPtPizrabM7OLwQKK8tdt4mn66Ye90MGgnIrCrdSHi3Ju3-z1jvkg6fr3AJUIBFeDVTwLqQD7IHllKBJHf9X09kxRaXdMwt9dt_PMIuIjq0OxXDpKUOIVnUb2_4HHL2Kot9BYVq9DTmKDU44YkaMcTlfOac4d5ixFPzb7bGOKk_C2XFirBs4KMGS_67GpAV0jkqUkSE2niqNIjxl1-sFgXurgvkMyeJe6mjno')"></div>
        </div>
      </div>
    </section>
    <!-- Final CTA -->
    <section class="py-section-padding px-gutter max-w-container-max mx-auto text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="font-display-lg text-display-lg text-on-surface mb-6">Ready to Accelerate?</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-10">
          Deploy intelligent automation and gain total visibility into your operational metrics. Connect with our engineering team today.
        </p>
        <button class="bg-primary-container text-white px-10 py-4 rounded-lg font-label-md text-label-md hover:scale-95 transition-transform shadow-lg shadow-primary-container/20 text-lg">
          Initialize Deployment
        </button>
      </div>
    </section>
  </main>
</template>
