import React from "react";

const TaskSummary = ({ task }) => {
  console.log(task);
  return (
    <div className="card z-depth-0 task-summary">
      <div className="car-content blue text-darken-2">
        <span className="card-title black">{task.title}</span>
        <p className="black-text">Author: Mladjonis</p>
        <p className="black-text">Date: 2nd November 2020 8:00pm</p>
      </div>
    </div>
  );
};

export default TaskSummary;
