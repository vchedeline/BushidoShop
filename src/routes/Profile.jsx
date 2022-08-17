import React from "react";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";

export default function Profile() {
  return (
    <Layout>
      <SubHeader />
      <p>Welcome back to your profile!</p>
      <p>
        This is a client-only route. You could set up a form to save information
        about a user here.
      </p>
    </Layout>
  );
}
