import { BrowserRouter } from "react-router-dom";

import React, { useEffect } from "react";

import Navbar from "./components/header/Navbar";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
