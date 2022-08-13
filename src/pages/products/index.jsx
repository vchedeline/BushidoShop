import React from "react";
import CardIdx from "../../components/CardIdx";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import "../../styles/product.sass";

export default function Index() {
  return (
    <Layout>
      <SubHeader />
      <div className="portfolio">
        <h2>Products List</h2>
        <h3>Website Products</h3>
        <div className="projects">
          <CardIdx />
          <CardIdx />
          <CardIdx />
          <CardIdx />
          <CardIdx />
          <CardIdx />
        </div>
      </div>
    </Layout>
  );
}
