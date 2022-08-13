import React from "react";
import { Router } from "@reach/router";
import Layout from "../../components/Layout";
import Profile from "../../components/Profile";
import PrivateRoute from "../../components/PrivateRoute";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Reset from "../../components/Reset";

export default function App() {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
        <Register path="/app/register" />
        <Reset path="/app/reset" />
      </Router>
    </Layout>
  );
}
