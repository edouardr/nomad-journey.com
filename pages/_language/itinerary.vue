<template>
  <div>
    <ItineraryMap v-if="currentPage.mapId"
      :mapid="currentPage.mapId.value" />
    <IntroText :text="currentPage.bodyText.value" />
    <section class="section">
      <div class="container is-light">
        <KeyFactGroup :keyFacts="currentPage.keyFacts" />
      </div>
    </section>
  </div>
</template>

<script>
import IntroText from '~/components/intro-text'
import ItineraryMap from '~/components/itinerary-map'
import KeyFactGroup from '~/components/key-fact-group'
import { Symbols } from '~/constants'
import metadata from '~/mixins/metadata'
import axios from '~/plugins/axios'
import { mapState } from 'vuex'

export default {
  components: {
    IntroText,
    ItineraryMap,
    KeyFactGroup
  },
  computed: mapState(['currentPage']),
  mixins: [metadata],
  async fetch ({ store }) {
    const itineraryResponse = await axios.get(`/api/itinerary/${store.state.language}`)
    store.commit(Symbols.MUTATIONS.SET_PAGE, itineraryResponse.data)
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
}
</script>
