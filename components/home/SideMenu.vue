<template>
  <header class="fixed top-4 xl:top-20 right-4 xl:right-16 transition-all">
    <div class="grid gap-32">
      <div class="flex flex-row-reverse gap-2 items-center xl:flex-col">
        <div @click="_open = !_open">
          <LayoutHeaderOpenButton v-model="_open" />
        </div>
        <span class="flex items-center justify-center dark:text-gray-400 w-8 h-8 xl:w-12 xl:h-12 relative focus:outline-none border border-gray-400 rounded-full dark:bg-black bg-white">
          <LayoutHeaderDarkModeButton />
        </span>
      </div>
      <nav>
        <ul class="hidden border border-gray-400 rounded-full p-2 py-8 gap-6 lg:grid">
          <li class="justify-center flex relative">
            <NuxtLink :to="{ path: '/', hash: '#introduce' }">
              <div class="group flex">
                <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors" name="ic:twotone-house" />
                <span
                  class="group-hover:opacity-100 transition-opacity px-1 text-sm  rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2">Home</span>
              </div>
            </NuxtLink>
          </li>
          <li class="justify-center flex relative">
            <NuxtLink :to="{ path: '/', hash: '#about' }">
              <div class="group flex">
                <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors"
                  name="material-symbols:person-2-outline-rounded" />
                <span
                  class="group-hover:opacity-100 transition-opacity px-1 text-sm  rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2">About</span>
              </div>
            </NuxtLink>
          </li>
          <li class="justify-center flex relative">
            <NuxtLink :to="{ path: '/', hash: '#service' }">
              <div class="group flex">
                <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors"
                  name="ri:file-paper-2-fill" />
                <span
                  class="group-hover:opacity-100 transition-opacity px-1 text-sm  rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2">Services</span>
              </div>
            </NuxtLink>
          </li>
          <li class="justify-center flex relative">
            <NuxtLink :to="{ path: '/', hash: '#skils' }">
              <div class="group flex">
                <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors" name="ic:sharp-code" />
                <span
                  class="group-hover:opacity-100 transition-opacity px-1 text-sm  rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2">Skills</span>
              </div>
            </NuxtLink>
          </li>
          <li class="justify-center flex relative">
            <NuxtLink :to="{ path: '/', hash: '#portfolio' }">
              <div class="group flex">
                <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors" name="gala:terminal" />
                <span
                  class="group-hover:opacity-100 transition-opacity px-1 text-sm  rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2">Portfolio</span>
              </div>
            </NuxtLink>
          </li>
          <li class="justify-center flex relative">
            <NuxtLink :to="{ path: '/', hash: '#blog' }">
              <div class="group flex">
                <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors" name="carbon:blog" />
                <span
                  class="group-hover:opacity-100 transition-opacity px-1 text-sm  rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2">Blog</span>
              </div>
            </NuxtLink>
          </li>
          <li class="justify-center flex relative">
            <NuxtLink :to="{ path: '/', hash: '#contact' }">
              <div class="group flex">
                <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors" name="mdi:email-box" />
                <span
                  class="group-hover:opacity-100 transition-opacity px-1 text-sm  rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2">Contact</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform translate-x-full"
      enter-to-class="transform translate-x-0" leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform translate-x-0" leave-to-class="transform translate-x-full">
      <div v-if="_open" class="fixed left-0 bottom-0 top-0 right-0 bg-gray-400 bg-opacity-20" @click="_open = false">
        <nav class="max-w-[300px] dark:text-gray-400 bg-white dark:bg-black h-screen overflow-y-auto ml-auto p-12">
          <h4 class="mb-12 text-xl">Menu</h4>
          <ul class="gap-6 grid">
            <li class="group">
              <NuxtLink :to="{ path: '/', hash: '#introduce' }" class="flex gap-4 items-center">
                <Icon class="w-6 h-6  group-hover:text-verde transition-colors" name="ic:twotone-house" />
                <span class="group-hover:text-verde">Home</span>
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink :to="{ path: '/', hash: '#about' }" class="flex gap-4 items-center">
                <Icon class="w-6 h-6  group-hover:text-verde transition-colors"
                  name="material-symbols:person-2-outline-rounded" />
                <span class="group-hover:text-verde">About</span>
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink :to="{ path: '/', hash: '#service' }" class="flex gap-4 items-center">
                <Icon class="w-6 h-6  group-hover:text-verde transition-colors" name="ri:file-paper-2-fill" />
                <span class="group-hover:text-verde">Services</span>
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink :to="{ path: '/', hash: '#skils' }" class="flex gap-4 items-center">
                <Icon class="w-6 h-6  group-hover:text-verde transition-colors" name="ic:sharp-code" />
                <span class="group-hover:text-verde">Skills</span>
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink :to="{ path: '/', hash: '#portfolio' }" class="flex gap-4 items-center">
                <Icon class="w-6 h-6  group-hover:text-verde transition-colors" name="gala:terminal" />
                <span class="group-hover:text-verde">Portfolio</span>
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink :to="{ path: '/', hash: '#blog' }" class="flex gap-4 items-center">
                <Icon class="w-6 h-6  group-hover:text-verde transition-colors" name="carbon:blog" />
                <span class="group-hover:text-verde">Blog</span>
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink :to="{ path: '/', hash: '#contact' }" class="flex gap-4 items-center">
                <Icon class="w-6 h-6  group-hover:text-verde transition-colors" name="mdi:email-box" />
                <span class="group-hover:text-verde">Contact</span>
              </NuxtLink>
            </li>
          </ul>
          <h4 class="text-xl mt-12 mb-4">Social</h4>
          <div class="flex gap-4 ">
            <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative"
              href="https://github.com/GiancarmeloPittala" target="_blank" rel="noopener noreferrer">
              <Icon class="w-4 h-4 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
                name="bytesize:github" />
            </a>
            <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative"
              href="https://www.linkedin.com/in/giancarmelo-pittal%C3%A0" target="_blank" rel="noopener noreferrer">
              <Icon class="w-4 h-4 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
                name="mdi:linkedin" />
            </a>
            <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative"
              href="https://instagram.com/giancarmelopittala?igshid=ZDdkNTZiNTM=" target="_blank"
              rel="noopener noreferrer">
              <Icon class="w-4 h-4 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
                name="mdi:instagram" />
            </a>
            <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative"
              href="https://t.me/Giancarmelo_P" target="_blank" rel="noopener noreferrer">
              <Icon class="w-4 h-4 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
                name="line-md:telegram" />
            </a>
          </div>
          <h4 class="text-xl mt-12 mb-4">Languages</h4>
          <LayoutHeaderLangSwitcher />
          <h4 class="mt-12 mb-4 text-xl">Link</h4>
          <ul class="gap-6 grid">
            <li class="group">
              <BaseLink :link="{ to: '/privacy-policy' }" class="flex gap-4 items-center">
                <Icon class="w-6 h-6  group-hover:text-verde transition-colors" name="iconoir:privacy-policy" />
                <span class="group-hover:text-verde">Privacy policy</span>
              </BaseLink>
            </li>
          </ul>
        </nav>
      </div>

    </transition>

  </header>
</template>


<script setup lang="ts">
const props = defineProps({
  open: { type: Boolean, default: () => false}
})

const _open = ref<boolean>( props.open ) 
</script>