<template>
  <section id="portfolio" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border border-gray-400 rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" name="ic:twotone-house" />
        <span>
         {{ $t('home.portfolio.label') }}
        </span>
      </button>
    </div>
    <h2 class=" text-5xl xl:text-7xl font-light" v-html="$t('home.portfolio.title')"></h2>
    <div class="grid gap-8 gap-y-12 grid-cols-2 flex-wrap">

      <div class="group">
        <a class="relative" href="https://salvobeatoparrucchieri.com" target="_blank" rel="noopener noreferrer">
          <img class="w-full" loading="lazy" alt="work salvobeatoparrucchieri" src="/images/salvobeatoparrucchieri.webp" />
          <span class="absolute bottom-5 left-5 gap-2 flex">
            <span
              class="bg-gray-900 py-1.5 transition-colors px-3 rounded-xl border group-hover:bg-gray-50 group-hover:text-gray-900 border-gray-900">Nuxt
              3</span>
            <span
              class="bg-gray-900 py-1.5 transition-colors px-3 rounded-xl border group-hover:bg-gray-50 group-hover:text-gray-900 border-gray-900">Strapi</span>
          </span>
        </a>
        <p class="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
          Landing page + Blog
        </p>
      </div>

      <div class="group">
        <a class="relative" href="https://codiceunicotributario.it" target="_blank" rel="noopener noreferrer ">
          <img class="w-full" loading="lazy" alt="work codiceunico tributario" src="/images/codiceunicotributario.webp" />
          <span class="absolute bottom-5 left-5 gap-2 flex">
            <span
              class="bg-gray-900 py-1.5 transition-colors px-3 rounded-xl border group-hover:bg-gray-50 group-hover:text-gray-900 border-gray-900">Nuxt
              2</span>
            <span
              class="bg-gray-900 py-1.5 transition-colors px-3 rounded-xl border group-hover:bg-gray-50 group-hover:text-gray-900 border-gray-900">Node
              js</span>
          </span>
        </a>
        <p class="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
          Web app + Dasboard
        </p>
      </div>

      <div class="col-span-2 group flex flex-col">
        <a class="relative " href="https://rs-sync.relax4me.ovh" target="_blank" rel="noopener noreferrer">
          <img class="w-full" loading="lazy" alt="work relax to shopify connector" src="/images/rs_connect.webp" />
          <span class="absolute bottom-5 left-5 gap-2 flex">
            <span
              class="bg-gray-900 py-1.5 transition-colors px-3 rounded-xl border group-hover:bg-gray-50 group-hover:text-gray-900 border-gray-900">Nuxt
              3</span>
            <span
              class="bg-gray-900 py-1.5 transition-colors px-3 rounded-xl border group-hover:bg-gray-50 group-hover:text-gray-900 border-gray-900">Node
              js</span>
          </span>
        </a>

        <p class="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
          Dashboard Shopify connector web app
        </p>
      </div>

  </div>

</section></template>

<script setup>
</script>