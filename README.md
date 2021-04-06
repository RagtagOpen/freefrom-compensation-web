<p align="center">
  <a href="http://www.freefrom.org/">
    <img alt="FreeFrom" src="http://static1.squarespace.com/static/56a24df4d8af10a5072bed7c/t/56a2631b841aba12ab7f66d0/1562878613622/?format=1500w" width="300" />
  </a>
</p>
<h2 align="center">Front End</h2>

This is the front end web for FreeFrom. It's back end counterpart is located [here](https://github.com/RagtagOpen/freefrom-compensation-api)

## Tech
- React Front End
- Ruby Back End
- Postgres DB

## Requirements
- Node v10.16.0
- Ruby back end must be running locally on port `3000`. If back end is running on a separate server, you can update the `package.json` file, changing the `proxy` property to your back end location.

## Set up
1. Install node_modules `yarn install`
2. Run React application `yarn start` (or `yarn run start-windows` if on windows)

## Code Style
1. We use eslint in conjunction with prettier. Both of these can run automatically with extensions, or else would need to be ran manually
2. Please stick with absolute paths for imports

## Running Tests
We use Jest for running unit tests. It's packaged with React. Read more about creating React tests on the React website [here](https://create-react-app.dev/docs/running-tests/) and more about Jest [here](https://jestjs.io/docs/en/getting-started)

1. To run and monitor tests: `yarn run test`

## Important Tools
- We use redux for state management (`react-redux`, `redux`, and `react-router`). Learn more about Redux here: [Redux](https://redux.js.org/)
- We use React router for routing/urls. Learn more about Router here: [Router Docs](https://reacttraining.com/react-router/web/guides/quick-start)
- We use Material UI for handling our overall theme, overriding where needed within the overarching `src/theme.js` file. Read more about Material UI here: [Material UI](https://material-ui.com/)
- We use React Helmet for `<head>` specific changes, mostly for SEO. Read more about React Helmet here: [React Helmet](https://github.com/nfl/react-helmet)

## Contributors
[Contributors](https://github.com/RagtagOpen/freefrom-compensation-web/blob/master/CONTRIBUTING.md)
