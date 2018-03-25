<template>
  <header class="navbar is-transparent is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="~/assets/img/logo.png" alt="Logo">
        </a>
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
            :to="`${navItem.redirectTo.value}`"
            :exact="navItem.redirectTo.value == '/'" >{{navItem.title.value}}
            </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["navigation", "language"]),
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>

</style>
