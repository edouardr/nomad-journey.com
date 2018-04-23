<template>
  <footer class="footer">
    <div class="footer-social has-text-centered">
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
      <LanguageSelector />
    </div>
    <div class="footer-legal">
      <div class="has-text-centered">
        <p class="has-text-white">
          <small>© 2018 A Nomad Journey</small>
        </p>
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
    padding: 0;
    background-color: transparent;

    a {
      margin-left: 2rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }
  .footer-social {
    background: $deeplight;
    padding: 2.5em 0;
  }
  .footer-legal {
    background: $deep;
    padding: 2.5em 0;
  }
</style>
