import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "./Layout";
import SubHeader from "./SubHeader";
import Loading from "./Loading";
import { useAuthValue } from "./AuthContext";
import "../styles/wishlist.sass";
import { deleteItemById, readAllItems } from "../utils/firestoreItems";

export default function Wishlist() {
  const { currentUser } = useAuthValue();
  const [allWishes, setAllWishes] = useState([]);
  let collectionName;

  const getStarted = async () => {
    collectionName = currentUser.email.split("@")[0] + "List";
    let items = await readAllItems(collectionName);
    setAllWishes(items);
  };

  const handleDelete = async (id) => {
    await deleteItemById(collectionName, id);
  };

  const loaded = () => {
    getStarted();
    return (
      <div className="wishlist-items">
        {allWishes &&
          allWishes.map((wish, idx) => {
            return (
              <div key={idx}>
                <img src="/images/temp.png" alt="..." />
                <div>
                  <p>
                    <Link to={"/products/" + wish[0].slug}>{wish[0].name}</Link>
                    - ${wish[0].price}
                  </p>
                  <em
                    onClick={() => {
                      handleDelete(wish[0].id);
                    }}>
                    X
                  </em>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <Layout>
      <SubHeader />
      <div className="wishlist">
        <h2>User's Wishlist</h2>
        {currentUser == null ? <Loading /> : loaded()}
      </div>
    </Layout>
  );
}
