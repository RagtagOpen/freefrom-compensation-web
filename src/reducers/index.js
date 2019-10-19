import { combineReducers } from "redux";
import alert from "./alertReducer";
import auth from "./authReducer";
import user from "./userReducer";

export default combineReducers({
  alert,
  auth,
  user
});
