import {
  SET_AGREEMENT,
  SET_COOKIES,
  SET_LOCATION,
  SET_QUESTION,
} from "actions/types"

const initialState = {
  loading: true,
  agreement: false,
  cookies: null,
  location: "",
  question: 0,
  questions: [],
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_AGREEMENT:
      return {
        ...state,
        agreement: payload,
      }
    case SET_COOKIES:
      return {
        ...state,
        cookies: payload,
      }
    case SET_LOCATION:
      return {
        ...state,
        location: payload,
      }
    case SET_QUESTION:
      return {
        ...state,
        question: payload,
      }
    default:
      return state
  }
}
