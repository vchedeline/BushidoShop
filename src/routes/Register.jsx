import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { auth } from "../utils/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      if (validatePassword()) {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate(`/`);
      }
    } catch (err) {
      setError(err.message);
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Layout>
      <SubHeader />
      <div className="head">
        <img src="/images/profile.png" alt="..." />
        <h2>register to continue</h2>
      </div>
      <div className="register">
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
          <input
            className="icon-lock"
            type="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            className="icon-lock"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />

          <Link to="/user/reset">Forgot Password?</Link>
          <div style={{ alignItems: "center", marginTop: "2em" }}>
            <button>Register</button>
            <p style={{ textAlign: "center" }}>or</p>
            <p style={{ textAlign: "center" }}>
              <Link to="/user/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
