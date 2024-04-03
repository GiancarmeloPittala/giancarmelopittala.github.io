<template>
  <section id="portfolio" class="flex flex-col gap-10">
    <div>
      <button
        class="flex gap-2 items-center border border-gray-700 dark:border-gray-400 rounded-3xl px-3 py-1.5"
      >
        <Icon
          class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors"
          name="ic:twotone-house"
        />
        <span>
          {{ $t("home.portfolio.label") }}
        </span>
      </button>
    </div>
    <h3 class="text-3xl xl:text-5xl font-light">
      <span v-html="$t('home.portfolio.title')"></span>
      <span class="text-verde">
        {{ $t("home.portfolio.titleBold") }}
      </span>
    </h3>
    <div>
      <LazyHomePortfolioCard />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
