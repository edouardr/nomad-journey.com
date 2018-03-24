export default {
  methods: {
    getMetadata: (page) => {
      return {
        meta: [
          { hid: 'description', name: 'description', content: page.metaDescription.value },
          { hid: 'keywords', name: 'keywords', content: page.metaKeywords.value },
          { hid: 'og:title', name: 'og:title', content: page.ogTitle.value },
          { hid: 'og:description', name: 'og:description', content: page.ogDescription.value }
        ],
        title: page.metaTitle.value
      }
    }
  }
}
