import React, { Component } from "react";
import Context from "./contexts";

export class Provider extends Component {
  changeUserName = () => {
    this.setState(prevState => ({
      userName: `${prevState.userName}!`
    }));
  };

  state = {
    userName: "default",
    changeUserName: this.changeUserName
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
