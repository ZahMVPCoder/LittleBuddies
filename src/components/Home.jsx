// Import React library
import React from "react";

// Home component receives onNavigate function from App
export default function Home({ onNavigate }) {
  return (
    // Container for page content
    <div className="container">
      {/* Logo text */}
      <h1 className="logo">
        Level<span className="up">Up</span>Well
      </h1>
      {/* Tagline under logo */}
      <p className="tagline">Level up your health with a little buddy</p>

      {/* Login form */}
      <form className="form">
        {/* Username/Email input */}
        <input type="text" placeholder="Username or Email" />
        {/* Password input */}
        <input type="password" placeholder="Password" />
        {/* Forgot password link */}zz
        <a href="#" className="forgot">Forgot Password?</a>
      </form>

      {/* Buttons group (Sign Up & Sign In) */}
      <div className="button-group">
        {/* Navigate to character selection on click */}
        <button className="btn blue" onClick={() => onNavigate("character")}>
          SIGN UP
        </button>
        <button className="btn red" onClick={() => onNavigate("character")}>
          SIGN IN
        </button>
      </div>
    </div>
  );
}
