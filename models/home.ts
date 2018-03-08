import { ContentItem, FieldDecorators, Fields } from "kentico-cloud-delivery-node-sdk";
import { ContentTypes } from "~/content-types";

export class Home extends ContentItem {
  public id: string;
  @FieldDecorators.codename(ContentTypes.Home.fields.bodyText)
  public bodyText: Fields.TextField;

  @FieldDecorators.codename(ContentTypes.SnippetJumbotron.fields.title)
  public jumbotronTitle: Fields.TextField;
  @FieldDecorators.codename(ContentTypes.SnippetJumbotron.fields.description)
  public jumbotronDesc: Fields.TextField;
  @FieldDecorators.codename(ContentTypes.SnippetJumbotron.fields.image)
  public jumbotronImage: Fields.AssetsField;

  @FieldDecorators.codename(ContentTypes.SnippetPageMetaData.fields.title)
  public metaTitle: Fields.TextField;
  @FieldDecorators.codename(ContentTypes.SnippetPageMetaData.fields.description)
  public metaDesc: Fields.TextField;
  @FieldDecorators.codename(ContentTypes.SnippetPageMetaData.fields.keywords)
  public metaKeywords: Fields.TextField;
  @FieldDecorators.codename(ContentTypes.SnippetPageMetaData.fields.ogTitle)
  public ogTitle: Fields.TextField;
  @FieldDecorators.codename(ContentTypes.SnippetPageMetaData.fields.ogDescription)
  public ogDescription: Fields.TextField;

  constructor() {
    super();
  }
}
