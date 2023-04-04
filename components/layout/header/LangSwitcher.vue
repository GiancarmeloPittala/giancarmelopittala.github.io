<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const open = ref(false)
</script>


<template>
  <div class="relative">

    <nuxt-link :to="switchLocalePath(availableLocales[0].code)"
      class="group flex w-full items-center rounded-md px-2 py-2 text-sm">
      <!-- <Icon name="material-symbols:language" class="h-5 w-5" /> -->
      <Icon class="mr-2 h-5 w-5 " aria-hidden="true" :name="availableLocales[0].icon" />
      {{ availableLocales[0].name }}
    </nuxt-link>

  </div>
</template>