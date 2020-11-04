import {
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
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
    default:
      return state;
  }
};

export default authReducer;
