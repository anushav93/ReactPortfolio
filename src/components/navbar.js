import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { HamburgerCollapseReverse } from "react-animated-burgers";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
    };
  }

  componentDidMount = () => {};
  showHamburgerMenu = (status) => {
    this.setState({ showNav: status });
  };

  render() {
    return (
      <React.Fragment>
        <nav className=" navbar navbar-expand-sm navbar-light fixed-top">
          <div className="container">
            <Link className="brand" to="/">
              <img
                src="https://react-portfolioimages.s3.us-east-2.amazonaws.com/logo.svg"
                className="img img-fluid about-image"
              />
            </Link>

            <HamburgerCollapseReverse
              className="navbar-toggler"
              buttonWidth={25}
              isActive={this.state.showNav}
              onClick={() => this.showHamburgerMenu(!this.state.showNav)}
            />

            <div
              className={
                this.state.showNav
                  ? "navbar-collapse collapse show"
                  : "navbar-collapse collapse"
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    onClick={() => this.showHamburgerMenu(false)}
                    activeClassName="nav-link-selected"
                    to="/about"
                  >
                    <b>A</b>
                    bout
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    onClick={() => this.showHamburgerMenu(false)}
                    activeClassName="nav-link-selected"
                    to="/portfolio"
                  >
                    <b>P</b>
                    ortfolio
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    onClick={() => this.showHamburgerMenu(false)}
                    activeClassName="nav-link-selected"
                    to="/contact"
                  >
                    <b>C</b>
                    ontact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
