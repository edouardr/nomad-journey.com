<template>
  <transition appear name="slideFromBottom">
    <div class="cookie cookie--bottom cookie--base" v-if="isOpen">
      <div class="cookie__content">
        <slot name="message">{{ resources[language].cookie.message }}</slot>
      </div>
      <div class="cookie__buttons">
        <div class="cookie__button" @click="accept">{{ resources[language].cookie.buttonText }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState(['language', 'resources']),
    data () {
      return {
        supportsLocalStorage: true,
        isOpen: true,
        cookieAccepted: 'cookie:accepted'
      }
    },
    mounted () {
      if (process.browser) {
        // Check for availability of localStorage
        try {
          const test = '__cookielaw-check-localStorage'
          window.localStorage.setItem(test, test)
          window.localStorage.removeItem(test)
        } catch (e) {
          console.error('Local storage is not supported, falling back to cookie use')
          this.supportsLocalStorage = false
        }

        this.isOpen = !this.getVisited()
      }
    },
    methods: {
      setVisited () {
        if (process.browser) {
          if (this.supportsLocalStorage) {
            localStorage.setItem(this.cookieAccepted, true)
          } else {
            this.createCookie(this.cookieAccepted, true)
          }
        }
      },
      getVisited () {
        if (process.browser) {
          if (this.supportsLocalStorage) {
            return localStorage.getItem(this.cookieAccepted)
          } else {
            return this.readCookie(this.cookieAccepted)
          }
        }
      },
      accept () {
        this.setVisited()
        this.isOpen = false
      },
      createCookie (name, value, days) {
        if (process.browser) {
          var expires
          if (days) {
            var date = new Date()
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
            expires = `; expires=${date.toGMTString()}`
          } else {
            expires = ''
          }
          document.cookie = `${name}=${value}${expires}; path=/`
        }
      },
      readCookie (name) {
        if (process.browser) {
          var nameEQ = `${name}=`
          var ca = document.cookie.split(';')
          for (let index = 0; index < ca.length; ++index) {
            var c = ca[index]
            while (c.charAt(0) === ' ') {
              c = c.substring(1, c.length)
            }
            if (c.indexOf(nameEQ) === 0) {
              return c.substring(nameEQ.length, c.length)
            }
          }

          return null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cookie {
    position: fixed;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 9999;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: column;
    > * {
      margin: rem(15) 0;
      align-self: center;
    }
  }

  .cookie--bottom {
    bottom: 0;
    left: 0;
    right: 0;
  }

  .cookie__buttons {
    display: flex;
    flex-direction: column;
    > * {
      margin: rem(5) 0;
    }
  }
  .cookie__button {
    cursor: pointer;
    align-self: center;
  }

  .cookie--base {
    background: $deeplight;
    color: white;
    padding: 1.250em;

    .cookie__button {
      background: $water;
      padding: 0.625em 3.125em;
      color: white;
      &:hover {
        background: $waterdark;
      }
    }
}
</style>
