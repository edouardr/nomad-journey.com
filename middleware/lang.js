import { Symbols } from '~/constants'
import { defaultLang } from '~/store'

export default (context) => {
  // if (context.isHMR) { // ignore if called from hot module replacement
  //   return
  // } else if (context.route.fullPath.startsWith('api')) { // ignore if api is called
  //   return
  // } else if (!context.params.lang) {
  //   return context.redirect(`/${defaultLang}${context.route.fullPath || ''}`)
  // }

  // const locale = context.params.lang || defaultLang
  // context.store.commit(Symbols.MUTATIONS.SET_LANGUAGE, locale)
}
