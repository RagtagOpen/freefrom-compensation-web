import {
  FETCH_FEATURE_RESOURCE,
  FETCH_RESOURCE_CATEGORIES,
} from "actions/types"

const initialState = {
  feature: null,
  categories: [],
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
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
