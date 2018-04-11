<template>
  <div class="summary summary--article"
    @mouseover="hovered = !hovered"
    @mouseleave="hovered = !hovered">
    <router-link :to="url" @onclick="select(id)" class="summary__block-link">{{title}}</router-link>
    <div class="summary__img">
      <div :class="'ri' + (hovered ? ' hovered': '')">
        <img :src="imgUrl" :alt="imgAlt">
      </div>
    </div>
    <div class="summary__text">
        <h3 class="summary__title">
          <router-link :to="url">{{title}}</router-link>
        </h3>
        <p>
          {{text}}
                    We uncover some of the stories behind the classic Easter traditions - from the humble hot cross bun to the origins of the Easter Bunny

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
  .summary--article .summary__img {
      padding-top: 66.66%;
  }
  @media print, screen and (min-width: 32em){
    .summary-grid .summary {
      margin: 20px 10px 0;
    }
  }
  .summary-grid--articles .summary, .summary-grid--recipes .summary {
    width: calc(100% - 10px);
  }

  .summary-grid .summary {
    width: calc(50% - 10px);
    margin: 20px 5px 0;
  }
  .summary {
    width: 100%;
    position: relative;
    text-align: left;
    padding-bottom: 5px;
    transition: background-color .5s;
    overflow: hidden;
    cursor: pointer;
  }

  .summary__block-link {
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

  .summary__img {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    z-index: 1;

    .ri {
      width: 100%;
      overflow: hidden;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transition: all 1s ease; /* Safari and Chrome */
      -moz-transition: all 1s ease; /* Firefox */
      -ms-transition: all 1s ease; /* IE 9 */
      -o-transition: all 1s ease; /* Opera */
      transition: all 1s ease;

      &.hovered {
        -webkit-transform:scale(1.25); /* Safari and Chrome */
        -moz-transform:scale(1.25); /* Firefox */
        -ms-transform:scale(1.25); /* IE 9 */
        -o-transform:scale(1.25); /* Opera */
        transform:scale(1.25);
      }

      img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        -o-object-fit: cover;
        object-fit: cover;
        font-family: "object-fit: cover;";
        vertical-align: top;
      }
    }
  }

  @media print, screen and (min-width: 64em) {
    .summary--article .summary__text {
      font-size: 1rem;
      line-height: 1.375;
    }
  }
  @media print, screen and (min-width: 48em) {
    .summary--article .summary__text, .summary--product .summary__text {
      border-width: 0.09em;
    }
  }

  .summary--article .summary__text {
    border: 2px solid $water;
    background: transparent;
    font-size: .875rem;
    line-height: 1.43;
    padding-top: calc(66% + 5px);
    margin-top: calc(-66% + 3px);
  }
  .summary__text {
    position: relative;
    background-color: #fff;
    padding: 10px;
    margin: 0 5px;
    transition: border-color .5s;
    z-index: 2;
    pointer-events: none;
  }

  @media screen and (min-width: 48em) {
    .summary-grid--articles .summary, .summary-grid--recipes .summary {
      width: calc(33.333% - 20px);
    }
  }

  .summary--article .summary__title {
    font-size: 1.125rem;
    margin-bottom: .5rem;
  }
  @media print, screen and (min-width: 60em){
    .summary__title {
      font-size: 1.125rem;
    }
  }
  @media print, screen and (min-width: 48em){
    .summary__title {
      font-size: 1rem;
    }
  }
  .summary__title {
    position: relative;
    font-size: 1rem;
    margin-bottom: 0;
  }

  .summary--article .summary__title>a {
    color: $water;
  }

</style>
