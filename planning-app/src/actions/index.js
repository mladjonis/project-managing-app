import { ADD_TASK } from "./types";

export const createTask = (task) => {
  return async (dispatch, getState) => {
    //api call
    dispatch({ type: ADD_TASK, payload: task });
  };
};
