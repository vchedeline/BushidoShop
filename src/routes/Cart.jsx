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
import { GatsbyImage } from "gatsby-plugin-image";

export default function Cart({ email }) {
  const [allCartItems, setAllCartItems] = useState([]);
  const [reloadCartPage, setReloadCartPage] = useState(false);
  const [cartName, setCartName] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  const handleDelete = async (id) => {
    console.log(cartName);
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
        {cartTotal > 0 ? (
          <div className="cart-items">
            <div className="cart-left">{allCartItems}</div>
            <div className="cart-right">
              <div>
                <p>
                  Subtotal ({allCartItems.length} items): <b>${cartTotal}</b>
                </p>
                <button onClick={handleDeleteAll}>Proceed to Checkout</button>
                {/* <button onClick={handleDeleteAll}>Clear Cart</button> */}
              </div>
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
      let total = 0;
      let collectionName = email.split("@")[0] + "Cart";
      console.log(collectionName);
      let items = await readAllItems(collectionName);
      let cartContent = items.map((item, idx) => {
        total += item[0].price;
        return (
          <div className="cart-card" key={idx}>
            <GatsbyImage image={item[0].img} />
            <div className="product-desc">
              <h4>
                <Link to={"/products/" + item[0].slug}>{item[0].name}</Link>
              </h4>
              <h6>In Stock</h6>
              <button
                onClick={() => {
                  handleDelete(item[0].id);
                }}>
                Remove from Cart
              </button>
            </div>
            <div>
              <p>
                <b>${item[0].price}</b>
              </p>
            </div>
          </div>
        );
      });
      setAllCartItems(cartContent);
      setCartTotal(total);
      setCartName(collectionName);
    };
    getStarted();
  }, [reloadCartPage]);

  return (
    <Layout>
      <SubHeader />
      <div className="cart">
        <h2>My Cart</h2>
        {email ? loaded() : <Loading />}
      </div>
    </Layout>
  );
}
