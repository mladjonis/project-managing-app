import React from "react";
import { Link } from "react-router-dom";
import DateFilter from "./DateFilter";
import SearchBar from "./SearchBar";
import TaskSummary from "./TaskSummary";
import moment from "moment";

class TaskList extends React.Component {
  state = {
    term: [],
    filtered: [],
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

  dateFilter = (startDate, endDate) => {
    const arr = this.props.tasks.filter((task) => {
      return moment(task.createdAt.toDate()).isBetween(startDate, endDate);
    });
    this.setState({
      filtered: [...arr],
    });
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
    console.log(this.state);

    return (
      <React.Fragment>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <DateFilter dateFilter={this.dateFilter} />
        <div className="section">
          {!this.state.term.length && !this.state.filtered.length
            ? tasks &&
              tasks.map((task) => {
                return (
                  <Link key={task.id} to={`/task/${task.id}`}>
                    <TaskSummary task={task} />
                  </Link>
                );
              })
            : this.state.term.length
            ? this.state.term.map((task) => {
                return (
                  <Link key={task.id} to={`/task/${task.id}`}>
                    <TaskSummary task={task} />
                  </Link>
                );
              })
            : this.state.filtered.map((task) => {
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
