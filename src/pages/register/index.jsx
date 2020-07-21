import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <form>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            className="form-control"
            id="username"
          />
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        {/* passwordConfirm */}
        <div className="form-group">
          <label htmlFor="passwordConfirm">passwordConfirm</label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    );
  }
}
