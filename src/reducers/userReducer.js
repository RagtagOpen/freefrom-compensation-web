import { GET_USER } from "../actions/types"

const initialState = {
  user: null,
  loading: true,
}

export default function(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      }
    default:
      return state
  }
}
