<template>
  <section id="skils" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border border-gray-700 dark:border-gray-400 rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 border-gray-700 dark:border-gray-400 group-hover:text-verde transition-colors" name="ri:file-paper-2-fill" />
        <span>
          {{ $t('home.skills.label') }}
        </span>
      </button>
    </div>
    <h3 class=" text-3xl xl:text-5xl font-light">
      <span v-html="$t('home.skills.title')"></span> 
      <span class="text-verde">
        {{ $t('home.skills.titleBold') }}
      </span>
    </h3>
    <div class="flex gap-8 flex-wrap justify-evenly">
      <span class="flex flex-col items-center justify-center transition-colors group rounded-xl" title="vscode-dark">
        <Icon class="w-20 h-20" name="skill-icons:vscode-dark" />
        <span class="capitalize text-center group-hover:text-verde">
          vscode
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="vuejs-dark">
        <Icon class="w-20 h-20" name="skill-icons:vuejs-dark" />
        <span class="capitalize text-center group-hover:text-verde">
          vuejs
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="nodejs-dark">
        <Icon class="w-20 h-20" name="skill-icons:nodejs-dark" />
        <span class="capitalize text-center group-hover:text-verde">
          nodejs
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="javascript">
        <Icon class="w-20 h-20" name="skill-icons:javascript" />
        <span class="capitalize text-center group-hover:text-verde">
          javascript
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="bootstrap">
        <Icon class="w-20 h-20" name="skill-icons:bootstrap" />
        <span class="capitalize text-center group-hover:text-verde">
          bootstrap
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="github-dark">
        <Icon class="w-20 h-20" name="skill-icons:github-dark" />
        <span class="capitalize text-center group-hover:text-verde">
          github
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="tailwindcss-dark">
        <Icon class="w-20 h-20" name="skill-icons:tailwindcss-dark" />
        <span class="capitalize text-center group-hover:text-verde">
          tailwindcss
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="netlify-dark">
        <Icon class="w-20 h-20" name="skill-icons:netlify-dark" />
        <span class="capitalize text-center group-hover:text-verde">
          netlify
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="heroku">
        <Icon class="w-20 h-20" name="skill-icons:heroku" />
        <span class="capitalize text-center group-hover:text-verde">
          heroku
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="html">
        <Icon class="w-20 h-20" name="skill-icons:html" />
        <span class="capitalize text-center group-hover:text-verde">
          html
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="figma-dark">
        <Icon class="w-20 h-20" name="skill-icons:figma-dark" />
        <span class="capitalize text-center group-hover:text-verde">
          figma
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="linux-dark">
        <Icon class="w-20 h-20" name="skill-icons:linux-dark" />
        <span class="capitalize text-center group-hover:text-verde">
          linux
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="nuxtjs-dark">
        <Icon class="w-20 h-20" name="skill-icons:nuxtjs-dark" />
        <span class="capitalize text-center group-hover:text-verde">nuxt js
        </span>
      </span>
    </div>
  </section>
</template>