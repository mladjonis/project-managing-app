import React, { createRef } from "react";
import Notifications from "./Notifications";
import TaskList from "../tasks/TaskList";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { getNextTasks } from "../../actions";

// const Dashboard = (props) => {
//   const { tasks, auth, notifications } = props;
//   console.log(props);
//   const [tasksComponent, setTasksComponent] = useState(tasks);
//   const ref = useRef();

//   useEffect(() => {
//     console.log(ref);
//     console.log(ref.current);
//     ref.current.addEventListener("scroll", loadNextTasks);

//     // return () => {
//     //   ref.current.removeEventListener("scroll", loadNextTasks);
//     // };
//   }, [tasksComponent]);

//   const loadNextTasks = () => {
//     console.log(ref.current.innerHeight);
//     // if (
//     //   ref.current.clientHeight + document.documentElement.scrollTop ===
//     //   document.scrollingElement.scrollHeight
//     // ) {
//     //   console.log("usaao u if");
//     // }
//     //props.getNextTasks(tasks[0]);
//   };
//   if (!auth.uid) {
//     return <Redirect to="/signin" />;
//   }
//   return (
//     <div className="dashboard container">
//       <div className="row">
//         <div className="col s12 m5 offset-m1 push-m6">
//           <Notifications notifications={notifications} />
//         </div>
//         <div className="col s12 m6 pull-m5 task-list" ref={ref}>
//           <h4 className="news-feed">News Feed</h4>
//           <TaskList tasks={tasks} />
//         </div>
//         <button onClick={loadNextTasks}> DUGME </button>
//       </div>
//     </div>
//   );
// };

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    this.ref.current.addEventListener("scroll", this.loadNextTasks);
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener("scroll", this.loadNextTasks);
  }

  loadNextTasks = () => {
    console.log(this.ref.current.clientHeight);
    console.log(this.ref.current.scrollTop);
    console.log(this.ref.current.scrollHeight);
    if (
      this.ref.current.clientHeight + this.ref.current.scrollTop ===
      this.ref.current.scrollHeight
    ) {
      this.props.getNextTasks();
    }
  };

  render() {
    const { tasks, auth, notifications } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m5 offset-m1 push-m6">
            <Notifications notifications={notifications} />
          </div>
          <div className="col s12 m6 pull-m5 task-list" ref={this.ref}>
            <h4 className="news-feed">News Feed</h4>
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let tasks = state.firestore.ordered.tasks;
  if (tasks) {
    tasks = [...tasks, ...state.task.tasks];
  }
  return {
    tasks: tasks,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNextTasks: (lastTask) => dispatch(getNextTasks(lastTask)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: "tasks", limit: 10, orderBy: ["createdAt", "desc"] }, //prvo ucitaj deset onih pa probaj napraviti da radi bez ovoga
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
