import {
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from "../actions/types";

const initState = {
  authError: null,
  signOutError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_ERROR:
      return { ...state, authError: action.payload };
    case SIGN_IN_SUCCESS:
      return { ...state, authError: null };
    case SIGNOUT_ERROR:
      return { ...state, signOutError: action.payload };
    case SIGNOUT_SUCCESS:
      return state;
    case SIGN_UP_SUCCESS:
      return { ...state, authError: null, signOutError: null };
    case SIGN_UP_ERROR:
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};

export default authReducer;
