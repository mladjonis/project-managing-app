import React from "react";
import { Link } from "react-router-dom";
import DateFilter from "./DateFilter";
import SearchBar from "./SearchBar";
import TaskSummary from "./TaskSummary";

class TaskList extends React.Component {
  state = {
    term: [],
  };

  onSearchSubmit = (t) => {
    const regex = `${t}`;
    const condition = new RegExp(regex, "gi");
    if (this.props.tasks) {
      this.setState({
        term: [...this.filterTasks(condition)],
      });
    }
  };
  filterTasks = (condition) => {
    let arr = [];
    this.props.tasks.forEach((task) => {
      if (condition.test(task.title)) {
        arr.push(task);
      } else if (condition.test(task.authorFirstName)) {
        arr.push(task);
      } else if (condition.test(task.authorLastName)) {
        arr.push(task);
      }
    });
    return arr;
  };
  render() {
    const { tasks } = this.props;

    return (
      <React.Fragment>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <DateFilter />
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
