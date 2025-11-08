import React from 'react';
import { Container } from 'react-bootstrap';

const Clients = () => {
  return (
    <section style={{ minHeight: '60vh', padding: '80px 0', backgroundColor: '#0a0a0a' }}>
      <Container>
        <div style={{ color: '#ffffff', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Our Clients
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            We are proud to work with amazing clients who trust us to deliver exceptional results.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Clients;