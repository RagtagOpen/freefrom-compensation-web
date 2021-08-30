import axios from "axios"

// It seems that changing environment variables in this repo does not change environment variables
// in our AWS config, so doing this as a temporary work-around
let TEMP_REACT_APP_API
if (process.env.NODE_ENV === "production") {
  TEMP_REACT_APP_API = "https://freefrom-compensation-api.herokuapp.com/"
} else {
  TEMP_REACT_APP_API = "localhost:3000"
}

export const get = url => {
  return axios.get(process.env.TEMP_REACT_APP_API + url)
}

export const post = (url, body, config) => {
  return axios.post(process.env.TEMP_REACT_APP_API + url, body, config)
}

export const mailer = (url, body, config) => {
  return axios.post(process.env.REACT_APP_MAILER + url, body, config)
}
