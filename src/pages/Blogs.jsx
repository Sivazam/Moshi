import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
  return (
    <section style={{ minHeight: '60vh', padding: '80px 0', backgroundColor: '#0a0a0a' }}>
      <Container>
        <div style={{ color: '#ffffff', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Our Blog
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Stay updated with the latest trends, insights, and tips from our team of experts.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;