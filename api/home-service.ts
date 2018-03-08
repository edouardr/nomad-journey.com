import { ContentTypes } from "~/content-types";
import { Home } from "~/models";
import { deliveryClient } from "~/plugins/kentico-client";

export class HomeService {

  public get = async () => {
    const results = await this.getAll();
    return results.firstItem;
  }

  public getAll = async () => {
    return deliveryClient.items<Home>()
    .type(ContentTypes.Home.codeName)
    .getPromise();
  }
}
