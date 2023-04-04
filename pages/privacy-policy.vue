<template>
  <div class="privacy-policy">
    <ContentDoc>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </div>
</template>


<style lang="postcss">
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