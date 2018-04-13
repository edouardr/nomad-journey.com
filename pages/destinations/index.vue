<template>
  <div>
    <Jumbotron :title="currentPage.jumbotronTitle.value" :desc="currentPage.jumbotronDescription.value" :url="currentPage.jumbotronImage.value[0].url" />
    <section class="section">
      <div class="container">
        <div class="content">
          <div class="columns">
            <div class="column">
              <div class="content" v-html="currentPage.bodyText.value"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <DestinationGroup :destinations="destinations | cardify(resolveListItemUrl)" />
      </div>
    </section>
  </div>
</template>

<script>
import DestinationGroup from "~/components/destination-group";
import Jumbotron from "~/components/jumbotron";
import { Symbols } from "~/constants";
import { cardify } from "~/filters";
import metadata from "~/mixins/metadata";
import axios from "~/plugins/axios";
import { mapState } from "vuex";

export default {
  components: {
    Jumbotron,
    DestinationGroup
  },
  computed: mapState(["currentPage", "language"]),
  filters: {
    cardify
  },
  methods:{
    resolveListItemUrl: (listItem) => {
      return `/destinations/${listItem.urlSlug.value}`;
    }
  },
  mixins: [metadata],
  scrollToTop: true,
  async asyncData ({ store }) {
    const { data } = await axios.get(`/api/destinations/${store.state.language}`)

    return {
      destinations: data
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
