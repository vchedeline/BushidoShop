import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useRef } from "react";

export default function ProductCard({ name, price, img }) {
  return (
    <div className="product-card">
      <GatsbyImage image={img} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}
