<template>
  <div>
    <Jumbotron :title="currentPage.jumbotronTitle.value" :desc="currentPage.jumbotronDescription.value" :url="currentPage.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="currentPage.bodyText.value"></div>
    </section>
    <section>
      <div class="container">
        <h2>List of articles</h2>
        <div class="row">
          <CardGroup :cards="articles | cardify(currentPage)" />
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
  computed: mapState(["articles", "currentPage", "language"]),
  filters: {
    cardify: function (articles, currentPage) {
      return articles
        .filter((article) => {
          return article
            && article.jumbotronTitle
            && article.jumbotronDescription
        })
        .map((article) => {
          return {
            id: article.id,
            title: article.jumbotronTitle.text,
            text: article.jumbotronDescription.text,
            url: `destinations/${currentPage.urlSlug.value}/${article.urlSlug.value}`,
            img: {
              url: article.jumbotronImage.assets.length ? article.jumbotronImage.assets[0].url: '',
              alt: article.jumbotronImage.assets.length ? article.jumbotronImage.assets[0].text: '',
            }
          }
      })
    }
  },
  mixins: [metadata],
  async fetch ({ store, params }) {
    const { data } = await axios.get(`/api/destinations/${store.state.language}/${params.slug}`)
    store.commit(Symbols.MUTATIONS.SET_PAGE, data);
    store.commit(Symbols.MUTATIONS.SET_DESTINATION, data);
    store.commit(Symbols.MUTATIONS.SET_ARTICLES, data.articles);
  },
  async asyncData ({ store }) {
    return {
      parsedArticles: store.state.articles
    }
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
}
</script>
<style scoped>
</style>
