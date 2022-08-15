import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { auth } from "../utils/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Layout from "./Layout";
import SubHeader from "./SubHeader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(`/`);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Layout>
      <SubHeader />
      <div className="head">
        <img src="/images/profile.png" alt="..." />
        <h2>login to continue</h2>
      </div>
      <div className="login">
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            className="icon-email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            className="icon-lock"
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Link to="/app/reset">Forgot Password?</Link>
          <div style={{ alignItems: "center", marginTop: "2em" }}>
            <button>Sign In</button>
            <p style={{ textAlign: "center" }}>or</p>
            <p style={{ textAlign: "center" }}>
              <Link to="/app/register">Register now</Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
