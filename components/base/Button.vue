<template>
  <button 
    class="rounded-lg px-4 py-2 overflow-hidden relative group cursor-pointer border-2 font-semibold  transition-colors"
    :class="color_style[color]" v-bind="{ ...$attrs }" >
      <slot />
  </button>
</template>


<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>
<script setup>
const props = defineProps({
  color: {
    typeof: String,
    default: 'primary'
  }
})

const color_style = ref({
  primary: 'border-primary-900 hover:bg-verde hover:text-black text-verde',
  green: 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-gray-50',
  blue: 'border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-gray-50',
  white: 'border-gray-50 hover:bg-gray-50 hover:text-gray-900',
  red: 'dark:border-gray-50 dark:text-gray-50 hover:dark:bg-transparent border-primary text-verde  hover:bg-verde hover:text-gray-50 dark:hover:text-verde dark:hover:bg-gray-50',
})
</script>