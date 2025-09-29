import React, { useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import LoginForm from './LoginForm'

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
    <Container>
      <Logo />
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        onSignUp={handleSignUp}
        onSignIn={handleSignIn}
        onForgotPassword={handleForgotPassword}
      />
    </Container>
  )
}

export default LevelUpHomepage