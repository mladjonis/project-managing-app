import React from "react";
import TaskSummary from "./TaskSummary";

const TaskList = ({ tasks }) => {
  console.log(tasks);

  return (
    <div className="task-list section">
      {tasks &&
        tasks.map((task) => {
          return <TaskSummary key={task.id} task={task} />;
        })}
    </div>
  );
};

export default TaskList;
