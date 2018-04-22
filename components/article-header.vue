<template>
  <div class="container is-widescreen">
    <div class="article-header">
      <div class="content">
        <p class="subtitle location">{{location}}</p>
        <h1 class="title is-spaced">{{title}}</h1>
      </div>
      <div class="article-details">
        <p>
          <span>{{posted | momentify('DD MMMM YYYY', language)}}</span>
          <span class="divider"></span>
          <span>{{resources[language].article.share}}
            <a href="javascript:onclick=window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&amp;quote=' + encodeURIComponent(document.URL))" target="">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
              <span class="sr-only">Share on Facebook</span>
            </a>
          </span>
        </p>
      </div>
    </div>
    <figure class="image is-5by3">
      <img :src="url">
    </figure>
  </div>
</template>

<script>
import { momentify } from "~/filters"
import { mapState } from 'vuex';

export default {
  computed: mapState(['language', 'resources']),
  filters: {
    momentify
  },
  props: [
    'desc',
    'location',
    'posted',
    'title',
    'url'
  ]
}
</script>

<style lang="scss" scoped>
  .article-header {
    padding: 3rem 1.5rem;
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

  .location {
    text-decoration: underline;
    font-size: 1.25rem;
    line-height: 2rem;
    display: inline-block;
    padding-bottom: 4px;
  }
</style>

