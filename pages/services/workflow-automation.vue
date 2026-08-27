<template>
    <main class="flex-grow pt-20">
        <!-- Hero -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
                <div class="space-y-6">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle">
                        <span class="w-2 h-2 rounded-full bg-secondary"></span>
                        <span class="font-code-sm text-code-sm text-text-muted uppercase tracking-wider">{{
                            $t('common.enterpriseAutomation') }}</span>
                    </div>
                    <h1 class="font-display-lg text-display-lg text-on-surface">
                        {{ $t('services.workflowAutomation.hero.title') }}
                    </h1>
                    <p class="font-body-lg text-body-lg text-text-muted max-w-xl">
                        {{ $t('services.workflowAutomation.hero.subtitle') }}
                    </p>
                    <div class="flex gap-4 pt-4">
                        <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                            class="bg-primary-container text-on-primary px-6 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 transition-all glow-button">
                            {{ $t('services.workflowAutomation.cta.ctaText') }}
                        </a>
                    </div>
                </div>
                <!-- n8n workflow demo video -->
                <div
                    class="relative bg-surface-card border border-border-subtle rounded-xl overflow-hidden">
                    <video class="w-full h-auto block" autoplay loop muted playsinline>
                        <source src="/n8n.mp4" type="video/mp4" />
                    </video>
                    <div class="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border-subtle px-4 py-2">
                        <p class="font-code-sm text-code-sm text-text-muted">// Executing workflow:
                            InvoiceProcessing_v2</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Core Principles -->
        <section
            class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding border-t border-border-subtle">
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-12">{{
                $t('services.workflowAutomation.solution.title') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
                <div class="bento-item rounded-xl p-8 flex flex-col">
                    <div
                        class="w-12 h-12 rounded bg-surface-dim border border-border-subtle flex items-center justify-center mb-6">
                        <span class="material-symbols-outlined text-primary">shield_lock</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-3">{{
                        $t('services.workflowAutomation.solution.sovereignty.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted flex-grow">{{
                        $t('services.workflowAutomation.solution.sovereignty.description') }}</p>
                </div>
                <div class="bento-item rounded-xl p-8 flex flex-col">
                    <div
                        class="w-12 h-12 rounded bg-surface-dim border border-border-subtle flex items-center justify-center mb-6">
                        <span class="material-symbols-outlined text-secondary">monitoring</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-3">{{
                        $t('services.workflowAutomation.solution.scale.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted flex-grow">{{
                        $t('services.workflowAutomation.solution.scale.description') }}</p>
                </div>
                <div class="bento-item rounded-xl p-8 flex flex-col">
                    <div
                        class="w-12 h-12 rounded bg-surface-dim border border-border-subtle flex items-center justify-center mb-6">
                        <span class="material-symbols-outlined text-primary">account_tree</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-3">{{
                        $t('services.workflowAutomation.solution.flexibility.title') }}</h3>
                    <p class="font-body-md text-body-md text-text-muted flex-grow">{{
                        $t('services.workflowAutomation.solution.flexibility.description') }}</p>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section class="bg-surface-dim border-y border-border-subtle py-section-padding">
            <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <h2 class="font-headline-lg text-headline-lg text-on-surface mb-12">{{
                    $t('services.workflowAutomation.offerings.title') }}</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                    <div class="bg-surface-card border border-border-subtle rounded-xl p-8 flex flex-col">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="material-symbols-outlined text-primary text-3xl">cable</span>
                            <h3 class="font-headline-md text-headline-md text-on-surface">{{
                                $t('services.workflowAutomation.offerings.development.title') }}</h3>
                        </div>
                        <p class="font-body-md text-body-md text-text-muted mb-6 flex-grow">{{
                            $t('services.workflowAutomation.offerings.development.intro') }}</p>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">Odoo</span>
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">Webhooks</span>
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">n8n</span>
                        </div>
                    </div>
                    <div class="bg-surface-card border border-border-subtle rounded-xl p-8 flex flex-col">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="material-symbols-outlined text-primary text-3xl">smart_toy</span>
                            <h3 class="font-headline-md text-headline-md text-on-surface">{{
                                $t('services.workflowAutomation.offerings.agents.title') }}</h3>
                        </div>
                        <p class="font-body-md text-body-md text-text-muted mb-6 flex-grow">{{
                            $t('services.workflowAutomation.offerings.agents.intro') }}</p>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">LLMs</span>
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">Vector
                                DBs</span>
                            <span
                                class="px-2 py-1 rounded bg-surface-variant text-text-muted font-code-sm text-code-sm">RAG</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonial -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding">
            <div
                class="bg-surface-card border border-border-subtle rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                <span class="material-symbols-outlined text-4xl text-primary mb-6 block">format_quote</span>
                <p class="font-headline-md text-headline-md text-on-surface mb-8 italic">"{{
                    $t('services.workflowAutomation.testimonial.quote') }}"</p>
                <p class="font-label-md text-label-md text-on-surface">{{
                    $t('services.workflowAutomation.testimonial.author') }}</p>
            </div>
        </section>

        <!-- CTA -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-padding">
            <div class="bg-surface-card border border-border-subtle rounded-xl p-12 text-center">
                <span class="material-symbols-outlined text-4xl text-primary mb-4 block">terminal</span>
                <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">{{
                    $t('services.workflowAutomation.cta.title') }}</h2>
                <a href="https://calendly.com/bashpty-507/30min" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-3 rounded font-label-md text-label-md hover:bg-inverse-primary active:scale-95 transition-all glow-button mt-6">
                    {{ $t('services.workflowAutomation.cta.ctaText') }}
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </section>
    </main>
</template>
