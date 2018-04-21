<template>
  <div class="grid">
    <div class="grid__group">
      <div class="item"
        v-lazy-container="{ selector: 'img' }"
        v-for="image in rightColumnImages"
        :key="image.id">
        <img :data-src="image.url" :alt="image.description">
        <div class="item__details" v-show="image.description">
          {{image.description}}
        </div>
      </div>
    </div>
    <div class="grid__group">
      <div class="item"
        v-lazy-container="{ selector: 'img' }"
        v-for="image in leftColumnImages"
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
  computed: {
    leftColumnImages() {
      return this.orderImages().filter((value, index) => index%2 !== 0)
    },
    rightColumnImages() {
      return this.orderImages().filter((value, index) => index%2 === 0)
    }
  },
  methods: {
    orderImages() {
      // const sorted = this.images.assets.sort((a, b) => this.stringCompare(a.name, b.name))
      return this.images.assets
    },
    stringCompare(str1, str2) {
      return (str1 > str2) - (str1 < str2)
    }
  },
  props: [
    'images'
  ]
}
</script>


<style lang="scss" scoped>
  .grid {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;

    &__group {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
      padding: 0 5px;

      @media screen and (max-width: 600px) {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
      }
    }
  }

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
