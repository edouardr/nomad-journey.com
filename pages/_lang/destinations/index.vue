<template>
  <div>
    <Jumbotron :title="landingPage.jumbotronTitle.value" :desc="landingPage.jumbotronDesc.value" :isHero="true" :url="landingPage.jumbotronImage.assets[0].url"/>
    <section class="my-5 text-muted">
        <div class="container" v-html="landingPage.bodyText.value"></div>
    </section>
    <section>
      <div class="container">
        <h2>List of destinations</h2>
        <div class="row">
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'

export default new Vue({
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.landingPage.metaDesc.value },
        { hid: 'keywords', name: 'keywords', content: this.landingPage.metaKeywords.value },
        { hid: 'og:title', name: 'og:title', content: this.landingPage.ogTitle.value },
        { hid: 'og:description', name: 'og:description', content: this.landingPage.ogDescription.value }
      ],
      title: this.landingPage.metaTitle.value
    }
  }
})
</script>
<style scoped>
</style>
