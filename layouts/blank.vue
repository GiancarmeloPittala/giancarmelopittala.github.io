<template>
  <div>
    <slot />
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