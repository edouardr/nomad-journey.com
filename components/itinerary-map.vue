<template>
    <div class="map-container">
      <div class="content-wrap">
      <iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;border: 0;"
        :src="`https://planificateur.a-contresens.net/embed-itineraire/${mapid}-carte?flag=0&style=classic&climate=0&itinerary=0&co2=0&budget=0&centercurrentstep=0&stepnumber=0&futurstep=no`"
        frameborder="0"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"></iframe>
      </div>
    </div>
</template>

<script>
export default {
  props: ['mapid']
}
</script>

<style scoped>
  .map-container {
    display: block;
    position: relative;
  }
  .content-wrap {
    position: relative;
    min-height: 512px;
    padding: 45px percentage(1 / 12);
    text-align: center;
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 20;
  }

  @media only screen and (min-width : "992px") {
    .content-wrap {
      min-height: 720px;
      padding: 90px percentage(1 / 12);
    }
  }
</style>

