const type = "website";
const url = "https://giancarmelopittala.com";
const title = "Blog personale, programmazione e molto altro 1";
const description ="Blog di Giancarmelo pittalà, Web developer" ;
const mainImage = "https://source.unsplash.com/U0tBTn8UR8I" ;
 
export default function (meta) {

  return [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'keywords', 
      name: 'keywords', 
      content:  (meta && meta.keywords) || title.trim(),
    },
    {
      hid: "description",
      name: "description",
      content: (meta && meta.description) || description,
    },
    { property: "og:site_name", content: (meta && meta.type) || title },
    {
      hid: "og:type",
      property: "og:type",
      content: (meta && meta.type) || type,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: (meta && meta.mainImage) || mainImage,
    },
    { property: "og:image:width", content: "740" },
    { property: "og:image:height", content: "300" },
    { name: "twitter:site", content: "@Giancarmelo_Pittalà" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@Giancarmelo_Pittalà" },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: (meta && meta.mainImage) || mainImage,
    }
  ];
};