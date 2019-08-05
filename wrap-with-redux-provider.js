import React from "react"
import { Provider } from "react-redux"

import createStore from "./src/state/reduxInitialize"

export default ({ element }) => {
  // Following the model from https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux
  // instantiating store in a wrapped element ensures there is fresh store for each SSR page
  const store = createStore()
  return <Provider store={store}>{element}</Provider>
}
