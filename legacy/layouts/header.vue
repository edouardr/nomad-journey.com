<template>
  <div>
    <Header />
    <nuxt/>
    <Footer />
    <CookieLaw />
  </div>
</template>

<script>
import CookieLaw from '~/components/cookie-law'
import Footer from '~/components/footer'
import Header from '~/components/header'

export default {
  components: {
    Header,
    CookieLaw,
    Footer
  }
}
</script>
