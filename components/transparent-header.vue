<template>
  <nav :class="'navbar is-mobile ' + (isOpen ? 'is-active' : '')">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item brand"
          :to="`/${language}`"
          active-class="undefined">
          <img src="/logo-transp.png" alt="Logo">
        </router-link>
        <span :class="'navbar-burger burger ' + (isOpen ? 'is-active' : '')" data-target="navMenu" @click="isOpen = !isOpen">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navMenu" :class="'navbar-menu ' + (isOpen ? 'is-active' : '')">
        <div class="navbar-end">
          <router-link class="navbar-item"
            v-for="navItem in navigation"
            :key="navItem.id"
            :to="`/${language}${navItem.redirectTo.value}`"
            :exact="navItem.redirectTo.value == '/'"
            v-on:click.native="isOpen = false">
            {{navItem.title.value}}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['navigation', 'language']),
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    background-image: linear-gradient(
      to bottom,
      rgba(128, 128, 128, 1) 0%,
      rgba(128, 128, 128, 0) 100%);
    box-shadow: none;

    .navbar-burger {
      color: white;
    }

    .navbar-brand {
      .navbar-item {
        img {
          max-height: 2.5rem;
        }
      }
    }

    &.is-active {
      background-image: none;
      background-color: white;

      .navbar-brand {
        img {
          filter: none;
        }
      }

      .navbar-burger {
        color: #4a4a4a;
      }

      .navbar-item {
        color: #4a4a4a;

        &.is-active {
          color: $water;
          font-weight: normal;
        }

        &:hover {
          background-color: #fafafa;
        }
      }
    }

    .navbar-item {
      font-size: 1.5rem;
      color: white;

      img {
        filter: brightness(0) invert(1);
      }

      &:hover {
        color: $water;
        background-color: transparent;
      }

      &.is-active {
        color: white;
        font-weight: bold;

        &:hover {
          color: $water;
        }
      }
    }
  }

  @media only screen and (min-width : "992px") {
    .navbar {
      .navbar-brand {
        .navbar-item {
          img {
            max-height: 4rem;
          }
        }
      }

      .navbar-burger {
        height: 5.25rem;
        width: 4.25rem;
      }
    }
  }
</style>
