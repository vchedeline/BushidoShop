import React, { useState } from "react";
import { deleteItemById, updateItem } from "../utils/firestoreItems";
import { useAuthValue } from "../utils/AuthContext";

export default function UserReviewCard({
  rating,
  comment,
  user,
  slug,
  id,
  setReloadPage,
  reloadPage,
}) {
  const { currentUser } = useAuthValue();

  const [editComment, setEditComment] = useState(false);
  const [editReview, setEditReview] = useState({
    user: user,
    slug: slug,
    rating: rating,
    comment: comment,
  });

  const handleDelete = async () => {
    await deleteItemById("review", id);
    setReloadPage(!reloadPage);
  };

  const handleChange = (evt) => {
    setEditReview({
      ...editReview,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await updateItem("review", id, editReview);
    setEditReview({
      user: "",
      slug: "",
      rating: "",
      comment: "",
    });
    setEditComment(false);
    setReloadPage(!reloadPage);
  };

  const editing = () => (
    <form id="edit-form" onSubmit={handleSubmit}>
      <label htmlFor="urate">
        <input
          name="rating"
          id="urate"
          list="stars"
          placeholder="Rate Product"
        />
        <datalist id="stars">
          <option value="⭐" aria-label="1 star" />
          <option value="⭐⭐" aria-label="2 star" />
          <option value="⭐⭐⭐" aria-label="3 star" />
          <option value="⭐⭐⭐⭐" aria-label="4 star" />
          <option value="⭐⭐⭐⭐⭐" aria-label="5 star" />
        </datalist>
      </label>
      <label htmlFor="ucomment">
        <textarea
          name="comment"
          id="ucomment"
          value={editReview.comment}
          rows="3"
          type="text"
          onChange={handleChange}
        />
      </label>
      <div id="edit-btn">
        <button id="first-btn-small" type="submit">
          Update Review
        </button>
        <button id="second-btn-small" onClick={() => setEditComment(false)}>
          Cancel
        </button>
      </div>
    </form>
  );

  const notEditing = () => (
    <>
      <p>{rating} star</p>
      <p id="comment">"{comment}"</p>
      {currentUser && user === currentUser.email ? (
        <div id="review-btns">
          <button onClick={() => setEditComment(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : null}
    </>
  );

  return (
    <div className="review">
      <div>
        <img src="/images/profile.png" alt="..." />
      </div>
      <div>
        <h3>{user}</h3>
        {editComment ? editing() : notEditing()}
      </div>
    </div>
  );
}
