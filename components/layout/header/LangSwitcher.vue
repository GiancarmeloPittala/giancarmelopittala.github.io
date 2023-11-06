<script setup lang="ts">
const { availableLocales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const other_locale = computed<string>( () => 
  availableLocales.find(l => l != locale.value) || 'it' )

type IIcon = {
  it: string
  en: string
}

const icons: IIcon = {
  it: 'openmoji:flag-italy',
  en: 'twemoji:flag-for-flag-united-states'
}

const testi = {
  it: 'Italiano',
  en: 'English'
}


const getIconName = computed( () => locale.value === 'en' ?  icons.it : icons.en ) 
const getText = computed (  () => locale.value === 'en' ? testi.it : testi.en  )

</script>

<template>
  <div class="relative">
    <nuxt-link
      :to="switchLocalePath(other_locale)"
      class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
    >
      <Icon
        class="mr-2 h-5 w-5"
        aria-hidden="true"
        :name="getIconName"
      />
      {{ getText }}
    </nuxt-link>
  </div>
</template>
