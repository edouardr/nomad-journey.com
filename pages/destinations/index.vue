<template>
  <div>
    <Jumbotron :title="currentPage.jumbotronTitle.value" :desc="currentPage.jumbotronDescription.value" :url="currentPage.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="content" v-html="currentPage.bodyText.value"></div>
    </section>
    <section class="section">
      <div>
        <div class="content">
          <h2>Our Destinations</h2>
        </div>
        <DestinationGroup :destinations="destinations" />
      </div>
    </section>
  </div>
</template>

<script>
import DestinationGroup from "~/components/destination-group";
import Jumbotron from "~/components/jumbotron";
import { Symbols } from "~/constants";
import metadata from "~/mixins/metadata";
import axios from "~/plugins/axios";
import { mapState } from "vuex";

export default {
  components: {
    Jumbotron,
    DestinationGroup
  },
  computed: mapState(["currentPage", "language"]),
  mixins: [metadata],
  scrollToTop: true,
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
  async fetch ({ store }) {
    const { data } = await axios.get(`/api/landing-page/${store.state.language}/destinations`);
    store.commit(Symbols.MUTATIONS.SET_PAGE, data);
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
}
</script>
<style scoped>
</style>
