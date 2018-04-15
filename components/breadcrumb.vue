<template>
      <div class="container">
        <nav class="breadcrumb is-small" aria-label="breadcrumbs">
          <ul>
            <li>
              <router-link class="navbar-item"
                :to="`/${language}`">Home
              </router-link>
            </li>
            <li>
              <router-link class="navbar-item"
                :to="`/${language}/destinations`">Destinations
              </router-link>
            </li>
            <li>
              <router-link class="navbar-item"
                :to="`/${language}/destinations/australia`">Australia
              </router-link>
            </li>
            <li class="is-active">
              <router-link class="navbar-item"
                :to="`/${language}/destinations/australia/surf-lesson`">Surf Lesson
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
}
</script>

<style lang="scss" scoped>

</style>
