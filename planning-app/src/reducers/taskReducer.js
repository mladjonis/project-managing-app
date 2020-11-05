import { ADD_TASK, ADD_TASK_ERROR } from "../actions/types";

const initState = {
  tasks: [
    {
      id: "1",
      title: "title1",
      details: "lorem lorem lorem lorem lorem lorem",
    },
    {
      id: "2",
      title: "title2",
      details: "aodkasodkosakdoksad lorem sakdoasokd lorem saijdias",
    },
  ],
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TASK:
      //console.log("ADD_TASK", action.payload);
      return state;
    case ADD_TASK_ERROR:
      //console.log("ADD_TASK_ERROR", action.payload);
      return state;
    default:
      return state;
  }
};

export default taskReducer;
