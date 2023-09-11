import React from "react";
import soil from "../soil.jpeg";


export default function whatisbiochar() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Why is biochar good for soil?</h1>
      <img src={soil} className="photos" alt="burning biochar" />

      <p>Lots of reasons!</p>
      <ul className="parent">
        <li>
          It has a huge surface area which means it can hold a lot of stuff!
        </li>
        <li>It can retain water to prohibit runoff and drought</li>
        <li>
          It has a negative charge which means it attracts postively charged
          nutrients like carbon, potassium and magnesium!{" "}
        </li>
        <li>
          {" "}
          ??? Do the spongebob meme and tie in youtube videos for the generator
          and the science guy, benefits like texas grid etc, sustainable and
          can't be downloaded grass roots "like literally"
        </li>
      </ul>
    </div>
  );
}
