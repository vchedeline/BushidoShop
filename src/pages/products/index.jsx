import { graphql, Link } from "gatsby";
import React from "react";
import ProductCard from "../../components/ProductCard";
import Layout from "../../components/Layouts/Layout";
import SubHeader from "../../components/Layouts/SubHeader";
import "../../styles/product.sass";

export default function Products({ data }) {
  const products = data.products.nodes;

  return (
    <Layout>
      <SubHeader />
      <div className="products">
        <h2>Products List</h2>
        <div className="product-list">
          {products.map((product) => (
            <Link to={"/products/" + product.slug.current} key={product.id}>
              <ProductCard
                name={product.name}
                price={product.price}
                img={product.img.asset.gatsbyImageData}
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
        price
        name
        id
        img {
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
      }
    }
  }
`;
