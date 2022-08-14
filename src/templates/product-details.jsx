import { graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import Review from "../components/Review";
import ReviewForm from "../components/ReviewForm";
import { useAuthValue } from "../components/AuthContext";
import "../styles/product-details.sass";
import { createItem, readItemById, readItemsBy } from "../utils/firestoreItems";

export default function ProductDetails({ data }) {
  const { name, desc, price } = data.sanityProduct;
  const slug = data.sanityProduct.slug.current;
  const { currentUser } = useAuthValue();

  const [showReview, setShowReview] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const [showWishBtn, setShowWishBtn] = useState(true);
  const inList = async () => {
    // let item = [];
    // item = await readItemsBy(collectionName, "name", name);
    console.log(currentUser);
    if (currentUser) return false;
    else return true;
  };

  const addWish = async () => {
    let collectionName = currentUser.email.split("@")[0] + "List";
    let items = "";
    items = await readItemsBy(collectionName, "name", name);
    console.log(items);
    if (items.length > 0) setShowWishBtn(false);
    else {
      let wish = {
        name: name,
        price: price,
        slug: slug,
      };

      await createItem(collectionName, wish);
      setReloadPage(!reloadPage);
    }
  };

  const showForm = () => (
    <div className={showReview ? null : "no-show"}>
      {currentUser && (
        <ReviewForm
          user={currentUser.email}
          slug={slug}
          name={name}
          setShowReview={setShowReview}
          setReloadPage={setReloadPage}
          reloadPage={reloadPage}
        />
      )}
    </div>
  );

  const regularDisplay = () => (
    <>
      <div>
        <h2>{name}</h2>
        <p> ${price}</p>
      </div>
      <p>{desc}</p>
      <div>
        <button className={showReview ? "no-show" : null}>Add To Cart</button>
        <em
          id="review-p"
          className={showReview ? "no-show" : null}
          onClick={() => setShowReview(true)}>
          Review Product
        </em>
      </div>
    </>
  );

  const loading = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/images/loading.gif" alt="loading..." />
      </div>
    );
  };

  const loaded = () => {
    return (
      <div>
        <div className="details">
          <div id="left">
            <img src="/images/temp.png" alt="..." />
            {showWishBtn ? (
              <em onClick={addWish}>+ wishlist</em>
            ) : (
              <em>Added to WishList!</em>
            )}
          </div>
          <div id="right">{showReview ? showForm() : regularDisplay()}</div>
        </div>
        <div className="review-group">
          {allReviews.map((review, idx) => {
            return (
              <Review
                rating={review[0].rating}
                comment={review[0].comment}
                user={review[0].user}
                slug={review[0].slug}
                id={review[0].id}
                setReloadPage={setReloadPage}
                reloadPage={reloadPage}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const getStarted = async () => {
      let items = await readItemsBy("review", "slug", slug); // (collection, field, match)
      setAllReviews(items);
    };
    getStarted();
  }, [reloadPage]);

  return (
    <Layout>
      <SubHeader />
      {currentUser == null ? loading() : loaded()}
    </Layout>
  );
}

export const query = graphql`
  query MyProductDetails($slug: String) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      desc
      name
      price
      slug {
        current
      }
    }
  }
`;
