<template>
  <div>
      <Jumbotron :title="home.jumbotronTitle.value" :desc="home.jumbotronDesc.value" :isHero="true" :url="home.jumbotronImage.assets[0].url"/>
      <section class="my-5 text-muted">
          <div class="container" v-html="home.bodyText.value"></div>
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
import { HomeService } from "~/api/home-service";
import { NavigationService } from "~/api/navigation-service";
import CardGroup from "~/components/card-group.vue";
import Footer from "~/components/footer.vue";
import Jumbotron from "~/components/jumbotron.vue";
import Slide from "~/components/slide.vue";
import { Symbols } from "~/constants";
import { Home } from "~/models";

@Component({
  components: {
    CardGroup,
    Footer,
    Jumbotron,
    Slide,
  },
})
export default class extends Vue {
  public introText: string = `
    <h2>Welcome!</h2>
    <p class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
    ut aliquid ex ea commodi consequatur?</p>`;

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

  @State public home: Home;

  public head() {

    return {
      meta: [
          { hid: "description", name: "description", content: this.home.metaDesc.value },
          { hid: "keywords", name: "keywords", content: this.home.metaKeywords.value },
          { hid: "og:title", name: "og:title", content: this.home.ogTitle.value },
          { hid: "og:description", name: "og:description", content: this.home.ogDescription.value },
        ],
      title: this.home.metaTitle.value,
    };
  }

  public async fetch({ store }) {
    const homeService: HomeService = new HomeService();
    store.commit(Symbols.MUTATIONS.SET_HOME, await homeService.get(store.state.language));

    const navigationService: NavigationService = new NavigationService();
    const navResponse = await navigationService.getAll(store.state.language);
    store.commit(Symbols.MUTATIONS.SET_NAVIGATION, navResponse.items);
  }
}
</script>
