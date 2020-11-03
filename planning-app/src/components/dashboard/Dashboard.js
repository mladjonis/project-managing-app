import React from "react";
import Notifications from "./Notifications";
import TaskList from "../tasks/TaskList";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const { tasks } = props;
  //console.log(props);
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
  return {
    tasks: state.task.tasks,
  };
};

export default connect(mapStateToProps)(Dashboard);
