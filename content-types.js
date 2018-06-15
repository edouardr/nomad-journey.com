export const ContentTypes = {
  About_Us: {
    codeName: 'about_us',
    fields: {
      bodyText: 'body_text',
      persons: 'persons'
    }
  },
  Article: {
    codeName: 'article',
    fields: {
      bodyText: 'body_text',
      location: 'location',
      images: 'images',
      posted: 'posted',
      urlSlug: 'slug'
    }
  },
  Destination: {
    codeName: 'destination',
    fields: {
      articles: 'articles',
      bodyText: 'body_text',
      urlSlug: 'slug'
    }
  },
  Itinerary: {
    codeName: 'itinerary',
    fields: {
      bodyText: 'body_text',
      mapId: 'map_id',
      keyFacts: 'key_facts'
    }
  },
  KeyFact: {
    codeName: 'key_fact',
    fields: {
      icon: 'icon',
      iconGroup: 'icon_group',
      title: 'title',
      value: 'value',
      unit: 'unit'
    }
  },
  LandingPage: {
    codeName: 'landing_page',
    fields: {
      bodyText: 'body_text',
      urlSlug: 'slug'
    }
  },
  Location: {
    codeName: 'location',
    fields: {
      latitude: 'latitude',
      longitude: 'longitude',
      name: 'name'
    }
  },
  NavigationItem: {
    codeName: 'navigation_item',
    fields: {
      contentItem: 'content_item',
      order: 'order',
      redirectTo: 'redirect_to_url',
      title: 'title',
      urlSlug: 'slug'
    }
  },
  Person: {
    codeName: 'person',
    fields: {
      image: 'image',
      interview: 'interview'
    }
  },
  QuestionAnswer: {
    codeName: 'question_answer',
    fields: {
      question: 'question',
      answer: 'answer'
    }
  },
  SnippetAppearance: {
    codeName: 'appearance',
    fields: {
      sortOrder: 'appearance__sort_order'
    }
  },
  SnippetJumbotron: {
    codeName: 'jumbotron',
    fields: {
      description: 'jumbotron__description',
      image: 'jumbotron__image',
      title: 'jumbotron__title'
    }
  },
  SnippetListItem: {
    codeName: 'list_item',
    fields: {
      description: 'list_item__description',
      thumbnail: 'list_item__thumbnail',
      title: 'list_item__title'
    }
  },
  SnippetPageMetaData: {
    codeName: 'page_metadata',
    fields: {
      description: 'page_metadata__meta_description',
      keywords: 'page_metadata__meta_keywords',
      ogDescription: 'page_metadata__og_description',
      ogImage: 'page_metadata__og_image',
      ogTitle: 'page_metadata__og_title',
      title: 'page_metadata__meta_title'
    }
  },
  System: {
    fields: {
      sitemapLocations: 'sitemapLocations'
    }
  }
}
