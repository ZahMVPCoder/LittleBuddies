import React from 'react'

const InputField = ({ label, type, value, onChange, placeholder = "" }) => {
  return (
    <div className="input-group">
      <label className="input-label">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="input-field"
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputField