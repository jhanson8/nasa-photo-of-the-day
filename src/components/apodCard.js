/* jshint esversion: 6 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { MyCardTitle, MyCardInfo} from "./styles.js";



function CardOne() {
  const [astroCard, setAstroCard] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=jWcbGnFWUhpW7dYJFlKWXs5he2yeACCI8T5Ufd3K"
      )
      .then(response => {
        console.log(response.data);
        setAstroCard(response.data);
        // const cards = response.data;
        // setAstroCard(cards);
      });
  }, []);
  return (
    <div className="cardComponent">
      <Card>
        <CardBody>
          <MyCardTitle>{astroCard.title}</MyCardTitle>
          <CardSubtitle>{astroCard.date}</CardSubtitle>
          <MyCardInfo>{astroCard.explanation}</MyCardInfo>
          <Button href="https://data.nasa.gov/Space-Science/Astronomy-Picture-of-the-Day-API/ez2w-t8ua">About the APOD API</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardOne;
