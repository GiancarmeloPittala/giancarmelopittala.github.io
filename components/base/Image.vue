<template>
  <img loading="lazy" v-bind="{ ...$attrs }" :src="`${image.src}`" :alt="image.alt" />
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})

</script>