<template>
  <section id="skils" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" name="ri:file-paper-2-fill" />
        <span>
          {{ $t('home.skills.label') }}
        </span>
      </button>
    </div>
    <h3 class=" text-5xl font-light">
      <span v-html="$t('home.skills.title')"></span> 
      <span class="text-primary">
        {{ $t('home.skills.titleBold') }}
      </span>
    </h3>
    <div class="flex gap-8 flex-wrap justify-evenly">
      <span class="flex flex-col items-center justify-center transition-colors group rounded-xl" title="vscode-dark">
        <Icon class="w-20 h-20" name="skill-icons:vscode-dark" />
        <span class="capitalize text-center group-hover:text-primary">
          vscode
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="vuejs-dark">
        <Icon class="w-20 h-20" name="skill-icons:vuejs-dark" />
        <span class="capitalize text-center group-hover:text-primary">
          vuejs
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="nodejs-dark">
        <Icon class="w-20 h-20" name="skill-icons:nodejs-dark" />
        <span class="capitalize text-center group-hover:text-primary">
          nodejs
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="javascript">
        <Icon class="w-20 h-20" name="skill-icons:javascript" />
        <span class="capitalize text-center group-hover:text-primary">
          javascript
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="bootstrap">
        <Icon class="w-20 h-20" name="skill-icons:bootstrap" />
        <span class="capitalize text-center group-hover:text-primary">
          bootstrap
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="github-dark">
        <Icon class="w-20 h-20" name="skill-icons:github-dark" />
        <span class="capitalize text-center group-hover:text-primary">
          github
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="tailwindcss-dark">
        <Icon class="w-20 h-20" name="skill-icons:tailwindcss-dark" />
        <span class="capitalize text-center group-hover:text-primary">
          tailwindcss
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="netlify-dark">
        <Icon class="w-20 h-20" name="skill-icons:netlify-dark" />
        <span class="capitalize text-center group-hover:text-primary">
          netlify
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="heroku">
        <Icon class="w-20 h-20" name="skill-icons:heroku" />
        <span class="capitalize text-center group-hover:text-primary">
          heroku
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="html">
        <Icon class="w-20 h-20" name="skill-icons:html" />
        <span class="capitalize text-center group-hover:text-primary">
          html
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="figma-dark">
        <Icon class="w-20 h-20" name="skill-icons:figma-dark" />
        <span class="capitalize text-center group-hover:text-primary">
          figma
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="linux-dark">
        <Icon class="w-20 h-20" name="skill-icons:linux-dark" />
        <span class="capitalize text-center group-hover:text-primary">
          linux
        </span>
      </span>
      <span class="grid items-center transition-colors group gap-4 p-4 rounded-full" title="nuxtjs-dark">
        <Icon class="w-20 h-20" name="skill-icons:nuxtjs-dark" />
        <span class="capitalize text-center group-hover:text-primary">nuxt js
        </span>
      </span>
    </div>
  </section>
</template>