<template>
  <div class="columns is-multiline">
    <div class="column is-one-quarter"
          v-for="keyFact in keyFacts"
          :key="keyFact.id"
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
