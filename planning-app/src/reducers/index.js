import authReducer from "./authReducer";
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  task: taskReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  user: userReducer,
});
