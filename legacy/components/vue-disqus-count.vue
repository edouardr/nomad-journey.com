<template>
  <span class="fa-stack fa-2x icon-count">
    <span class="fa-layers fa-fw">
      <font-awesome-icon :icon="['fas', 'comment-alt']" class="fa-stack-1x"/>
      <span class="fa-layers-text fa-inverse icon-count__value disqus-comment-count" :data-disqus-identifier="identifier">0</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'vue-disqus-count',
  props: {
    shortname: {
      type: String,
      required: true
    },
    identifier: {
      type: String,
      required: false
    }
  },
  mounted () {
    if (process.browser) {
      if (window.DISQUSWIDGETS) {
        window.DISQUSWIDGETS.getCount({reset: true})
      }
      this.init()
    }
  },
  methods: {
    init () {
      setTimeout(() => {
        const scriptTagId = 'dsq-count-scr'
        let scriptTag = document.getElementById(scriptTagId)
        if (scriptTag) {
          return
        }

        scriptTag = document.createElement('script')
        scriptTag.setAttribute('id', scriptTagId)
        scriptTag.setAttribute('data-timestamp', new Date())
        scriptTag.type = 'text/javascript'
        scriptTag.async = true
        scriptTag.src = `//${this.shortname}.disqus.com/count.js`

        document.body.appendChild(scriptTag)
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-count__value {
    font-size: 1rem;
  }

  .icon-count {
    color: $water;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 100;
    height: 3rem;
    width: 3rem;
  }
</style>
