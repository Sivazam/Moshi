import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const FloatingSocials = () => {
  const socialLinks = [
    { icon: <FaFacebookF size={16} />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter size={16} />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram size={16} />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn size={16} />, url: '#', label: 'LinkedIn' },
    { icon: <FaYoutube size={16} />, url: '#', label: 'YouTube' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          aria-label={social.label}
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingSocials;