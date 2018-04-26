<template>
      <div class="container">
        <nav class="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
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
import { mapState } from 'vuex'

export default {
  computed: mapState(['navigation', 'language']),
  props: ['links']
}
</script>

<style lang="scss" scoped>
  .breadcrumb {
    font-size: 1.1rem;
    padding-bottom: 2rem;
  }
</style>
