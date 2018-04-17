<template>
  <div class="hero is-fullheight">
    <iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;border: 0;"
      src="https://planificateur.a-contresens.net/embed-itineraire/66352-carte?flag=0&style=osm&climate=0&itinerary=0&co2=0&budget=0&centercurrentstep=0&stepnumber=0&futurstep=no"
      frameborder="0"
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      oallowfullscreen="true"
      msallowfullscreen="true"></iframe>
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

  },
  mixins: [metadata],
  async asyncData ({ store }) {

  },
  async fetch ({ store }) {
  },
  head () {
    return //this.getMetadata(this.currentPage)
  }
};
</script>
