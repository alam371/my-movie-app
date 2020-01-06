import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

class App extends Component {
  state = {
    user: null,
    loggedIn: true
  };

  render() {
    // Similar to what you would do with HTML, you'll want to properly indent your JSX for readability.
    // One option is to use a tool like "prettier" (https://prettier.io/) to do this for you
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={renderProps =>
                this.state.loggedIn ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path="/create" component={Form} />
            <Route
              exact
              path="/login"
              render={renderProps =>
                this.state.loggedIn ? <Redirect to="/dashboard" /> : <Signin />
              }
            />
            <Route
              exact
              path="/dashboard"
              render={renderProps =>
                !this.state.loggedIn ? (
                  <Redirect to="/login" />
                ) : (
                  <Dashboard {...renderProps} />
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
