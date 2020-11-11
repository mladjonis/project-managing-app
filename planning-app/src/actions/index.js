import {
  ADD_TASK,
  ADD_TASK_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  UPDATE_USER,
  ERROR_UPDATING_USER,
} from "./types";

export const getCurrentUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();

    const user = fb.auth().currentUser;
    console.log(user);
  };
};

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
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then(() => {
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .catch((err) => {
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
    let uid = "";

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        uid = response.user.uid;
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName,
            initials: `${user.firstName[0]}${user.lastName[0]}`,
            photoURL: user.photoURL,
          });
      })
      .then((re) => {
        return firebase.storage().ref(`images/${user.photoURL}`).put(user.file);
      })
      .then((r) => {
        return firebase
          .storage()
          .ref(`images/${user.photoURL}`)
          .getDownloadURL();
      })
      .then((rr) => {
        firestore.collection("users").doc(uid).set(
          {
            imageFullURL: rr,
          },
          { merge: true }
        );
      })
      .then(() => {
        dispatch({ type: SIGN_UP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGN_UP_ERROR, payload: err.message });
      });
  };
};

export const sendMessage = (message) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const userProfile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("messages")
      .add({
        text: message.messageText,
        uid: userId,
        photoURL: userProfile.photoURL,
        createdAt: new Date(),
      })
      .then((resp) => {
        console.log(resp);
        //dispatch({ type: SEND_MESSAGE, payload: message});
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMessages = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const messages = firestore
      .collection("messages")
      .orderBy("createdAt")
      .limit(25);

    dispatch({ type: "FETCH_MESSAGES", payload: messages });
  };
};

export const updateUser = (user) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(user.uid)
      .set({
        ...user,
      })
      .then((response) => {
        dispatch({ type: UPDATE_USER, payload: response });
      })
      .catch((err) => {
        dispatch({ type: ERROR_UPDATING_USER, payload: err });
      });
  };
};
