import React from "react";
import "./About.css";

export default () => {
  return (
    <div className="about-container">
      <h3>
        About <span>r/space</span>
      </h3>
      <p>Share & discuss Informative content on:</p>
      <ul>
        {spaceContents.map((content, i) => (
          <li key={i}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

const spaceContents = [
  "astrophsics",
  "cosmology",
  "space exploration",
  "planetary science",
  "astrobiology",
];
