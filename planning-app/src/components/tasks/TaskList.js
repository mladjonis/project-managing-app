import React from "react";
import TaskSummary from "./TaskSummary";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  const renderTasks = tasks.map((task) => {
    return <TaskSummary key={task.id} task={task} />;
  });
  return <div className="task-list section">{tasks && renderTasks}</div>;
};

export default TaskList;
