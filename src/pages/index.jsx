import React from "react";
import Layout from "../components/Layouts/Layout";
import Wave from "../components/Wave";
import FeaturedCard from "../components/FeaturedCard";
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
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </Layout>
  );
}
