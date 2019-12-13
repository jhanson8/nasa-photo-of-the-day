/* jshint esversion: 6 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { MyHOne} from "./styles.js";


function Picture(){
  const [astroPic, setAstroPic] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=jWcbGnFWUhpW7dYJFlKWXs5he2yeACCI8T5Ufd3K")
      .then(response =>{
        console.log(response.data);
        setAstroPic(response.data.hdurl);
      });
  }, []);
  return(
    <div className="pictureComponent">
   <MyHOne>Astronomy Picture of the Day</MyHOne>
   <img src={astroPic} alt="astro picture" />
 </div>
  );
}

export default Picture;
