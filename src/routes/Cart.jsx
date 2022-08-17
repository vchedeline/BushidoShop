import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";
import Loading from "../components/Loading";
import {
  deleteAllDocs,
  deleteItemById,
  readAllItems,
} from "../utils/firestoreItems";
import "../styles/cart.sass";

export default function Cart({ email }) {
  const [allCartItems, setAllCartItems] = useState([]);
  const [reloadCartPage, setReloadCartPage] = useState(false);
  const [cartName, setCartName] = useState("");
  let total = 0;

  const handleDelete = async (id) => {
    await deleteItemById(cartName, id);
    setReloadCartPage(!reloadCartPage);
  };

  const handleDeleteAll = async () => {
    await deleteAllDocs(cartName);
    setReloadCartPage(!reloadCartPage);
  };

  const loaded = () => {
    return (
      <>
        <div className="cart-items">
          {allCartItems.map((item, idx) => {
            total += item[0].price;
            return (
              <div key={idx}>
                <img src="/images/temp.png" alt="..." />
                <div>
                  <p>
                    <Link to={"/products/" + item[0].slug}>{item[0].name}</Link>{" "}
                    - ${item[0].price}
                  </p>
                  <button
                    onClick={() => {
                      handleDelete(item[0].id);
                    }}>
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {total > 0 ? (
          <div>
            <div>
              <p>Total: </p>
              <p>${total}</p>
            </div>
            <div>
              <button>Checkout</button>
              <button onClick={handleDeleteAll}>Clear Cart</button>
            </div>
          </div>
        ) : (
          <div id="empty-cart">
            <img src="/images/cart.gif" alt="empty" />
            <h5>
              Looks like your cart is empty...
              <Link to="/products">Keep Exploring!</Link>
            </h5>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    const getStarted = async () => {
      let collectionName = email.split("@")[0] + "Cart";
      let items = await readAllItems(collectionName);
      setAllCartItems(items);
      setCartName(collectionName);
    };
    getStarted();
  }, [reloadCartPage, email]);

  return (
    <Layout>
      <SubHeader />
      <div className="cart">
        <h2>User's Cart</h2>
        {email ? loaded() : <Loading />}
      </div>
    </Layout>
  );
}
