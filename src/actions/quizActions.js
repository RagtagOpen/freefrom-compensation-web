import { setAlert } from "./alertActions"
import {
  SET_AGREEMENT,
  SET_COOKIES,
  SET_LOCATION,
  SET_QUIZ_TALLY,
} from "./types"

// Set Agreement
export const setAgreement = agreement => dispatch => {
  dispatch({
    type: SET_AGREEMENT,
    payload: agreement,
  })
}

export const setCookies = opt => dispatch => {
  dispatch({
    type: SET_COOKIES,
    payload: opt,
  })
}
