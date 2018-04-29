<template>
    <div :class="{
          card: true,
          hovered: hovered
        }"
        @mouseover="hovered = !hovered"
        @mouseleave="hovered = !hovered">
      <router-link :to="url" v-on:click.native="select(id)" class="card-link">{{title}}</router-link>
        <div class="card-image">
          <figure :class="'image is-16by9'+ (hovered ? ' hovered': '')">
            <img v-lazy="imgUrl" :alt="imgAlt">
          </figure>
        </div>
      <div :class="'card-content'+ (hovered ? ' hovered': '')">
          <p class="subtitle is-7">
            {{location}}
          </p>
          <p class="title is-5 is-spaced">
            {{title}}
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
  props: ['id', 'imgAlt', 'imgUrl', 'location', 'posted', 'text', 'title', 'url'],
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
    background-color: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,0%,.1), 0 0 0 1px hsla(187,84%,51%,.1);
    max-width: 100%;
    position: relative;
    padding-bottom: 5px;
    overflow: hidden;
    cursor: pointer;

    &.hovered {
      box-shadow: 0 2px 6px 0 hsla(0,0%,0%,.4);
    }
  }

  .card-content {
    position: relative;
    vertical-align: middle;
    padding: 10px;
    z-index: 2;
    pointer-events: none;
    margin-top: 4%;
    background: transparent;

    &.hovered {
      .title {
        color: $water;
      }
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

    .image {
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -ms-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;

      &.hovered {
        -webkit-transform:scale(1.25);
        -moz-transform:scale(1.25);
        -ms-transform:scale(1.25);
        -o-transform:scale(1.25);
        transform:scale(1.25);
      }

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
</style>
