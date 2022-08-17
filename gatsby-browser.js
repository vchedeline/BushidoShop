import React from "react";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";

import AuthProvider from "../bushido-shop/src/utils/AuthContext";

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
);
