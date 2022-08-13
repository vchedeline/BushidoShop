import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Wave from "../components/Wave";
import "../styles/global.sass";

export default function Index() {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
}
