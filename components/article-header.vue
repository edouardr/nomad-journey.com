<template>
  <div class="container is-widescreen">
    <div class="article-header">
      <div class="content is-large">
        <h1>{{title}}</h1>
      </div>
      <div class="article-details">
        <p class="font-secondary xs">
          <span class="publish-date">06 June 2017</span>
          <span class="divider"></span>
          <span class="author">Annabelle</span>
        </p>
      </div>
    </div>
    <figure class="image is-5by3">
      <img :src="url">
    </figure>
  </div>
</template>

<script>
export default {
  props: [
    'desc',
    'title',
    'url'
  ]
}
</script>

<style lang="scss" scoped>
  .article-header {
    padding: 1.5rem;
  }

  .article-details span {
    display: inline-block;
  }

  .divider {
    height: 1px;
    width: 14px;
    position: relative;
    top: -6px;
    background: #e1e1e1;
    margin-left: 7px;
    margin-right: 5px;
  }
</style>

