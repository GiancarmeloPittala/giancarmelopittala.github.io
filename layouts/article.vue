<template>
  <div>
    <main class="dark:bg-black dark:text-gray-200 text-black min-h-screen">
      <div class="flex flex-col gap-8 xl:flex-row relative pt-16 xl:pt-20 transition-all px-8 xl:pl-14">
        <div class="flex-1 pr-0 sm:pr-24 xl:pr-0">
          <slot />
        </div>
        <div class="xl:pr-24 max-w-[600px]">
          <div class="grid gap-8">
            <div>
              <button class="flex gap-2 items-center border border-gray-400 rounded-3xl px-3 py-1.5">
                <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-primary transition-colors"
                  name="material-symbols:drive-file-rename-outline-outline" />
                <span>
                  {{ $t('article.lastArticle') }}
                </span>
              </button>
            </div>
            <BaseLink :link="{ to: `/blog/articles/${String(article._path).split('/').slice(-1)}` }"
              v-for="article of articles" :key="article._path">
              <ArticleCard class="hover:text-gray-50 transition-all hover:translate-x-2 hover:bg-black-400 rounded-xl"
                :article="article" />
            </BaseLink>

          </div>

        </div>
        <HomeSideMenu />
      </div>
    </main>

  </div>
</template>


<script setup>
const { locale } = useI18n()

async function getLastArticle() {
  
  return await queryContent(`${locale.value === 'en' ? '' : `/${locale.value}` }/blog`, 'articles')
    .only(['_path', 'title', 'description', 'img', 'categories', 'alt'])
    .sort({ cAt: -1 })
    .limit(5)
    .find()

}

let articles =  await getLastArticle()
watch(locale, async () => articles = await getLastArticle())

useHead({
  htmlAttrs: {
    lang: locale
  }
})



</script>