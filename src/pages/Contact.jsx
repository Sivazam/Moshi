import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <section style={{ minHeight: '60vh', padding: '80px 0', backgroundColor: '#0a0a0a' }}>
      <Container>
        <div style={{ color: '#ffffff', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Get in touch with us to discuss how we can help transform your digital presence.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              📧 hello@moshimoshi.com
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              📞 +1 (555) 123-4567
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              📍 123 Creative Street, Design City, DC 12345
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;