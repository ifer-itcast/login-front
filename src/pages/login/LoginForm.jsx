import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import decode from "jwt-decode";
import shortid from 'shortid';
import axios from "../../utils/request";

class LoginForm extends Component {
  state = {
    userInfo: {
      username: "",
      password: "",
    },
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { data } = await this.props.loginFn.loginAc(this.state.userInfo);
    if (data.status === 0) {
      // 存储 TOKEN 到本地
      localStorage.setItem('@#@TOKEN', data.token);
      // 同步用户状态和用户信息到 Redux
      this.props.loginFn.syncInfoAc(decode(data.token));
      // 跳转首页
      this.props.history.push("/");
      // 消息提示
      this.props.flashFn.addFlashAc({
        type: "alert-primary",
        text: "登录成功",
        id: shortid.generate(),
      });
      return;
    }
    this.props.flashFn.addFlashAc({
      type: "alert-danger",
      text: "登录失败",
      id: shortid.generate(),
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
    const { username, password } = this.state.userInfo;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            defaultValue={username}
            onChange={this.handleChange}
          />
        </div>
        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            defaultValue={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
