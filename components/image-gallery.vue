<template>
  <div class="gallery">
    <div class="gallery-item" v-for="image in images.assets"
      :key="image.id">
      <img class="gallery-image" :src="image.url" alt="image.description">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'images'
  ]
}
</script>


<style lang="scss" scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    /* Compensate for excess margin on outer gallery flex items */
    margin: -1rem -1rem;
  }

  .gallery-item {
    /* Minimum width of 24rem and grow to fit available space */
    flex: 1 0 24rem;
    /* Margin value should be half of grid-gap value as margins on flex items don't collapse */
    margin: 1rem;
    overflow: hidden;
  }

  .gallery-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-out;

    &:hover {
      transform: scale(1.15);
    }
  }

  @supports (display: grid) {
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
      grid-gap: 1rem;
    }

    .gallery,
    .gallery-item {
      margin: 0;
    }
  }
</style>
