<template>
    <div class="card"
        @mouseover="hovered = !hovered"
        @mouseleave="hovered = !hovered">
      <router-link :to="url" v-on:click.native="select(id)" class="card-link">{{title}}</router-link>
        <div class="card-image ri">
          <figure class="image is-16by9">
            <transition name="image-zoom">
              <img v-once="hovered" v-lazy="imgUrl" :alt="imgAlt">
            </transition>
          </figure>
        </div>
      <div class="card-content draw meet">
          <p class="title is-5 is-spaced">
            <router-link :to="url">{{title}}</router-link>
          </p>
          <p class="subtitle is-6">
            {{text}}
          </p>
      </div>
    </div>
</template>

<script>
import { Symbols } from '~/constants'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      select: Symbols.ACTIONS.SELECT_ARTICLE
    })
  },
  props: ['id', 'imgAlt', 'imgUrl', 'posted', 'text', 'title', 'url'],
  data () {
    return {
      hovered: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    width: 100%;
    position: relative;
    text-align: left;
    padding-bottom: 5px;
    transition: background-color .5s;
    overflow: hidden;
    cursor: pointer;
    color: $water;

    .card-content {
      position: relative;
      vertical-align: middle;
      padding: 10px;
      z-index: 2;
      pointer-events: none;
      margin-top: 4%;
    }
  }

  .card-link {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(0,0%,100%,0);
    text-indent: 200%;
    white-space: nowrap;
    overflow: hidden;
    z-index: 3;
  }

  .card-image {
    position: relative;
    overflow: hidden;
    z-index: 1;

    .ri {
      width: 100%;
      overflow: hidden;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .image {
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
    }
  }

  .image-zoom-enter,
  .image-zoom-leave-to {
    -webkit-transform:scale(1.25);
    -moz-transform:scale(1.25);
    -ms-transform:scale(1.25);
    -o-transform:scale(1.25);
    transform:scale(1.25);
  }
  .image-zoom-enter-active,
  .image-zoom-leave-active {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }

// .center {
//   &:hover {
//     color: $purple;
//   }

//   // Set up base styles, we're going to scale instead of animating width/height
//   &::before,
//   &::after {
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     transform-origin: center; // Ensure scaling is done from the center (expands outwards)
//   }

//   // scale3d(<scale-horizontal>, <scale-vertical>, <scale-depth>);
//   &::before {
//     border-top: 2px solid $purple;
//     border-bottom: 2px solid $purple;
//     transform: scale3d(0,1,1); // Shrink only width
//   }

//   &::after {
//     border-left: 2px solid $purple;
//     border-right: 2px solid $purple;
//     transform: scale3d(1,0,1); // Shrink only height
//   }

//   &:hover::before,
//   &:hover::after {
//     transform: scale3d(1,1,1); // Show full-size
//     transition: transform 0.5s;
//   }
// }
</style>
