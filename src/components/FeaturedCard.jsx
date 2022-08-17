import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "../styles/card.sass";

export default function FeaturedCard({ name, price, img }) {
  return (
    <div className="Card">
      <GatsbyImage image={img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}
