<template>
  <article>
    <ArticleHeader :title="currentArticle.jumbotronTitle.value"
      :desc="currentArticle.jumbotronDescription.value"
      :url="currentArticle.jumbotronImage.value[0].url" />
    <section class="section">
      <div class="container is-light">
        <div class="content is-medium">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-10">
              <div class="content" v-html="currentArticle.bodyText.value"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <vue-disqus :shortname="shortname" :id="currentArticle.id" :title="currentArticle.jumbotronTitle.value"></vue-disqus>
      </div>
    </section>
  </article>
</template>

<script>
import ArticleHeader from "~/components/article-header";
import VueDisqus from "~/components/vue-disqus";
import { Symbols } from "~/constants";
import metadata from "~/mixins/metadata";
import axios from "~/plugins/axios";
import { mapState } from "vuex";

export default {
  components: {
    ArticleHeader,
    VueDisqus
  },
  computed: mapState(["currentArticle", "language"]),
  mixins: [metadata],
  scrollToTop: true,
  async asyncData() {
    return {
      shortname: process.env.disqus.shortname
    }
  },
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
