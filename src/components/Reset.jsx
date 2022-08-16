import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { auth } from "../utils/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Layout from "./Layout";
import SubHeader from "./SubHeader";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      navigate(`/user/login`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <SubHeader />
      <div className="head">
        <img src="/images/profile.png" alt="..." />
        <h2>enter e-mail to reset</h2>
      </div>
      <div className="reset">
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            className="icon-email"
            type="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button>Forgot Password</button>
          <div style={{ alignItems: "center", marginTop: "2em" }}>
            Already have an account? <Link to="/app/login">Login</Link> now.
          </div>
          <div style={{ alignItems: "center", margin: "1em 0px 1em 0px" }}>
            Don't have an account? <Link to="/app/register">Register</Link> now.
          </div>
        </form>
      </div>
    </Layout>
  );
}
