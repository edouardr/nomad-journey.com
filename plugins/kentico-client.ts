import { DeliveryClientConfig, DeliveryNodeClient, TypeResolver } from "kentico-cloud-delivery-node-sdk";
import { ContentTypes } from "~/content-types";
import { Home } from "~/models";

const deliveryClientFactory = () => {

  const projectId = "38f25638-156d-44ce-991f-87e4bfc93a72";

  const typeResolvers: TypeResolver[] = [
    new TypeResolver(ContentTypes.Home.codeName, () => new Home()),
  ];

  return new DeliveryNodeClient(
    new DeliveryClientConfig(projectId, typeResolvers),
  );
};

export const deliveryClient: DeliveryNodeClient = deliveryClientFactory();
