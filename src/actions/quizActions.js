import axios from 'axios'
import { setAlert } from "./alertActions"
import {
    SET_AGREEMENT,
    SET_LOCATION,
    SET_QUIZ_TALLY,
    SET_STATE
  } from "./types"

  // Set Agreement
export const setAgreement = (agreement) => dispatch => {
  dispatch({
    type: SET_AGREEMENT,
    payload: agreement,
  })
}

export const setLocation = (location) => dispatch => {
  dispatch({
    type: SET_LOCATION,
    payload: location,
  })
}
