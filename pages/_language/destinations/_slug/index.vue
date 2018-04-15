<template>
  <div>
    <Jumbotron :title="currentPage.jumbotronTitle.value"
      :desc="currentPage.jumbotronDescription.value"
      :imgAlt="currentPage.jumbotronImage.value[0].text"
      :imgUrl="currentPage.jumbotronImage.value[0].url" />
    <section class="section has-background-light">
      <div class="container is-light">
        <div class="content is-medium" v-html="currentPage.bodyText.value">
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content">
          <h2>List Articles</h2>
        </div>
        <div class="container">
          <ArticleGroup :articles="articles | cardify(resolveListItemUrl, language, currentDestination)" />
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
    resolveListItemUrl: (listItem, language, currentDestination) => {
      return `/${language}/destinations/${currentDestination.urlSlug.value}/${listItem.urlSlug.value}`;
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
