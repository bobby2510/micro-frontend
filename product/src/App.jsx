import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from 'home/Header'
import Footer from 'home/Footer'
import Suggest from 'suggestion/Suggest'

const App = () => (
    <React.Fragment>
    <div className="container">
      <Header />
      <div className="container-body">
          <div className="flex-item-one">
            Product Details Page!
          </div>
          <Suggest />
      </div>
      <Footer />
    </div>

    </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
