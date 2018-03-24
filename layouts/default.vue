<template>
  <div>
    <Header />
    <div>
      <nuxt/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/footer";
import Header from '~/components/header'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style src="~/assets/css/main.css"/>

