<template>
  <div role="status" class="animate-pulse">
    <span class="sr-only">Loading...</span>
    <div :style="{ maxWidth: `${Math.random() * 70 + 30}%` }" v-for="n of Math.ceil(Math.random() * 30 + 20)"
      class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  </div>
</template>