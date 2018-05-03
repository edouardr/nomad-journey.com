<template>
  <div>
    <Jumbotron v-if="legals.page.jumbotronImage"
      :title="legals.page.jumbotronTitle.value"
      :desc="legals.page.jumbotronDescription.value"
      :imgUrl="legals.page.jumbotronImage.value[0].url"
      :imgAlt="legals.page.jumbotronImage.value[0].text" />
    <section class="section">
      <div class="container is-light">
        <div class="content is-medium" v-html="legals.page.bodyText.value"></div>
      </div>
    </section>
  </div>
</template>
<script>
import Header from '~/components/header'
import Jumbotron from '~/components/jumbotron'
import { Symbols } from '~/constants'
import metadata from '~/mixins/metadata'
import { mapState } from 'vuex'

export default {
  components: {
    Header,
    Jumbotron
  },
  computed: mapState(['legals']),
  mixins: [metadata],
  head () {
    return this.getMetadata(this.legals.page)
  }
}
</script>

<style lang="scss" scoped>

</style>

