import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import "../styles/product-details.sass";

export default function ProductDetails({ data }) {
  const { name, desc, price } = data.sanityProduct;

  return (
    <Layout>
      <SubHeader />
      <div>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <div className="details">
          <img src="/images/temp.png" alt="..." />
          <div className="side-details">
            <p>{desc}</p>
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

export const query = graphql`
  query MyProductDetails($slug: String) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      desc
      name
      price
    }
  }
`;
