import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";
import Loading from "../components/Loading";
import "../styles/wishlist.sass";
import { deleteItemById, readAllItems } from "../utils/firestoreItems";

export default function Wishlist({ email }) {
  const [allWishes, setAllWishes] = useState([]);
  const [reloadWishPage, setReloadWishPage] = useState(false);
  const [cartName, setCartName] = useState("");

  const handleDelete = async (id) => {
    await deleteItemById(cartName, id);
    setReloadWishPage(!reloadWishPage);
  };

  const loaded = () => {
    return (
      <div className="wishlist-items">
        {allWishes.map((wish, idx) => {
          console.log(wish[0].id);
          return (
            <div key={idx}>
              <img src="/images/temp.png" alt="..." />
              <div>
                <p>
                  <Link to={"/products/" + wish[0].slug}>{wish[0].name}</Link>-
                  ${wish[0].price}
                </p>
                <button
                  onClick={() => {
                    handleDelete(wish[0].id);
                  }}>
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    const getStarted = async () => {
      let collectionName = email.split("@")[0] + "List";
      let items = await readAllItems(collectionName);
      setAllWishes(items);
      setCartName(collectionName);
    };

    getStarted();
  }, [reloadWishPage]);

  return (
    <Layout>
      <SubHeader />
      <div className="wishlist">
        <h2>User's Wishlist</h2>
        {email ? loaded() : <Loading />}
      </div>
    </Layout>
  );
}
