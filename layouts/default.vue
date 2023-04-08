<template>
  <div>
    <main class="dark:bg-black dark:text-gray-200 text-black min-h-screen">
      <div class="flex flex-col xl:flex-row gap-8 relative py-16 xl:py-20 transition-all px-8 xl:pl-14">
        <div >
          <HomeCard />
        </div>
        <div class="flex-1 xl:pl-40 xl:pr-24">
          <slot />
        </div>
        <div>
          <HomeSideMenu />
        </div>
      </div>
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