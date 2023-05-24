<template>
  <section id="portfolio" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border border-gray-700 dark:border-gray-400 rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-primary transition-colors" name="ic:twotone-house" />
        <span>
          {{ $t('home.portfolio.label') }}
        </span>
      </button>
    </div>
    <h3 class=" text-3xl xl:text-5xl font-light">
      <span v-html="$t('home.portfolio.title')"></span>
      <span class="text-primary">
        {{ $t('home.portfolio.titleBold') }}
      </span>
    </h3>
    <div class="grid gap-8 gap-y-12 md:grid-cols-2">

      <div class="group">
        <a class="relative" href="https://beatone.it" target="_blank" rel="noopener noreferrer">
          <img class="aspect-square object-left-top" loading="lazy" alt="work beatone"
            src="/images/beatone.webp" />
          <span class="absolute bottom-5 left-5 gap-2 flex">
            <span
              class="dark:bg-gray-900 bg-gray-50 py-1.5 transition-colors px-3 rounded-xl border group-hover:dark:text-gray-100 border-gray-900">wordpress</span>
          </span>
        </a>
        <p class="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
          website + menu
        </p>
      </div>

      <div class="group">
        <a class="relative" href="https://icecreambar.it/" target="_blank" rel="noopener noreferrer">
          <img class="aspect-square object-left-top" loading="lazy" alt="work icecreambar"
            src="/images/icecreambar.webp" />
          <span class="absolute bottom-5 left-5 gap-2 flex">
            <span
              class="dark:bg-gray-900 bg-gray-50 py-1.5 transition-colors px-3 rounded-xl border group-hover:dark:text-gray-100 border-gray-900">wordpress</span>
          </span>
        </a>
        <p class="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
          website + menu
        </p>
      </div>

      <div class="group">
        <a class="relative" href="https://salvobeatoparrucchieri.com" target="_blank" rel="noopener noreferrer">
          <img class="aspect-square object-left-top" loading="lazy" alt="work salvobeatoparrucchieri"
            src="/images/salvobeatoparrucchieri.webp" />
          <span class="absolute bottom-5 left-5 gap-2 flex">
            <span
              class="dark:bg-gray-900 bg-gray-50 py-1.5 transition-colors px-3 rounded-xl border group-hover:dark:text-gray-100 border-gray-900">Nuxt
              3</span>
            <span
              class="dark:bg-gray-900 bg-gray-50 py-1.5 transition-colors px-3 rounded-xl border group-hover:dark:text-gray-100 border-gray-900">Strapi</span>
          </span>
        </a>
        <p class="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
          Landing page + Blog
        </p>
      </div>

      <div class="group">
        <a class="relative" href="https://codiceunicotributario.it" target="_blank" rel="noopener noreferrer ">
          <img class="aspect-square object-left-top" loading="lazy" alt="work codiceunico tributario" src="/images/codiceunicotributario.webp" />
          <span class="absolute bottom-5 left-5 gap-2 flex">
            <span
              class="dark:bg-gray-900 bg-gray-50 py-1.5 transition-colors px-3 rounded-xl border group-hover:dark:text-gray-100 border-gray-900">Nuxt
              2</span>
            <span
              class="dark:bg-gray-900 bg-gray-50 py-1.5 transition-colors px-3 rounded-xl border group-hover:dark:text-gray-100 border-gray-900">Node
              js</span>
          </span>
        </a>
        <p class="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
          Web app + Dasboard
        </p>
      </div>

      <div class="group">
        <a class="relative " href="https://rs-sync.relax4me.ovh" target="_blank" rel="noopener noreferrer">
          <img class="aspect-square object-left-top" loading="lazy" alt="work relax to shopify connector" src="/images/rs_connect.webp" />
          <span class="absolute bottom-5 left-5 gap-2 flex">
            <span
              class="dark:bg-gray-900 bg-gray-50 py-1.5 transition-colors px-3 rounded-xl border group-hover:dark:text-gray-100 border-gray-900">Nuxt
              3</span>
            <span
              class="dark:bg-gray-900 bg-gray-50 py-1.5 transition-colors px-3 rounded-xl border group-hover:dark:text-gray-100 border-gray-900">Node
              js</span>
          </span>
        </a>

        <p class="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
          Dashboard Shopify connector web app
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>
</script>