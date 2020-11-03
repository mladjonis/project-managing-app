import React from "react";

const TaskSummary = ({ task }) => {
  return (
    <div className="card z-depth-0 task-summary">
      <div className="car-content blue text-darken-2">
        <span className="card-title">{task.title}</span>
        <p>Author: Mladjonis</p>
        <p className="black-text">Date: 2nd November 2020 8:00pm</p>
      </div>
    </div>
  );
};

export default TaskSummary;
