import it from '@/lang/it-IT.json'
import en from '@/lang/en-US.json'
export default defineI18nConfig(() => ({
  legacy: false,
  messages: { en, it },
  strategy: 'prefix_except_default',
  locales:[
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.json',
      name: 'English',
      icon: 'twemoji:flag-for-flag-united-states'
    },
    {
      code: 'it',
      iso: 'it-IT',
      file: 'it-IT.json',
      name: 'Italiano',
      icon: 'openmoji:flag-italy'
    },
  ]

}))



/*
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
    alwaysRedirect: false,
    fallbackLocale: 'it',
    cookieCrossOrigin: false,
    cookieDomain: null,
    cookieSecure: false,
  },
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.json',
      name: 'English',
      icon: 'twemoji:flag-for-flag-united-states'
    },
    {
      code: 'it',
      iso: 'it-IT',
      file: 'it-IT.json',
      name: 'Italiano',
      icon: 'openmoji:flag-italy'
    },
  ],
  langDir: 'lang/',
  defaultLocale: 'it',
  lazy: true,
  strategy: 'prefix_except_default'
   */