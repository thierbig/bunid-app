# Bunid App

The Bunid App is a Vue.js 2 based web application that allows users to search for books through the Google Books API. It is designed to provide a seamless and efficient book searching experience delivered on frontend only.

## Screenshots

## Technologies

The project is implemented with the following:

- **Vue.js 2**: Empowers the frontend with a reactive and composable user interface architecture.
- **Google Books API**: Facilitates book searching and retrieval, serving as the backbone for the application's data.

Additionally, this project is scaffolded with Vue-CLI, configured to enhance the development workflow:

- **Less**: Chosen as the CSS pre-processor for its dynamic stylesheet capabilities.
- **Prettier**: Integrated as the code linter and formatter to maintain consistent code style.
- **Jest**: Adopted for unit testing to ensure each component functions correctly.

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

## Contributing

Contributions are what make the open-source community such a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

This project is licensed under the terms of the MIT license.

## Contact

If you have any questions or issues, please open an issue in this repository.
