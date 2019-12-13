/* jshint esversion: 6 */

import React from "react";
import "./App.css";
import Picture from "./components/pictureComponent.js";
import CardOne from "./components/apodCard.js";


function App() {
  return (
    <div className="App">
  
      <Picture />
      <CardOne />
    </div>
  );
}

export default App;
