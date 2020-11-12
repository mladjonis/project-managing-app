import { UPDATE_EMAIL_USER, GET_USER } from "../actions/types";

const initState = {
  user: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case UPDATE_EMAIL_USER:
      return state;
    default:
      return state;
  }
};

export default userReducer;
