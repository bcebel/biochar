import React from "react";
import lab from "../lab.jpeg";

export default function howisitmade() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>How is it made?</h1>
      <img src={lab} className="photos" alt="burning biochar" />

      <p>A Process called Pyrolysis!</p>
      <ul className="parent">
        <li>
          Pyrolysis is the process of heating up wood in the absence of oxygen
        </li>
        <li>This will drive out the hydrogen and oxygen that is in the wood</li>
        <li>It will leave carbon in the shape of the wood that was used</li>
        <li>The cellular structure will remain but it will be empty cells</li>
        <li>The hydrogen and oxygen can be used as a biofuel source later</li>
      </ul>
    </div>
  );
}
