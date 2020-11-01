import { BrowserRouter } from "react-router-dom";

import React, { useEffect } from "react";
import M from "materialize-css";

import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        {/* <Footer /> */}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
