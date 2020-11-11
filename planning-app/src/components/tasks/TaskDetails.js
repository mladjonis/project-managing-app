import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";

const TaskDetails = (props) => {
  const { selectedTask } = props;
  const { auth } = props;
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
            <div className="note-date grey-text">
              {moment(selectedTask.createdAt.toDate()).fromNow()}
            </div>
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
  const id = ownProps.match.params.id;
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
