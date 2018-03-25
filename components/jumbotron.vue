<template>
  <section class="hero is-large is-bold">
    <div class="hero-body" :style="`background-image: url('${url}');`">
    <div class="has-text-centered">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle" v-html="desc">
          Primary bold subtitle
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'desc',
    'title',
    'url'
  ]
}
</script>

<style scoped>

</style>

