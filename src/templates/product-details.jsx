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

  useEffect(() => {
    getStarted();
  }, [reloadPage]);

  return (
    <Layout>
      <SubHeader />
      <div>
        <div className="details">
          <div id="left">
            <img src="/images/temp.png" alt="..." />
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
