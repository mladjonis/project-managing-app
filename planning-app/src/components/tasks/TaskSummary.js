import React from "react";

const TaskSummary = ({ task }) => {
  // console.log(task);
  console.log(task);
  const date = new Date(task.createdAt.seconds * 1000);
  const dateString = date.toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  const timeString = date.toLocaleTimeString();
  return (
    <div className="card z-depth-0 task-summary animated bounceInLeft">
      <div className="car-content blue text-darken-2">
        <span className="card-title black">{task.title}</span>
        <p className="black-text">
          Author: {task.authorFirstName}
          {task.authorLastName}
        </p>
        <p className="black-text">
          {dateString} at {timeString}
        </p>
      </div>
    </div>
  );
};

export default TaskSummary;
