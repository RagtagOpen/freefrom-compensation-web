import {
  LOAD_MINDSET_SUCCESS,
  LOAD_MINDSET_ERROR,
  LOAD_MINDSETS_SUCCESS,
  LOAD_MINDSETS_ERROR,
} from "./types"
import { get, post } from "utils/api"
import { tallyMindsetTotal } from "utils/helpers"

export const loadMindset = mindsetId => async dispatch => {
  try {
    const res = await get(`/mindsets/${mindsetId}`)

    const data = {
      ...res.data,
      description: res.data.description.split("\n"),
    }

    dispatch({
      type: LOAD_MINDSET_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: LOAD_MINDSET_ERROR,
    })
  }
}

export const loadMindsets = () => async dispatch => {
  try {
    const res = await get(`/mindsets`)

    dispatch({
      type: LOAD_MINDSETS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: LOAD_MINDSETS_ERROR,
    })
  }
}
