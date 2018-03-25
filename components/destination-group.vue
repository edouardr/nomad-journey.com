<template>
  <div class="columns tile is-ancestor">
    <div class="column tile is-vertical"
          v-for="destination in destinations"
          :key="destination.id"
          img-top>
      <div class="overlay">
        <div class="banner-hover">
          <router-link :to="`/${destination.url}`">
            <h3 class="tile-content">{{destination.title}}</h3>
          </router-link>
        </div>
        <div class="col-bg" :style="`background-image: url(${destination.img.url});background-size: cover;`"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['destinations'],
}
</script>

<style lang="scss" scoped>
  .overlay .banner-hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  .overlay {
    overflow: hidden;
    position: relative;
    background-color: rgba(60, 60, 60, .85);
  }
  .overlay .banner-hover a {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .tile-content {
    color: #fff;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 20px 0;
    margin: 50px 40px;
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;

    &:hover {
      color: $water;
      border-color: $water;
    }
  }
  .col-bg
  {
    min-height:155px;
  }
</style>
