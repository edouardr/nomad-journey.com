import Vuex from 'vuex'
import axios from '~/plugins/axios'
import { Symbols } from '~/constants'

export const defaultLang = 'en'

export const state = () => ({
  articles: [],
  currentArticle: undefined,
  currentDestination: undefined,
  currentPage: undefined,
  language: defaultLang,
  navigation: []
})

export const mutations = {
  [Symbols.MUTATIONS.SET_ARTICLE]: (state, article) => {
    state.currentArticle = article
  },
  [Symbols.MUTATIONS.SET_ARTICLES]: (state, articles) => {
    state.articles = articles
  },
  [Symbols.MUTATIONS.SET_DESTINATION]: (state, currentDestination) => {
    state.currentDestination = currentDestination
  },
  [Symbols.MUTATIONS.SET_PAGE]: (state, currentPage) => {
    state.currentPage = currentPage
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
