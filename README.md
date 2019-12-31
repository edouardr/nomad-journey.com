# Nomad's Journey Blog

Link: https://www.nomad-journey.com

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Maintainability Rating][maintainability-rating-badge]][maintainability-rating]
[![Reliability Rating][reliability-rating-badge]][reliability-rating]
[![Code Coverage][coverage-badge]][coverage]
<!-- prettier-ignore-end -->

## TECH STACK

- GatsbyJS
- Multilingual
- MailChimp
- Bulma
- Algolia
- Disqus
- SonarCloud

## Dev Environment

### Setup

#### Requirements

- Node >= v10.16.0

#### Env vars

Make a copies of `.env.sample` named `.env.development`. Then set the correct
values for each variable

#### Install

To set up you environment, run the following command:

```
$ npm run setup
```

### Development

Dev mode will watch over files changes and automatically reload the page

```
$ npm run develop
```

Whenever `develop` branch is ready to be deployed to PROD, ensure to:

- increase version number of NPM Package

### Production

To build website for production, run the following command:

```
$ npm run build
```

This will create a `public` folder at the root of your directory. The content of
this folder is the website. In order to run locally a production site, run the
following command:

```
GATSBY_KENTICO_LANGUAGES='en;fr' GATSBY_DEFAULT_LANG=en GATSBY_HOSTNAME=https://release.nomad-journey.com npx gatsby serve
```

### Hosting & Deployment

This website is hosted on AWS Amplify. Build will be triggered for each push on
`relase` or `master` branches. Two environments exist for each of those
branches. `release` is a copy of production where we can test festures before
deploying to PROD `master` is the PROD website

## LICENSE

[MIT](LICENSE)

<!-- prettier-ignore-start -->
[build-badge]: https://travis-ci.org/edouardr/nomad-journey.com.svg?branch=master
[build]: https://travis-ci.org/edouardr/nomad-journey.com
[coverage-badge]: https://sonarcloud.io/api/project_badges/measure?project=edouardr_npmad-journey.com&metric=coverage
[coverage]: https://sonarcloud.io/dashboard?id=edouardr_npmad-journey.com
[maintainability-rating-badge]: https://sonarcloud.io/api/project_badges/measure?project=edouardr_npmad-journey.com&metric=sqale_rating
[maintainability-rating]: https://sonarcloud.io/dashboard?id=edouardr_npmad-journey.com
[reliability-rating-badge]: https://sonarcloud.io/api/project_badges/measure?project=edouardr_npmad-journey.com&metric=reliability_rating
[reliability-rating]: https://sonarcloud.io/dashboard?id=edouardr_npmad-journey.com
<!-- prettier-ignore-end -->
