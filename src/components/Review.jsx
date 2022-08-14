import React, { useState } from "react";
import { deleteItemById, updateItem } from "../utils/firestoreItems";
import "../styles/product-details.sass";
import { useAuthValue } from "./AuthContext";

export default function Review({
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
    console.log("clicked");
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
      <input name="rating" list="stars" />
      <datalist id="stars">
        <option value="⭐" />
        <option value="⭐⭐" />
        <option value="⭐⭐⭐" />
        <option value="⭐⭐⭐⭐" />
        <option value="⭐⭐⭐⭐⭐" />
      </datalist>
      <textarea
        name="comment"
        id="ucomment"
        value={editReview.comment}
        rows="3"
        type="text"
        onChange={handleChange}
      />
      <div id="edit-btn">
        <button type="submit">Update Review</button>
        <em onClick={() => setEditComment(false)}>Cancel</em>
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
        <img src="/images/temp.png" alt="..." />
      </div>
      <div>
        <h3>{user}</h3>
        {editComment ? editing() : notEditing()}
      </div>
    </div>
  );
}
