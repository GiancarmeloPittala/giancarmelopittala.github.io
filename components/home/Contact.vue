<template>
  <section id="contact" class="flex flex-col gap-10">
    <div>
      <button class="flex gap-2 items-center border border-gray-700 dark:border-gray-400 rounded-3xl px-3 py-1.5">
        <Icon class="w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors" name="mdi:email-box" />
        <span>
          Contact
        </span>
      </button>
    </div>

    <div>
      <h3 class=" text-3xl xl:text-5xl font-light">
      <span v-html="$t('home.contact.title')"></span> 
      <span class="text-verde">
        {{ $t('home.contact.titleBold') }}
      </span>
    </h3>
    </div>

    <div class="flex gap-10 items-center flex-wrap justify-between">
      <div class="flex justify-between flex-col gap-4">
        <span class="flex items-center gap-4">
          <Icon class="w-6 h-6 text-verde" name="material-symbols:alternate-email-rounded" />
          <a class="md:text-xl font-semibold" href="mailto:info@giancarmelopittala.com">info@giancarmelopittala.com</a>
        </span>
      </div>

      <div class="flex gap-4">
        <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 w-12 h-12 relative"
          href="https://github.com/GiancarmeloPittala" target="_blank" rel="noopener noreferrer">
          <Icon class="w-5 h-5 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
            name="bytesize:github" />
        </a>
        <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 w-12 h-12 relative"
          href="https://www.linkedin.com/in/giancarmelo-pittal%C3%A0" target="_blank" rel="noopener noreferrer">
          <Icon class="w-5 h-5 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
            name="mdi:linkedin" />
        </a>
        <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 w-12 h-12 relative"
          href="https://instagram.com/giancarmelopittala?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
          <Icon class="w-5 h-5 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
            name="mdi:instagram" />
        </a>
        <a class="border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 w-12 h-12 relative"
          href="https://t.me/Giancarmelo_P" target="_blank" rel="noopener noreferrer">
          <Icon class="w-5 h-5 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
            name="line-md:telegram" />
        </a>
      </div>
    </div>

    <form @submit.prevent="">
      <div class="grid md:grid-cols-6 gap-6">

        <div class="md:col-span-3">
          <BaseInput v-model="mail.fullName" placeholder="Mario Rossi" :label-text="$t('home.contact.name')" />
        </div>
        <div class="md:col-span-3">
          <BaseInput v-model="mail.email" placeholder="info@giancarmelopittala.com" :label-text="$t('home.contact.email')"
            type="email" />
        </div>
        <div class="md:col-span-4">
          <BaseInput v-model="mail.phone" placeholder="3049059483" :label-text="$t('home.contact.phone')" type="tel" />
        </div>
        <div class="md:col-span-2">
          <BaseInput v-model="mail.budget" placeholder="100" :label-text="$t('home.contact.budget')" type="number" />
        </div>

        <div class="md:col-span-6">
          <BaseInput v-model="mail.message" placeholder="Message" :label-text="$t('home.contact.message')" />
        </div>
        <a :href="`mailto:info@giancarmelopittala.com?${params}`"
          class="md:col-span-6 border-primary hover:bg-verde hover:text-black text-verde rounded-lg px-4 py-2 overflow-hidden relative group cursor-pointer border-2 font-semibold  transition-colors text-center">
          {{ $t('home.contact.send') }}
        </a>
      </div>
    </form>

  </section>
</template>


<script setup lang="ts">
const mail = reactive({
  fullName: '', email: '', phone: '', budget: '', message: ''
})
const params = computed(() => new URLSearchParams({
  subject: `Email inviata da giancarmelopittala.com`,
  body: `Fullname: ${mail.fullName}, email: ${mail.email}, phone: ${mail.phone}, budget: ${mail.budget}, message: ${mail.message}`
}))



</script>