<template>
  <div>
    <Jumbotron :title="currentPage.jumbotronTitle.value" :desc="currentPage.jumbotronDescription.value" :url="currentPage.jumbotronImage.value[0].url" />
    <section class="section">
      <div class="container">
        <div class="content" v-html="currentPage.bodyText.value"></div>
      </div>
    </section>
    <Slide :url="`https://lorempixel.com/360/300/`" />
    <section class="section">
      <div>
        <div class="content">
          <h2>Latest Articles</h2>
        </div>
        <ArticleGroup :articles="articles | cardify(destinations)" />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import ArticleGroup from '~/components/article-group';
import Jumbotron from '~/components/jumbotron';
import Slide from '~/components/slide';
import { Symbols } from '~/constants';
import { cardify } from "~/filters";
import metadata from '~/mixins/metadata';
import axios from '~/plugins/axios';
import { mapState } from 'vuex';

export default {
  components: {
    ArticleGroup,
    Jumbotron,
    Slide
  },
  computed: mapState(['currentPage', 'language', 'articles']),
  filters: {
    cardify
  },
  mixins: [metadata],
  async asyncData ({ store }) {
    const { data } = await axios.get(`/api/destinations/${store.state.language}`)

    return {
      destinations: data
    }
  },
  async fetch ({ store }) {
    const landingPageResponse = await axios.get(`/api/landing-page/${store.state.language}/home`);
    store.commit(Symbols.MUTATIONS.SET_PAGE, landingPageResponse.data);

    const latestArticlesResponse = await axios.get(`/api/articles/latest/${store.state.language}/3`);
    store.commit(Symbols.MUTATIONS.SET_ARTICLES, latestArticlesResponse.data);
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
};
</script>
