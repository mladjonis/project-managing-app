import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/header/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
