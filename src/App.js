import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://leetcode.com/parimalkokode/">
          Leetcode Profile
        </a>{" "}
        | {" "}
        <a target="_blank" href="https://github.com/parimal23">
          Github Profile
        </a>{" "}
        | {" "}
        <a target="_blank" href="https://www.linkedin.com/in/parimal-kokode-426465230/">
          Linkedin Profile
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
