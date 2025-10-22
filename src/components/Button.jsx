import React from 'react'

const Button = ({ onClick, children, variant = "primary", className = "" }) => {
  const getButtonClass = () => {
    const baseClass = "button-base"
    const variantClass = `button-${variant}`
    return `${baseClass} ${variantClass} ${className}`
  }

  return (
    <button
      onClick={onClick}
      className={getButtonClass()}
    >
      {children}
    </button>
  )
}

export default Button