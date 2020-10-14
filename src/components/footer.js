import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <div className=" row">
              <div className="col-md-4 o-footer--footer-logo">
                <Link className="brand" to="/">
                  <h4 className="theme-pink d-inline-block"> AV</h4>
                  <h4 className="theme-blue d-inline-block"> Solutions</h4>
                </Link>
              </div>
              <div className="col-md-8 o-footer--copyright text-center">
                <p className="text-dark">
                  Copyright © 2020 AV Solutions. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-2 dmca-badge">
                <div className="dmca"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
