<template>
  <div class="container is-widescreen">
    <div class="section columns">
      <div class="column is-1"></div>
      <div class="column is-10">
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

<style scoped>
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

