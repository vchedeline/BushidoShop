import React from "react";
import Layout from "../components/Layout";
import "../styles/global.sass";

export default function Index() {
  return (
    <Layout>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Big Header <br />
            Title with More
          </h1>
          <p>This is a long paragraph with a lot of text</p>
        </div>
      </div>
    </Layout>
  );
}
