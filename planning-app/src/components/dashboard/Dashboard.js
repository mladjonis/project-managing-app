import React from "react";
import Notifications from "./Notifications";
import TaskList from "../tasks/TaskList";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Dashboard = (props) => {
  const { tasks, auth } = props;
  //console.log(props);

  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <TaskList tasks={tasks} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tasks: state.firestore.ordered.tasks,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "tasks" }])
)(Dashboard);
