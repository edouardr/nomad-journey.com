export default {
  methods: {
    getMetadata: (page) => {
      return {
        meta: [
          { hid: 'description', name: 'description', content: page.metaDescription.value },
          { hid: 'keywords', name: 'keywords', content: page.metaKeywords.value },
          { hid: 'og:title', property: 'og:title', content: page.ogTitle.value },
          { hid: 'og:image', property: 'og:image', content: page.ogImage ? page.ogImage.value[0].url : '' },
          { hid: 'og:image:alt', property: 'og:image:alt', content: page.ogImage ? page.ogImage.value[0].description : '' },
          { hid: 'og:description', property: 'og:description', content: page.ogDescription.value }
        ],
        title: `${page.metaTitle.value} | Nomad-Journey`
      }
    }
  }
}
