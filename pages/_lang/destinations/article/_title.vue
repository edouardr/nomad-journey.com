<template>
  <h1>Article</h1>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";
import { State } from "vuex-class";
import Jumbotron from "~/components/jumbotron.vue";

@Component({
  components: {
    Jumbotron,
  },
})
export default class extends Vue {
  @State public people;
}
</script>
<style scoped>
</style>
