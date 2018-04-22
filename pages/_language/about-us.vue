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
        <div class="columns">
          <div class="column is-half"
            v-for="person in currentPage.persons"
            :key="person.id">
            <PersonTile :person="person" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IntroText from '~/components/intro-text';
import Jumbotron from '~/components/jumbotron';
import PersonTile from '~/components/person-tile';
import { Symbols } from '~/constants';
import metadata from '~/mixins/metadata';
import axios from '~/plugins/axios';
import { mapState } from 'vuex';

export default {
  components: {
    IntroText,
    Jumbotron,
    PersonTile
  },
  computed: mapState(['currentPage']),
  mixins: [metadata],
  async fetch ({ store }) {
    const aboutResponse = await axios.get(`/api/about-us/${store.state.language}`)
    store.commit(Symbols.MUTATIONS.SET_PAGE, aboutResponse.data)
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
}
</script>
