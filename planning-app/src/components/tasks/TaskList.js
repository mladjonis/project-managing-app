import React from "react";
import TaskSummary from "./TaskSummary";

const TaskList = () => {
  return (
    <div className="task-list section">
      <TaskSummary />
      <TaskSummary />
      <TaskSummary />
    </div>
  );
};

export default TaskList;
