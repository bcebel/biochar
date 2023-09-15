import React from "react";
import negative from "../negative.jpeg";

export default function energy() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Renewable Carbon Negative Energy</h1>
      <img src={negative} className="photos" alt="burning biochar" />

      <p>Take carbon out of the air for a hundred years or more.</p>
      <ul className="parent">
        <li>Biochar locks up carbon into an inert solid.</li>
        <li>Your source material can be from waste/scrap material.</li>
        <li>
          Or you could grow a crop like hemp for biomass to convert to pure
          hydrogen, oxygen and carbon.
        </li>
      </ul>
    </div>
  );
}
