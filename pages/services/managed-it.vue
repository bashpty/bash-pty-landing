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
                        $t('services.managedIT.hero.badge') }}</span>
                </div>
                <h1 class="font-display-lg text-display-lg text-on-surface mb-6">{{
                    $t('services.managedIT.hero.title') }}</h1>
                <p class="font-body-lg text-body-lg text-text-muted mb-8">{{
                    $t('services.managedIT.hero.description') }}</p>
                <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-6 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 glow-button">
                    {{ $t('services.managedIT.hero.cta') }}
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </section>

        <!-- Feature bullets -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento-gap">
                <div v-for="(feature, index) in features" :key="index"
                    class="bento-item rounded-xl p-8 flex flex-col gap-4">
                    <div
                        class="w-12 h-12 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-primary flex-shrink-0">
                        <span class="material-symbols-outlined text-2xl">{{ feature.icon }}</span>
                    </div>
                    <div>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{ feature.title }}</h3>
                        <p class="font-body-md text-body-md text-text-muted">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Database Administration -->
        <section class="bg-surface-dim border-y border-border-subtle py-section-padding">
            <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div class="flex items-center gap-3 mb-4">
                    <div
                        class="w-12 h-12 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-primary flex-shrink-0">
                        <span class="material-symbols-outlined text-2xl">storage</span>
                    </div>
                    <h2 class="font-headline-lg text-headline-lg text-on-surface">{{
                        $t('services.managedIT.databases.title') }}</h2>
                </div>
                <p class="font-body-md text-body-md text-text-muted mb-10">{{
                    $t('services.managedIT.databases.description') }}</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
                    <!-- Relational -->
                    <div class="bento-item rounded-xl p-8">
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">table_chart</span>
                            {{ $t('services.managedIT.databases.relational.label') }}
                        </h3>
                        <ul class="flex flex-col gap-3">
                            <li v-for="item in relationalItems" :key="item"
                                class="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                                <span
                                    class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <!-- Non-relational -->
                    <div class="bento-item rounded-xl p-8">
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined text-secondary">hub</span>
                            {{ $t('services.managedIT.databases.nonRelational.label') }}
                        </h3>
                        <ul class="flex flex-col gap-3">
                            <li v-for="item in nonRelationalItems" :key="item"
                                class="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                                <span
                                    class="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding text-center">
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">{{
                $t('services.managedIT.hero.title') }}</h2>
            <p class="font-body-md text-body-md text-text-muted max-w-xl mx-auto mb-8">{{
                $t('services.managedIT.hero.description') }}</p>
            <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 glow-button">
                {{ $t('services.managedIT.hero.cta') }}
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
        </section>
    </main>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const features = computed(() =>
    (tm('services.managedIT.features') as Array<Record<string, string>>).map(f => ({
        title: rt(f.title),
        description: rt(f.description),
        icon: rt(f.icon),
    }))
)

const relationalItems = computed(() =>
    (tm('services.managedIT.databases.relational.items') as string[]).map(i => rt(i))
)

const nonRelationalItems = computed(() =>
    (tm('services.managedIT.databases.nonRelational.items') as string[]).map(i => rt(i))
)
</script>
