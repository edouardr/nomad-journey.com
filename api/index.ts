import { ContentTypes } from "content-types";
import express from "express";
import { Builder, Nuxt } from "nuxt";
import { LandingPage } from "~/models";
import { deliveryClient } from "~/plugins/kentico-client";

const router = express.Router();
// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

app.get("/landing-page/:lang/:codename", async (req, res) => {
  const homeResponse = await deliveryClient.item<LandingPage>(req.params.codename)
    .elementsParameter([
      ContentTypes.LandingPage.fields.bodyText,
      ContentTypes.SnippetJumbotron.fields.description,
      ContentTypes.SnippetJumbotron.fields.image,
      ContentTypes.SnippetJumbotron.fields.title,
      ContentTypes.SnippetPageMetaData.fields.description,
      ContentTypes.SnippetPageMetaData.fields.keywords,
      ContentTypes.SnippetPageMetaData.fields.ogDescription,
      ContentTypes.SnippetPageMetaData.fields.ogTitle,
      ContentTypes.SnippetPageMetaData.fields.title,
    ])
    .languageParameter(req.params.lang)
    .getPromise();
  res.json(homeResponse.item);
});

export const middleware = {
  handler: router,
  path: "/api",
};
