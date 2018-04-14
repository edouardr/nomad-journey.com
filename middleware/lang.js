import { Symbols } from '~/constants'
import { defaultLang } from '~/store'

export default function ({ route, store, redirect }) {
  let language = route.params.language || defaultLang

  store.commit(Symbols.MUTATIONS.SET_LANGUAGE, language)

  redirect(`/${language}`)
}
