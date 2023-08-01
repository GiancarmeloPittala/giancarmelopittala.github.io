<template>
  <section id="service" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border border-gray-700 dark:border-gray-400 rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors" name="ri:file-paper-2-fill" />
        <span v-text="$t('home.service.label')"></span>
      </button>
    </div>
    <h3 class=" text-3xl xl:text-5xl font-light">
      <span v-html="$t('home.service.title')"></span> 
      <span class="text-verde">
        {{ $t('home.service.titleBold') }}
      </span>
    </h3>

    <p class="dark:text-gray-400" v-html="$t('home.service.description')"></p>

    <div class="grid gap-3">
      <div v-for="service in 7" :key="service" class="p-12 hover:border-primary transition-colors border border-gray-400 rounded-3xl grid gap-6">
        
        <div class="flex justify-between items-center">
          <h4 v-html="$t(`home.service.services[${service - 1}].title`)"></h4>
          <Icon class="w-8 h-8 text-verde" :name="$t(`home.service.services[${service - 1}].icon`)" />
        </div>
        <p class="dark:text-gray-400" v-html="$t(`home.service.services[${service - 1}].description`)">
        </p>
      </div>
    </div>

  </section>
</template>