import React from "react";
import "../styles/card.sass";

export default function Card() {
  return (
    <div className="Card">
      <img src="/images/temp.png" />
      <h3>Title</h3>
      <p>Price</p>
    </div>
  );
}
