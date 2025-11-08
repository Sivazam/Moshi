import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BrandConsistency.css';

const BrandConsistency = () => {
  const portfolioProjects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Lederneat",
      description: "Complete brand identity and positioning strategy for premium food delivery service"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Thrillo",
      description: "Brand consultancy and visual identity for adventure travel platform"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Vijayanand Travels",
      description: "Strategic brand repositioning and visual identity redesign for luxury travel company"
    }
  ];
  return (
    <div className="brand-consistency-page">
      {/* Hero Section */}
      <section className="brand-consistency-hero">
        {/* Fullscreen Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
          disablePictureInPicture
          controlsList="nodownload"
        >
          <source
            src="https://video.wixstatic.com/video/74e377_dd94f324d0a04a25a84eeaab57524ddc/1080p/mp4/file.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Brand Strategy Section */}
      <section className="brand-strategy-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <div className="brand-strategy-content">
                <p className="strategy-paragraph">
                  BRAND STRATEGY. SERVICE DESIGN. 🔮 POSITIONING. NOMENCLATURE. SPATIAL DESIGN. 🌈 BRAND IDENTITY. EMPLOYER BRANDING. PACKAGING
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <Container>
          {/* Title */}
          <div className="mb-4">
            <h2 className="portfolio-title">PORTFOLIO</h2>
            <div className="portfolio-section-badge">
              <span className="section-badge-text">Brand consultancy</span>
            </div>
          </div>

          {/* Portfolio Cards - 3 per row */}
          <Row className="g-4 mt-4">
            {portfolioProjects.map((project, index) => (
              <Col lg={4} md={6} xs={12} key={index} className="mb-5">
                <div className="portfolio-card">
                  <div className="card-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-image"
                    />
                    <div className="card-image-title">
                      <h4 className="image-title-text">{project.title}</h4>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="brand-consistency-content">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <div className="content-wrapper">
                <div className="intro-section">
                  <h2 className="section-title">Consistent Yet Flexible</h2>
                  <p className="section-description">
                    At Moshi Moshi, we believe that brand consistency is not about being identical everywhere. 
                    It's about maintaining the core essence of your brand while adapting to different contexts and platforms. 
                    Our approach ensures that your brand remains recognizable and memorable across all touchpoints.
                  </p>
                </div>
                
                <div className="consistency-pillars">
                  <h3 className="pillars-title">Core Pillars of Brand Consistency</h3>
                  <div className="pillars-grid">
                    <div className="pillar-item">
                      <div className="pillar-icon">🎨</div>
                      <h4>Visual Identity</h4>
                      <p>Consistent logo usage, color palette, and typography across all platforms while allowing for contextual adaptation</p>
                    </div>
                    <div className="pillar-item">
                      <div className="pillar-icon">🗣️</div>
                      <h4>Voice & Tone</h4>
                      <p>Maintain consistent communication style and brand voice in all communications, tailored to each platform's audience</p>
                    </div>
                    <div className="pillar-item">
                      <div className="pillar-icon">💎</div>
                      <h4>Core Values</h4>
                      <p>Stay true to your founding principles while adapting to market needs and platform requirements</p>
                    </div>
                    <div className="pillar-item">
                      <div className="pillar-icon">⭐</div>
                      <h4>Quality Standards</h4>
                      <p>Deliver consistent quality across all deliverables and interactions, maintaining brand excellence</p>
                    </div>
                  </div>
                </div>

                <div className="consistency-principles">
                  <h3 className="principles-title">Our Consistency Principles</h3>
                  <div className="principles-grid">
                    <div className="principle-card">
                      <h4>Adapt, Don't Abandon</h4>
                      <p>Evolve your brand for different platforms without losing its core identity</p>
                    </div>
                    <div className="principle-card">
                      <h4>Be Flexible, Not Rigid</h4>
                      <p>Allow for creative expression while maintaining brand recognition</p>
                    </div>
                    <div className="principle-card">
                      <h4>Evolve, Don't Stagnate</h4>
                      <p>Keep your brand fresh and relevant while staying true to its essence</p>
                    </div>
                    <div className="principle-card">
                      <h4>Consistent, Not Identical</h4>
                      <p>Maintain brand recognition across platforms while respecting platform-specific best practices</p>
                    </div>
                  </div>
                </div>

                <div className="platform-examples">
                  <h3 className="examples-title">Brand in Action</h3>
                  <div className="examples-grid">
                    <div className="platform-item">
                      <div className="platform-icon">🌐</div>
                      <h4>Website</h4>
                      <p>Dark theme with yellow accents, immersive user experience</p>
                    </div>
                    <div className="platform-item">
                      <div className="platform-icon">📱</div>
                      <h4>Social Media</h4>
                      <p>Consistent visual style with platform-optimized content</p>
                    </div>
                    <div className="platform-item">
                      <div className="platform-icon">📧</div>
                      <h4>Email Templates</h4>
                      <p>Consistent branding with responsive design</p>
                    </div>
                    <div className="platform-item">
                      <div className="platform-icon">📄</div>
                      <h4>Print Materials</h4>
                      <p>Same design language adapted for physical media</p>
                    </div>
                  </div>
                </div>

                <div className="benefits-section">
                  <h3 className="benefits-title">Why Brand Consistency Matters</h3>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <div className="benefit-number">01</div>
                      <h4>Builds Trust</h4>
                      <p>Consistent branding creates reliability and trust with your audience</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-number">02</div>
                      <h4>Enhances Recognition</h4>
                      <p>Instant brand recall across different platforms and touchpoints</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-number">03</div>
                      <h4>Professional Impression</h4>
                      <p>Shows attention to detail and commitment to quality</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-number">04</div>
                      <h4>Supports Scalability</h4>
                      <p>Enables seamless expansion across new markets and platforms</p>
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
                <h2 className="cta-title">Ready to Strengthen Your Brand?</h2>
                <p className="cta-description">
                  Let's work together to create a consistent brand experience that resonates across all platforms and captivates your audience.
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

export default BrandConsistency;