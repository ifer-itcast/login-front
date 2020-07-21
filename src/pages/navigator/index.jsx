import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class componentName extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/register">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
