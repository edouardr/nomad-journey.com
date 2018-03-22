<template>
  <div>
    <Jumbotron :title="destination.jumbotronTitle.value" :desc="destination.jumbotronDescription.value" :url="destination.jumbotronImage.value[0].url" />
    <section class="my-5 text-muted">
      <div class="container" v-html="destination.bodyText.value"></div>
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
import { mapState } from "vuex";
import CardGroup from "~/components/card-group";
import Jumbotron from "~/components/jumbotron";
import { Symbols } from "~/constants";
import axios from "~/plugins/axios";

export default {
  components: {
    Jumbotron,
    CardGroup
  },
  async asyncData ({ store, params }) {
    const { data } = await axios.get(`api/destinations/${store.state.language}/${params.slug}`)

    return {
      destination: data,
      articles: data.articles
        .filter((article) => {
          return article
            && article.jumbotronTitle
            && article.jumbotronDescription
        })
        .map((article) => {
          return {
            id: article.id,
            title: article.jumbotronTitle.text,
            text: article.jumbotronDescription.text,
            url: `destinations/${data.urlSlug.value}/${article.slug.value}`,
            img: {
              url: article.jumbotronImage.assets.length ? article.jumbotronImage.assets[0].url: '',
              alt: article.jumbotronImage.assets.length ? article.jumbotronImage.assets[0].text: '',
            }
          }
        })
    }
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.destination.metaDescription.value },
        { hid: 'keywords', name: 'keywords', content: this.destination.metaKeywords.value },
        { hid: 'og:title', name: 'og:title', content: this.destination.ogTitle.value },
        { hid: 'og:description', name: 'og:description', content: this.destination.ogDescription.value }
      ],
      title: this.destination.metaTitle.value
    }
  }
}
</script>
<style scoped>
</style>
