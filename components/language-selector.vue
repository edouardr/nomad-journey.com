<template>
  <div class="bg-dark mt-5 p-5 text-muted text-center text-small">
    <ul class="list-inline">
      <li class="list-inline-item"><a href="/">English</a></li>
      <li class="list-inline-item"><a href="/fr">Français</a></li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'setLanguage'
    ])
  }
}
</script>

