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

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigator/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    );
  }
}
