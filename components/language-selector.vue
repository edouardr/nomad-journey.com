<template>
  <div class="bg-dark mt-5 p-5 text-muted text-center text-small">
    <ul class="list-inline">
      <li class="list-inline-item"><a href="/">English</a></li>
      <li class="list-inline-item"><a href="/fr">Français</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";
import { Action } from "vuex-class";

@Component({})
export default class LanguageSelector extends Vue {
  @Action public setLanguage;
}
</script>

