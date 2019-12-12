/* jshint esversion: 6 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function Card(){
  const [astroCard, setAstroCard] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=jWcbGnFWUhpW7dYJFlKWXs5he2yeACCI8T5Ufd3K")
      .then(response =>{
        console.log(response.data);
        setAstroCard(response.data);
        // const cards = response.data;
        // setAstroCard(cards);
      });
  }, []);
  return(
    <div className="cardComponent">
   <h2>{astroCard.title}</h2>
   <h3>{astroCard.date}</h3>
   <p>{astroCard.explanation}</p>


 </div>
  );
}

export default Card;
