<template>
  <div class="card"
    @mouseover="hovered = !hovered"
    @mouseleave="hovered = !hovered">
    <router-link :to="url" v-on:click.native="select(id)" class="card-link">{{title}}</router-link>
    <div class="card-image ri">
      <figure :class="'image is-16by9'+ (hovered ? ' hovered': '')">
        <img v-lazy="imgUrl" :alt="imgAlt">
      </figure>
    </div>
    <div class="card-content">
        <p class="title is-5 is-spaced">
          <router-link :to="url">{{title}}</router-link>
        </p>
        <p class="subtitle is-7">
          {{text}}
        </p>
    </div>
  </div>
</template>

<script>
import { Symbols } from "~/constants";
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      select: Symbols.ACTIONS.SELECT_ARTICLE
    })
  },
  props: ['id', 'imgAlt', 'imgUrl', 'posted', 'text', 'title', 'url'],
  data() {
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
      border: 2px solid $water;
      background: transparent;
      padding-top: calc(55%);
      margin-top: calc(-55% + 2px);
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
        // background-color: $overlay;
        z-index: 2;
      }
    }
  }

  .card-content {
    position: relative;
    background-color: #fff;
    padding: 10px;
    margin: 0 5px;
    transition: border-color .5s;
    z-index: 2;
    pointer-events: none;
  }
</style>
