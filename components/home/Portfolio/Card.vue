<template>
  <div class="flex gap-8">
    <NuxtImg
      width="400"
      src="/images/beatone.webp"
      sizes="100vw sm:50vw md:400px"
      quality="80"
      format="webp"
      fit="cover"
      preload
      loading="lazy"
    />
    <div class="flex flex-col gap-4">
      <h3 class="text-xl font-semibold">BeAtOne</h3>
      <p>Beatone mexican pub</p>
      <div>
        <UButton variant="ghost" color="blue" class="border border-blue-400"
          >Wordpress</UButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
