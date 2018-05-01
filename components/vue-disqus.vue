<template>
  <div class="columns">
    <div class="column is-1"></div>
    <div class="column is-10">
      <div id="disqus_thread"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-disqus',
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
    },
    remote_auth_s3: {
      type: String,
      required: false
    },
    api_key: {
      type: String,
      required: false
    },
    sso_config: {
      type: Object,
      required: false
    }
  },
  mounted () {
    if (window.DISQUS) {
      this.reset(window.DISQUS)
      return
    }
    if (process.browser) {
      this.init()
    }
  },
  methods: {
    reset (disqus) {
      const self = this
      disqus.reset({
        reload: true,
        config: () => {
          self.setBaseConfig(this)
        }
      })
    },
    init () {
      const self = this
      window.disqus_config = function() {
        self.setBaseConfig(this)
      }
      setTimeout(() => {
        let scriptTag = document.createElement('script')
        scriptTag.setAttribute('id', 'embed-disqus')
        scriptTag.setAttribute('data-timestamp', new Date())
        scriptTag.type = 'text/javascript'
        scriptTag.async = true
        scriptTag.src = `//${this.shortname}.disqus.com/embed.js`

        let element = (document.head || document.body)
        element.appendChild(scriptTag)
      }, 0)
    },
    setBaseConfig (disqusConfig) {
      disqusConfig.page.identifier = (this.identifier || this.$route.path || window.location.pathname)
      disqusConfig.page.url = (this.url || this.$el.baseURI)
      if (this.title) {
        disqusConfig.page.title = this.title
      }
      if (this.remote_auth_s3) {
        disqusConfig.page.remote_auth_s3 = this.remote_auth_s3
      }
      if (this.api_key) {
        disqusConfig.page.api_key = this.api_key
      }
      if (this.sso_config) {
        disqusConfig.sso = this.sso_config
      }
    }
  }
}
</script>
