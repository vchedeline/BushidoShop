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
  const [newReview, setNewReview] = useState({
    user: user,
    slug: slug,
    rating: "",
    comment: "",
  });

  // const STARS = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  const handleChange = (evt) => {
    setNewReview({
      ...newReview,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let tempRating = evt;
    console.log(tempRating);
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
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Reviewing {name}</legend>
          <label htmlFor="urates">
            Rating
            <input name="rating" id="urates" list="stars" />
            <datalist id="stars">
              <option value="1" aria-label="1 star" />
              <option value="2" aria-label="2 star" />
              <option value="3" aria-label="3 star" />
              <option value="4" aria-label="4 star" />
              <option value="5" aria-label="5 star" />
            </datalist>
          </label>
          <label htmlFor="ucomment">
            Comment
            <textarea
              name="comment"
              id="ucomment"
              rows="7"
              type="text"
              onChange={handleChange}
            />
          </label>
          <div>
            <button id="first-btn" type="submit">
              Submit Review
            </button>
            <button id="second-btn" onClick={() => setShowReview(false)}>
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
