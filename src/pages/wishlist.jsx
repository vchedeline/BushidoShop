import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import { useAuthValue } from "../components/AuthContext";
import "../styles/wishlist.sass";
import { deleteItemById, readAllItems } from "../utils/firestoreItems";

export default function Wishlist() {
  const { currentUser } = useAuthValue();
  const [allWishes, setAllWishes] = useState([]);
  const [reloading, setReloading] = useState(false);
  let collectionName;

  const getStarted = async () => {
    collectionName = currentUser.email.split("@")[0] + "List";
    let items = await readAllItems(collectionName);
    setAllWishes(items);
  };

  const loading = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/images/loading.gif" alt="loading..." />
      </div>
    );
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

  const handleDelete = async (id) => {
    await deleteItemById(collectionName, id);
    setReloading(!reloading);
  };

  return (
    <Layout>
      <SubHeader />
      <div className="wishlist">
        <h2>User's Wishlist</h2>
        {currentUser == null ? loading() : loaded()}
      </div>
    </Layout>
  );
}
