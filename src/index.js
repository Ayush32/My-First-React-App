/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
// Import the react and reactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create a  react component

const App = () => {
  // js variable
  //   const buttonText = "Click Me!";
  const buttonText = {
    text: "Click Me",
  };
  const labelText = "Enter Name:";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
