import axios from 'axios'
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

export const get = (url) => {
    return axios.get(process.env.REACT_APP_API + url);
}

export const post = (url, body, config) => {
    return axios.post(process.env.REACT_APP_API + url, body, config);
}