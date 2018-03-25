<template>
  <section class="parallax-container">
    <div class="parallax-slide parallax-header" :style="`background-image: url('${url}');`">
      <div class="parallax-slide--text">
        <h1>
          {{title}}
        </h1>
        <div v-html="desc"></div>
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

