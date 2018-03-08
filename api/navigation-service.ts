import { SortOrder } from "kentico-cloud-delivery-node-sdk";
import { ContentTypes } from "~/content-types";
import { NavigationItem } from "~/models";
import { deliveryClient } from "~/plugins/kentico-client";

export class NavigationService {

  public getAll = async () => {
    return deliveryClient.items<NavigationItem>()
    .type(ContentTypes.NavigationItem.codeName)
    .elementsParameter(["redirect_to_url", "order", "title"])
    .orderParameter(`elements.${ContentTypes.NavigationItem.fields.order}`, SortOrder.asc)
    .getPromise();
  }
}
