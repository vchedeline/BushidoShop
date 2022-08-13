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
        <Link to="/app/login">
          <button>Login</button>
        </Link>
      </div>
    );
  } else {
    details = (
      <>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          <a
            onClick={(evt) => {
              evt.preventDefault();
              signOut(auth);
              navigate("/app/login");
            }}>
            Logout
          </a>
        </div>
      </>
    );
  }

  return <div>{details}</div>;
}
