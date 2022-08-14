import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import { getItems, readAllItems } from "../utils/firestoreItems";

export default function Wishlist() {
  const [allItems, setAllItems] = useState([]);

  // useEffect(() => {
  //   getItems();
  // }, []);

  // setAllItems(readAllItems());
  // console.log(allItems);
  return (
    <Layout>
      <SubHeader />
      <h2>My Wishlist</h2>
      {/* {allItems.map((item) => (
        <div>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))} */}
    </Layout>
  );
}
