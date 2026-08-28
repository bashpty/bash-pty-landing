<template>
    <main class="flex-grow pt-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16">
        <!-- Header -->
        <div class="mb-16 max-w-3xl">
            <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle mb-6">
                <span class="material-symbols-outlined text-primary text-sm">menu_book</span>
                <span class="font-code-sm text-code-sm text-text-muted uppercase tracking-wider">{{
                    $t('common.caseStudiesBadge') }}</span>
            </div>
            <h1 class="font-display-lg text-display-lg text-on-surface mb-4">{{ $t('caseStudies.title') }}</h1>
            <p class="font-body-lg text-body-lg text-text-muted">{{ $t('caseStudies.subtitle') }}</p>
        </div>

        <!-- Case Study Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-bento-gap mb-16">
            <div v-for="study in caseStudies" :key="study.id" class="bento-item rounded-xl p-8 flex flex-col">
                <div class="flex items-center gap-3 mb-6">
                    <div
                        class="w-10 h-10 rounded bg-surface-dim border border-border-subtle flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary text-sm">{{ study.icon }}</span>
                    </div>
                    <span class="font-code-sm text-code-sm text-text-muted uppercase tracking-wider">{{
                        $t(`caseStudies.items.${study.id}.category`) }}</span>
                </div>
                <h2 class="font-headline-md text-headline-md text-on-surface mb-3">{{
                    $t(`caseStudies.items.${study.id}.title`) }}</h2>
                <p class="font-body-md text-body-md text-text-muted flex-grow mb-6">{{
                    $t(`caseStudies.items.${study.id}.description`) }}</p>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div v-for="metric in study.metrics" :key="metric.key"
                        class="bg-surface-dim rounded-lg p-3 text-center">
                        <p class="font-headline-md text-headline-md text-secondary">{{
                            $t(`caseStudies.metrics.${study.id}.${metric.key}.value`) }}</p>
                        <p class="font-code-sm text-code-sm text-text-muted">{{
                            $t(`caseStudies.metrics.${study.id}.${metric.key}.label`) }}</p>
                    </div>
                </div>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in study.tags" :key="tag"
                        class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">{{ tag
                        }}</span>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="bento-item rounded-xl p-12 text-center">
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">{{ $t('caseStudies.cta.title') }}</h2>
            <p class="font-body-md text-body-md text-text-muted max-w-2xl mx-auto mb-8">{{
                $t('caseStudies.cta.subtitle') }}</p>
            <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-3 rounded font-label-md text-label-md hover:brightness-110 active:scale-95 glow-button">
                {{ $t('caseStudies.cta.button') }}
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
        </div>
    </main>
</template>

<script setup lang="ts">
const caseStudies = [
    { id: 'erp', icon: 'cable', metrics: [{ key: 'time' }, { key: 'accuracy' }], tags: ['n8n', 'Odoo', 'PostgreSQL'] },
    { id: 'bi', icon: 'bar_chart', metrics: [{ key: 'dashboards' }, { key: 'teams' }], tags: ['Metabase', 'dbt', 'BigQuery'] },
    { id: 'agents', icon: 'smart_toy', metrics: [{ key: 'tickets' }, { key: 'hours' }], tags: ['LLM', 'RAG', 'Vector DB'] },
    { id: 'ecommerce', icon: 'shopping_cart', metrics: [{ key: 'speed' }, { key: 'revenue' }], tags: ['Vue', 'Python', 'Webhooks'] },
]
</script>
