<template>
    <div class="paral my-5" :style="`background-image: url('${url}')`">
    </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator";

@Component({})
export default class Slide extends Vue {
  @Prop() public url: string;
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

