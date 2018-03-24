<template>
  <div>
    <b-card-group deck>
      <b-card v-for="card in cards"
              :key="card.id"
              :title="card.title"
              :img-src="card.img.url"
              :img-alt="card.img.alt"
              :sub-title="card.date"
              img-top>
        <b-card-body>
          <p class="card-text">
            {{card.text}}
          </p>
          <b-link :to="`/${card.url}`">
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
export default {
  props: ['cards']
}
</script>

<style scoped>
</style>
