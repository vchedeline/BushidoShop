import React from "react";
import Layout from "./Layout";
import { useAuthValue } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import SubHeader from "./SubHeader";

export default function Profile() {
  const { currentUser } = useAuthValue();

  return (
    <Layout>
      <SubHeader />
      <p>Welcome back to your profile, {currentUser.email}!</p>
      <p>
        This is a client-only route. You could set up a form to save information
        about a user here.
      </p>
      <span onClick={() => signOut(auth)}>Sign Out</span>
    </Layout>
  );
}
