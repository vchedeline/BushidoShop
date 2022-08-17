import React from "react";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";
import Loading from "../components/Loading";

export default function Cart({ email }) {
  const loaded = () => {
    return <div>Yay!</div>;
  };
  return (
    <Layout>
      <SubHeader />
      <div className="cart">
        <h2>User's Cart</h2>
        {email ? loaded() : <Loading />}
      </div>
    </Layout>
  );
}
