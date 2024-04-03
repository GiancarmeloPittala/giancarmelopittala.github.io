<template>
  <section id="introduce" class="flex flex-col gap-10">
    <div>
      <button
        class="flex gap-2 items-center border border-gray-700 dark:border-gray-400 rounded-3xl px-3 py-1.5"
      >
        <Icon
          class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors"
          name="ic:twotone-house"
        />
        <span>
          {{ $t('home.introduce.label') }}
        </span>
      </button>
    </div>
    <h2 class="text-3xl md:text-5xl xl:text-7xl font-light">
      <span v-html="$t('home.introduce.title')"></span>
      <span class="text-verde"> Giancarmelo</span><br />
      Full stack web developer
    </h2>
    <p class="dark:text-gray-400" v-html="$t('home.introduce.subTitle')"></p>
    <div
      class="relative flex xl:justify-end cursor-pointer"
      @click="$router.push({ hash: '#portfolio' })"
    >
      <div class="border p-2 rounded-full bg-black">
        <img
          loading="lazy"
          class="w-32 h-32 animate-spin"
          style="animation-duration: 6s"
          src="/images/round-text.png"
          alt="my projects image"
        />
      </div>
      <Icon
        class="w-10 h-10 animate-bounce absolute top-14 left-12 xl:left-auto xl:right-14 text-gray-400 group-hover:text-verde transition-colors"
        name="ic:sharp-keyboard-arrow-down"
      />
    </div>
    <div class="flex flex-wrap gap-20">
      <div class="grid gap-8">
        <span class="text-6xl text-verde">
          {{ new Date().getFullYear() - 2017 }} +
        </span>
        <span
          class="dark:text-gray-400 font-thin"
          v-html="$t('home.introduce.experience')"
        ></span>
      </div>
      <div class="flex flex-wrap gap-6 max-w-[300px]">
        <span title="vscode-dark">
          <Icon class="w-10 h-10" name="skill-icons:vscode-dark" />
        </span>
        <span title="vuejs-dark">
          <Icon class="w-10 h-10" name="skill-icons:vuejs-dark" />
        </span>
        <span title="nodejs-dark">
          <Icon class="w-10 h-10" name="skill-icons:nodejs-dark" />
        </span>
        <span title="javascript">
          <Icon class="w-10 h-10" name="skill-icons:javascript" />
        </span>
        <span title="bootstrap">
          <Icon class="w-10 h-10" name="skill-icons:bootstrap" />
        </span>
        <span title="github-dark">
          <Icon class="w-10 h-10" name="skill-icons:github-dark" />
        </span>
        <span title="tailwindcss-dark">
          <Icon class="w-10 h-10" name="skill-icons:tailwindcss-dark" />
        </span>
        <span title="netlify-dark">
          <Icon class="w-10 h-10" name="skill-icons:netlify-dark" />
        </span>
        <span title="heroku">
          <Icon class="w-10 h-10" name="skill-icons:heroku" />
        </span>
        <span title="html">
          <Icon class="w-10 h-10" name="skill-icons:html" />
        </span>
        <span title="figma-dark">
          <Icon class="w-10 h-10" name="skill-icons:figma-dark" />
        </span>
        <span title="linux-dark">
          <Icon class="w-10 h-10" name="skill-icons:linux-dark" />
        </span>
        <span title="nuxtjs-dark">
          <Icon class="w-10 h-10" name="skill-icons:nuxtjs-dark" />
        </span>
      </div>
    </div>
  </section>
</template>
