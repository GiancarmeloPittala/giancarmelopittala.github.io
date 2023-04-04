<template>
  <section id="about" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border border-gray-400 rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" name="material-symbols:person-2-outline-rounded" />
        <span>
          {{ $t('home.about.label') }}
        </span>
      </button>
    </div>
    <h3 class=" text-5xl font-light" v-html="$t('home.about.title')"></h3>
    <p class="text-gray-400" v-html="$t('home.about.description')"></p>
  </section>
</template>