<template>
  <div>
    <Jumbotron :title="landingPage.jumbotronTitle.value" :desc="landingPage.jumbotronDescription.value" :url="landingPage.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="landingPage.bodyText.value"></div>
    </section>
    <Slide :url="`https://lorempixel.com/360/300/`" />
    <section>
      <div class="container">
        <h2>Latest Articles</h2>
        <div class="row">
          <CardGroup :cards="latestArticles" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardGroup from "~/components/card-group";
import Jumbotron from "~/components/jumbotron";
import Slide from "~/components/slide";
import { Symbols } from "~/constants";
import axios from "~/plugins/axios";

export default {
  components: {
    CardGroup,
    Jumbotron,
    Slide
  },
  computed: mapState(["landingPage", "language"]),
  data () {
    return {
      latestArticles: [
        {
          date: "2 days ago",
          id: "1234567",
          img: {
            alt: "Some picture",
            url: "https://lorempixel.com/360/300/"
          },
          text:
            "Small description of the card1, to give attract readers in reading more about this amazing article",
          title: "Some Title"
        },
        {
          date: "Last month",
          id: "987654",
          img: {
            alt: "Some picture 2",
            url: "https://lorempixel.com/360/300/"
          },
          text:
            "Small description of the card2, to give attract readers in reading more about this amazing article",
          title: "Some Other Title"
        },
        {
          date: "Last year",
          id: "192837",
          img: {
            alt: "Some picture 3",
            url: "https://lorempixel.com/360/300/"
          },
          text:
            "Small description of the card2, to give attract readers in reading more about this amazing article",
          title: "Some Other other Title"
        }
      ]
    };
  },
  async asyncData ({ store }) {
    if (!store.state.language) {
      return;
    }
    const { data } = await axios.get(`/api/landing-page/${store.state.language}/home`);
    store.commit(Symbols.MUTATIONS.SET_HOME, data);
  },
  head () {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.landingPage.metaDescription.value
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.landingPage.metaKeywords.value
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.landingPage.ogTitle.value
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.landingPage.ogDescription.value
        }
      ],
      title: this.landingPage.metaTitle.value
    };
  }
};
</script>
