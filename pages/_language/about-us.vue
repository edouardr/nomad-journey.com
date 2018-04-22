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
          <div class="column is-half">
            <div class="card">
              <div class="card-image ri">
                <figure class="image is-16by9">
                  <img v-lazy="currentPage.jumbotronImage.value[0].url" :alt="currentPage.jumbotronImage.value[0].text">
                </figure>
              </div>
              <div class="card-content content">
                  <p class="title is-5 is-spaced">
                    A super duper very very long question about your life?
                  </p>
                  <p class="has-text-black is-5">
                    Well that's my answer
                  </p>
                  <p class="title is-5 is-spaced">
                    A super duper very very long question about your life?
                  </p>
                  <p class="has-text-black is-5">
                    Well that's my answer
                  </p>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="card">
              <div class="card-image ri">
                <figure class="image is-16by9">
                  <img v-lazy="currentPage.jumbotronImage.value[0].url" :alt="currentPage.jumbotronImage.value[0].text">
                </figure>
              </div>
              <div class="card-content content">
                  <p class="title is-5 is-spaced">
                    A super duper very very long question about your life?
                  </p>
                  <p class="has-text-black is-5">
                    Well that's my answer
                  </p>
                  <p class="title is-5 is-spaced">
                    A super duper very very long question about your life?
                  </p>
                  <p class="has-text-black is-5">
                    Well that's my answer
                  </p>
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
import { mapState } from 'vuex';

export default {
  components: {
    IntroText,
    Jumbotron
  },
  computed: mapState(['currentPage', 'language', 'resources'])
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
