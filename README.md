# Nomad's Journey Blog 
Link: https://www.nomad-journey.com

# Dev Environment
## Setup
### Requirements
- Node >= v10.16.0

### Install
To set up you environment, run the following command:
```$ npm i```

### Env vars
Make a copies of `.env.sample` named `.env.development`. Then set the correct values for each variable

## Development
Dev mode will watch over files changes and automatically reload the page
```$ npm run develop```

Whenever `develop` branch is ready to be deployed to PROD, ensure to:
- increase version number of NPM Package

## Production
To build website for production, run the following command:
```$ npm run build```

This will create a `public` folder at the root of your directory. The content of this folder is the website.
In order to run locally a production site, run the following command: 
```GATSBY_KENTICO_LANGUAGES='en;fr' GATSBY_DEFAULT_LANG=en GATSBY_HOSTNAME=https://release.nomad-journey.com npx gatsby serve```

## Hosting & Deployment
This website is hosted on AWS Amplify.
Build will be triggered for each push on `relase` or `master` branches. Two environments exist for each of those branches.
`release` is a copy of production where we can test festures before deploying to PROD
`master` is the PROD website
