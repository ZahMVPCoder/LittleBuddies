import React, { useState } from 'react';
import '../css/LoginForm.css';

function LoginForm({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Navigate to character selection
    onNavigate('character-select');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Navigate to character selection
    onNavigate('character-select');
  };

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(password);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-title">
          <span className="title-level">Level</span>
          <span className="title-up">Up</span>
          <span className="title-well">Well</span>
        </h1>
        <p className="login-subtitle">Level up your health with a little buddy</p>
      </div>

      <div className="login-form">
        <h2 className="form-title">LevelUpWell</h2>
        <p className="form-subtitle">Level up your health with a little buddy</p>

        <form>
          <div className="form-group">
            <label htmlFor="email">USERNAME OR EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="generate-password-btn"
            onClick={generatePassword}
          >
            Generate Password 🔒
          </button>

          <a href="#" className="forgot-password">
            FORGOT PASSWORD
          </a>

          <button
            type="submit"
            className="sign-up-btn"
            onClick={handleSignUp}
          >
            SIGN UP
          </button>

          <button
            type="button"
            className="sign-in-btn"
            onClick={handleSignIn}
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
