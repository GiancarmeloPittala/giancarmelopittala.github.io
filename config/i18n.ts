export const i18n = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
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
  defaultLocale: 'en',
  lazy: true,
  strategy: 'prefix_and_default',
  vueI18n: './config/vueI18n.ts',
}