import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";
import Loading from "../components/Loading";
import "../styles/wishlist.sass";
import {
  createItem,
  deleteItemById,
  readAllItems,
} from "../utils/firestoreItems";

export default function Wishlist({ email }) {
  const [allWishes, setAllWishes] = useState([]);
  const [reloadWishPage, setReloadWishPage] = useState(false);
  const [listName, setListName] = useState("");

  const handleDelete = async (id) => {
    await deleteItemById(listName, id);
    setReloadWishPage(!reloadWishPage);
  };

  const addToCart = async (item) => {
    console.log("Wish added to Cart" + item);
    let cartCollectionName = email.split("@")[0] + "Cart";
    console.log(cartCollectionName);
    let cartItem = {
      name: item[0].name,
      price: item[0].price,
      slug: item[0].slug,
    };
    await createItem(cartCollectionName, cartItem);
  };

  const loaded = () => {
    return (
      <>
        {allWishes.length > 0 ? (
          <div className="wishlist-items">
            {allWishes.map((wish, idx) => {
              return (
                <div className="wishlist-card" key={idx}>
                  <img src="/images/temp.png" alt="..." />
                  <div>
                    <h4>
                      <Link to={"/products/" + wish[0].slug}>
                        {wish[0].name}
                      </Link>
                    </h4>
                    <h6>In Stock</h6>
                    <button
                      onClick={() => {
                        addToCart(wish);
                      }}>
                      Add to Cart
                    </button>
                    <button
                      style={{ fontStyle: "italic" }}
                      onClick={() => {
                        handleDelete(wish[0].id);
                      }}>
                      Remove from List
                    </button>
                  </div>
                  <div>
                    <p>
                      <b>${wish[0].price} </b>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-wish">
            <img src="/images/shopping_bag.png" alt="shopping_bag" />
            <h5>
              Uh-Oh! Your wishlist is empty...
              <Link to="/products">Make a Wish!</Link>
            </h5>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    const getStarted = async () => {
      let collectionName = email.split("@")[0] + "List";
      let items = await readAllItems(collectionName);
      setAllWishes(items);
      setListName(collectionName);
    };

    getStarted();
  }, [reloadWishPage, email]);

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
