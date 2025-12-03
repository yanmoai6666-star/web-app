import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {children}
    </div>
  );
};

export default Card;
