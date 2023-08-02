<template>
  <div class="privacy-policy">
    <ContentRenderer :value="doc" />
  </div>
</template>


<script setup lang="ts">
const route = useRoute();
console.log( route.fullPath )
const doc = await queryContent(route.fullPath).findOne();

</script>


<style>
.privacy-policy h1{
  @apply text-5xl;
}
.privacy-policy h2{
  @apply text-4xl;
}
.privacy-policy h1,h2,p,ul{
  @apply my-9;
}

.privacy-policy ul{
  @apply list-disc list-inside
}
</style>