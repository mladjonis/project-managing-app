import { ADD_TASK, ADD_TASK_ERROR, GET_NEXT_TASKS } from "../actions/types";

const initState = {
  tasks: [],
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TASK:
      //console.log("ADD_TASK", action.payload);
      return state;
    case ADD_TASK_ERROR:
      //console.log("ADD_TASK_ERROR", action.payload);
      return state;
    case GET_NEXT_TASKS:
      console.log(action.payload);
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
