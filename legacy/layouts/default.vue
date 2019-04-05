<template>
  <div>
    <nuxt/>
    <Footer />
    <CookieLaw />
  </div>
</template>

<script>
import CookieLaw from '~/components/cookie-law'
import Footer from '~/components/footer'

export default {
  components: {
    CookieLaw,
    Footer
  }
}
</script>
