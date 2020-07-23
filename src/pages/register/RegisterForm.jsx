import React, { Component } from "react";
import classnames from "classnames";
import { withRouter } from 'react-router-dom';
import shortid from 'shortid';

class RegisterForm extends Component {
  state = {
    userInfo: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errMsg: [],
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ errMsg: [] });
    const { data } = await this.props.registerFn.registerAc(
      this.state.userInfo
    );
    if (data.status === 1) {
      return this.setState({
        errMsg: data.msg,
      });
    }
    this.props.history.push('/');
    this.props.flashFn.addFlashAc({
      type: 'alert-primary',
      text: '注册成功',
      id: shortid.generate()
    });
  };
  handleChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    const { username, email, password, passwordConfirm } = this.state.userInfo;
    const { errMsg } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={classnames("form-control", {
              "is-invalid": errMsg[0] === "username",
            })}
            id="username"
            name="username"
            defaultValue={username}
            onChange={this.handleChange}
          />
          <small className="form-text text-muted">
            {errMsg[0] === "username" && errMsg[1]}
          </small>
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={classnames("form-control", {
              "is-invalid": errMsg[0] === "email",
            })}
            id="email"
            name="email"
            defaultValue={email}
            onChange={this.handleChange}
          />
          <small className="form-text text-muted">
            {errMsg[0] === "email" && errMsg[1]}
          </small>
        </div>
        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={classnames("form-control", {
              "is-invalid": errMsg[0] === "password",
            })}
            id="password"
            name="password"
            defaultValue={password}
            onChange={this.handleChange}
          />
          <small className="form-text text-muted">
            {errMsg[0] === "password" && errMsg[1]}
          </small>
        </div>
        {/* passwordConfirm */}
        <div className="form-group">
          <label htmlFor="passwordConfirm">passwordConfirm</label>
          <input
            type="password"
            className={classnames("form-control", {
              "is-invalid": errMsg[0] === "passwordConfirm",
            })}
            id="passwordConfirm"
            name="passwordConfirm"
            defaultValue={passwordConfirm}
            onChange={this.handleChange}
          />
          <small className="form-text text-muted">
            {errMsg[0] === "passwordConfirm" && errMsg[1]}
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    );
  }
}

export default withRouter(RegisterForm);