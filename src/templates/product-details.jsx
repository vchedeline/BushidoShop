import { graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import Review from "../components/Review";
import ReviewForm from "../components/ReviewForm";
import { useAuthValue } from "../components/AuthContext";
import "../styles/product-details.sass";
import { readAllItems } from "../utils/firestoreItems";

export default function ProductDetails({ data }) {
  const { name, desc, price } = data.sanityProduct;
  const slug = data.sanityProduct.slug.current;
  const { currentUser } = useAuthValue() || null;
  const [showReview, setShowReview] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);

  const getStarted = async () => {
    let items = await readAllItems("review");
    setAllReviews(items);
    console.log(items);
  };

  useEffect(() => {
    getStarted();
  }, [reloadPage]);

  return (
    <Layout>
      <SubHeader />
      <div>
        <h2>{name}</h2>
        <div className="details">
          <div id="left">
            <img src="/images/temp.png" alt="..." />
            <button>Add To Wishlist</button>
            <button>Add To Cart</button>
          </div>
          <div id="right">
            <p>"{desc}"</p>
            <p>Price: ${price}</p>
            <button
              className={showReview ? "no-show" : null}
              onClick={() => setShowReview(true)}>
              Rewiew Product
            </button>
          </div>
        </div>
        <div className={showReview ? "no-show" : "review-group"}>
          {allReviews.map((review, idx) => {
            return (
              <Review
                rating={review[0].rating}
                comment={review[0].comment}
                user={review[0].user}
                id={review[0].id}
                setReloadPage={setReloadPage}
                reloadPage={reloadPage}
                key={idx}
              />
            );
          })}
        </div>
        <div className={showReview ? null : "no-show"}>
          {currentUser && (
            <ReviewForm
              user={currentUser.email}
              slug={slug}
              setShowReview={setShowReview}
              setReloadPage={setReloadPage}
              reloadPage={reloadPage}
            />
          )}
        </div>
      </div>
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
