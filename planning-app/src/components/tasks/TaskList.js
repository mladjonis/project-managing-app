import React from "react";
import { Link } from "react-router-dom";
import { constants } from "redux-firestore";
import TaskSummary from "./TaskSummary";

const TaskList = ({ tasks }) => {
  const regex = /.g./gu;
  const condition = new RegExp(regex);
  let arr = [];
  // const result = tasks.filter((el)=> {
  //   return condition.test(el.title);
  // });
  if (tasks) {
    for (const match of tasks) {
      if (condition.test(match.title)) {
        arr.push(match);
      } else if (condition.test(match.authorFirstName)) {
        arr.push(match);
      } else if (condition.test(match.authorLastName)) {
        arr.push(match);
      }
      // console.log(arr);
      // console.log(condition.test(match.title));
      // console.log(condition.test(match.authorFirstName));
      // console.log(condition.test(match.authorLastName));
      // console.log(match);
    }
  }
  return (
    <div className="section">
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
