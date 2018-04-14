import Vuex from 'vuex'
import { Symbols } from '~/constants'
import { ContentTypes } from '~/content-types'
import axios from '~/plugins/axios'

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
  },
  [Symbols.ACTIONS.SELECT_ARTICLE]: async ({ commit, state, redirect }, articleId) => {
    let selectedArticle = state.articles.filter((article) => article.system.id === articleId)[0]
    commit(Symbols.MUTATIONS.SET_ARTICLE, selectedArticle)
    commit(Symbols.MUTATIONS.SET_PAGE, selectedArticle)
    let sitemapLocation = selectedArticle.system[ContentTypes.System.fields.sitemapLocations][0]

    const destination = state.currentDestination === selectedArticle &&
      sitemapLocation === state.currentDestination.system.codename
      ? state.currentDestination
      : (await axios.get(`/api/destinations/getbycode/${state.language}/${sitemapLocation}`)).data

    commit(Symbols.MUTATIONS.SET_DESTINATION, destination)
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
