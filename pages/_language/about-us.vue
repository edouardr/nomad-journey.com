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
            <div class="card">
              <div class="card-image ri">
                <figure class="image is-16by9">
                  <img v-lazy="person.image.value[0].url" :alt="person.image.value[0].text">
                </figure>
              </div>
              <div class="card-content">
                <div class="content"
                  v-for="questionAnswer in person.interview"
                  :key="questionAnswer.id">
                    <p class="title is-5">
                      {{questionAnswer.question.text}}
                    </p>
                    <p class="has-text-black is-5">
                      {{questionAnswer.answer.text}}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IntroText from '~/components/intro-text';
import Jumbotron from '~/components/jumbotron';
import { Symbols } from '~/constants';
import metadata from '~/mixins/metadata';
import axios from '~/plugins/axios';
import { mapState } from 'vuex';

export default {
  components: {
    IntroText,
    Jumbotron
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

<style lang="scss" scoped>
  .card {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    width: 100%;
    position: relative;
    text-align: left;
    padding-bottom: 5px;
    overflow: hidden;
    color: $water;

    .card-content {
      border: 2px solid $water;
      background: transparent;
      padding-top: 58%;
      margin-top: calc(-55% + 2px);
    }
  }

  .card-image {
    position: relative;
    overflow: hidden;
    z-index: 1;

    .ri {
      width: 100%;
      overflow: hidden;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .card-content {
    position: relative;
    padding: 10px;
    margin: 0 5px;
    transition: border-color .5s;
    z-index: 2;
    pointer-events: none;
  }
</style>
