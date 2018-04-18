<template>
  <div>
    <ItineraryMap v-if="currentPage.mapId"
      :mapid="currentPage.mapId.value" />
    <section class="section has-background-light">
      <div class="container is-light">
        <div class="content is-medium" v-html="currentPage.bodyText.value"></div>
      </div>
    </section>
    <KeyFactGroup :keyFacts="currentPage.keyFacts" />
  </div>
</template>

<script>
import ItineraryMap from '~/components/itinerary-map';
import KeyFactGroup from '~/components/key-fact-group';
import { Symbols } from '~/constants';
import metadata from '~/mixins/metadata';
import axios from '~/plugins/axios';
import { mapState } from 'vuex';

export default {
  components: {
    ItineraryMap,
    KeyFactGroup
  },
  computed: mapState(['currentPage']),
  mixins: [metadata],
  async asyncData ({ store }) {

  },
  async fetch ({ store }) {
    const itineraryResponse = await axios.get(`/api/itinerary/${store.state.language}`)
    store.commit(Symbols.MUTATIONS.SET_PAGE, itineraryResponse.data)
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
};
</script>

<style lang="scss" scoped>

</style>
