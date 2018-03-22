<template>
  <div>
    <Jumbotron :title="article.jumbotronTitle.value" :desc="article.jumbotronDescription.value" :url="article.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="article.bodyText.value"></div>
    </section>
    <section>
      <div class="container">
        <h2>List of articles</h2>
        <div class="row">
          <CardGroup :cards="articles" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import { mapState } from "vuex";
import CardGroup from "~/components/card-group";
import Jumbotron from "~/components/jumbotron";
import { Symbols } from "~/constants";

export default {
  components: {
    Jumbotron,
    CardGroup
  },
  async asyncData ({ store, params }) {
    const { data } = await axios.get(`api/articles/${store.state.language}/${params.articleSlug}`)

    return {
      article: data,
    }
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.article.metaDescription.value },
        { hid: 'keywords', name: 'keywords', content: this.article.metaKeywords.value },
        { hid: 'og:title', name: 'og:title', content: this.article.ogTitle.value },
        { hid: 'og:description', name: 'og:description', content: this.article.ogDescription.value }
      ],
      title: this.article.metaTitle.value
    }
  }
}
</script>
<style scoped>
</style>
