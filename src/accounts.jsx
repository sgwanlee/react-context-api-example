import React, { Component } from "react";
import Context from "./contexts";

class Accounts extends Component {
  state = {};
  static contextType = Context;
  render() {
    return <h1>Account {this.context.userName}</h1>;
  }
}

export default Accounts;
