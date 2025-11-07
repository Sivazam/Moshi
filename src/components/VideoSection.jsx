import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

const VideoSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source
          src="https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content Overlay */}
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={10} lg={8}>
            <div style={{ textAlign: 'center', color: '#ffffff' }}>
              {/* Main Title */}
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  lineHeight: '1.1',
                }}
              >
                EXPECT THE EXTRA
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  fontWeight: '300',
                  marginBottom: '3rem',
                  letterSpacing: '1px',
                  lineHeight: '1.6',
                  opacity: 0.9,
                }}
              >
                If it's extraordinary…creative it's Moshi Moshi.
              </p>

              {/* CTA Button */}
              <button
                style={{
                  backgroundColor: '#D4FF00',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#000000',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 10px 30px rgba(212, 255, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <FaPlay size={16} />
                WATCH OUR STORY
                <FaArrowRight size={16} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VideoSection;