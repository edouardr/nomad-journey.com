'use strict';

const crypto = require('crypto');
const algolia = require('algoliasearch');
const algoliaApp = algolia(process.env.APP_ID, process.env.ADMIN_API_KEY);
const index = algoliaApp.initIndex(process.env.INDEX_NAME);

const isValidSignature = (req, secret) => {
  const givenSignature = req.headers['x-kc-signature'];
  const computedSignature = crypto.createHmac('sha256', secret)
    .update(req.body)
    .digest();
  return crypto.timingSafeEqual(Buffer.from(givenSignature, 'base64'), computedSignature);
};

exports.updateIndex = (request, response) => {
  if(!isValidSignature(request, process.env.SIGNATURE)){
    response.status(403);
    return;
  }

  index.addObject(request.body)
    .then(newAlgoliaObject => {
      response.status(200).json(newAlgoliaObject);
    })
    .catch(err => console.log(err));
};
