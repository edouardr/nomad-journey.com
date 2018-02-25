<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";

@Component({
  components: {
  },
})
export default class extends Vue {
}
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
