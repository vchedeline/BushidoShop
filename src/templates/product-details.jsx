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
        <div className="details">
          <div id="left">
            <img src="/images/temp.png" alt="..." />
            <button>Add To Cart</button>
          </div>
          <div id="right">
            <p>"{desc}"</p>
            <p>Price: ${price}</p>
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
