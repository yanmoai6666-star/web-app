import React from 'react';

/**
 * A basic button component
 * @param {Object} props - Component props
 * @param {string} props.text - Button text content
 * @param {Function} [props.onClick] - Click handler function
 * @param {boolean} [props.disabled] - Disable button state
 * @returns {JSX.Element} Button component
 */
const Button = ({ text, onClick, disabled = false }) => {
  const handleClick = (e) => {
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '14px',
        backgroundColor: disabled ? '#f0f0f0' : '#ffffff'
      }}
    >
      {text}
    </button>
  );
};

export default Button;
