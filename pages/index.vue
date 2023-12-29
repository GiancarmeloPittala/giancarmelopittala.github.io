<template>
  <div>

    <SchemaOrgWebPage name="Giancarmelo Pittalà" image="/images/icon/android-chrome-192x192.png" />
    <SchemaOrgWebSite />
    <SchemaOrgPerson name="Giancarmelo Pittalà" image="/images/icon/android-chrome-192x192.png"
      :same-as="['https://github.com/GiancarmeloPittala']" />

    <div class="flex flex-col gap-[100px] max-w-screen-lg mx-auto">
      <HomeIntroduce />
      <HomeAbout />
      <HomeService />
      <HomePortfolio />
      <HomeBlog />
      <HomeSkils />
      <HomeContact />
    </div>
  </div>
</template>


<script setup lang="ts">
const route = useRoute();
const { public: config } = useRuntimeConfig()

useHead({
  meta: [
    ...useSiteMeta({
      type: "website",
      title: "Giancarmelo pittalà - main",
      description: "Giancarmelo Pittalà, Web developer",
      keywords: "Giancarmelo pittala,giancarmelo, giancarmelo pittlà, giancarmelo pittalà web developer, web developer ita",
      url: `https://giancarmelopittala.com`,
      mainImage: 'https://source.unsplash.com/k-xKzowQRn8',
    }),
    {
      property: "canonical",
      content: `${config.siteUrl}${route.fullPath}`
    }
  ],
});

</script>


