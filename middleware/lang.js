import { Symbols } from '~/constants'
import { defaultLang } from '~/store'

export default ({isHMR, app, store, route, params, error, redirect, req}) => {
  if (isHMR) { // ignore if called from hot module replacement
    return
  } else if (params.lang === 'api') { // ignore if api is called
    return
  } else if (!params.lang) {
    return redirect(`/${defaultLang}${route.fullPath || ''}`)
  }

  const locale = params.lang || defaultLang
  store.commit(Symbols.MUTATIONS.SET_LANGUAGE, locale)
}
