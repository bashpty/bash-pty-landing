<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()

useHead({
  title: () => route.meta?.title ?? '',
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | ${app.tairo.title}`
      : `${app.tairo.title}`
  },
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/img/favicon.ico',
    },
  ],

  meta: [
    {
      name: 'description',
      content:
        'Desarrollo Web a medida y aplicaciones de alta calidad 🌎, Empujamos tu negocio hacia nuevo metaverso de la Tecnología | Agenda con nosotros!',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
})

useSeoMeta({
  title: 'Bash Pty',
  ogTitle: 'Bash Pty',
  ogDescription:
    'Desarrollo Web a medida y aplicaciones de alta calidad 🌎, Empujamos tu negocio hacia nuevo metaverso de la Tecnología | Agenda con nosotros!',
  description:
    'Desarrollo Web a medida y aplicaciones de alta calidad 🌎, Empujamos tu negocio hacia nuevo metaverso de la Tecnología | Agenda con nosotros!',
  ogImage: 'https://bashpty.com/img/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--color-primary-500)" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
