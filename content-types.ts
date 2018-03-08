export class ContentTypes {

  public static Home = {
    codeName: "home",
    fields: {
      bodyText: "body_text",
    },
  };

  public static NavigationItem = {
    codeName: "navigation_item",
    fields: {
      contentItem: "content_item",
      order: "order",
      redirectTo: "redirect_to_url",
      title: "title",
      urlSlug: "url_slug",
    },
  };

  public static SnippetJumbotron = {
    codeName: "jumbotron",
    fields: {
      description: "jumbotron__description",
      image: "jumbotron__image",
      title: "jumbotron__title",
    },
  };

  public static SnippetPageMetaData = {
    codeName: "page_metadata",
    fields: {
      description: "page_metadata__meta_description",
      keywords: "page_metadata__meta_keywords",
      ogDescription: "page_metadata__og_description",
      ogTitle: "page_metadata__og_title",
      title: "page_metadata__meta_title",
    },
  };
}
