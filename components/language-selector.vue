<template>
  <div class="container content">
    <a v-show="language == 'fr'" href="/en" title="A Nomad Journey in English">
      <span class="icon is-small">
        <font-awesome-icon :icon="['fas', 'globe']" />&nbsp;English
      </span>
    </a>
    <a v-show="language == 'en'" href="/fr" title="A Nomad Journey en Francais">
      <span class="icon is-small">
        <font-awesome-icon :icon="['fas', 'globe']" />&nbsp;Français
      </span>
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['language'])
}
</script>

