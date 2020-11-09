import React from "react";
import moment from "moment";

const TaskSummary = ({ task }) => {
  return (
    <div className="card z-depth-0 task-summary animated bounceInLeft">
      <div className="card-content text-darken-2">
        <span className="card-title">{task.title}</span>
        <p className="black-text">
          Author: {task.authorFirstName}
          {task.authorLastName}
        </p>
        <p className="note-date grey-text">
          {moment(task.createdAt.toDate()).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default TaskSummary;
