import { BrowserRouter, Route, Switch } from "react-router-dom";

import React, { useEffect } from "react";
import M from "materialize-css";

import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import TaskDetails from "./components/tasks/TaskDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateTask from "./components/tasks/CreateTask";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/task/:id" component={TaskDetails} />
          <Route path="/signin/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateTask} />
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
