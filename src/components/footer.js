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
                  <h5 className="theme-pink d-inline-block mb-0"> AV</h5>
                  <h5 className="theme-blue d-inline-block mb-0">Solutions</h5>
                </Link>
              </div>
              <div className="col-md-8 footer--copyright">
                <p className="text-muted">
                  © 2020 AVSolutions. All Rights Reserved.
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
