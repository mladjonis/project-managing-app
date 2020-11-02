import { BrowserRouter, Route, Switch } from "react-router-dom";

import React, { useEffect } from "react";
import M from "materialize-css";

import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import TaskDetails from "./components/tasks/TaskDetails";

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
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
