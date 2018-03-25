<template>
  <div>
    <Jumbotron :title="currentPage.jumbotronTitle.value" :desc="currentPage.jumbotronDescription.value" :url="currentPage.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="currentPage.bodyText.value"></div>
    </section>
    <Slide :url="`https://lorempixel.com/360/300/`" />
    <section>
      <div class="container">
        <h2>Latest Articles</h2>
        <div class="row">
          <ArticleGroup :articles="latestArticles" />
        </div>
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
  mixins: [metadata],
  data () {
    return {
      latestArticles: [
        {
          date: '2 days ago',
          id: '1234567',
          img: {
            alt: 'Some picture',
            url: 'https://lorempixel.com/360/300/'
          },
          text:
            'Small description of the card1, to give attract readers in reading more about this amazing article',
          title: 'Some Title'
        },
        {
          date: 'Last month',
          id: '987654',
          img: {
            alt: 'Some picture 2',
            url: 'https://lorempixel.com/360/300/'
          },
          text:
            'Small description of the card2, to give attract readers in reading more about this amazing article',
          title: 'Some Other Title'
        },
        {
          date: 'Last year',
          id: '192837',
          img: {
            alt: 'Some picture 3',
            url: 'https://lorempixel.com/360/300/'
          },
          text:
            'Small description of the card2, to give attract readers in reading more about this amazing article',
          title: 'Some Other other Title'
        }
      ]
    };
  },
  async fetch ({ store }) {
    if (!store.state.language) {
      return;
    }
    const { data } = await axios.get(`/api/landing-page/${store.state.language}/home`);
    store.commit(Symbols.MUTATIONS.SET_PAGE, data);
  },
  head () {
    return this.getMetadata(this.currentPage)
  }
};
</script>
