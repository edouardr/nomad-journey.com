<template>
  <gmap-map
    :center="getCenter(lat, long)"
    :options="options"
    :zoom="7"
    style="width: 100%; height: 400px" >
    <gmap-marker
      :key="index"
      v-for="(m, index) in getMarkers(lat, long)"
      :position="m.position"
      :clickable="false"
      :draggable="false"
      @click="center=m.position"></gmap-marker>
    </gmap-map>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["currentLocation"]),
  methods: {
    getCenter: (lat, long) => ({
      lat: lat,
      lng: long
    }),
    getMarkers: (lat, long) => ([{
      position: {
        lat: lat,
        lng: long
      }
    }])
  },
  props: ['lat', 'long'],
  data () {
    return {
      options: {
        fullscreenControl: false,
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: true
      }
    }
  }
}
</script>

<style scoped>

</style>

