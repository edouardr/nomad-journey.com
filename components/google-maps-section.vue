<template>
  <div class="paral">
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
  </div>
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
  .paral {
    min-height: 400px;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
    border-radius: 0;
  }
</style>

