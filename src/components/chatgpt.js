
import React from "react";
import chatgptphoto from "../ai.jpeg";

export default function chatgpt() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>What does chat GPT know about biochar?</h1>
      <img src={chatgptphoto} className="photos" alt="burning biochar" />
      <p>It knows a thing or two! </p>
      <ul className="parent">
        <li>see the chat I had with it.</li>
        <a href="https://chat.openai.com/share/547c9009-6ad8-4f65-9ddf-c65b4610c7c4">
          https://chat.openai.com/share/547c9009-6ad8-4f65-9ddf-c65b4610c7c4
        </a>
      </ul>
    </div>
  );
}
