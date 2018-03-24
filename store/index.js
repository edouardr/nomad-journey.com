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
  async nuxtServerInit ({ commit, state }) {
    const {data} = await axios.get(`api/navigation/${state.language}`)
    commit(Symbols.MUTATIONS.SET_NAVIGATION, data)
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
