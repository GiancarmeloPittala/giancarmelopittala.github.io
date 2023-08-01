<template>
  <div>
    <header>
      <div @click="open = !open">
        <HomeSideMenu v-model="open" />
      </div>
    </header>
    <section class="bg-gradient-to-tr from-gray-800 to-gray-300 px-6 py-[100px] xl:py-[180px] flex justify-center ">
      <div class="max-w-2xl text-gray-50">
        <h1 class="text-xl font-extrabold">CALCOLO TASSE REGIME FORFETTARIO</h1>
        <p class="p-4 bg-yellow-50 mt-3 rounded-lg text-gray-900 text-sm font-bold flex gap-4">
          <Icon class="w-10 h-10" name="basil:info-triangle-outline" />
          <span>
            Questo tool è stato creato per un uno personale, non mi prendo alcuna responsabilità sul'autenticità dei dati
            generati
          </span>
        </p>
      </div>
    </section>
    <div class="container mx-auto">
      <section class="-mt-[50px] xl:-mt-[90px] dark:bg-[#121212] shadow-xl bg-gray-50 p-4 mx-6 rounded-lg">
        <TassazioneForm />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
colorMode.value = 'light'
const open = ref<boolean>(false)




definePageMeta({
  layout: 'blank'
})

</script>