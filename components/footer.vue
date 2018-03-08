<template>
  <footer class="bg-dark mt-5 p-5 text-muted text-center text-small">
    <p class="mb-1">© 2018-2019 A Nomad Journey</p>
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="#">fb</a>
      </li>
      <li class="list-inline-item">
        <a href="#">insta</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";

@Component({})
export default class Footer extends Vue {
}
</script>

<style scoped>
  .paral {
    min-height: 400px;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50%;
    box-sizing: border-box;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
    border-radius: 0;
  }
</style>

