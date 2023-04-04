<template>
  <NuxtLink :to="localPath(link.to)" v-bind="{ ...$attrs }">
    <slot>
      {{ link.text }} 
    </slot>
  </NuxtLink>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    default: null,
    required: true
  }
})
const localPath = useLocalePath()
</script>




<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>