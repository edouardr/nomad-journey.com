<template>
  <article class="article-container">
    <Header />
    <ArticleHeader v-if="currentArticle.jumbotronImage"
      :posted="currentArticle.posted.value"
      :location="currentArticle.location.value"
      :title="currentArticle.jumbotronTitle.value"
      :desc="currentArticle.jumbotronDescription.value"
      :url="currentArticle.jumbotronImage.value[0].url" />
    <section class="section">
      <Breadcrumb :links="getBreadcrumbLinks"/>
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
import ArticleHeader from '~/components/article-header'
import Breadcrumb from '~/components/breadcrumb'
import Header from '~/components/header'
import ImageGallery from '~/components/image-gallery'
import VueDisqus from '~/components/vue-disqus'
import { Symbols } from '~/constants'
import { ContentTypes } from '~/content-types'
import metadata from '~/mixins/metadata'
import axios from '~/plugins/axios'
import { mapState } from 'vuex'

export default {
  components: {
    ArticleHeader,
    Breadcrumb,
    Header,
    ImageGallery,
    VueDisqus
  },
  computed: {
    ...mapState({
      currentArticle: 'currentArticle',
      currentDestination: 'currentDestination',
      language: 'language'
    }),
    getBreadcrumbLinks () {
      return [
        {
          id: '1',
          isActive: false,
          redirectTo: `/${this.language}`,
          title: this.navHome.title
        },
        {
          id: '2',
          isActive: false,
          redirectTo: `/${this.language}${this.navDest.redirectTo}`,
          title: this.navDest.title
        },
        {
          id: '3',
          isActive: false,
          redirectTo: `/${this.language}${this.navDest.redirectTo}/${this.currentDestination.urlSlug.value}`,
          title: this.currentDestination.jumbotronTitle.value
        },
        {
          id: '4',
          isActive: true,
          redirectTo: '',
          title: this.currentArticle.jumbotronTitle.value
        }
      ]
    }
  },
  mixins: [metadata],
  scrollToTop: true,
  async asyncData ({ store }) {
    const homeNavItemResponse = await axios.get(`/api/navigation/item/${store.state.language}/${Symbols.NAVIGATION.HOME}`)
    const destinationsNavItemResponse = await axios.get(`/api/navigation/item/${store.state.language}/${Symbols.NAVIGATION.DESTINATIONS}`)

    return {
      navDest: {
        redirectTo: destinationsNavItemResponse.data.redirectTo.text,
        title: destinationsNavItemResponse.data.title.text
      },
      navHome: {
        title: homeNavItemResponse.data.title.text
      },
      shortname: process.env.DISQUS_SHORTNAME
    }
  },
  async fetch ({ store, params }) {
    if (!store.state.currentArticle) {
      const { data } = await axios.get(`/api/articles/${store.state.language}/${params.articleSlug}`)
      store.commit(Symbols.MUTATIONS.SET_PAGE, data)
      store.commit(Symbols.MUTATIONS.SET_ARTICLE, data)
    }

    if (!store.state.currentDestination) {
      const destinationCodename = store.state.currentArticle.system[ContentTypes.System.fields.sitemapLocations][0]
      const { data } = await axios.get(`/api/destinations/getbycode/${store.state.language}/${destinationCodename}`)
      store.commit(Symbols.MUTATIONS.SET_DESTINATION, data)
      store.commit(Symbols.MUTATIONS.SET_ARTICLES, data.articles)
    }
  },
  head () {
    return this.getMetadata(this.currentArticle)
  }
}
</script>

<style lang="scss" scoped>
  .article-container {
    padding-top: 3.25rem;
  }
</style>

