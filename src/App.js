import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import AddProject from "./adminpages/addproject";
import AddWorkExperience from "./adminpages/addworkexperience";
import Footer from "./components/footer";
import About from "./pages/about";

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/add-project" component={AddProject} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/add-work-experience"
            component={AddWorkExperience}
          />
        </Switch>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
