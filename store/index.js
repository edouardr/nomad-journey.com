import Vuex from 'vuex'
import axios from '~/plugins/axios'
import { Symbols } from '~/constants'

export const defaultLang = 'en'

export const state = () => ({
  landingPage: undefined,
  language: defaultLang,
  navigation: []
})

export const mutations = {
  [Symbols.MUTATIONS.SET_HOME]: (state, landingPage) => {
    state.landingPage = landingPage
  },
  [Symbols.MUTATIONS.SET_LANGUAGE]: (state, language) => {
    state.language = language
  },
  [Symbols.MUTATIONS.SET_NAVIGATION]: (state, navigation) => {
    state.navigation = navigation
  }
}

export const getters = {
  currentLang: (state) => {
    return state.language
  }
}

export const actions = {
  async nuxtServerInit ({ commit, store }) {
    const landingPageResponse = await axios.get(`api/landing-page/${store.state.language}/home`)
    commit(Symbols.MUTATIONS.SET_HOME, landingPageResponse.item)

    const navResponse = await axios.get(`api/navigation/${store.state.language}`)
    commit(Symbols.MUTATIONS.SET_NAVIGATION, navResponse.items)
  }
}

const store = () => {
  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  })
}

export default store
