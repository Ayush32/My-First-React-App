/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
// Import the react and reactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create a  react component

const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter Name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

// take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
