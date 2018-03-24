<template>
  <div>
    <Jumbotron :title="landingPage.jumbotronTitle.value" :desc="landingPage.jumbotronDescription.value" :url="landingPage.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="landingPage.bodyText.value"></div>
    </section>
    <section>
      <div class="container">
        <h2>List of destinations</h2>
        <div class="row">
          <CardGroup :cards="destinations" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardGroup from "~/components/card-group";
import Jumbotron from "~/components/jumbotron";
import { Symbols } from "~/constants";
import axios from "~/plugins/axios";

export default {
  components: {
    Jumbotron,
    CardGroup
  },
  computed: mapState(["landingPage", "language"]),
  async fetch ({ store }) {
    if (!store.state.language) {
      return;
    }
    const { data } = await axios.get(`/api/landing-page/${store.state.language}/destinations`);
    store.commit(Symbols.MUTATIONS.SET_HOME, data);
  },
  async asyncData ({ store }) {
    const { data } = await axios.get(`/api/destinations/${store.state.language}`)

    return {
      destinations: data
        .filter((destination) => {
          return destination.jumbotronTitle
            && destination.jumbotronDescription
        })
        .map((destination) => {
          return {
            id: destination.id,
            title: destination.jumbotronTitle.text,
            text: destination.jumbotronDescription.text,
            url: `destinations/${destination.urlSlug.value}`,
            img: {
              url: destination.jumbotronImage.assets.length ? destination.jumbotronImage.assets[0].url: '',
              alt: destination.jumbotronImage.assets.length ? destination.jumbotronImage.assets[0].text: '',
            }
          }
        })
    }
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.landingPage.metaDescription.value },
        { hid: 'keywords', name: 'keywords', content: this.landingPage.metaKeywords.value },
        { hid: 'og:title', name: 'og:title', content: this.landingPage.ogTitle.value },
        { hid: 'og:description', name: 'og:description', content: this.landingPage.ogDescription.value }
      ],
      title: this.landingPage.metaTitle.value
    }
  }
}
</script>
<style scoped>
</style>
