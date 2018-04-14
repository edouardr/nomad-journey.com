import { Symbols } from '~/constants'
import { defaultLang } from '~/store'

export default function ({ route, store, redirect, isHMR }) {
  if (isHMR) {
    return
  }

  let language = route.params.language || defaultLang

  if (route.params.language && store.state.language === language) {
    return
  }

  store.commit(Symbols.MUTATIONS.SET_LANGUAGE, language)

  if (route.fullPath.startsWith('api')) {
    return
  }

  redirect(`/${language}`)
}
