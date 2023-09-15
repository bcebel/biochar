import React from "react";
import ash from "../ashtray.jpeg";


export default function whycantiburnit() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Why can't I just burn the wood?</h1>
      <img src={ash} className="photos" alt="burning biochar" />

      <p>
        Because burning it would use up the carbon and put it into the
        atmosphere and leave you with just ash.
      </p>
      <ul className="parent">
        <li>
          Regular burning of biomass releases CO2 into the atmosphere! (not
          good)
        </li>
        <li>
          Even if you don't burn the biomass, microbes will digest it and
          release C02 into the air, its the same as burning.
        </li>
      </ul>
    </div>
  );
}
