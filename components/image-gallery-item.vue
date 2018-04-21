<template>
  <div class="item" v-lazy-container="{ selector: 'img' }">
    <img :data-src="image.url" :alt="image.description">
    <div class="item__details" v-show="image.description">
      {{image.description}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['image']
}
</script>

<style lang="scss" scoped>
  .item {
    position: relative;
    box-sizing: border-box;
    margin-bottom: 10px;

    img {
      vertical-align: middle;
    }

    &__details {
      position: absolute;
      bottom: 0;
      left:0;
      right:0;
      z-index: 1;
      padding: 3px 3px 3px 15px;
      background: rgba(75,75,75, 0.8);
      letter-spacing: 1px;
      color: #fff;
      text-shadow: 1px 1px #000;
    }
  }
</style>

