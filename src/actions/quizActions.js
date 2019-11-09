import { setAlert } from "actions/alertActions"
import {
  SET_AGREEMENT,
  SET_COOKIES,
  SET_LOCATION,
  SET_QUIZ_TALLY,
} from "actions/types"

  // Set Agreement
export const setAgreement = (agreement) => dispatch => {
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

export const setLocation = (location) => dispatch => {
  dispatch({
    type: SET_LOCATION,
    payload: location,
  })
}
