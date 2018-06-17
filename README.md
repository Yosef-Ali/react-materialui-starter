Demo: To help illustrate the project I have published it on Firebase Hosting: [Demo](https://material-ui-mobx-starter.firebaseapp.com/)

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Overview](#overview)
- [Libraries Used](#libraries-used)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)

## Overview

This project is based off an ongoing app which I am developing, minus any proprietary bits. I'm keeping this generic copy here as a starter and/or reference for others wanting to build using similar libraries. I am still learning so I do not propose this to be production-ready code.

I'd be thrilled for any feedback/advice/improvements on the code.

## Packages / Libraries Used

- React Router
- ~~MobX~~
  - ~~So far this dashboard could be built without any 3rd-party state management system, however for practice, I have begun integration of [Mobx](https://mobx.js.org/).~~
- Unstated
  - I've switched to Unstated, firstly for some experience using it, and secondly, I like how it's based on the React context pattern.
- ~~React-Semantic-UI~~
  - ~~The [React-Semantic-UI](http://react.semantic-ui.com) package has been used in an effort to get started faster. For this dashboard I have just linked to the Semantic UI stylesheet via a CDN link in the index.html file, however you can create your own theme and include it in your project by using the [Semantic UI CSS package](https://react.semantic-ui.com/usage#semantic-ui-css-package). Just a note, the CSS package is _HUGE_. Before a production-ready app is released, you should take steps to strip-back and remove unused components.~~
- Material-UI (v1.0.0)
  - This project started with React-Semantic-UI, however I am rebuilding it currently to use the newly released [Material-UI](https://material-ui.com). So far, it is so much more enjoyable to work with, simply for reason custom styling can easily injected to each element. _I hope to build a theme for this project, in the interim, the injected styles are a quick solution, though I'm not thrilled using them due to potential lack of consistencies._
- Google Firebase
  - Mainly outsourcing my authentication, as well as getting to know Firestore.
- React-toastify
  - A super simple and quick way to get a toast message system into the dashboard. [React-toastify](https://fkhadra.github.io/react-toastify/).

## Folder Structure

Folder structures can be subjective - below is the current structure implemented.

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    components/
      App.css
      App.js
    containers/
    firebase/
    routes/
    stores/ [no longer in use]
    utils/
    views/
    index.js
```

## Available Scripts

As this project is based on [Create React App](https://github.com/facebookincubator/create-react-app), those scripts remain available for use. In the project directory,the main scripts I use are:

- `npm start`
- `npm run build` - if only a local build is required
- `npm run deploy` - will build and deploy to Firebase Hosting

## Something Missing?

If you have improvements or ideas for additional base functionality, please contribute via a PR.
