<template>
  <div class="columns">
    <div class="column"
      v-for="article in articles"
      :key="article.id">
      <router-link :to="article.url">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="article.img.url" :alt="article.img.alt">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{article.title}}</p>
                <p class="subtitle is-6">{{article.date}}</p>
              </div>
            </div>

            <div class="content">
              {{article.text}}
            </div>
          </div>
        </div>
      </router-link>
    </div>
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
