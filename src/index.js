/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

//  import the react and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

/* html - style= background-color: "blue" */
/* jsx - {{style= backgroundColor: "blue"}} */

// Create a react components
const App = () => {
  const buttonText = "Click me!";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />

      <button
        style={{
          backgroundColor: "blue",
          border: "2px solid red",
          borderRadius: "4px",
          color: "white",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
