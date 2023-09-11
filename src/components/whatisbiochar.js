import React from "react";
import photo from "../coal2.jpeg";
import "../App.css";

export default function whatisbiochar() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">

      <h1>What is biochar?</h1>
      <img src={photo} className="photos" alt="burning biochar" />

      <p>It is the future but it is ancient</p>
      <ul className="parent">
        <li>It is similar to charcoal</li>
        <li>It can be made from any organic compound</li>
        <li>
          It was used in the Amazon to make fertile soil thousands of years ago
        </li>
        <li>It is a great way to lock up carbon from the atmosphere</li>
      </ul>
    </div>
  );
}
