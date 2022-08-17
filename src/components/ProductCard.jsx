import React from "react";

export default function ProductCard({ name, price, desc }) {
  return (
    <div className="product-card">
      <img src="/images/temp.png" alt={name} />
      <div className="product-info">
        <h3>
          {name}
          <span> - ${price}</span>
        </h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
