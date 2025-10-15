import React, { useState } from "react";
import { generateSmartPassword } from "./PasswordGenerator";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const newPassword = generateSmartPassword();
    setPassword(newPassword);
  };

  return (
    <div className="login-container">
      <h1 className="title">
        <span className="level">Level</span>
        <span className="up">Up</span>
        <span className="well">Well</span>
      </h1>
      <p className="subtitle">Level up your health with a little buddy</p>

      <label>USERNAME OR EMAIL</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <label>PASSWORD</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <button onClick={handleGeneratePassword} className="generate-btn">
        Generate Password 🔐
      </button>

      <p className="forgot-password">FORGOT PASSWORD</p>

      <button className="signup-btn">SIGN UP</button>
      <button className="signin-btn">SIGN IN</button>
    </div>
  );
}
