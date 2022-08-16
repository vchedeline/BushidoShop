import React from "react";
import { useAuthValue } from "./AuthContext";
import Layout from "./Layout";
import Loading from "./Loading";
import SubHeader from "./SubHeader";

export default function Cart() {
  const { currentUser } = useAuthValue();
  const loaded = () => {
    console.log("Checkout Page");
  };
  return (
    <Layout>
      <SubHeader />
      <div className="cart">
        <h2>User's Cart</h2>
        {currentUser == null ? <Loading /> : loaded()}
      </div>
    </Layout>
  );
}
