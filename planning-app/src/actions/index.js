import {
  ADD_TASK,
  ADD_TASK_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from "./types";
import firebaseConfig from "../config/firebaseConfig";

export const createTask = (task) => {
  //{} destructuring thunk extra arguments
  return (dispatch, getState, { getFirestore }) => {
    //api call
    const fs = getFirestore();
    const userProfile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    fs.collection("tasks")
      .add({
        ...task,
        authorFirstName: userProfile.firstName,
        authorLastName: userProfile.lastName,
        authodId: uid,
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

export const signIn = (cred) => {
  return (dispatch, getState, { getFirebase }) => {
    //console.log(getFirebase);
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then(() => {
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .catch((err) => {
        //console.log(err);
        dispatch({ type: SIGN_IN_ERROR, payload: err.message });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGNOUT_ERROR, payload: err.message });
      });
  };
};

export const signUp = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName,
            initials: `${user.firstName[0]}${user.lastName[0]}`,
          });
      })
      .then(() => {
        dispatch({ type: SIGN_UP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGN_UP_ERROR, payload: err.message });
      });
  };
};
