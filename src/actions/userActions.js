import { USER_ERROR, GET_USER } from "./types"

import { get } from "../utils/api"

// Get current user
export const getCurrentUser = () => async dispatch => {
  try {
    const res = await get("/users/current")

    dispatch({
      type: GET_USER,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: {
        message: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
