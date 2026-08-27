<template>
    <!-- Mobile-only floating bottom nav -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
        <div
            class="relative bg-surface/95 backdrop-blur-md border border-border-subtle rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-between px-4 h-16">

            <!-- Left nav items -->
            <NuxtLink v-for="link in leftLinks" :key="link.to" :to="link.to"
                class="flex flex-col items-center gap-0.5 flex-1 py-2 group"
                active-class="[&_.nav-label]:text-primary [&_.nav-icon]:text-primary">
                <span
                    class="material-symbols-outlined nav-icon text-[22px] text-on-surface-variant transition-colors group-hover:text-primary">
                    {{ link.icon }}
                </span>
                <span
                    class="nav-label font-label-sm text-[10px] text-on-surface-variant transition-colors group-hover:text-primary whitespace-nowrap">
                    {{ $t(link.key) }}
                </span>
            </NuxtLink>

            <!-- Center floating action button -->
            <div class="relative flex items-center justify-center mx-2">
                <button @click="menuOpen = !menuOpen"
                    class="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(29,85,178,0.35)] transition-all duration-200 active:scale-95"
                    :class="menuOpen
                        ? 'bg-primary text-on-primary'
                        : 'bg-gradient-to-br from-[#002d6d] to-primary text-white'">
                    <span class="material-symbols-outlined text-[22px] transition-transform duration-300"
                        :class="menuOpen ? 'rotate-90' : ''">
                        {{ menuOpen ? 'close' : 'menu' }}
                    </span>
                </button>
            </div>

            <!-- Right nav items -->
            <NuxtLink v-for="link in rightLinks" :key="link.to" :to="link.to"
                class="flex flex-col items-center gap-0.5 flex-1 py-2 group"
                active-class="[&_.nav-label]:text-primary [&_.nav-icon]:text-primary">
                <span
                    class="material-symbols-outlined nav-icon text-[22px] text-on-surface-variant transition-colors group-hover:text-primary">
                    {{ link.icon }}
                </span>
                <span
                    class="nav-label font-label-sm text-[10px] text-on-surface-variant transition-colors group-hover:text-primary whitespace-nowrap">
                    {{ $t(link.key) }}
                </span>
            </NuxtLink>
        </div>

        <!-- Expanded menu overlay -->
        <Transition enter-active-class="transition-all duration-200 ease-out" enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2">
            <div v-if="menuOpen" class="absolute bottom-full left-0 right-0 mb-2">
                <div
                    class="bg-surface/97 backdrop-blur-md border border-border-subtle rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
                    <NuxtLink v-for="link in allLinks" :key="link.to" :to="link.to" @click="menuOpen = false"
                        class="flex items-center gap-3 px-5 py-3.5 border-b border-border-subtle last:border-0 hover:bg-surface-elevated transition-colors"
                        active-class="text-primary bg-surface-elevated">
                        <span class="material-symbols-outlined text-[20px] text-on-surface-variant">{{ link.icon
                        }}</span>
                        <span class="font-label-md text-label-md text-on-surface">{{ $t(link.key) }}</span>
                    </NuxtLink>
                </div>
            </div>
        </Transition>

        <!-- Backdrop to close menu -->
        <div v-if="menuOpen" class="fixed inset-0 -z-10" @click="menuOpen = false" />
    </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const route = useRoute()

// Close menu on navigation
watch(() => route.path, () => { menuOpen.value = false })

const leftLinks = [
    { key: 'mobileNav.home', to: '/', icon: 'home' },
    { key: 'mobileNav.automation', to: '/services/workflow-automation', icon: 'schema' },
]

const rightLinks = [
    { key: 'mobileNav.intelligence', to: '/services/business-intelligence', icon: 'bar_chart' },
    { key: 'mobileNav.contact', to: '/contact', icon: 'mail' },
]

const allLinks = [
    { key: 'mobileNav.home', to: '/', icon: 'home' },
    { key: 'mobileNav.automation', to: '/services/workflow-automation', icon: 'schema' },
    { key: 'mobileNav.intelligence', to: '/services/business-intelligence', icon: 'bar_chart' },
    { key: 'mobileNav.customStack', to: '/services/custom-software', icon: 'code_blocks' },
    { key: 'mobileNav.managedIT', to: '/services/managed-it', icon: 'dns' },
    { key: 'mobileNav.strategicGrowth', to: '/services/strategic-growth', icon: 'trending_up' },
    { key: 'mobileNav.emergingTech', to: '/services/emerging-tech', icon: 'hub' },
    { key: 'mobileNav.caseStudies', to: '/case-studies', icon: 'menu_book' },
    { key: 'mobileNav.contact', to: '/contact', icon: 'mail' },
]
</script>
