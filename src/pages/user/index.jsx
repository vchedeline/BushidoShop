import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "../../components/PrivateRoute";
import Wishlist from "../../routes/Wishlist";
import Login from "../../routes/Login";
import Register from "../../routes/Register";
import Reset from "../../routes/Reset";
import { useAuthValue } from "../../utils/AuthContext";

export default function User() {
  useAuthValue();
  const { currentUser } = useAuthValue();
  let email = "";
  if (currentUser !== null) email = currentUser.email;

  return (
    <Router>
      <PrivateRoute path="/user/profile" component={Profile} />
      <PrivateRoute path="/user/wishlist" component={Wishlist} email={email} />
      <Login path="/user/login" />
      <Register path="/user/register" />
      <Reset path="/user/reset" />
    </Router>
  );
}
