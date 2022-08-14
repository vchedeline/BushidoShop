import React from "react";
import "../styles/review.sass";

export default function Review({ rating, comment, user }) {
  return (
    <div classname="review">
      <p>Rating: {rating}</p>
      <p>
        "{comment}" - {user}
      </p>
    </div>
  );
}
