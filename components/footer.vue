<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>© 2018-2019 A Nomad Journey</p>
        <ul>
          <li>
            <a href="#">fb</a>
          </li>
          <li>
            <a href="#">insta</a>
          </li>
        </ul>
        <LanguageSelector />
      </div>
    </div>
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

