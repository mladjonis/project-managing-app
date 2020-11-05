const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => {
      console.log("notification added", doc);
    })
    .catch((err) => {
      //err
    });
};

exports.taskCreated = functions.firestore
  .document("tasks/{taskId}")
  .onCreate((doc) => {
    const task = doc.data();
    const notification = {
      content: `Added a new task with name: ${task.title}`,
      user: `${task.authorFirstName} ${task.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

exports.userCreated = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const user = doc.data();
      const notification = {
        content: "Yay new user joined",
        user: `${user.firstName} ${user.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});
