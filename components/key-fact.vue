<template>
  <div class="has-text-centered features">
    <span class="icon is-size-1">
      <font-awesome-icon :icon="[model.iconGroup.text, model.icon.text]" />
    </span>
    <p class="title is-2"><strong>{{model.value.text}}</strong></p>
    <p class="subtitle">{{model.title.text}}</p>
  </div>
</template>

<script>
  export default {
    props: ['model']
  }
</script>

<style lang="scss" scoped>
  .icon {
    color: $water;
    margin-bottom: 2rem;
  }
</style>
