import React from "react";
import ReactDOM from "react-dom";

import "./css/styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./js/home";
import Hall from "./js/hall";
import Classroom from "./js/classroom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/hall" component={Hall} />
      <Route path="/classroom" component={Classroom} />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
