import React from "react";
import "./App.css";

// import from components
import { Header, Footer , Main} from "./Components";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
        </div>
        <Footer />
    </div>
  );
};

export default App;
