import React from "react";
import { Link } from "react-router-dom";
import TaskSummary from "./TaskSummary";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list section">
      {tasks &&
        tasks.map((task) => {
          return (
            <Link key={task.id} to={`/task/${task.id}`}>
              <TaskSummary task={task} />
            </Link>
          );
        })}
    </div>
  );
};

export default TaskList;
