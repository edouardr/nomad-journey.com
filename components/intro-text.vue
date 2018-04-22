<template>
    <section class="section has-background-light">
      <div class="container is-light">
        <div class="content is-medium" v-html="text"></div>
      </div>
    </section>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
</style>

