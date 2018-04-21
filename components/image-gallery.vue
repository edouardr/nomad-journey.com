<template>
  <div class="grid-container">
    <div class="grid">
      <div class="item"
        v-lazy-container="{ selector: 'img' }"
        v-for="image in orderImages(images.assets)"
        :key="image.id">
        <img :data-src="image.url" :alt="image.description">
        <div class="item__details" v-show="image.description">
          {{image.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    stringCompare(str1, str2) {
      return (str1 > str2) - (str1 < str2)
    },
    orderImages(images){
      return images.sort((a, b) => this.stringCompare(a.name, b.name))
    }
  },
  props: [
    'images'
  ]
}
</script>


<style lang="scss" scoped>
  .grid-container {
    display: none;

    @supports(display: grid) {
      display: block;
    }
  }

  .grid {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-auto-flow: row dense;

    @media (max-width: 575.98px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 768.98px) and (min-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 991.98px) and (min-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 1199.98px) and (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    grid-row-end: span 2;
    justify-self: stretch;
    box-sizing: border-box;
    box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);

    &__details {
      position: absolute;
      bottom: 0;
      left:0;
      right:0;
      z-index: 1;
      padding: 3px 3px 3px 15px;
      background: rgba(75,75,75, 0.8);
      text-transform: lowercase;
      letter-spacing: 1px;
      color: #fff;
      text-shadow: 1px 1px #000;
    }
  }
</style>
