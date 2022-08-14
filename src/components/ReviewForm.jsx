import React, { useState } from "react";
import { createItem } from "../utils/firestoreItems";

export default function ReviewForm({
  user,
  slug,
  name,
  setShowReview,
  setReloadPage,
  reloadPage,
}) {
  const STARS = [
    [1, "⭐"],
    [2, "⭐⭐"],
    [3, "⭐⭐⭐"],
    [4, "⭐⭐⭐⭐"],
    [5, "⭐⭐⭐⭐⭐"],
  ];
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
    <div classname="review-form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Reviewing {name}</legend>
          <label>Rating</label>
          <input name="rating" list="stars" />
          <datalist id="stars">
            <option value="⭐" />
            <option value="⭐⭐" />
            <option value="⭐⭐⭐" />
            <option value="⭐⭐⭐⭐" />
            <option value="⭐⭐⭐⭐⭐" />
          </datalist>
          <label for="ucomment">Review</label>
          <textarea
            name="comment"
            id="ucomment"
            rows="3"
            type="text"
            onChange={handleChange}
          />
          <button type="submit">Submit Review</button>
          <em onClick={() => setShowReview(false)}>Cancel</em>
        </fieldset>
      </form>
    </div>
  );
}
