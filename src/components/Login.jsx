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
      <div>
        <div>
          {error && <div>{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button>Login</button>
          </form>
          <div>
            <Link to="/app/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/app/register">Register</Link> now.
          </div>
        </div>
      </div>
    </Layout>
  );
}
