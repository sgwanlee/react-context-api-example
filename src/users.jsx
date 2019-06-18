import React, { Component } from "react";
import Consumer from "./consumer";

class Users extends Component {
  state = {};
  render() {
    return <Consumer>{value => <h1>User : {value.userName}</h1>}</Consumer>;
  }
}

export default Users;
