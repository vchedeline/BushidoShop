import * as React from "react";
import { Link, navigate } from "gatsby";
import { useAuthValue } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import "../styles/header.sass";

export default function Detail() {
  const { currentUser } = useAuthValue();
  let details;
  if (!currentUser) {
    details = (
      <div>
        <Link to="/user/login">
          <button>Login</button>
        </Link>
      </div>
    );
  } else {
    details = (
      <>
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/user/checkout">Checkout</Link>
          <a
            href=""
            onClick={(evt) => {
              evt.preventDefault();
              signOut(auth);
              navigate("/user/login");
            }}>
            Logout
          </a>
        </div>
      </>
    );
  }

  return <div>{details}</div>;
}
