import { combineReducers } from "redux"
import alert from "./alertReducer"
import auth from "./authReducer"
import user from "./userReducer"
import quiz from "./quizReducer"
import mindset from "./mindsetReducer"

export default combineReducers({
  alert,
  auth,
  user,
  quiz,
  mindset,
})
