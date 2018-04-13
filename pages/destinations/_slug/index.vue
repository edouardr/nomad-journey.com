<template>
  <div>
    <Jumbotron :title="currentPage.jumbotronTitle.value" :desc="currentPage.jumbotronDescription.value" :url="currentPage.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="currentPage.bodyText.value"></div>
    </section>
    <section class="section">
      <div>
        <div class="content">
          <h2>List Articles</h2>
        </div>
        <div class="container">
          <ArticleGroup :articles="articles | cardify(resolveListItemUrl, currentDestination)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleGroup from '~/components/article-group';
import Jumbotron from '~/components/jumbotron';
import { Symbols } from '~/constants';
import { cardify } from '~/filters';
import metadata from '~/mixins/metadata';
import axios from '~/plugins/axios';
import { mapState } from 'vuex';

export default {
  components: {
    Jumbotron,
    ArticleGroup
  },
  computed: mapState(['articles', 'currentPage', 'language', 'currentDestination']),
  filters: {
    cardify
  },
  methods:{
    resolveListItemUrl: (listItem, currentDestination) => {
      return `/destinations/${currentDestination.urlSlug.value}/${listItem.urlSlug.value}`;
    }
  },
  mixins: [metadata],
  scrollToTop: true,
  async fetch ({ store, params }) {
    const { data } = await axios.get(`/api/destinations/getbyslug/${store.state.language}/${params.slug}`)
    store.commit(Symbols.MUTATIONS.SET_PAGE, data);
    store.commit(Symbols.MUTATIONS.SET_DESTINATION, data);
    store.commit(Symbols.MUTATIONS.SET_ARTICLES, data.articles);
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
}
</script>

<style scoped>
</style>
