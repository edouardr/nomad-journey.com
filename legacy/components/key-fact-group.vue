<template>
  <div class="columns is-multiline key-fact-group">
    <div class="column is-one-third key-fact"
          v-for="keyFact in keyFacts"
          :key="keyFact.system.id"
          img-top>
      <KeyFact :model="keyFact" />
    </div>
  </div>
</template>

<script>
import KeyFact from '~/components/key-fact'

export default {
  components: {
    KeyFact
  },
  props: ['keyFacts']
}
</script>

<style lang="scss" scoped>
  .key-fact {
    padding: 2rem;
  }
</style>

