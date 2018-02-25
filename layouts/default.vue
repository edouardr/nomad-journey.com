<template>
  <div>
    <Header />
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";
import Header from "~/components/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class extends Vue {
}
</script>

