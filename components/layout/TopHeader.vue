<template>
  <header class="px-4 my-6">
    <div class="flex items-center justify-between container py-6 rounded-lg bg-gray-50 ounded-lg lg:mx-auto px-6">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
        </ul>
      </nav>
      <div>
        <UButton variant="ghost" @click="open_menu = !open_menu">
          <Icon v-if="!open_menu" name="solar:close-square-linear" class="w-6 h-6" />
          <Icon v-else name="solar:hamburger-menu-linear" class="w-6 h-6" />
        </UButton>
      </div>
    </div>
    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform translate-x-full"
      enter-to-class="transform translate-x-0" leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform translate-x-0" leave-to-class="transform translate-x-full">
      <div v-if="open_menu" class="fixed left-0 bottom-0 top-0 right-0 bg-gray-400 bg-opacity-20" @click="open_menu = false">
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

<script lang="ts" setup>
const open_menu = useState('menu_open', () => false)
</script>