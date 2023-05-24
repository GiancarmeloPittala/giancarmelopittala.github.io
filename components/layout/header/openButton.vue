<template>
  <button class="group block transition-colors hover:border-primary dark:text-gray-400 w-12 h-12 relative focus:outline-none border border-gray-400 rounded-full">
    <span class="sr-only">Open main menu</span>
    <div class="block w-5 absolute left-1/2 top-1/2  transform  -translate-x-1/2 -translate-y-1/2">
      <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current group-hover:bg-primary transform transition duration-500 ease-in-out"
        :class="{'rotate-45': modelValue,' -translate-y-1.5': !modelValue }"></span>
      <span aria-hidden="true"
        class="block absolute  h-0.5 w-5 bg-current group-hover:bg-primary transform transition duration-500 ease-in-out"
        :class="{'opacity-0': modelValue } "></span>
      <span aria-hidden="true"
        class="block absolute  h-0.5 w-5 bg-current group-hover:bg-primary transform  transition duration-500 ease-in-out"
        :class="{'-rotate-45': modelValue, ' translate-y-1.5': !modelValue}"></span>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({ modelValue: Boolean })
const emit = defineEmits(["update:modelValue"]);
</script>