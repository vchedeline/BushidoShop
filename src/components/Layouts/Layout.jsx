import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, itemsAdded, cartName }) {
  let cartCount = 23;

  useEffect(() => {}, [itemsAdded]);
  return (
    <>
      <Header cartCount={cartCount} />
      <div>{children}</div>
      <Footer>Copyright 2022 Bushido Shop</Footer>
    </>
  );
}
