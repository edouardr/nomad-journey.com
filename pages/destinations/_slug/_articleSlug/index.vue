<template>
  <div>
    <Jumbotron :title="currentArticle.jumbotronTitle.value" :desc="currentArticle.jumbotronDescription.value" :url="currentArticle.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="currentArticle.bodyText.value"></div>
    </section>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import CardGroup from "~/components/card-group";
import Jumbotron from "~/components/jumbotron";
import { Symbols } from "~/constants";
import metadata from "~/mixins/metadata";
import { mapState } from "vuex";

export default {
  components: {
    Jumbotron,
    CardGroup
  },
  computed: mapState(["currentArticle", "language"]),
  mixins: [metadata],
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
