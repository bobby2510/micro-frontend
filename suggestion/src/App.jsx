import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Suggest from "./Suggest";

const App = () => {
  
 return (
  <React.Fragment>
    <Suggest />
  </React.Fragment>
 );
}
ReactDOM.render(<App />, document.getElementById("app"));
