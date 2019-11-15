import { FETCH_FEATURE_RESOURCE } from "actions/types"

const initialState = {
  feature: null,
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_FEATURE_RESOURCE:
      return {
        ...state,
        feature: payload,
      }
    default:
      return state
  }
}
