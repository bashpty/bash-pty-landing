<template>
    <main class="flex-grow pt-20">
        <!-- Hero -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-8">
            <div class="bg-surface-card border border-border-subtle rounded-xl overflow-hidden relative">
                <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
                <div
                    class="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none">
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 relative z-10 items-center">
                    <div class="flex flex-col items-start space-y-6">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1 rounded bg-tertiary-container/20 border border-primary/20">
                            <span class="material-symbols-outlined text-sm text-primary">database</span>
                            <span class="font-label-md text-label-md uppercase tracking-wider text-xs text-primary">{{
                                $t('common.dataSovereignty') }}</span>
                        </div>
                        <h1 class="font-display-lg text-display-lg text-on-surface">{{
                            $t('services.businessIntelligence.hero.title') }}</h1>
                        <p class="font-body-lg text-body-lg text-text-muted max-w-xl">{{
                            $t('services.businessIntelligence.hero.subtitle') }}</p>
                        <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                            class="px-6 py-3 rounded bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-2 hover:bg-inverse-primary active:scale-95 glow-button">
                            {{ $t('services.businessIntelligence.cta.ctaText') }}
                            <span class="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                    <!-- BI deploy demo video -->
                    <div class="relative w-full rounded-lg overflow-hidden border border-border-subtle">
                        <video class="w-full h-auto block" autoplay loop muted playsinline>
                            <source :src="publicUrl('/bideploy.mp4')" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>

        <!-- Problem / Solution cards -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding border-t border-border-subtle">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                <div class="bento-item rounded-xl p-8">
                    <span class="material-symbols-outlined text-3xl text-error mb-4 block">warning</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-3">{{
                        $t('services.businessIntelligence.problem.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted">{{
                        $t('services.businessIntelligence.problem.description') }}</p>
                </div>
                <div class="bento-item rounded-xl p-8">
                    <span class="material-symbols-outlined text-3xl text-secondary mb-4 block">check_circle</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-3">{{
                        $t('services.businessIntelligence.solution.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted">{{
                        $t('services.businessIntelligence.solution.selfService.description') }}</p>
                </div>
            </div>
        </section>

        <!-- Core Capabilities -->
        <section class="bg-surface-dim border-y border-border-subtle py-section-padding">
            <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">Core Capabilities</h2>
                <p class="font-body-md text-body-md text-text-muted mb-12">Tailored deployment strategies for modern
                    data stacks.</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
                    <div class="bg-surface-card border border-border-subtle rounded-xl p-8">
                        <span class="material-symbols-outlined text-on-surface-variant mb-4 block">bar_chart</span>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                            $t('services.businessIntelligence.offerings.deployment.title') }}</h3>
                        <p class="font-body-sm text-body-sm text-text-muted mb-4">{{
                            $t('services.businessIntelligence.offerings.deployment.intro') }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">PostgreSQL</span>
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">Snowflake</span>
                        </div>
                    </div>
                    <div class="bg-surface-card border border-border-subtle rounded-xl p-8 relative">
                        <div
                            class="absolute top-4 right-4 px-2 py-0.5 bg-secondary/20 text-secondary rounded font-code-sm text-code-sm text-[10px] uppercase">
                            HIGH DEMAND</div>
                        <span class="material-symbols-outlined text-on-surface-variant mb-4 block">dashboard</span>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                            $t('services.businessIntelligence.offerings.embedded.title') }}</h3>
                        <p class="font-body-sm text-body-sm text-text-muted mb-4">{{
                            $t('services.businessIntelligence.offerings.embedded.intro') }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">React</span>
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">Vue.js</span>
                        </div>
                    </div>
                    <div class="bg-surface-card border border-border-subtle rounded-xl p-8">
                        <span class="material-symbols-outlined text-on-surface-variant mb-4 block">wifi_tethering</span>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                            $t('services.businessIntelligence.offerings.monitoring.title') }}</h3>
                        <p class="font-body-sm text-body-sm text-text-muted mb-4">{{
                            $t('services.businessIntelligence.offerings.monitoring.intro') }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">Grafana</span>
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">IoT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technical Specs -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding">
            <div class="bento-item rounded-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-1">
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                        $t('common.technicalSpecs.title') }}</h3>
                    <p class="font-body-sm text-body-sm text-text-muted">{{ $t('common.technicalSpecs.subtitle') }}</p>
                </div>
                <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-on-surface-variant text-sm mt-0.5">settings</span>
                        <div>
                            <p class="font-label-md text-label-md text-on-surface mb-1">{{
                                $t('common.technicalSpecs.frontendAgnostic') }}</p>
                            <p class="font-body-sm text-body-sm text-text-muted">{{
                                $t('services.businessIntelligence.offerings.embedded.techSpecs.specs.frameworks') }}</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-on-surface-variant text-sm mt-0.5">lock</span>
                        <div>
                            <p class="font-label-md text-label-md text-on-surface mb-1">{{
                                $t('common.technicalSpecs.rowLevelSecurity') }}</p>
                            <p class="font-body-sm text-body-sm text-text-muted">{{
                                $t('services.businessIntelligence.offerings.embedded.techSpecs.specs.isolation') }}</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-on-surface-variant text-sm mt-0.5">code</span>
                        <div>
                            <p class="font-label-md text-label-md text-on-surface mb-1">{{
                                $t('common.technicalSpecs.infraAsCode') }}</p>
                            <p class="font-body-sm text-body-sm text-text-muted">{{
                                $t('common.technicalSpecs.infraAsCodeDesc') }}</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-on-surface-variant text-sm mt-0.5">sync</span>
                        <div>
                            <p class="font-label-md text-label-md text-on-surface mb-1">{{
                                $t('common.technicalSpecs.continuousSync') }}</p>
                            <p class="font-body-sm text-body-sm text-text-muted">{{
                                $t('services.businessIntelligence.offerings.embedded.techSpecs.specs.exporting') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const publicUrl = usePublicUrl()
</script>
