import React from "react";
import { Link } from "react-router-dom";
import DateFilter from "./DateFilter";
import SearchBar from "./SearchBar";
import TaskSummary from "./TaskSummary";
import moment from "moment";

//popraviti ponasanje komponente kada se ucitaju novi taskovi a vec je selektovan datum
class TaskList extends React.Component {
  state = {
    term: [],
    filtered: [],
    initProps: [],
  };

  // shouldComponentUpdate(prevProps, state) {
  //   console.log(prevProps, state);
  //   return (
  //     prevProps.tasks[prevProps.tasks.length - 1].id !== state.term[0].id
  //   );
  // }
  componentDidMount() {
    console.log(this.props.tasks);
    if (this.props.tasks) {
      this.setState({
        ...this.state,
        initProps: [...this.props.tasks],
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // this.setState({
    //   term: [...this.state.term, ...this.props.tasks],
    // });
    console.log(prevProps);
    console.log(prevState);
    if (
      prevState.initProps.length &&
      prevProps.tasks.length &&
      prevProps.tasks[prevProps.tasks.length - 1].id !==
        prevState.initProps[0].id
    ) {
      this.setState({
        ...this.state,
        initProps: [...this.state.initProps, ...this.props.tasks],
      });
      console.log("updated");
      console.log(this.state);
    }
    // if (
    //   this.props.tasks[this.props.tasks.lenght - 1].id === prevProps.tasks[0].id
    // ) {
    //   console.log("updejtuj komponentu");
    // }
    // console.log({ ...this.state.term, ...this.props.tasks });
  }

  onSearchSubmit = (t) => {
    const regex = `${t}`;
    const condition = new RegExp(regex, "gi");
    if (this.props.tasks) {
      this.setState({
        ...this.state,
        term: [...this.filterTasks(condition)],
      });
    }
  };

  dateFilter = (startDate, endDate) => {
    const arr = this.props.tasks.filter((task) => {
      return moment(task.createdAt.toDate()).isBetween(startDate, endDate);
    });
    this.setState({
      ...this.state,
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
              })}
        </div>
      </React.Fragment>
    );
  }
}

export default TaskList;
