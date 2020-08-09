/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
// Import the react and reactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create a  react component

const App = () => {
  return <div>Hi my first react app</div>;
};

// take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
