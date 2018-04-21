<template>
  <div class="grid">
    <div class="grid__group">
      <ImageGalleryItem
        v-for="image in rightColumnImages"
        :key="image.id" :image="image"/>
    </div>
    <div class="grid__group">
      <ImageGalleryItem
        v-for="image in leftColumnImages"
        :key="image.id" :image="image"/>
    </div>
  </div>
</template>

<script>
import ImageGalleryItem from "~/components/image-gallery-item";

export default {
  components: {
    ImageGalleryItem
  },
  computed: {
    leftColumnImages() {
      return this.orderedImages.filter((value, index) => index%2 !== 0)
    },
    rightColumnImages() {
      return this.orderedImages.filter((value, index) => index%2 === 0)
    }
  },
  data() {
    return {
      orderedImages: this.images.assets.sort((a, b) => this.stringCompare(a.name, b.name))
    }
  },
  methods: {
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
</style>
