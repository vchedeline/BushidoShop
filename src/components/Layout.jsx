import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, cartCount }) {
  let cartContent = 0;
  if (cartCount) cartContent += cartCount;
  return (
    <>
      <Header cartContent={cartContent} />
      <div>{children}</div>
      <Footer>Copyright 2022 Bushido Shop</Footer>
    </>
  );
}
