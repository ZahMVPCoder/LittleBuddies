import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  )
}

export default Container