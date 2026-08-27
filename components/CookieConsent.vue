<template>
  <Transition enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0">
    <div v-if="visible"
      class="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[60] bg-surface-container-high border border-border-subtle rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.24)] p-5">
      <div class="flex items-start gap-3 mb-4">
        <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-0.5">cookie</span>
        <div>
          <p class="font-label-md text-label-md text-on-surface mb-1">{{ $t('cookies.title') }}</p>
          <p class="font-body-sm text-body-sm text-text-muted">
            {{ $t('cookies.description') }}
            <NuxtLink to="/privacy-policy" class="text-primary hover:underline">{{ $t('footer.legal.privacyPolicy') }}</NuxtLink>.
          </p>
        </div>
      </div>
      <div class="flex gap-3 justify-end">
        <button @click="reject"
          class="px-4 py-2 rounded font-label-md text-label-md text-on-surface-variant border border-border-subtle hover:bg-surface-elevated transition-colors">
          {{ $t('cookies.reject') }}
        </button>
        <button @click="accept"
          class="px-4 py-2 rounded font-label-md text-label-md bg-primary-container text-on-primary hover:brightness-110 transition-all active:scale-95">
          {{ $t('cookies.accept') }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const COOKIE_KEY = 'bashpty_cookie_consent'

const visible = ref(false)

onMounted(() => {
  if (!localStorage.getItem(COOKIE_KEY)) {
    setTimeout(() => { visible.value = true }, 800)
  }
})

const accept = () => {
  localStorage.setItem(COOKIE_KEY, 'accepted')
  visible.value = false
}

const reject = () => {
  localStorage.setItem(COOKIE_KEY, 'rejected')
  visible.value = false
}
</script>
