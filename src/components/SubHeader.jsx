import React from "react";
import Wave from "./Wave";
import { Link } from "gatsby";

export default function SubHeader() {
  return (
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Big Header <br />
          Title with More
        </h1>
        <p>This is a long paragraph with a lot of text</p>
        <Link to="/">Get Started</Link>
      </div>
      <Wave />
    </div>
  );
}
