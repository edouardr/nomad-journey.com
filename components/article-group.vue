<template>
  <div class="columns is-multiline">
    <div class="column is-one-third"
      v-for="article in articles"
      :key="article.id">
      <ArticleTile
        :id="article.id"
        :imgAlt="article.img.alt"
        :imgUrl="article.img.url"
        :posted="article.posted"
        :text="article.text"
        :title="article.title"
        :url="article.url"/>
    </div>
  </div>
</template>

<script>
import ArticleTile from "~/components/article-tile";

export default {
  components: {
    ArticleTile
  },
  props: ['articles']
}
</script>

<style lang="scss" scoped>
</style>
