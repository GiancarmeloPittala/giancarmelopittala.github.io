<template>
  <div>
    <SchemaOrgWebPage name="Questo è un test" image="/my-image.png" />
    <SchemaOrgWebPage />

    <div class="blog-section">

      <ContentRenderer :value="doc">
        <div class="flex gap-8 flex-col lg:flex-row">
          <BaseImage :image="{ src: doc?.img, alt: doc?.alt }" class="max-w-[600px] max-h-[400px]" />
          <div class="flex flex-col gap-4">
            <div class="flex justify-between gap-4">
              <span title="Creato" class="flex gap-4 items-center">
                <Icon class="" name="material-symbols:alarm-add-outline-rounded" />
                {{ new Date(doc?.cAt).toLocaleString() }}
              </span>
              <span title="Ultimo aggiornamento" class="flex gap-4 items-center">
                <Icon class="" name="material-symbols:alarm-smart-wake-outline-rounded" />
                {{ new Date(doc?.uAt).toLocaleString() }}
              </span>
            </div>
            <h1 class="text-2xl xl:text-4xl ">{{ doc?.title }}</h1>
            <p>{{ doc?.description }}</p>
          </div>
        </div>
        <ContentRendererMarkdown :value="doc" />
      </ContentRenderer>
    </div>


  </div>
</template>


<script setup lang="ts">
const route = useRoute();
const { public: config } = useRuntimeConfig()
const doc = await queryContent(route.fullPath).findOne();

definePageMeta({
  layout: 'article'
});

const meta = computed(() => [
  ...useSiteMeta({
    title: doc.title ?? 'default',
    description: doc?.description,
    url: `${config.siteUrl}${route.params.slug}`,
    keywords: doc?.keywords || doc?.title?.trim(),
    mainImage: doc?.img,
  }),
  {
    property: "article:published_time",
    content: doc.cAt,
  },
  {
    property: "article:modified_time",
    content: doc.uAt,
  },
  {
    property: "article:tag",
    content: doc.tags ? doc.tags.toString() : "",
  },
  {
    property: "canonical",
    content: `${config.siteUrl}${route.fullPath}`,
  }
])

useHead({ meta,title: doc.title ?? 'default' });
</script>

<style lang="postcss">
.blog-section {
  @apply overflow-hidden;
}

.blog-section ul {
  @apply list-inside list-disc;
}

.blog-section strong {
  @apply text-primary;
}

.blog-section blockquote {
  @apply p-4 bg-[#090302] rounded-xl
}

.blog-section h2,
.blog-section h3,
.blog-section h4,
.blog-section h5 {
  @apply text-gray-50;
}

.blog-section pre {
  @apply border border-gray-400 p-8 rounded-xl;
}

.blog-section p {
  @apply text-gray-300;
}

.blog-section>*>* {
  @apply my-6;
}

.blog-section h2 {
  @apply text-4xl;
}

.blog-section h3 {
  @apply text-3xl;
}
</style>