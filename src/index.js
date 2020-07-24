import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import decode from 'jwt-decode';
import store from "./store";
import App from "./App";
import { syncInfoAc } from './pages/login/store/actionCreators'

const tk = localStorage.getItem('@#@TOKEN');
// 解析 TOKEN 并同步到 Redux
if (tk) store.dispatch(syncInfoAc(decode(tk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
