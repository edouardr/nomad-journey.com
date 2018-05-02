<template>
<section class="hero is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <TransparentHeader />
  </div>
  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="image">
      <div class="media-obj">
        <img :src="imgUrl" :alt="imgAlt">
      </div>
      <div class="content content-wrap">
        <h1 class="title has-text-white is-2 is-spaced is-large">{{title}}</h1>
        <div class="subtitle has-text-white is-4" v-html="desc"></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import TransparentHeader from '~/components/transparent-header'

export default {
  components: {
    TransparentHeader
  },
  props: [
    'desc',
    'title',
    'imgAlt',
    'imgUrl'
  ]
}
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;
    min-height: 512px;
    .hero-body {
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
  }
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
      animation: zoomImage infinite;
      animation-delay: .3s;
      animation-fill-mode: both;
      animation-duration: 80s;
      backface-visibility: hidden;
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
    .hero {
      min-height: 720px;
    }
    .content-wrap {
      min-height: 720px;
      padding: 90px percentage(1 / 12);
    }
  }

  @keyframes zoomImage {
    0% {
      opacity: 1;
      transform: scaleX(1);
    }
    50% {
      opacity: 1;
      transform: scale3d(1.4,1.4,1.4);
    }
    100% {
      opacity: 1;
      transform: scale3d(1.1,1.1,1.1);
    }

  }
</style>

