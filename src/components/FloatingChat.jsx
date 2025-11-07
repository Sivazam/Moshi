import React from 'react';
import { FaComments } from 'react-icons/fa';

const FloatingChat = () => {
  return (
    <button
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#D4FF00',
        border: 'none',
        borderRadius: '50px',
        padding: '15px 25px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        boxShadow: '0 5px 20px rgba(212, 255, 0, 0.3)',
        fontSize: '1rem',
        fontWeight: '600',
        color: '#000000',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 8px 30px rgba(212, 255, 0, 0.4)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 5px 20px rgba(212, 255, 0, 0.3)';
      }}
      onClick={() => {
        // Handle chat functionality
        console.log('Chat button clicked');
      }}
    >
      <FaComments size={18} />
      Let's Chat!
    </button>
  );
};

export default FloatingChat;