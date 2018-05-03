export const Symbols = {
  ACTIONS: {
    SELECT_ARTICLE: 'selectArticle',
    SET_LANGUAGE: 'setLanguage'
  },
  CODENAMES: {
    ABOUT_US: 'about_us',
    CURRENT_LOCATION: 'current_location',
    ITINERARY: 'itinerary',
    LEGALS_PAGE: 'legals'
  },
  DATA: {
    HOME_ARTICLES_LIMIT: 3
  },
  MUTATIONS: {
    SET_ARTICLE: 'setArticle',
    SET_ARTICLES: 'setArticles',
    SET_CURRENT_LOCATION: 'setCurrentLocation',
    SET_DESTINATION: 'setDestination',
    SET_PAGE: 'setPage',
    SET_LANGUAGE: 'setLanguage',
    SET_LEGALS: 'setLegals',
    SET_NAVIGATION: 'setNavigation'
  },
  NAVIGATION: {
    HOME: 'nav_home',
    DESTINATIONS: 'nav_destinations'
  },
  WEBHOOK: {
    OPERATIONS: {
      ARCHIVE: 'archive',
      PUBLISH: 'publish',
      UNPUBLISH: 'unpublish',
      UPSERT: 'upsert'
    },
    TYPES: {
      CONTENT_ITEM: 'content_item',
      CONTENT_ITEM_VARIANT: 'content_item_variant'
    }
  }
}
