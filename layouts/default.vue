<template>
  <div class="flex flex-col xl:flex-row gap-8 relative py-16 xl:py-20 transition-all px-8 xl:pl-14">
    <div>
      <HomeCard />
    </div>
    <div class="flex-1 xl:pl-28 xl:pr-24">
      <slot />
    </div>
    <main>
      <HomeSideMenu />
    </main>
  </div>
</template>

<script setup>
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale
  }
})
</script>
