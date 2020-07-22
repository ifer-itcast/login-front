import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCrators as registerActionCreators } from './store';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { data } = await this.props.registerFn.registerAc(this.state);
    console.log(data);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { username, email, password, passwordConfirm } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            defaultValue={username}
            onChange={this.handleChange}
          />
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            defaultValue={email}
            onChange={this.handleChange}
          />
        </div>
        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            defaultValue={password}
            onChange={this.handleChange}
          />
        </div>
        {/* passwordConfirm */}
        <div className="form-group">
          <label htmlFor="passwordConfirm">passwordConfirm</label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            name="passwordConfirm"
            defaultValue={passwordConfirm}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerData: state.register
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerFn: bindActionCreators(registerActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);