<template>
  <button class="rounded-full flex items-center" >
    <Icon @click="$colorMode.preference = 'dark'" class="w-[18px] h-[18px] text-yellow-500" 
    v-if="$colorMode.preference == 'ligth' " name="material-symbols:sunny-rounded" />
    <Icon @click="$colorMode.preference = 'ligth'" class="w-[18px] h-[18px]" 
    v-else name="ri:moon-line" />
  </button>
</template>


<script setup>
</script>