<template>
  <button ref="goTop" class="goTop" v-show="isVisible" @click="backToTop">
    <font-awesome-icon :icon="['fas', 'angle-up']" />
  </button>
</template>

<script>
export default {
  beforeDestroy () {
    document.removeEventListener('scroll', this.onScroll)
  },
  data () {
    return {
      isVisible: false
    };
  },
  methods: {
    handleScroll () {
      if (process.browser) {
        const position = window.pageYOffset | document.body.scrollTop
        if (position > 250) {
          this.$refs.goTop.className = 'goTop isVisible'
          this.isVisible = true;
        } else {
          this.$refs.goTop.className = 'goTop'
          this.isVisible = false
        }
      }
    },
    backToTop () {
      if (process.browser) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
      }
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>

<style lang="scss" scoped>
  .goTop {
    border-radius: 5px;
    background-color: rgb(1,14,27);
    background-color: rgba(1, 14, 27, .7);
    position: fixed;
    width: 45px;
    height: 45px;
    display: block;
    right: 15px;
    bottom: 15px;
    border: none;
    opacity: 0;
    z-index: -1;
    .fa-angle-up {
      color: white;
      font-size: 22px;
    }
    &:hover {
      opacity: 1;
      background-color: rgb(1,14,27);
      background-color: rgba(1, 14, 27, .9);
    }
  }

  .isVisible {
    opacity: .8;
    z-index: 4;
    transition: all .4s ease-in;
  }
</style>
