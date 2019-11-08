import { setAlert } from "./alertActions"
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types"
import setAuthToken from "../utils/setAuthToken"
import { get, post } from "../utils/api"

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await get("/users/current")

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  const body = JSON.stringify({ auth: { email, password } })

  try {
    const res = await post("/user_tokens", body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })

    dispatch(loadUser())
  } catch (err) {
    let errors = []

    if (err.response.status === 404) {
      errors.push({ message: "Not found." })
    } else if (err.response.status === 401) {
      errors.push({ message: "Not authorized." })
    } else {
      errors.push(err.response.data.errors)
    }

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.message, "danger")))
    }

    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}
