<template>
  <div>
    <b-card-group deck>
      <b-card v-for="article in articles"
              :key="article.id"
              :title="article.title"
              :img-src="article.img.url"
              :img-alt="article.img.alt"
              :sub-title="article.date"
              img-top>
        <b-card-body>
          <p class="card-text">
            {{article.text}}
          </p>
          <b-link @click="select(article.id)" :to="`/${article.url}`">
            Read more
          </b-link>
        </b-card-body>
        <div slot="footer">
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { Symbols } from "~/constants";
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      select: Symbols.ACTIONS.SELECT_ARTICLE
    })
  },
  props: ['articles'],
}
</script>

<style scoped>
</style>
