import React from "react";
import { Link } from "react-router-dom";
import DateFilter from "./DateFilter";
import SearchBar from "./SearchBar";
import TaskSummary from "./TaskSummary";
import moment from "moment";
import _, { isUndefined } from "lodash";

//popraviti ponasanje komponente kada se ucitaju novi taskovi a vec je selektovan datum
class TaskList extends React.Component {
  state = {
    term: [],
    filtered: [],
    initProps: [],
  };

  componentDidUpdate(prevProps) {
    if (!this.state.initProps.length) {
      this.setState({
        ...this.state,
        initProps: [...this.state.initProps, ...this.props.tasks],
      });
    }

    if (
      !isUndefined(prevProps.tasks) &&
      this.state.initProps.length !== prevProps.tasks.length
    ) {
      if (!_.isEqual(this.state.initProps, prevProps.tasks)) {
        this.setState({
          ...this.state,
          initProps: [...this.props.tasks],
        });
        console.log(this.state);
      }
    }
  }

  onSearchSubmit = (t) => {
    const regex = `${t}`;
    const condition = new RegExp(regex, "gi");
    if (this.props.tasks) {
      this.setState({
        ...this.state,
        initProps: [...this.filterTasks(condition)],
      });
    }
  };

  dateFilter = (startDate, endDate) => {
    const arr = this.props.tasks.filter((task) => {
      return moment(task.createdAt.toDate()).isBetween(startDate, endDate);
    });
    this.setState({
      ...this.state,
      initProps: [...arr],
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
    // const { tasks } = this.props;

    return (
      <React.Fragment>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <DateFilter dateFilter={this.dateFilter} />
        <div className="section">
          {this.state.initProps.map((task) => {
            return (
              <Link key={task.id} to={`/task/${task.id}`}>
                <TaskSummary task={task} />
              </Link>
            );
          })}
          {/* {!this.state.term.length && !this.state.filtered.length
            ? tasks &&
              tasks.map((task) => {
                return (
                  <Link key={task.id} to={`/task/${task.id}`}>
                    <TaskSummary task={task} />
                  </Link>
                );
              })
            : this.state.term.length !== this.props.tasks.lenght
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
              })} */}
        </div>
      </React.Fragment>
    );
  }
}

export default TaskList;
