import React from "react";
import smile from "../smile.jpeg";
import "../App.css";


export default function whatssogreat() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>What's so great about biochar?'</h1>
      <img src={smile} className="photos" alt="burning biochar" />
      <p>Everything</p>
      <ul className="parent">
        <li>It Provides Clean Energy (biofuel & syngas). </li>
        <li>It Sequesters C02.</li>
        <li>It Boosts Soil Quality.</li>
        <li>It is Carbon Negative.</li>
        <li>Companies can use biochar for carbon credits.</li>
      </ul>
    </div>
  );
}
