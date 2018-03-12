import { ContentTypes } from "~/content-types";
import { Home } from "~/models";
import { deliveryClient } from "~/plugins/kentico-client";

export class HomeService {

  public get = async (language: string) => {
    const results = await this.getAll(language);
    return results.firstItem;
  }

  public getAll = async (language: string) => {
    return deliveryClient.items<Home>()
    .type(ContentTypes.Home.codeName)
    .languageParameter(language)
    .getPromise();
  }
}
