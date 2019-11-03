import axios from "axios"
import {
  LOAD_MINDSET_SUCCESS,
  LOAD_MINDSET_ERROR,
  LOAD_MINDSETS_SUCCESS,
  LOAD_MINDSETS_ERROR,
} from "./types"

// Load User
export const loadMindset = (mindsetId) => async dispatch => {
  try {
    const res = await axios.get(`/mindsets/${mindsetId}`)

    const data = {
      ...res.data,
      description: res.data.description.split("\n")
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

export const loadMindsets = (mindsetId) => async dispatch => {
  try {
    const res = await axios.get(`/mindsets`)

    const data = res.data.map(mindset => {
      return {
        ...mindset,
        description: mindset.description.split("\n")
      }
    })

    dispatch({
      type: LOAD_MINDSETS_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: LOAD_MINDSETS_ERROR,
    })
  }
}
