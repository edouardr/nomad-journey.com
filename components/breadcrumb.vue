<template>
      <div class="container">
        <nav class="breadcrumb is-small" aria-label="breadcrumbs">
          <ul>
            <li v-for="navItem in links"
              :key="navItem.id"
              :class="navItem.isActive ? 'is-active':''">
              <router-link class="navbar-item"
                :to="navItem.redirectTo">{{navItem.title}}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["navigation", "language"]),
  props: ['links']
}
</script>

<style lang="scss" scoped>

</style>
