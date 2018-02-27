<template>
  <div>
    <b-card-group deck>
      <b-card v-for="card in cards"
              :key="card.id"
              :title="card.title"
              :img-src="card.img.url"
              :img-alt="card.img.alt"
              :sub-title="card.date"
              img-top>
        <b-card-body>
          <p class="card-text">
            {{card.text}}
          </p>
        </b-card-body>
        <div slot="footer">
          <b-link to="/destinations/surfing-in-bayron-bay">
            Read more
          </b-link>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator";

@Component({})
export default class CardGroup extends Vue {
  @Prop() public cards: any[];
}
</script>

<style scoped>
</style>
