# Bunid App

The Bunid App is a Vue.js 2 based web application that allows users to search for books through the Google Books API. It is designed to provide a seamless and efficient book searching experience delivered on frontend only.

## Technologies

This project is implemented using the following technologies:

- **Vue.js 2**: Utilized for building the user interface with a progressive JavaScript framework.
- **Google Books API**: Used to search and retrieve book data for listing.

## Known Issues

- **Pagination of Search Results**: Currently, there is a limitation when trying to get the full number of search results for book pagination. The Google Books API does not support this functionality directly through API calls, and therefore a backend solution is needed to implement this feature properly.

## Project Setup

To get started with the Bunid App, you can follow these instructions:

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration
For more details on how to customize the configuration, refer to the [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).
