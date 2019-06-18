import React, { Component } from "react";
import Context from "./contexts";

class Accounts extends Component {
  state = {};
  static contextType = Context;
  render() {
    const { userName, changeUserName } = this.context;
    return (
      <div>
        <h1>Account {userName}</h1>
        <button type="button" onClick={changeUserName}>
          Change User Name
        </button>
      </div>
    );
  }
}

export default Accounts;
