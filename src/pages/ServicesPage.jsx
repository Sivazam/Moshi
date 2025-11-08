import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title">SERVICES</h1>
          <p className="hero-subtitle">Building extraordinary digital experiences that transform your brand</p>
        </div>
      </section>

      {/* Brand Consistency Section */}
      <section className="brand-consistency-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <div className="brand-consistency-content">
                <h2 className="section-title">BRAND CONSISTENCY</h2>
                <p className="section-description">
                  At Moshi Moshi, we believe that brand consistency is not about being identical everywhere. 
                  It's about maintaining the core essence of your brand while adapting to different contexts and platforms. 
                  Our approach ensures that your brand remains recognizable and memorable across all touchpoints.
                </p>
                
                <div className="consistency-points">
                  <div className="consistency-point">
                    <h3>Visual Identity</h3>
                    <p>Consistent logo usage, color palette, and typography across all platforms</p>
                  </div>
                  <div className="consistency-point">
                    <h3>Voice & Tone</h3>
                    <p>Maintain consistent communication style and brand voice in all communications</p>
                  </div>
                  <div className="consistency-point">
                    <h3>Core Values</h3>
                    <p>Stay true to your founding principles while adapting to market needs</p>
                  </div>
                  <div className="consistency-point">
                    <h3>Quality Standards</h3>
                    <p>Deliver consistent quality across all deliverables and interactions</p>
                  </div>
                </div>

                <div className="consistency-principles">
                  <h3 className="principles-title">Our Consistency Principles</h3>
                  <ul className="principles-list">
                    <li>Adapt, Don't Abandon</li>
                    <li>Be Flexible, Not Rigid</li>
                    <li>Evolve, Don't Stagnate</li>
                    <li>Consistent, Not Identical</li>
                  </ul>
                </div>

                <div className="consistency-benefits">
                  <h3 className="benefits-title">Why It Matters</h3>
                  <ul className="benefits-list">
                    <li>Builds trust and recognition</li>
                    <li>Enhances brand recall</li>
                    <li>Creates professional impression</li>
                    <li>Supports scalability</li>
                  </ul>
                </div>

                <div className="consistency-examples">
                  <h3 className="examples-title">In Practice</h3>
                  <div className="examples-grid">
                    <div className="example-item">
                      <h4>Website</h4>
                      <p>Dark theme with yellow accents</p>
                    </div>
                    <div className="example-item">
                      <h4>Social Media</h4>
                      <p>Consistent visual style</p>
                    </div>
                    <div className="item">
                      <h4>Print Materials</h4>
                      <p>Same design language</p>
                    </div>
                    <div className="example-item">
                      <h4>Email Templates</h4>
                      <p>Consistent branding</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="cta-content">
                <h2 className="cta-title">Ready to Build Your Brand?</h2>
                <p className="cta-description">
                  Let's work together to create extraordinary digital experiences that transform your brand and captivate your audience.
                </p>
                <div className="cta-buttons">
                  <a href="tel:+1234567890" className="cta-button primary">Call Now</a>
                  <a href="/contact" className="cta-button secondary">Get Started</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;