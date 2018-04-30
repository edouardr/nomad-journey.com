<template>
  <header class="navbar is-fixed-top">
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
            v-on:click.native="isOpen = false">{{navItem.title.value}}
            </router-link>
        </div>
      </div>
    </div>
  </header>
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
    box-shadow: 0 2px 0 0 rgba(128,128,128,.1);
  }
  .navbar-burger {
    height: 5.25rem;
    width: 4.25rem;
  }

  .navbar-brand {
    .navbar-item {
      img {
        max-height: 2.5rem;
      }
    }
  }

  .navbar-item {
    font-size: 1.5rem;

    .brand {
      &:hover {
        background-color: inherit;
      }
    }
  }

  @media only screen and (min-width : "992px") {
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
</style>
