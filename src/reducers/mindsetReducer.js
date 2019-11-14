import {
  LOAD_MINDSET_SUCCESS,
  LOAD_MINDSET_ERROR,
  LOAD_MINDSETS_SUCCESS,
  LOAD_MINDSETS_ERROR,
} from "../actions/types"

const initialState = {
  loading: true,
  error: false,
  all: [],
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOAD_MINDSET_SUCCESS:
      return {
        ...state,
        current: payload,
        loading: false,
        error: false,
      }
    case LOAD_MINDSET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case LOAD_MINDSETS_SUCCESS:
      return {
        ...state,
        all: payload,
        loading: false,
        error: false,
      }
    case LOAD_MINDSETS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}
