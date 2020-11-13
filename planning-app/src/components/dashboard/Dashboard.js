import React from "react";
import Notifications from "./Notifications";
import TaskList from "../tasks/TaskList";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { getNextTasks } from "../../actions";

const Dashboard = (props) => {
  const { tasks, auth, notifications } = props;

  const loadNextTasks = () => {
    props.getNextTasks(tasks[0]);
  };
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m5 offset-m1 push-m6">
          <Notifications notifications={notifications} />
        </div>
        <div className="col s12 m6 pull-m5 task-list">
          <h4 className="news-feed">News Feed</h4>
          <TaskList tasks={tasks} />
        </div>
        <button onClick={loadNextTasks}> DUGME </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.firestore.ordered.tasks,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNextTasks: (lastTask) => dispatch(getNextTasks(lastTask)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: "tasks", limit: 10, orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
