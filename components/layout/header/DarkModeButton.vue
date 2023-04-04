<template>
  <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-900 " >
    <Icon @click="$colorMode.preference = 'dark'" class="w-[24px] h-[24px] text-yellow-500" 
    v-if="$colorMode.preference == 'ligth' " name="material-symbols:sunny-rounded" />
    <Icon @click="$colorMode.preference = 'ligth'" class="w-[24px] h-[24px]" 
    v-else name="ri:moon-line" />
  </button>
</template>


<script setup>
</script>