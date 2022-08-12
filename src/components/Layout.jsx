import * as React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <footer>
        <p>Copyright 2022 Bushido Shop</p>
      </footer>
    </>
  );
}
