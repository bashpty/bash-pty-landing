<template>
  <Transition enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
    <button v-if="visible" @click="scrollToTop" aria-label="Back to top"
      class="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 w-11 h-11 rounded-full bg-primary-container text-on-primary shadow-lg flex items-center justify-center hover:brightness-110 active:scale-95 transition-all duration-200">
      <span class="material-symbols-outlined text-xl">arrow_upward</span>
    </button>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > window.innerHeight * 0.6
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>
