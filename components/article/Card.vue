<template>
  <article>
    <div class="flex gap-2 items-center dark:text-gray-400 p-2">
      <img class="w-14 h-14" :src="article.img" loading="lazy" :alt="article.alt">
      <div class="p-4">
        <h4 class>{{ article.title }}</h4>
      </div>
    </div>
  </article>
</template>


<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>