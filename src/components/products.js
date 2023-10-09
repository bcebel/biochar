import React from "react";
import soil from "../humichar.jpg";

export default function products() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Want to try some in the garden?</h1>
      <img src={soil} className="photos" alt="burning biochar" />

      <p>This one is 50/50 Humic Acid and Biochar, click below</p>
      <ul className="parent">
        <li>
          <iframe title="amazon"
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
      
            marginwidth="0"x
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mnnws-20&language=en_US&marketplace=amazon&region=US&placement=B08ZBGQNJ7&asins=B08ZBGQNJ7&linkId=8a70de4db56a1621e140a9d6cca2db1b&show_border=true&link_opens_in_new_window=true"
          ></iframe>
        </li>

      </ul>
    </div>
  );
}
