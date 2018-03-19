<template>
  <div>
    <Jumbotron :title="landingPage.jumbotronTitle.value" :desc="landingPage.jumbotronDesc.value" :isHero="true" :url="landingPage.jumbotronImage.assets[0].url"/>
    <section class="my-5 text-muted">
        <div class="container" v-html="landingPage.bodyText.value"></div>
    </section>
    <Slide :url="`/download.jpeg`"/>
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

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";
import { Commit } from "vuex";
import { State } from "vuex-class";
import { NavigationService } from "~/api/navigation-service";
import CardGroup from "~/components/card-group.vue";
import Footer from "~/components/footer.vue";
import Jumbotron from "~/components/jumbotron.vue";
import Slide from "~/components/slide.vue";
import { Symbols } from "~/constants";
import { LandingPage } from "~/models";

@Component({
  components: {
    CardGroup,
    Footer,
    Jumbotron,
    Slide,
  },
})
export default class extends Vue {
  public latestArticles: any[] = [{
    date: "2 days ago",
    id: "1234567",
    img: {
      alt: "Some picture",
      url: "https://lorempixel.com/360/300/",
    },
    text: "Small description of the card1, to give attract readers in reading more about this amazing article",
    title: "Some Title",
  },
  {
    date: "Last month",
    id: "987654",
    img: {
      alt: "Some picture 2",
      url: "https://lorempixel.com/360/300/",
    },
    text: "Small description of the card2, to give attract readers in reading more about this amazing article",
    title: "Some Other Title",
  },
  {
    date: "Last year",
    id: "192837",
    img: {
      alt: "Some picture 3",
      url: "https://lorempixel.com/360/300/",
    },
    text: "Small description of the card2, to give attract readers in reading more about this amazing article",
    title: "Some Other other Title",
  }];

  @State public landingPage: LandingPage;

  public head() {

    return {
      meta: [
          { hid: "description", name: "description", content: this.landingPage.metaDesc.value },
          { hid: "keywords", name: "keywords", content: this.landingPage.metaKeywords.value },
          { hid: "og:title", name: "og:title", content: this.landingPage.ogTitle.value },
          { hid: "og:description", name: "og:description", content: this.landingPage.ogDescription.value },
        ],
      title: this.landingPage.metaTitle.value,
    };
  }

  public async fetch({ store }) {

    const navigationService: NavigationService = new NavigationService();
    const navResponse = await navigationService.getAll(store.state.language);
    store.commit(Symbols.MUTATIONS.SET_NAVIGATION, navResponse.items);
  }
}
</script>
