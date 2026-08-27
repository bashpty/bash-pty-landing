<template>
    <main class="flex-grow pt-20">
        <!-- Hero -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-24 border-b border-border-subtle">
            <div class="max-w-3xl">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle mb-6">
                    <span class="w-2 h-2 rounded-full bg-tertiary"></span>
                    <span class="font-code-sm text-code-sm text-text-muted uppercase tracking-wider">{{
                        $t('services.web3Lab.hero.badge') }}</span>
                </div>
                <h1 class="font-display-lg text-display-lg text-on-surface mb-6">{{
                    $t('services.web3Lab.hero.title') }}</h1>
                <p class="font-body-lg text-body-lg text-text-muted mb-8">{{
                    $t('services.web3Lab.hero.description') }}</p>
                <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-6 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 glow-button">
                    {{ $t('services.web3Lab.hero.cta') }}
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </section>

        <!-- Feature grid -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento-gap">
                <div v-for="(feature, index) in features" :key="index"
                    class="bento-item rounded-xl p-8 flex flex-col gap-4">
                    <div
                        class="w-12 h-12 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-tertiary flex-shrink-0">
                        <span class="material-symbols-outlined text-2xl">{{ feature.icon }}</span>
                    </div>
                    <div>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{ feature.title }}</h3>
                        <p class="font-body-md text-body-md text-text-muted">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- KYC Identity Verification Demo -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding">
            <div class="flex items-center gap-3 mb-4">
                <div
                    class="w-12 h-12 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-tertiary flex-shrink-0">
                    <span class="material-symbols-outlined text-2xl">badge</span>
                </div>
                <h2 class="font-headline-lg text-headline-lg text-on-surface">{{
                    $t('services.web3Lab.features[1].title') }}</h2>
            </div>
            <p class="font-body-md text-body-md text-text-muted mb-8">{{
                $t('services.web3Lab.features[1].description') }}</p>
            <div class="w-full rounded-xl overflow-hidden border border-border-subtle">
                <video
                    class="w-full h-auto block"
                    autoplay
                    loop
                    muted
                    playsinline>
                    <source src="/kyc.mp4" type="video/mp4" />
                </video>
            </div>
        </section>

        <!-- 3D VR Tour Demo -->
        <section class="bg-surface-dim border-y border-border-subtle py-section-padding">
            <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div class="flex items-center gap-3 mb-4">
                    <div
                        class="w-12 h-12 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-tertiary flex-shrink-0">
                        <span class="material-symbols-outlined text-2xl">view_in_ar</span>
                    </div>
                    <h2 class="font-headline-lg text-headline-lg text-on-surface">{{
                        $t('services.web3Lab.features[4].title') }}</h2>
                </div>
                <p class="font-body-md text-body-md text-text-muted mb-8">{{
                    $t('services.web3Lab.features[4].description') }}</p>
                <!-- Kuula 3D tour embed -->
                <div class="w-full rounded-xl overflow-hidden border border-border-subtle aspect-video">
                    <iframe
                        src="https://kuula.co/share/h8BVw?fs=1&vr=0&zoom=1&sd=1&thumbs=1&chromeless=0&logo=-1"
                        title="3D Virtual Tour"
                        allow="xr-spatial-tracking; gyroscope; accelerometer"
                        allowfullscreen
                        class="w-full h-full border-0">
                    </iframe>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding text-center border-t border-border-subtle">
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">{{
                $t('services.web3Lab.hero.title') }}</h2>
            <p class="font-body-md text-body-md text-text-muted max-w-xl mx-auto mb-8">{{
                $t('services.web3Lab.hero.description') }}</p>
            <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 glow-button">
                {{ $t('services.web3Lab.hero.cta') }}
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
        </section>
    </main>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const features = computed(() =>
    (tm('services.web3Lab.features') as Array<Record<string, string>>).map(f => ({
        title: rt(f.title),
        description: rt(f.description),
        icon: rt(f.icon),
    }))
)
</script>
