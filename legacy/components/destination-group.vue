<template>
  <div class="columns is-multiline">
    <div class="column is-one-third"
          v-for="destination in destinations"
          :key="destination.id"
          img-top>
      <DestinationTile
        :id="destination.id"
        :imgAlt="destination.img.alt"
        :imgUrl="destination.img.url"
        :title="destination.title"
        :url="destination.url"/>
    </div>
  </div>
</template>

<script>
import DestinationTile from '~/components/destination-tile'

export default {
  components: {
    DestinationTile
  },
  props: ['destinations']
}
</script>
