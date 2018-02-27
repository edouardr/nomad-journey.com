<template>
  <div>
    <section>
      <h1 class="header">Nuxt TypeScript Starter</h1>
    </section>
    <section class="my-5 text-muted">
        <div class="container" v-html="introText"></div>
    </section>
    <section>
      <div class="container">
        <h2>Latest Articles</h2>
        <div class="row">
          <CardGroup :cards="latestArticles" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";
import CardGroup from "~/components/card-group.vue";

@Component({
  components: {
    CardGroup,
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
      url: "https://lorempixel.com/300/300/",
    },
    text: "Small description of the card1, to give attract readers in reading more about this amazing article",
    title: "Some Title",
  },
  {
    date: "Last month",
    id: "987654",
    img: {
      alt: "Some picture 2",
      url: "https://lorempixel.com/300/300/",
    },
    text: "Small description of the card2, to give attract readers in reading more about this amazing article",
    title: "Some Other Title",
  },
  {
    date: "Last year",
    id: "192837",
    img: {
      alt: "Some picture 3",
      url: "https://lorempixel.com/300/300/",
    },
    text: "Small description of the card2, to give attract readers in reading more about this amazing article",
    title: "Some Other other Title",
  }];
}
</script>

<style scoped>
</style>
