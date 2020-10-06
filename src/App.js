import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
