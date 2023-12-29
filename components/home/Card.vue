<template>
  <div
    class="max-w-[600px] mx-auto xl:w-[400px] p-12 py-16 flex flex-col border border-gray-200 rounded-3xl gap-10">
    <div class="flex justify-between">
      <div>
        <h1 class="text-xl font-semibold">Pittalà Giancarmelo</h1>
        <span class="text-sm "> Full stack web developer</span>
      </div>
      <LayoutHeaderLangSwitcher />
    </div>


    <img loading="lazy" class="w-full rounded-xl border-2 border-gray-200 dark:border-gray-50" src="/images/me.png" alt="personal photo image" />

    <div class="flex justify-between flex-col gap-4">
      <span class="flex justify-center items-center gap-4">
        <Icon class="w-6 h-6 text-verde" name="material-symbols:alternate-email-rounded" />
        <a class="md:text-xl font-semibold" href="mailto:info@giancarmelopittala.com">info@giancarmelopittala.com</a>
      </span>
    </div>
    
    <div class="flex justify-center gap-4">
      <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 w-12 h-12 relative"
        href="https://github.com/GiancarmeloPittala" target="_blank" rel="noopener noreferrer">
        <Icon class="w-5 h-5 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
          name="bytesize:github" />
      </a>
      <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 w-12 h-12 relative"
        href="https://instagram.com/giancarmelopittala?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
        <Icon class="w-5 h-5 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
          name="mdi:instagram" />
      </a>
      <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 w-12 h-12 relative"
        href="https://www.linkedin.com/in/giancarmelo-pittal%C3%A0" target="_blank" rel="noopener noreferrer">
        <Icon class="w-5 h-5 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
          name="mdi:linkedin" />
      </a>
      <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 w-12 h-12 relative"
        href="https://t.me/Giancarmelo_P" target="_blank" rel="noopener noreferrer">
        <Icon class="w-5 h-5 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
          name="line-md:telegram" />
      </a>
    </div>

    <div class="text-center">
      <small class="block dark:text-gray-400 mb-4">
        © {{ new Date().getFullYear() }} giancarmelopittala.com. <br /> All Rights Reserved
      </small>
      <small class="block dark:text-gray-400 ">
        P.Iva 05627300873
      </small>
    </div>

    <BaseLink :link="{ to: {path: '/', hash: '#contact'} }">
      <BaseButton class="rounded-full w-full">
        {{ $t('home.card.contact') }}
      </BaseButton>
    </BaseLink>

  </div>
</template>