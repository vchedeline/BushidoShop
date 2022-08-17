import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getCount } from "../../utils/firestoreItems";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer>Copyright 2022 Bushido Shop</Footer>
    </>
  );
}
