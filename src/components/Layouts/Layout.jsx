import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, itemsAdded, cartName }) {
  useEffect(() => {}, [itemsAdded]);
  return (
    <>
      <Header cartContent={cartCount} />
      <div>{children}</div>
      <Footer>Copyright 2022 Bushido Shop</Footer>
    </>
  );
}
