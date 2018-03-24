<template>
  <div>
    <Jumbotron :title="article.jumbotronTitle.value" :desc="article.jumbotronDescription.value" :url="article.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="article.bodyText.value"></div>
    </section>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import CardGroup from "~/components/card-group";
import Jumbotron from "~/components/jumbotron";
import metadata from "~/mixins/metadata";

export default {
  components: {
    Jumbotron,
    CardGroup
  },
  mixins: [metadata],
  async asyncData ({ store, params }) {
    const { data } = await axios.get(`/api/articles/${store.state.language}/${params.articleSlug}`)

    return {
      article: data,
    }
  },
  head () {
    return this.getMetadata(this.article)
  }
}
</script>
<style scoped>
</style>
