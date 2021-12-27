import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Suggest from "suggestion/Suggest"

const App = () => (
  <div className="container">
      <Header />
      <div className="container-body">
      <div className="flex-item-one">
        Product Home page
      </div>
       <Suggest />
      </div>
      <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
