import React, { useState } from "react";
import { createItem } from "../utils/firestoreItems";

export default function ReviewForm({
  user,
  slug,
  setShowReview,
  setReloadPage,
  reloadPage,
}) {
  const [newReview, setNewReview] = useState({
    user: user,
    slug: slug,
    rating: "",
    comment: "",
  });

  const handleChange = (evt) => {
    setNewReview({
      ...newReview,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createItem("review", newReview);
    setNewReview({
      user: "",
      slug: "",
      rating: "",
      comment: "",
    });
    setShowReview(false);
    setReloadPage(!reloadPage);
  };

  return (
    <div>
      <h1>Review Item</h1>
      <form onSubmit={handleSubmit}>
        <input name="rating" type="number" onChange={handleChange} />
        <input name="comment" type="text" onChange={handleChange} />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
