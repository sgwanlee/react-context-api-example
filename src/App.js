import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import User from "./users";
import Account from "./accounts";
import Provider from "./provider";

function App() {
  return (
    <div className="App">
      <Link to="/user">User</Link>
      <br />
      <Link to="/account">Account</Link>
      <Provider>
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/account" component={Account} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
