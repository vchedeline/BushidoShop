import React from "react";
import "../styles/product-details.sass";

export default function Review({ rating, comment, user }) {
  return (
    <div className="review">
      <div>
        <img src="/images/temp.png" alt="..." />
      </div>
      <div>
        <h3>{user}</h3>
        <p>{rating} star</p>
        <p id="comment">"{comment}"</p>
        <div id="review-btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
