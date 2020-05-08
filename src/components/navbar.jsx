import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Business Cards WebApp
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {!user && (
                <React.Fragment>
                  <li className="nav-item" key="1">
                    <NavLink className="nav-item nav-link " to="/signin">
                      Signin
                    </NavLink>
                  </li>

                  <li className="nav-item" key="2">
                    <NavLink className="nav-item nav-link" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item" key="3">
                    <NavLink
                      className="nav-item nav-link a-link"
                      to="/biz-signup"
                    >
                      Business
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <ul className="nav-item dropdown" key="5">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      to="#"
                    >
                      <span className="mr-2">{user.name}</span>
                      <i className="fas fa-user"></i>
                    </Link>

                    <div
                      className="dropdown-menu dropdown-primary"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      {user && user.biz && (
                        <li className="nav-item">
                          <Link className="dropdown-item" to="/my-cards">
                            My Cards
                          </Link>
                        </li>
                      )}

                      <li className="nav-item">
                        <NavLink className="dropdown-item" to="/logout">
                          Logout
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
