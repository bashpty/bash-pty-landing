<template>
    <main class="flex-grow pt-20">
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-24">
            <div class="max-w-3xl mx-auto">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle mb-6">
                    <span class="w-2 h-2 rounded-full bg-primary"></span>
                    <span class="font-code-sm text-code-sm text-text-muted uppercase tracking-wider">Legal</span>
                </div>
                <h1 class="font-display-lg text-display-lg text-on-surface mb-4">{{ $t('footer.legal.termsAndConditions') }}</h1>
                <p class="font-body-sm text-body-sm text-text-muted mb-12">{{ $t('legal.lastUpdated') }}</p>

                <div class="prose-content space-y-10">
                    <p class="font-body-md text-body-md text-text-muted">{{ $t('legal.terms.intro') }}</p>

                    <div v-for="(section, i) in $tm('legal.terms.sections')" :key="i" class="space-y-3">
                        <h2 class="font-headline-md text-headline-md text-on-surface">{{ $rt(section.title) }}</h2>
                        <p class="font-body-md text-body-md text-text-muted whitespace-pre-line">{{ $rt(section.body) }}</p>
                        <ul v-if="section.items" class="space-y-2 pl-4">
                            <li v-for="(item, j) in section.items" :key="j"
                                class="flex items-start gap-2 font-body-sm text-body-sm text-text-muted">
                                <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                                {{ $rt(item) }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
