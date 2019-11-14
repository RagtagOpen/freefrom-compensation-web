import {
  SET_AGREEMENT,
  SET_COOKIES,
  SET_LOCATION,
  SET_QUESTION,
  GET_QUESTION_DATA,
  SET_QUIZ_TALLY,
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
    case GET_QUESTION_DATA:
      return {
        ...state,
        questions: payload,
      }
    case SET_QUIZ_TALLY:
      const questions = state.questions

      questions[payload.question] = {
        ...questions[payload.question],
        tally: {
          id: payload.response.id,
          mindset_ids: payload.response.mindset_ids,
        },
      }

      return {
        ...state,
        questions,
      }
    default:
      return state
  }
}
