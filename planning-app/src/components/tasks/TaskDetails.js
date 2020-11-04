import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const TaskDetails = (props) => {
  const { selectedTask } = props;
  const { auth } = this.props;
  if (!auth.uid) {
    return <Redirect to="signin" />;
  }
  if (selectedTask) {
    return (
      <div className="container section task-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              Task title - {props.selectedTask.title}
            </span>
            <p>{props.selectedTask.content}</p>
          </div>
          <div className="card-action grey lighten-3 grey-text">
            <div>
              Posted by {props.selectedTask.authorFirstName}{" "}
              {props.authorLastName}
            </div>
            {/*podesiti datum ne radi zbog datuma greksa je :
             Uncaught Error: Objects are not valid as a React child (found: object with keys {seconds, nanoseconds}). If you meant to render a collection of children, use an array instead.*/}
            {/* <div>{props.selectedTask.createdAt}</div> */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading tasks...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  console.log(ownProps);
  const tasks = state.firestore.data.tasks;
  const task = tasks ? tasks[id] : null;
  return {
    selectedTask: task,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "tasks" }])
)(TaskDetails);
