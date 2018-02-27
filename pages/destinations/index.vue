<template>
  <section>
    <h1 class="header">Destinations</h1>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";
import { State } from "vuex-class";

@Component({
  components: {
  },
})
export default class extends Vue {
  @State public people;
}
</script>
<style scoped>
</style>
