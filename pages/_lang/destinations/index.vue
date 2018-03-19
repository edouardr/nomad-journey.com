<template>
  <div>
    <Jumbotron :title="landingPage.jumbotronTitle.value" :desc="landingPage.jumbotronDesc.value" :isHero="true" :url="landingPage.jumbotronImage.assets[0].url"/>
    <section class="my-5 text-muted">
        <div class="container" v-html="landingPage.bodyText.value"></div>
    </section>
    <section>
      <div class="container">
        <h2>List of destinations</h2>
        <div class="row">
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
    Jumbotron,
  },
})
export default class extends Vue {
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

  public async fetch({ store, isServer }) {
    if (isServer) {

      const navigationService: NavigationService = new NavigationService();
      const navResponse = await navigationService.getAll(store.state.language);
      store.commit(Symbols.MUTATIONS.SET_NAVIGATION, navResponse.items);
    } else {
      alert("NOT SERVER");
    }
  }
}
</script>
<style scoped>
</style>
