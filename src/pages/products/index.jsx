import { graphql, Link } from "gatsby";
import React from "react";
import CardIdx from "../../components/CardIdx";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import "../../styles/product.sass";

export default function Index({ data }) {
  const products = data.products.nodes;

  return (
    <Layout>
      <SubHeader />
      <div className="products">
        <h2>Products List</h2>
        <h3>Website Products</h3>
        <div className="product-list">
          {products.map((product) => (
            <Link to={"/products/" + product.slug.current} key={product.id}>
              <CardIdx
                name={product.name}
                price={product.price}
                desc={product.desc}
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query AllProducts {
    products: allSanityProduct {
      nodes {
        slug {
          current
        }
        desc
        name
        price
        id
      }
    }
  }
`;
