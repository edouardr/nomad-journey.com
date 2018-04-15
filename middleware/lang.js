import { Symbols } from '~/constants'
import { defaultLang } from '~/store'

export default function ({ route, store, redirect, isHMR }) {
  if (isHMR) {
    return
  }

  if (isLanguageDefineInRoute(route) && store.state.language === route.params.language) {
    return
  }

  let language = route.params.language || defaultLang
  store.commit(Symbols.MUTATIONS.SET_LANGUAGE, language)

  if (isLanguageDefineInRoute(route) || isRouteExluded(route)) {
    return
  }

  redirect(`/${language}`)
}

const isLanguageDefineInRoute = (route) => {
  return route.params.language
}

const isRouteExluded = (route) => {
  return route.fullPath.startsWith('api')
}
