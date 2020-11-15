import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import TaskSummary from "./TaskSummary";

// const TaskList = ({ tasks }) => {
//   const [term, setTerm] = useState(null);
//   const onSearchSubmit = (t) => {
//     console.log("task list forma", t);

//     const regex = `${t}`;
//     const condition = new RegExp(regex, "gi");
//     //setTerm(condition);
//     // for (const match of tasks) {
//     //   if (condition.test(match.title)) {
//     //     arr.push(match);
//     //   } else if (condition.test(match.authorFirstName)) {
//     //     arr.push(match);
//     //   } else if (condition.test(match.authorLastName)) {
//     //     arr.push(match);
//     //   }
//     // }
//   };

//   return (
//     <React.Fragment>
//       <SearchBar onSubmit={onSearchSubmit} />
//       <div className="section">
//         {tasks &&
//           tasks.map((task) => {
//             return (
//               <Link key={task.id} to={`/task/${task.id}`}>
//                 <TaskSummary task={task} />
//               </Link>
//             );
//           })}
//       </div>
//     </React.Fragment>
//   );
// };

class TaskList extends React.Component {
  state = {
    term: [],
  };

  onSearchSubmit = (t) => {
    console.log("task list forma", t);

    const regex = `${t}`;
    const condition = new RegExp(regex, "gi");
    let arr = [];
    for (const match of this.props.tasks) {
      if (condition.test(match.title)) {
        arr.push(match);
      } else if (condition.test(match.authorFirstName)) {
        arr.push(match);
      } else if (condition.test(match.authorLastName)) {
        arr.push(match);
      }
    }
    this.setState({
      term: [...arr],
    });
  };
  render() {
    const { tasks } = this.props;

    return (
      <React.Fragment>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="section">
          {!this.state.term.length
            ? tasks &&
              tasks.map((task) => {
                return (
                  <Link key={task.id} to={`/task/${task.id}`}>
                    <TaskSummary task={task} />
                  </Link>
                );
              })
            : this.state.term.map((task) => {
                return (
                  <Link key={task.id} to={`/task/${task.id}`}>
                    <TaskSummary task={task} />
                  </Link>
                );
              })}
        </div>
      </React.Fragment>
    );
  }
}

export default TaskList;
