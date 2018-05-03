import { Symbols } from '~/constants'
import { ContentTypes } from '~/content-types'
import axios from '~/plugins/axios'
import resources from '~/resources.json'
import Vuex from 'vuex'

export const defaultLang = 'en'

export const state = () => ({
  articles: [],
  currentArticle: undefined,
  currentDestination: undefined,
  currentLocation: undefined,
  currentPage: undefined,
  language: defaultLang,
  legals: {
    page: undefined,
    alert: undefined
  },
  navigation: [],
  resources: resources
})

export const mutations = {
  [Symbols.MUTATIONS.SET_ARTICLE]: (state, article) => {
    state.currentArticle = article
  },
  [Symbols.MUTATIONS.SET_ARTICLES]: (state, articles) => {
    state.articles = articles
  },
  [Symbols.MUTATIONS.SET_CURRENT_LOCATION]: (state, location) => {
    state.currentLocation = location
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
  [Symbols.MUTATIONS.SET_LEGALS]: (state, legals) => {
    state.legals = legals
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

    const legalsResponse = await axios.get(`/api/landing-page/${state.language}/${Symbols.CODENAMES.LEGALS_PAGE}`)
    commit(Symbols.MUTATIONS.SET_LEGALS, { page: legalsResponse.data })
  },
  [Symbols.ACTIONS.SELECT_ARTICLE]: async ({ commit, state, redirect }, articleId) => {
    let selectedArticle = state.articles.filter((article) => article.system.codename === articleId)[0]
    commit(Symbols.MUTATIONS.SET_ARTICLE, selectedArticle)
    commit(Symbols.MUTATIONS.SET_PAGE, selectedArticle)
    let sitemapLocation = selectedArticle.system[ContentTypes.System.fields.sitemapLocations][0]

    if (!state.currentDestination || sitemapLocation !== state.currentDestination.system.codename) {
      const destinationResponse = await axios.get(`/api/destinations/getbycode/${state.language}/${sitemapLocation}`)
      commit(Symbols.MUTATIONS.SET_DESTINATION, destinationResponse.data)
    }
  },
  [Symbols.ACTIONS.SET_LANGUAGE]: async ({ commit, state, redirect }, language) => {
    commit(Symbols.MUTATIONS.SET_LANGUAGE, language)

    const {data} = await axios.get(`api/navigation/${state.language}`)
    commit(Symbols.MUTATIONS.SET_NAVIGATION, data)

    const legalsResponse = await axios.get(`/api/landing-page/${state.language}/${Symbols.CODENAMES.LEGALS_PAGE}`)
    commit(Symbols.MUTATIONS.SET_LEGALS, { page: legalsResponse.data })
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
