import { compose, createStore as reduxCreateStore } from "redux"
import { rootReducer } from "./reducers"

const initialState = { hasAcknowledged: false }
const useDevTools =
  process.env.NODE_ENV === "development" &&
  typeof window !== "undefined" &&
  window.devToolsExtension

const middleware = compose(useDevTools ? window.devToolsExtension() : f => f)

const createStore = () =>
  reduxCreateStore(rootReducer, initialState, middleware)

export default createStore
