import React from 'react';
import '../styles/Button.css';
import { formatText } from '../utils/format';

/**
 * Enhanced button component with multiple variants and sizes
 * @param {Object} props - Component props
 * @param {string} props.text - Button text content
 * @param {Function} [props.onClick] - Click handler function
 * @param {boolean} [props.disabled] - Disable button state
 * @param {string} [props.variant='primary'] - Button variant: primary, secondary, danger
 * @param {string} [props.size='default'] - Button size: sm, default, lg
 * @param {boolean} [props.fullWidth=false] - Make button full width
 * @param {string} [props.icon] - Optional icon name
 * @returns {JSX.Element} Styled button component
 */
const Button = ({
  text,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  icon
}) => {
  // Validate variant and size
  const validVariants = ['primary', 'secondary', 'danger'];
  const validSizes = ['sm', 'default', 'lg'];
  
  const normalizedVariant = validVariants.includes(variant) ? variant : 'primary';
  const normalizedSize = validSizes.includes(size) ? size : 'default';

  const handleClick = (e) => {
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  // Build class name
  const className = `btn btn-${normalizedVariant} btn-${normalizedSize}`;

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={className}
      style={{
        width: fullWidth ? '100%' : 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        gap: icon ? '8px' : '0'
      }}
      aria-disabled={disabled}
    >
      {icon && <span className={`icon-${icon}`} />}
      {formatText(text)}
    </button>
  );
};

export default Button;
