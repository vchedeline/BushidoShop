import { Link } from "gatsby";
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
            Big Header <br />
            Title with More
          </h1>
          <p>This is a long paragraph with a lot of text</p>
          <Link to="/">Get Started</Link>
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
        </div>
      </div>
    </Layout>
  );
}
