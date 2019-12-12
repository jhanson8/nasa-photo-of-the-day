/* jshint esversion: 6 */

import React from "react";
import "./App.css";
import Picture from "./components/pictureComponent.js";
import Card from "./components/apodCard.js";


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Picture />
      <Card />
    </div>
  );
}

export default App;
