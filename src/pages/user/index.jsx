import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "../../components/PrivateRoute";
import Profile from "../../routes/Profile";
import Wishlist from "../../routes/Wishlist";
import Cart from "../../routes/Cart";
import Login from "../../routes/Login";
import Register from "../../routes/Register";
import Reset from "../../routes/Reset";
import { useAuthValue } from "../../utils/AuthContext";
import "../../styles/user.sass";

export default function User() {
  useAuthValue();
  const { currentUser } = useAuthValue();
  let email = "";
  if (currentUser !== null) email = currentUser.email;

  return (
    <Router>
      <PrivateRoute path="/user/profile" component={Profile} />
      <PrivateRoute path="/user/wishlist" component={Wishlist} email={email} />
      <PrivateRoute path="/user/cart" component={Cart} email={email} />
      <Login path="/user/login" />
      <Register path="/user/register" />
      <Reset path="/user/reset" />
    </Router>
  );
}
