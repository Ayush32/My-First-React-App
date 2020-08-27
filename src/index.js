/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

//  import the react and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react components
const App = () => {
  return <div>Hi This is my First React App</div>;
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
