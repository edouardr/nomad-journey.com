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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Jumbotron from "~/components/Jumbotron";
import { Symbols } from "~/constants";
import axios from "~/plugins/axios";

export default {
  components: {
    Jumbotron
  },
  computed: mapState(["landingPage", "language"]),
  async asyncData ({ store }) {
    if (!store.state.language) {
      return;
    }
    const { data } = await axios.get(
      `api/landing-page/${store.state.language}/destinations`
    );
    store.commit(Symbols.MUTATIONS.SET_HOME, data);
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
