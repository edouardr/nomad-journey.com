<template>
  <div>
    <Jumbotron :title="currentPage.jumbotronTitle.value" :desc="currentPage.jumbotronDescription.value" :url="currentPage.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="currentPage.bodyText.value"></div>
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
import CardGroup from "~/components/card-group";
import Jumbotron from "~/components/jumbotron";
import { Symbols } from "~/constants";
import metadata from "~/mixins/metadata";
import axios from "~/plugins/axios";
import { mapState } from "vuex";

export default {
  components: {
    Jumbotron,
    CardGroup
  },
  computed: mapState(["currentPage", "language"]),
  mixins: [metadata],
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
    if (!store.state.language) {
      return;
    }
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
