<template>
  <footer class="bg-dark mt-5 p-5 text-muted text-center text-small">
    <p class="mb-1">© 2018-2019 A Nomad Journey</p>
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="#">fb</a>
      </li>
      <li class="list-inline-item">
        <a href="#">insta</a>
      </li>
    </ul>

    <LanguageSelector />
  </footer>
</template>

<script>
import LanguageSelector from '~/components/language-selector'

export default {
  components: {
    LanguageSelector,
  }
}
</script>

<style scoped>
</style>

