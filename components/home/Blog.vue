<template>
  <section id="blog" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border border-gray-700 dark:border-gray-400 rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors" name="carbon:blog" />
        <span>
          {{ $t('home.blog.label') }}
        </span>
      </button>
    </div>
    <div class="gap-8 xl:grid-cols-2 grid">
      <BaseLink :link="{ to: `/blog/articles/${String(article._path).split('/').slice(-1)}` }" v-for="article of articles"
        :key="article._path" class="w-full">
        <ArticleCard class="hover:dark:text-gray-50 hover:bg-gray-50 transition-all hover:translate-x-2 hover:dark:bg-black-400 rounded-xl" :article="article" />
      </BaseLink>
    </div>
  </section>
</template>


<script setup>
const { locale } = useI18n()

async function getLastArticle() {

  return await queryContent(`${locale.value === 'en' ? '' : `/${locale.value}`}/blog`, 'articles')
    .only(['_path', 'title', 'description', 'img', 'categories', 'alt'])
    .sort({ cAt: -1 })
    .limit(5)
    .find()

}

let articles = await getLastArticle()
watch(locale, async () => articles = await getLastArticle())
</script>