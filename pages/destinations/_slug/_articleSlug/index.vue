<template>
  <div>
    <Jumbotron :title="currentArticle.jumbotronTitle.value" :desc="currentArticle.jumbotronDescription.value" :url="currentArticle.jumbotronImage.value[0].url" />
    <section class="section">
      <div class="container">
        <div class="content" v-html="currentArticle.bodyText.value"></div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <vue-disqus shortname="anomadjourney" :id="currentArticle.id" :title="currentArticle.jumbotronTitle.value"></vue-disqus>
      </div>
    </section>
  </div>
</template>

<script>
import Jumbotron from "~/components/jumbotron";
import VueDisqus from "~/components/vue-disqus";
import { Symbols } from "~/constants";
import metadata from "~/mixins/metadata";
import axios from "~/plugins/axios";
import { mapState } from "vuex";

export default {
  components: {
    Jumbotron,
    VueDisqus
  },
  computed: mapState(["currentArticle", "language"]),
  mixins: [metadata],
  scrollToTop: true,
  async fetch ({ store, params }) {
    if (store.state.currentArticle){
      return;
    }
    const { data } = await axios.get(`/api/articles/${store.state.language}/${params.articleSlug}`)
    store.commit(Symbols.MUTATIONS.SET_PAGE, data);
    store.commit(Symbols.MUTATIONS.SET_ARTICLE, data);
  },
  head () {
    return this.getMetadata(this.currentArticle)
  }
}
</script>

<style scoped>
</style>
