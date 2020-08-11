import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 导航
import Navigator from "./pages/navigator";
// 首页
import Home from "./pages/home";
// 注册
import Register from "./pages/register";
// 登录
import Login from "./pages/login";
// 提示
import Flash from "./pages/flash";
// 个人
import Personal from "./pages/personal";
// Auth
import Auth from './utils/auth';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigator />
        <Flash />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/personal" component={Auth(Personal)} />
        </Switch>
      </Router>
    );
  }
}
