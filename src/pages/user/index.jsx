import React from "react";
import { Router } from "@reach/router";
import Profile from "../../components/Profile";
import Wishlist from "../../components/Wishlist";
import PrivateRoute from "../../components/PrivateRoute";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Reset from "../../components/Reset";
import "../../styles/app.sass";

export default function App() {
  return (
    <Router>
      <PrivateRoute path="/user/profile" component={Profile} />
      <PrivateRoute path="/user/wishlist" component={Wishlist} />
      <Login path="/user/login" />
      <Register path="/user/register" />
      <Reset path="/user/reset" />
    </Router>
  );
}
