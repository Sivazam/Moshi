import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // Updated image link
  const bgImage = "https://static.wixstatic.com/media/11062b_cbd642f43e2b4ddeb39309806aa582d1~mv2.jpg/v1/fill/w_1899,h_754,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_cbd642f43e2b4ddeb39309806aa582d1~mv2.jpg";
  
  return (
    <footer
      style={{
        position: 'relative',
        backgroundImage: `
          linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 46, 0.8) 25%, rgba(22, 33, 62, 0.8) 50%, rgba(15, 52, 96, 0.8) 75%, rgba(10, 10, 10, 0.8) 100%),
          url("${bgImage}")
        `,
        backgroundSize: 'contain', // Changed from 'cover' to 'contain'
        backgroundPosition: 'center center', // Explicitly center both axes
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
        marginTop: '0',
        backgroundColor: '#0a0a0a', // Dark fallback
      }}
    >
      {/* Light Overlay to make text readable */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '80px 0' }}>
        <Container>
          <Row>
            {/* Company Info */}
            <Col xs={12} md={4} className="mb-4 mb-md-0">
              <h3
                style={{
                  color: '#ffffff',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                Moshi Moshi
              </h3>
              <p
                style={{
                  color: '#cccccc',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                }}
              >
                Extraordinary creative solutions that transform your digital presence and elevate your brand to new heights.
              </p>
              
              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '15px' }}>
                {[
                  { icon: <FaFacebookF size={16} />, url: '#' },
                  { icon: <FaTwitter size={16} />, url: '#' },
                  { icon: <FaInstagram size={16} />, url: '#' },
                  { icon: <FaLinkedinIn size={16} />, url: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Col>

            {/* Quick Links */}
            <Col xs={12} md={4} className="mb-4 mb-md-0">
              <h4
                style={{
                  color: '#ffffff',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'About Us',
                  'Services',
                  'Our Work',
                  'Testimonials',
                  'Contact',
                ].map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem' }}>
                    <a
                      href="#"
                      style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        transition: 'color 0.3s ease',
                        textTransform: 'capitalize',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = '#ffffff';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = '#cccccc';
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact Info */}
            <Col xs={12} md={4}>
              <h4
                style={{
                  color: '#ffffff',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Contact Us
              </h4>
              <div style={{ color: '#cccccc' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <FaMapMarkerAlt style={{ marginRight: '10px', color: '#D4FF00' }} />
                  <span style={{ fontSize: '1rem' }}>
                    123 Creative Street, Design City, DC 12345
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <FaPhone style={{ marginRight: '10px', color: '#D4FF00' }} />
                  <span style={{ fontSize: '1rem' }}>
                    +1 (555) 123-4567
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                  <FaEnvelope style={{ marginRight: '10px', color: '#D4FF00' }} />
                  <span style={{ fontSize: '1rem' }}>
                    hello@moshimoshi.com
                  </span>
                </div>
              </div>
            </Col>
          </Row>

          {/* Bottom Bar */}
          <Row>
            <Col xs={12}>
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '2rem',
                  marginTop: '3rem',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    color: '#cccccc',
                    fontSize: '0.9rem',
                    margin: 0,
                  }}
                >
                  © 2024 Moshi Moshi. All rights reserved. |{' '}
                  <a
                    href="#"
                    style={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#cccccc';
                    }}
                  >
                    Privacy Policy
                  </a>{' '}
                  |{' '}
                  <a
                    href="#"
                    style={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#cccccc';
                    }}
                  >
                    Terms of Service
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;