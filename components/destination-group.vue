<template>
  <div>
    <b-card-group deck>
      <b-card v-for="destination in destinations"
              :key="destination.id"
              :title="destination.title"
              :img-src="destination.img.url"
              :img-alt="destination.img.alt"
              :sub-title="destination.date"
              img-top>
        <b-card-body>
          <p class="card-text">
            {{destination.text}}
          </p>
          <b-link :to="`/${destination.url}`">
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
  props: ['destinations'],
}
</script>

<style scoped>
</style>
