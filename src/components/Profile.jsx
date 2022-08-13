import React from "react";
import Layout from "./Layout";
import { useAuthValue } from "./AuthContext";
import SubHeader from "./SubHeader";

export default function Profile() {
  const { currentUser } = useAuthValue();

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
