'use strict';

const algolia = require('algoliasearch');
const algoliaApp = algolia(process.env.APP_ID, process.env.ADMIN_API_KEY);
const index = algoliaApp.initIndex(process.env.INDEX_NAME);

exports.updateIndex = (request, response) => {
  index.addObject(request.body)
    .then(newAlgoliaObject => {
      response.status(200).json(newAlgoliaObject);
    })
    .catch(err => console.log(err));
};
