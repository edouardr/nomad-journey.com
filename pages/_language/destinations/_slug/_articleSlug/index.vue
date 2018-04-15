<template>
  <article>
    <ArticleHeader :title="currentArticle.jumbotronTitle.value"
      :desc="currentArticle.jumbotronDescription.value"
      :url="currentArticle.jumbotronImage.value[0].url" />
    <section class="section">
      <Breadcrumb :links="getBreadcrumbLinks"/>
    </section>
    <section class="section">
      <div class="container is-light">
        <div class="content is-medium" v-html="currentArticle.bodyText.value"></div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <ImageGallery :images="currentArticle.images" />
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
import Breadcrumb from "~/components/breadcrumb";
import ImageGallery from "~/components/image-gallery";
import VueDisqus from "~/components/vue-disqus";
import { Symbols } from "~/constants";
import { ContentTypes } from '~/content-types';
import metadata from "~/mixins/metadata";
import axios from "~/plugins/axios";
import { mapState } from "vuex";

export default {
  components: {
    ArticleHeader,
    Breadcrumb,
    ImageGallery,
    VueDisqus
  },
  computed: {
    ...mapState({
      currentArticle: "currentArticle",
      currentDestination: "currentDestination",
      language: "language",
      getBreadcrumbLinks: (state) => {
        return [
          {
            id: '1',
            isActive: false,
            redirectTo: `/${state.language}`,
            title: 'home'
          },
          {
            id: '2',
            isActive: false,
            redirectTo: `/${state.language}/destinations`,
            title: 'Destinations'
          },
          {
            id: '3',
            isActive: false,
            redirectTo: `/${state.language}/${state.currentDestination.urlSlug.value}`,
            title: state.currentDestination.jumbotronTitle.value
          },
          {
            id: '4',
            isActive: false,
            redirectTo: '',
            title: state.currentArticle.jumbotronTitle.value
          },
        ]
      }
    })
  },
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

    if(!store.state.currentDestination) {
      const destinationCodename = store.state.currentArticle.system[ContentTypes.System.fields.sitemapLocations][0]
      const { data } = await axios.get(`/api/destinations/getbycode/${store.state.language}/${destinationCodename}`)
      store.commit(Symbols.MUTATIONS.SET_DESTINATION, data);
    }
  },
  head () {
    return this.getMetadata(this.currentArticle)
  }
}
</script>

<style scoped>
</style>
