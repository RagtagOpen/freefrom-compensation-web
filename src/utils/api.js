import axios from "axios"

export const get = url => {
  return axios.get(process.env.REACT_APP_API + url)
}

export const post = (url, body, config) => {
  return axios.post(process.env.REACT_APP_API + url, body, config)
}

export const mailer = (url, body, config) => {
  return axios.post(process.env.REACT_APP_MAILER + url, body, config)
}
