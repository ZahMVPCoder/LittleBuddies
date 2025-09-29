import React from 'react'
import InputField from './InputField'
import Button from './Button'

const LoginForm = ({ 
  username, 
  setUsername, 
  password, 
  setPassword, 
  onSignUp, 
  onSignIn, 
  onForgotPassword 
}) => {
  return (
    <div className="form-container">
      <InputField
        label="Username or Email"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="forgot-password-container">
        <Button
          onClick={onForgotPassword}
          variant="link"
        >
          Forgot Password
        </Button>
      </div>

      <Button
        onClick={onSignUp}
        variant="primary"
      >
        Sign Up
      </Button>

      <Button
        onClick={onSignIn}
        variant="secondary"
      >
        Sign In
      </Button>
    </div>
  )
}

export default LoginForm