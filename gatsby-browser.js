import React from "react";
import "firebase/compat/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";

import AuthProvider from "./src/components/AuthContext";

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
);
