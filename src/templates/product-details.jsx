import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";
import Loading from "../components/Loading";
import ReviewForm from "../components/ReviewForm";
import UserReviewCard from "../components/UserReviewCard";
import { useAuthValue } from "../utils/AuthContext";
import { createItem, readItemsBy } from "../utils/firestoreItems";
import "../styles/product-details.sass";

export default function ProductDetails({ data }) {
  const { name, desc, price } = data.sanityProduct;
  const slug = data.sanityProduct.slug.current;
  const { currentUser } = useAuthValue();
  const [showReview, setShowReview] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const [showWishBtn, setShowWishBtn] = useState(true);
  const [itemsAdded, setItemsAdded] = useState(false);

  const addToCart = async () => {
    console.log("product-details page");
    let cartCollectionName = currentUser.email.split("@")[0] + "Cart";
    let cartItem = {
      name: name,
      price: price,
      slug: slug,
    };
    await createItem(cartCollectionName, cartItem);
    setItemsAdded(!itemsAdded);
  };

  const addWish = async () => {
    let collectionName = currentUser.email.split("@")[0] + "List";
    let items = "";
    items = await readItemsBy(collectionName, "name", name);
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
        <button className={showReview ? "no-show" : null} onClick={addToCart}>
          Add To Cart
        </button>
        <button
          id="review-btn"
          className={showReview ? "no-show" : null}
          onClick={() => setShowReview(true)}>
          Review Product
        </button>
      </div>
    </>
  );

  const loaded = () => {
    return (
      <div>
        <div className="details">
          <div id="left">
            <img src="/images/temp.png" alt="..." />
            {showWishBtn ? (
              <button id="add-wish-btn" onClick={addWish}>
                + wishlist
              </button>
            ) : (
              <button id="add-wish-btn">Added to WishList!</button>
            )}
          </div>
          <div id="right">{showReview ? showForm() : regularDisplay()}</div>
        </div>
        <div className="review-group">
          {allReviews.map((review, idx) => {
            return (
              <UserReviewCard
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
  }, [reloadPage, slug]);

  return (
    <Layout itemsAdded={itemsAdded}>
      <SubHeader />
      {currentUser ? loaded() : <Loading />}
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
