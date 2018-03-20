<template>
  <section class="parallax-container">
    <div class="parallax-slide parallax-header" :style="`background-image: url('${url}');`">
      <div class="parallax-slide--text">
        <h1>
          {{title}}
        </h1>
        <div v-html="desc"></div>
      </div>
    </div>

  </section>


</template>

<script>
import Vue from 'vue'

export default new Vue({
  props: [
    'desc',
    'title',
    'url'
  ]
})
</script>

<style scoped>
  h1 {
    font-size: 250%
  }

  .parallax-slide {
    position: relative;
    padding: 25vh 10%;
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
    transform-style: inherit;
  }

  .parallax-slide, .parallax-slide:before {
    background: 50% 50% / cover;
  }

  .parallax-header {
    text-align: center;
    font-size: 175%;
    color: #fff;
    text-shadow: 0 2px 2px #000;
    z-index:2;
  }

  .parallax-slide--text {
    transform: translateZ(.25px) scale(.75);
    transform-origin: 50% 100%;
  }
</style>

