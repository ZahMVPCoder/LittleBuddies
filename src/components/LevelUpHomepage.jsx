import React, { useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import LoginForm from './LoginForm'
import '../css/LevelUpHomepage.css'

const LevelUpHomepage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    console.log('Sign up clicked')
    alert('Sign up functionality would be implemented here')
  }

  const handleSignIn = () => {
    console.log('Sign in clicked with:', { username, password })
    if (username && password) {
      alert(`Attempting to sign in with: ${username}`)
    } else {
      alert('Please enter both username and password')
    }
  }

  const handleForgotPassword = () => {
    console.log('Forgot password clicked')
    alert('Forgot password functionality would be implemented here')
  }

  return (
    <div className="homepage-wrapper">
      <Container className="homepage-container">
        <div className="homepage-header">
          <Logo className="homepage-logo" />
        </div>

          <div className="homepage-login-section">
            <LoginForm
              className="homepage-login-form"
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              onSignUp={handleSignUp}
              onSignIn={handleSignIn}
              onForgotPassword={handleForgotPassword}
            />
          </div>
      </Container>
    </div>
  )
}

export default LevelUpHomepage