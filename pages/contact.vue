<template>
    <main class="flex-grow pt-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <!-- Header -->
        <div class="mb-12 max-w-3xl">
            <h1 class="font-display-lg text-display-lg text-on-surface mb-4">{{ $t('contact.title') }}</h1>
            <p class="font-body-lg text-body-lg text-text-muted">{{ $t('contact.subtitle') }}</p>
        </div>

        <!-- Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-bento-gap">
            <!-- Form -->
            <div class="lg:col-span-8">
                <div class="bg-surface-card border border-border-subtle rounded-lg p-6 md:p-8">
                    <form class="space-y-6" @submit.prevent="handleSubmit">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="block font-label-md text-label-md text-on-surface-variant"
                                    for="fullName">{{ $t('contact.form.fullName') }}</label>
                                <input v-model="form.name"
                                    class="w-full bg-background border border-border-subtle rounded px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary transition-colors"
                                    id="fullName" placeholder="Jane Doe" type="text" required />
                            </div>
                            <div class="space-y-2">
                                <label class="block font-label-md text-label-md text-on-surface-variant"
                                    for="workEmail">{{ $t('contact.form.workEmail') }}</label>
                                <input v-model="form.email"
                                    class="w-full bg-background border border-border-subtle rounded px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary transition-colors"
                                    id="workEmail" placeholder="jane@company.com" type="email" required />
                            </div>
                            <div class="space-y-2">
                                <label class="block font-label-md text-label-md text-on-surface-variant" for="phone">{{
                                    $t('contact.form.phone') }}</label>
                                <input v-model="form.phone"
                                    class="w-full bg-background border border-border-subtle rounded px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary transition-colors"
                                    id="phone" placeholder="+1 (555) 000-0000" type="tel" />
                            </div>
                            <div class="space-y-2">
                                <label class="block font-label-md text-label-md text-on-surface-variant"
                                    for="company">{{ $t('contact.form.companyName') }}</label>
                                <input v-model="form.company"
                                    class="w-full bg-background border border-border-subtle rounded px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary transition-colors"
                                    id="company" placeholder="Acme Corp" type="text" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="block font-label-md text-label-md text-on-surface-variant" for="interest">{{
                                $t('contact.form.service') }}</label>
                            <div class="relative">
                                <select v-model="form.service"
                                    class="w-full bg-background border border-border-subtle rounded px-4 py-3 text-on-surface font-body-md appearance-none focus:outline-none focus:border-primary transition-colors"
                                    id="interest">
                                    <option value="">{{ $t('contact.form.selectService') }}</option>
                                    <option value="automation">{{ $t('contact.serviceOptions.automation') }}</option>
                                    <option value="intelligence">{{ $t('contact.serviceOptions.intelligence') }}
                                    </option>
                                    <option value="custom">{{ $t('contact.serviceOptions.custom') }}</option>
                                    <option value="audit">{{ $t('contact.serviceOptions.audit') }}</option>
                                </select>
                                <span
                                    class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="block font-label-md text-label-md text-on-surface-variant" for="message">{{
                                $t('contact.form.projectDetails') }}</label>
                            <textarea v-model="form.message"
                                class="w-full bg-background border border-border-subtle rounded px-4 py-3 text-on-surface font-body-md resize-none focus:outline-none focus:border-primary transition-colors"
                                id="message"
                                placeholder="Briefly describe your current infrastructure challenges and goals..."
                                rows="5"></textarea>
                        </div>

                        <button
                            class="bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded flex items-center gap-2 hover:bg-inverse-primary active:scale-95 transition-all glow-button"
                            type="submit">
                            {{ $t('contact.form.submit') }}
                            <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-4 space-y-bento-gap">
                <div class="bg-surface-card border border-border-subtle rounded-lg p-6">
                    <div class="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-primary"
                            style="font-variation-settings: 'FILL' 1">shield_locked</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                        $t('contact.sidebar.sovereignty.title') }}</h3>
                    <p class="font-body-sm text-body-sm text-text-muted">{{
                        $t('contact.sidebar.sovereignty.description') }}</p>
                </div>
                <div class="bg-surface-card border border-border-subtle rounded-lg p-6">
                    <div class="w-10 h-10 rounded bg-secondary-container/20 flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-secondary"
                            style="font-variation-settings: 'FILL' 1">dns</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{
                        $t('contact.sidebar.resilience.title') }}</h3>
                    <p class="font-body-sm text-body-sm text-text-muted">{{ $t('contact.sidebar.resilience.description')
                        }}</p>
                </div>
                <div class="bg-surface-card border border-border-subtle rounded-lg p-6 space-y-6">
                    <div class="flex items-start gap-4">
                        <span class="material-symbols-outlined text-on-surface-variant mt-1">mail</span>
                        <div>
                            <div
                                class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1 text-[10px]">
                                {{ $t('contact.sidebar.email.label') }}</div>
                            <a class="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                                :href="`mailto:${$t('contact.sidebar.email.value')}`">{{
                                    $t('contact.sidebar.email.value') }}</a>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <span class="material-symbols-outlined text-on-surface-variant mt-1">location_on</span>
                        <div>
                            <div
                                class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1 text-[10px]">
                                {{ $t('contact.sidebar.location.label') }}</div>
                            <div class="font-body-md text-body-md text-on-surface">{{
                                $t('contact.sidebar.location.value') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const form = reactive({ name: '', email: '', phone: '', company: '', service: '', message: '' })

function handleSubmit() {
    // Form submission placeholder
    console.log('Form submitted', form)
}
</script>
