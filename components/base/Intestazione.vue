<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
        <span v-if="intestazione.name" data-aos="fade-right" class="mb-2 block text-lg font-semibold text-primary dark:text-secondary ">
          {{ intestazione.name }}
        </span>
        <h2 v-if="intestazione.title" data-aos="fade-right" data-aos-delay="100" class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
          {{ intestazione.title }}
          <span>{{ $ }}</span>
        </h2>
        <p v-if="intestazione.description" v-html="intestazione.description" data-aos="fade-right" data-aos-delay="120" class="text-base text-body-color"></p>
      </div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  intestazione: {
    type: Object,
    default: () => ({
      name: String,
      title: String,
      description: String,
    })
  }
})

</script>