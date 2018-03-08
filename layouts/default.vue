<template>
  <div>
    <Header />
    <div class="">
      <nuxt/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator";
import Header from "~/components/header.vue";

@Component({
  components: {
    Header,
  },
})
export default class extends Vue {
}
</script>

<style>
html {
  height: 100%;
  overflow: hidden;
}

body{
  margin:0;
  padding:0;
	perspective: 1px;
	transform-style: preserve-3d;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

