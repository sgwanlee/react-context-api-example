import React, { Component } from "react";
import Consumer from "./consumer";

class Users extends Component {
  state = {};
  render() {
    return (
      <Consumer>
        {value => (
          <div>
            <h1>User : {value.userName}</h1>
            <button type="button" onClick={value.changeUserName}>
              Change User Name
            </button>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Users;
