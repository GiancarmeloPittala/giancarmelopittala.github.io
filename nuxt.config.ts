// https://nuxt.com/docs/api/configuration/nuxt-config
const DEFAULT_NUXT_PUBLIC_SITE_URL = 'https://giancarmelopittala.com';

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      siteUrl: DEFAULT_NUXT_PUBLIC_SITE_URL
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'it'
      },
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Giancarmelo Pittalà - Home Page',

      meta: [
        { name: "X-UA-Compatible", content: "IE=edge" },
        { name: "keywords", content: "Giancarmelo pittala, giancarmelo, giancarmelo pittlà, giancarmelo pittalà web developer, web developer ita" },
        { name: "subject", content: "Giancarmelo Pittalà - Home Page" },
        { name: "copyright", content: "giancarmelopittala.com" },
        { name: "robots", content: "index,follow" },
        { name: "topic", content: "programming" },
        { name: "author", content: "giancarmelo, giancarmelo@gmail.com" },
        { name: "designer", content: "giancarmelo, giancarmelo@gmail.com" },
        { name: "copyright", content: "Giancarmelopittala.com" },
        { name: "url", content: `${DEFAULT_NUXT_PUBLIC_SITE_URL}/` },
        { name: "category", content: "programming" },
        { name: "coverage", content: "Worldwide" },
        { name: "distribution", content: "Global" },

        { name: 'description', content: 'Giancarmelo Pittalà, Web developer' },
        { name: "og:title", content: "Giancarmelo Pittalà - Home Page" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: `${DEFAULT_NUXT_PUBLIC_SITE_URL}/` },
        { name: "og:image", content: `${DEFAULT_NUXT_PUBLIC_SITE_URL}/images/logo-bianco-261w.webp` },
        { property: "og:image:type", content: "image/jpg" },
        { property: "og:image:width", content: "260" },
        { property: "og:image:height", content: "287" },
        { name: "og:site_name", content: "Giancarmelo Pittalà - Home Page" },
        { name: "og:description", content: "Giancarmelo Pittalà, Web developer" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "180x180", href: '/images/icon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/images/icon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/images/icon/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    },
  },

  css: [
    `~/assets/css/base.css`
  ],

  modules: [
    '@pinia/nuxt',
    //https://v8.i18n.nuxtjs.org/getting-started/basic-usage
    '@nuxtjs/i18n',
    //https://icones.js.org/
    'nuxt-icon',
    //https://unhead-schema-org.harlanzw.com/guide/getting-started/how-it-works#runtime-inferences
    'nuxt-schema-org',
    'nuxt-simple-robots',
    //https://github.com/harlan-zw/nuxt-simple-sitemap
    // 'nuxt-simple-sitemap',
    '@nuxt/content',
    'nuxt-gtag',
    '@nuxthq/ui'
  ],

  gtag: {
    id: 'G-TNQRKS3F3D',
    initialConsent: true
  },

  robots: {
    sitemap: ['/sitemap.xml'],
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'it',
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieSecure: false
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
  },

  schemaOrg: {
    minify: true
  },

  colorMode: {
    classSuffix: '',
    preference: 'light'
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  },

  tailwindcss: {
    viewer: false
  }


  // buildDir: "../server/public"

})
