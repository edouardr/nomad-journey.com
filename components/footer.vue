<template>
  <footer class="footer">
    <div class="container has-text-centered">
      <div class="content">
        <p>© 2018-2019 A Nomad Journey</p>
      </div>
      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-half is-narrow">
          <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        </div>
        <div class="column is-half is-narrow">
          <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        </div>
      </div>
      <LanguageSelector />
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
  .footer {
    color: #fff;
  }
</style>

