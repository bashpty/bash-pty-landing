<template>
    <main class="flex-grow pt-20">
        <!-- Hero -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-24 border-b border-border-subtle">
            <div class="max-w-3xl">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle mb-6">
                    <span class="w-2 h-2 rounded-full bg-secondary"></span>
                    <span class="font-code-sm text-code-sm text-text-muted uppercase tracking-wider">{{
                        $t('services.digitalMarketing.hero.badge') }}</span>
                </div>
                <h1 class="font-display-lg text-display-lg text-on-surface mb-6">{{
                    $t('services.digitalMarketing.hero.title') }}</h1>
                <p class="font-body-lg text-body-lg text-text-muted mb-8">{{
                    $t('services.digitalMarketing.hero.description') }}</p>
                <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-6 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 glow-button">
                    {{ $t('services.digitalMarketing.hero.cta') }}
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </section>

        <!-- Feature bullets -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
                <div v-for="(feature, index) in features" :key="index"
                    class="bento-item rounded-xl p-8 flex flex-col gap-4">
                    <div
                        class="w-12 h-12 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-secondary flex-shrink-0">
                        <span class="material-symbols-outlined text-2xl">{{ feature.icon }}</span>
                    </div>
                    <div>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{ feature.title }}</h3>
                        <p class="font-body-md text-body-md text-text-muted">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding text-center border-t border-border-subtle">
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">{{
                $t('services.digitalMarketing.hero.title') }}</h2>
            <p class="font-body-md text-body-md text-text-muted max-w-xl mx-auto mb-8">{{
                $t('services.digitalMarketing.hero.description') }}</p>
            <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 glow-button">
                {{ $t('services.digitalMarketing.hero.cta') }}
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
        </section>
    </main>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const features = computed(() =>
    (tm('services.digitalMarketing.features') as Array<Record<string, string>>).map(f => ({
        title: rt(f.title),
        description: rt(f.description),
        icon: rt(f.icon),
    }))
)
</script>
