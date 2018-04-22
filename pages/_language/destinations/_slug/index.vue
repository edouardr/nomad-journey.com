<template>
  <div>
    <Jumbotron v-if="currentPage.jumbotronImage"
      :title="currentPage.jumbotronTitle.value"
      :desc="currentPage.jumbotronDescription.value"
      :imgAlt="currentPage.jumbotronImage.value[0].text"
      :imgUrl="currentPage.jumbotronImage.value[0].url" />
    <IntroText :text="currentPage.bodyText.value" />
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
import IntroText from '~/components/intro-text';
import Jumbotron from '~/components/jumbotron';
import { Symbols } from '~/constants';
import { cardify } from '~/filters';
import metadata from '~/mixins/metadata';
import axios from '~/plugins/axios';
import { mapState } from 'vuex';

export default {
  components: {
    IntroText,
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
    if (store.state.currentDestination && params.slug === store.state.currentDestination.urlSlug.value) {
      store.commit(Symbols.MUTATIONS.SET_PAGE, store.state.currentDestination);
      store.commit(Symbols.MUTATIONS.SET_ARTICLES, store.state.currentDestination.articles);
      return
    }

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
