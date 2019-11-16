import {
  FETCH_FEATURE_RESOURCE,
  FETCH_RESOURCE_CATEGORIES,
} from "actions/types"

const initialState = {
  feature: null,
  categories: [],
  states: {},
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_RESOURCE_FOR_STATE:
      /*
      * payload shape:
      * {
      *   state: 'NY',
      *   category: 'victims-of-crime-act',
      *   resource: { ... }
      * }
      */
      return {
        ...state,
        states: {
          ...state.states,
          [payload.state]: {
            ...state.states[payload.state],
            [payload.category]: payload.resource,
          }
        }
      }

    case FETCH_FEATURE_RESOURCE:
      return {
        ...state,
        feature: payload,
      }
    case FETCH_RESOURCE_CATEGORIES:
      return {
        ...state,
        categories: payload,
      }
    default:
      return state
  }
}
