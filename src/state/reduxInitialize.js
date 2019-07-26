import { createStore as reduxCreateStore } from "redux"
import { rootReducer } from "./reducers"

const initialState = { hasAcknowledged: false }

const createStore = () => reduxCreateStore(rootReducer, initialState)

export default createStore
