<template>
  <div class="gallery">
    <div class="gallery-item"
      v-lazy-container="{ selector: 'img' }"
      v-for="image in orderImages(images.assets)"
      :key="image.id">
      <img class="gallery-image" :data-src="image.url" :alt="image.description">
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
  .gallery {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
  }

  .gallery-item {
    flex: 1 0 24rem;
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
      grid-gap: 0.5rem;
    }

    .gallery,
    .gallery-item {
      margin: 0;
    }

    @media (max-width: 575.98px) {
      .gallery {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    @media (max-width: 768.98px) and (min-width: 576px) {
      .gallery {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    @media (max-width: 991.98px) and (min-width: 768px) {
      .gallery {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    @media (max-width: 1199.98px) and (min-width: 992px) {
      .gallery {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1200px) {
      .gallery {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>
