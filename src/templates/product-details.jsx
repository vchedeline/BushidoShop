import React from "react";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import "../styles/product-details.sass";

export default function ProductDetails() {
  return (
    <Layout>
      <SubHeader />
      <div>
        <h2>Title</h2>
        <h3>Sub-Header</h3>
        <div className="details">
          <img />
          <div className="side-details">
            <p>Description</p>
            <div className="detail-btns">
              <button>Add to Wishlist</button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
