import React from "react";

export const Context = React.createContext({
  username: null,
  changeUserName: () => {}
});

export default Context;
