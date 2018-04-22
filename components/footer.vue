<template>
  <footer class="footer">
    <div class="container">
      <div class="has-text-centered is-white">
        <div class="content social-buttons">
          <a class="is-size-1" href="https://facebook.com/anomadjourney" title="Facebook A Nomad Journey" target="_blank">
            <span class="icon is-medium">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </span>
          </a>

          <a class="is-size-1" href="https://instagram.com/anomadjourney" title="Instagram A Nomad Journey" target="_blank">
            <span class="icon is-medium">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>
          </a>
        </div>
        <p class="has-text-white">
          <small>© 2018 A Nomad Journey</small>
        </p>
        <LanguageSelector />
      </div>
    </div>
  </footer>
</template>

<script>
import LanguageSelector from '~/components/language-selector'

export default {
  components: {
    LanguageSelector
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    a {
      margin-right: 2rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>

