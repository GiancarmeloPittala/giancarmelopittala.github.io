<template>
  <section id="about" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border border-gray-700 dark:border-gray-400 rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors"
          name="material-symbols:person-2-outline-rounded" />
        <span>
          {{ $t('home.about.label') }}
        </span>
      </button>
    </div>
    <h3 class="text-3xl xl:text-5xl font-light">
      <span v-html="$t('home.about.title')"></span>
      <span class="text-verde">
        {{ $t('home.about.titleBold') }}
      </span>
    </h3>
    <p class="dark:text-gray-400" v-html="$t('home.about.description')"></p>
  </section>
</template>