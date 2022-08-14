import React from "react";
import { deleteItemById } from "../utils/firestoreItems";
import "../styles/product-details.sass";

export default function Review({
  rating,
  comment,
  user,
  id,
  setReloadPage,
  reloadPage,
}) {
  const handleDelete = async () => {
    await deleteItemById("review", id);
    console.log("clicked");
    setReloadPage(!reloadPage);
  };

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
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
