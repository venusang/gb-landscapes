# gb-landscapes

```
Example of Project object in mirage/fixtures/projects.js:

type: "projects",
id: "hidden-hills-residence",
homepageSliderImage: "homepage-slider-hidden-hills.jpg",
imagesHorizontal: [
  "1920x1080-hidden-hills-01.jpg",
  "1920x1080-hidden-hills-02.jpg"
],
imagesVertical: ["426x574-hidden-hills-01.jpg"],
thumbnailSmall: "200x200-hidden-hills.jpg",
thumbnailLarge: "426x574-hidden-hills.jpg",
category: "residential",
title: "Hidden Hills Residence",
description: "Residential design and beautification",
location: "Hidden Hills, CA"

```

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd gb-landscapes`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
