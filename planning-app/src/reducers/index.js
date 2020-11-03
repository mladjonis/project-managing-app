import authReducer from "./authReducer";
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  task: taskReducer,
});
