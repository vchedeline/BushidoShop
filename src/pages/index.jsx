import React from "react";
import Layout from "../components/Layouts/Layout";
import Wave from "../components/Wave";
import FeaturedCard from "../components/FeaturedCard";
import "../styles/global.sass";
import { graphql } from "gatsby";

export default function Index({ data }) {
  const featured = data.featured.nodes;

  return (
    <Layout>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            The Way <br />
            of The Warrior
          </h1>
        </div>
        <Wave />
      </div>
      <div className="Featured">
        <h2>Featured Merchandise</h2>
        <div className="FeaturedGroup">
          {featured.map((product, idx) => {
            return (
              <FeaturedCard
                name={product.name}
                price={product.price}
                img={product.img.asset.gatsbyImageData}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query FeaturedQuery {
    featured: allSanityProduct(limit: 3) {
      nodes {
        price
        name
        img {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
