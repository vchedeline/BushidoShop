import { initializeApp } from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
};

let app, auth;

if (typeof window !== "undefined") {
  app = app || initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { auth, onAuthStateChanged };
