/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
// Import the react and reactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create a  react component

const App = () => {
  const buttonText = "Click Me!";
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
