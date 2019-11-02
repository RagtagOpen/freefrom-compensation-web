import { setAlert } from "./alertActions"
import {
    SET_AGREEMENT,
    SET_LOCATION,
    SET_QUIZ_TALLY
  } from "./types"

  // Set Agreement
export const setAgreement = (agreement) => dispatch => {
    dispatch({
    type: SET_AGREEMENT,
    payload: agreement,
    })
  }