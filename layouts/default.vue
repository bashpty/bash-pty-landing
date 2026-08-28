<template>
  <div>
    <Header />
    <main class="pb-24 md:pb-0">
      <slot />
    </main>
    <Footer />
    <MobileNav />
    <ScrollToTop />
    <CookieConsent />
  </div>
</template>
