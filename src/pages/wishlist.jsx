import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import { useAuthValue } from "../components/AuthContext";
import "../styles/wishlist.sass";
import { deleteItemById, readAllItems } from "../utils/firestoreItems";

export default function Wishlist() {
  const { currentUser } = useAuthValue();

  const [allWishes, setAllWishes] = useState([]);
  const [reloading, setReloading] = useState(false);

  let collectionName = currentUser.email.split("@")[0] + "List";

  useEffect(() => {
    const getStarted = async () => {
      let items = await readAllItems(collectionName);
      setAllWishes(items);
    };
    getStarted();
  }, [reloading]);

  const handleDelete = async (id) => {
    await deleteItemById(collectionName, id);
    setReloading(!reloading);
  };

  return (
    currentUser && (
      <Layout>
        <SubHeader />
        <div className="wishlist">
          <h2>User's Wishlist</h2>
          <div className="wishlist-items">
            {allWishes &&
              allWishes.map((wish, idx) => {
                return (
                  <>
                    <img src="/images/temp.png" alt="..." />
                    <div key={idx}>
                      <p>
                        {wish[0].name} - ${wish[0].price}
                      </p>
                      <em
                        onClick={() => {
                          handleDelete(wish[0].id);
                        }}>
                        X
                      </em>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </Layout>
    )
  );
}
