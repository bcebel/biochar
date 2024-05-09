import React from "react";
import soil from "../bag.jpg";

export default function products() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Want to try some in the garden?</h1>

      <p>This bag will set you back $55</p>
      <ul className="parent">
        <li>
          <a href="https://www.amazon.com/Horticultural-Charcoal-Improves-Amendment-Fertilizer/dp/B0B4F68XNH/ref=sr_1_1_sspa?crid=3PH8RN9A0YNH7&dib=eyJ2IjoiMSJ9.Q2C7p3cDCpOGeUiyu_G2NY6h-Fmm_PJoYFopE3QLbiAAeBuIn6yS_W1xMDlKZBplV4rjogu0SQPvaUd1M32CTjIp3JnestFoZNU_RJXTa3pw-vUJhRdfmVsu-rnYalNFGzKUkurU5GCieyxWWOOpcuRnu9WO2INt--VsAVxCt-G-k4TEP3go8ZVz58FSnNalt5xTppDkduC2XHwQavewKcElpIeFvdJGuO-xfhOr2fxJ22Ag0t5bwTD7ecjS1r1itTZP4TZptZvFeZhbRiIAtV9jcUQU62VFJhLZK3hyx3w.kQmkVpjxml0_LSayUIk6wRTr4dA5E4YD7SqQSBtCNJI&dib_tag=se&keywords=biochar&qid=1715215405&sprefix=biochar%2Caps%2C139&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" target="_blank">
            <img src={soil} className="photos" alt="bag of biochar" />

          </a>
        </li>
      </ul>
    </div>
  );
}
