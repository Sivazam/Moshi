import React from 'react';
import { Container } from 'react-bootstrap';

const RumoursSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        padding: '40px 0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}
    >
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            {/* Main Title - RUMOURS */}
            <h1
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                lineHeight: '1.1',
                margin: 0,
                flex: '0 0 auto',
              }}
            >
              RUMOURS
            </h1>
          </div>

          {/* Two-line subtitle matching RUMOURS height */}
          <div 
            style={{ 
              height: 'clamp(3rem, 8vw, 6rem)', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontWeight: '400',
                color: '#ffffff',
                margin: '0',
                letterSpacing: '2px',
                lineHeight: '1.2',
                opacity: 0.9,
                textTransform: 'uppercase',
              }}
            >
              going around
            </p>
            <p
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontWeight: '400',
                color: '#ffffff',
                margin: '0',
                letterSpacing: '2px',
                lineHeight: '1.2',
                opacity: 0.9,
                textTransform: 'uppercase',
              }}
            >
              about us
            </p>
          </div>

          {/* Call to Action - Not all uppercase */}
          <p
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: '600',
              color: '#00ff88', // Green color matching the screenshot
              margin: '0',
              letterSpacing: '3px',
              lineHeight: '1.2',
              textTransform: 'capitalize', // Only first letter uppercase
            }}
          >
            Which ones did you hear?
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RumoursSection;