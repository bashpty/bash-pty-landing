<script setup lang="ts">
useSeoMeta({
  ogUrl: 'https://bashpty.com',
  ogImage: 'https://bashpty.com/img/og.png',
  ogTitle: 'Bash Pty',
  ogDescription:
    'Desarrollo Web a medida y aplicaciones de alta calidad 🇵🇦 -> 🌎, Empujamos tu negocio hacia nuevo metaverso de la Tecnología | Agenda con nosotros!',
})
definePageMeta({
  title: 'Bash Pty',
  ogDescription:
    'Desarrollo Web a medida y aplicaciones de alta calidad 🇵🇦 -> 🌎, Empujamos tu negocio hacia nuevo metaverso de la Tecnología | Agenda con nosotros!',
  breadcrumb: {
    label: 'Bash Pty',
  },
  layout: 'landing',
})
</script>

<template>
  <div>
    <LandingContent />
    <LandingFooter />
  </div>
</template>
