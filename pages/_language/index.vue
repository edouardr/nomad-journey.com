<template>
  <div>
    <Jumbotron v-if="currentPage.jumbotronImage"
      :title="currentPage.jumbotronTitle.value"
      :desc="currentPage.jumbotronDescription.value"
      :imgUrl="currentPage.jumbotronImage.value[0].url"
      :imgAlt="currentPage.jumbotronImage.value[0].text" />
    <section class="section has-background-light">
      <div class="container is-light">
        <div class="content is-medium" v-html="currentPage.bodyText.value"></div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content">
          <h2>Latest Articles</h2>
        </div>
        <ArticleGroup :articles="articles | cardify(resolveListItemUrl, language, destinations)" />
      </div>
    </section>
    <GoogleMaps :lat="currentLocation.latitude.value" :long="currentLocation.longitude.value"/>
  </div>
</template>

<script>
import ArticleGroup from '~/components/article-group';
import GoogleMaps from '~/components/google-maps-section';
import Jumbotron from '~/components/jumbotron';
import Slide from '~/components/slide';
import { Symbols } from '~/constants';
import { ContentTypes } from '~/content-types';
import { cardify } from "~/filters";
import metadata from '~/mixins/metadata';
import axios from '~/plugins/axios';
import { mapState } from 'vuex';

export default {
  components: {
    ArticleGroup,
    GoogleMaps,
    Jumbotron,
    Slide
  },
  computed: mapState(['currentPage', 'language', 'articles', 'currentLocation']),
  filters: {
    cardify
  },
  methods:{
    resolveListItemUrl: (listItem, language, destinations) => {
      const destination = destinations.filter(dest => dest.system.codename === listItem.system[ContentTypes.System.fields.sitemapLocations][0])[0]
      return `/${language}/destinations/${destination.urlSlug.value}/${listItem.urlSlug.value}`;
    }
  },
  mixins: [metadata],
  async asyncData ({ store }) {
    const { data } = await axios.get(`/api/destinations/${store.state.language}`)

    return {
      destinations: data
    }
  },
  async fetch ({ store }) {
    const landingPageResponse = await axios.get(`/api/landing-page/${store.state.language}/home`)
    store.commit(Symbols.MUTATIONS.SET_PAGE, landingPageResponse.data)

    const latestArticlesResponse = await axios.get(`/api/articles/latest/${store.state.language}/3`)
    store.commit(Symbols.MUTATIONS.SET_ARTICLES, latestArticlesResponse.data)

    const currentLocationResponse = await axios.get(`/api/location/current`)
    store.commit(Symbols.MUTATIONS.SET_CURRENT_LOCATION, currentLocationResponse.data)
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
};
</script>
