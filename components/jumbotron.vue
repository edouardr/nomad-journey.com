<template>
  <div class="image">
    <div class="media-obj">
      <img :src="imgUrl" :alt="imgAlt">
    </div>
    <div class="content content-wrap">
      <h1 class="title has-text-white is-1 is-spaced is-large">{{title}}</h1>
      <div class="subtitle has-text-white is-3" v-html="desc"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'desc',
    'title',
    'imgAlt',
    'imgUrl'
  ]
}
</script>

<style lang="scss" scoped>
  .media-obj{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        min-height: 512px;
        object-fit: cover;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 10;
      background-color: $overlay;
    }
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
    h1 {
      margin-bottom: 33px;
    }

    .content-wrap {
      min-height: 720px;
      padding: 90px percentage(1 / 12);
    }
  }
</style>

