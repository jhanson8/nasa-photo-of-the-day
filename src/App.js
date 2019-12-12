/* jshint esversion: 6 */

import React from "react";
import "./App.css";
import Picture from "./components/pictureComponent.js";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Picture />
    </div>
  );
}

export default App;
