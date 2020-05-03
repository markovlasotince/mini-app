import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";

// pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// components
import AuthGuard from "./components/Auth/AuthGuard";
import LoginGuard from "./components/Auth/LoginGuard";
import AutomaticLogin from "./components/Auth/AutomaticLogin";

const history = createBrowserHistory();
const store = configureStore();

const appWrapper = (
  <Provider store={store}>
    <Router history={history}>
      <AutomaticLogin />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/admin" component={AuthGuard(Admin)} />
        {/* <Route exact path="/admin" component={Admin} /> */}
        <Route exact path="/login" component={LoginGuard(Login)} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(appWrapper, document.getElementById("root"));
