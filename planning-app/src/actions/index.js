import { ADD_TASK, ADD_TASK_ERROR } from "./types";

export const createTask = (task) => {
  //{} destructuring thunk extra arguments
  return (dispatch, getState, { getFirestore }) => {
    //api call
    const fs = getFirestore();
    fs.collection("tasks")
      .add({
        ...task,
        authorFirstName: "Mladjonis",
        authorLastName: "Mladjonis",
        authodId: 9999,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_TASK, payload: task });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_TASK_ERROR, payload: err });
      });
  };
};
