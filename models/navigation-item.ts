import { ContentItem, FieldDecorators, Fields } from "kentico-cloud-delivery-node-sdk";
import { ContentTypes } from "~/content-types";

export class NavigationItem extends ContentItem {
  public id: string;
  @FieldDecorators.codename(ContentTypes.NavigationItem.fields.order)
  public order: Fields.NumberField;
  @FieldDecorators.codename(ContentTypes.NavigationItem.fields.title)
  public title: Fields.TextField;
  // @FieldDecorators.codename(ContentTypes.NavigationItem.fields.contentItem)
  // public contentItem: Fields.
  @FieldDecorators.codename(ContentTypes.NavigationItem.fields.redirectTo)
  public redirectTo: Fields.TextField;
  @FieldDecorators.codename(ContentTypes.NavigationItem.fields.urlSlug)
  public urlSlug: Fields.UrlSlugField;

  constructor() {
    super();
  }
}
