<template>
  <span class="fa-stack fa-3x">
    <font-awesome-icon :icon="['fas', 'comment']" class="fa-stack-2x"/>
    <strong class="fa-stack-1x fa-stack-text fa-inverse counter disqus-comment-count" :data-disqus-identifier="identifier">0</strong>
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
    },
    url: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },
  mounted () {
    if (process.browser) {
      this.init()
    }
  },
  methods: {
    init () {
      const self = this
      window.disqus_config = function() {
        self.setBaseConfig(this)
      }
      setTimeout(() => {
        const scriptTagId = 'dsq-count-scr';
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
  .counter { margin-top: .3em; }
</style>
