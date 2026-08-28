<template>
    <main class="flex-grow pt-20">
        <!-- Hero -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-24 border-b border-border-subtle">
            <div class="max-w-3xl">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle mb-6">
                    <span class="w-2 h-2 rounded-full bg-primary"></span>
                    <span class="font-code-sm text-code-sm text-text-muted uppercase tracking-wider">{{
                        $t('common.customEngineering') }}</span>
                </div>
                <h1 class="font-display-lg text-display-lg text-on-surface mb-6">{{
                    $t('services.customSoftware.hero.title') }}</h1>
                <p class="font-body-lg text-body-lg text-text-muted mb-8">{{
                    $t('services.customSoftware.hero.description') }}</p>
                <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-6 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 glow-button">
                    {{ $t('services.customSoftware.cta.button') }}
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </section>

        <!-- Key Features -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding">
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-12">{{
                $t('services.customSoftware.solution.title') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
                <div class="bento-item rounded-xl p-8">
                    <span class="material-symbols-outlined text-primary mb-4 block text-3xl">code_blocks</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                        $t('services.customSoftware.solution.features.feature1.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted">{{
                        $t('services.customSoftware.solution.features.feature1.description') }}</p>
                </div>
                <div class="bento-item rounded-xl p-8">
                    <span class="material-symbols-outlined text-secondary mb-4 block text-3xl">palette</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                        $t('services.customSoftware.solution.features.feature2.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted">{{
                        $t('services.customSoftware.solution.features.feature2.description') }}</p>
                </div>
                <div class="bento-item rounded-xl p-8">
                    <span class="material-symbols-outlined text-tertiary mb-4 block text-3xl">rocket_launch</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                        $t('services.customSoftware.solution.features.feature3.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted">{{
                        $t('services.customSoftware.solution.features.feature3.description') }}</p>
                </div>
                <div class="bento-item rounded-xl p-8">
                    <span class="material-symbols-outlined text-primary mb-4 block text-3xl">architecture</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                        $t('services.customSoftware.solution.features.feature4.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted">{{
                        $t('services.customSoftware.solution.features.feature4.description') }}</p>
                </div>
            </div>
        </section>

        <!-- Technology Stack -->
        <section class="bg-surface-dim border-y border-border-subtle py-section-padding">
            <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <h2 class="font-headline-lg text-headline-lg text-on-surface mb-12">{{
                    $t('services.customSoftware.technologies.title') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento-gap">
                    <div v-for="tech in technologies" :key="tech.key"
                        class="bg-surface-card border border-border-subtle rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <img :src="publicUrl(`/${tech.key}.svg`)" :alt="tech.name"
                                class="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0" />
                            <h3 class="font-headline-md text-headline-md text-on-surface">{{ tech.name }}</h3>
                        </div>
                        <p class="font-body-sm text-body-sm text-text-muted">{{
                            $t(`services.customSoftware.technologies.${tech.key}.dev`) }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding text-center">
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">{{
                $t('services.customSoftware.cta.title') }}</h2>
            <p class="font-body-md text-body-md text-text-muted max-w-xl mx-auto mb-8">{{
                $t('services.customSoftware.cta.description') }}</p>
            <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 glow-button">
                {{ $t('services.customSoftware.cta.button') }}
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
        </section>
    </main>
</template>

<script setup lang="ts">
const publicUrl = usePublicUrl()
const technologies = [
    { key: 'vue', name: 'Vue / Nuxt' },
    { key: 'react', name: 'React' },
    { key: 'java', name: 'Java / Spring' },
    { key: 'python', name: 'Python' },
    { key: 'dotnet', name: '.NET' },
    { key: 'flutter', name: 'Flutter' },
]
</script>
