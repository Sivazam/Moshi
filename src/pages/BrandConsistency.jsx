import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BrandConsistency.css';

const BrandConsistency = () => {
  const [expandedCards, setExpandedCards] = useState({
    brandConsultancy: false,
    serviceDesign: false
  });

  const toggleCard = (cardName) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  const [hoveredLogo, setHoveredLogo] = useState(null);

  const handleLogoHover = (index) => {
    setHoveredLogo(index);
    setTimeout(() => setHoveredLogo(null), 2000);
  };

  const clientLogos = [
    {
      name: "TechCorp Solutions",
      description: "Leading technology consulting firm specializing in digital transformation",
      logo: "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png"
    },
    {
      name: "Global Finance Partners",
      description: "International financial services and investment management",
      logo: "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png"
    },
    {
      name: "Innovate Health Systems",
      description: "Healthcare technology solutions and medical device integration",
      logo: "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png"
    },
    {
      name: "Smart Retail Analytics",
      description: "Data-driven retail insights and customer behavior analysis",
      logo: "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png"
    }
  ];
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
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "TechNova",
      description: "Digital transformation and brand modernization for technology startup"
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Fashion Forward",
      description: "Complete brand identity redesign for sustainable fashion retailer"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Green Earth",
      description: "Environmental branding and sustainability messaging for eco-friendly products"
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "HealthPlus",
      description: "Healthcare branding and patient experience design for medical center"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "EduTech Pro",
      description: "Educational platform branding and user experience optimization"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "FinanceHub",
      description: "Financial services rebranding and digital transformation strategy"
    }
  ];

  // Swiper slider data
  const swiperSlides = [
    {
      title: "Strategic Brand Positioning",
      subtitle: "Elevate Your Market Presence",
      description: "We help brands find their unique voice in crowded markets. Our strategic approach combines market research, competitive analysis, and creative thinking to position your brand for maximum impact and recognition.",
      image: "https://static.wixstatic.com/media/74e377_934f344dc82849889c116d4307709f7b~mv2.png/v1/fill/w_581,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tummoc%20Banner%20Image.png",
      features: ["Market Analysis", "Competitive Intelligence", "Brand Architecture", "Positioning Strategy"]
    },
    {
      title: "Visual Identity Design",
      subtitle: "Create Memorable Experiences",
      description: "Transform your brand vision into compelling visual experiences. From logo design to comprehensive brand guidelines, we create cohesive visual identities that resonate with your target audience.",
      image: "https://static.wixstatic.com/media/74e377_934f344dc82849889c116d4307709f7b~mv2.png/v1/fill/w_581,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tummoc%20Banner%20Image.png",
      features: ["Logo Design", "Color Systems", "Typography", "Brand Guidelines"]
    },
    {
      title: "Digital Brand Experience",
      subtitle: "Engage Across All Platforms",
      description: "Create seamless digital experiences that bring your brand to life online. We design responsive websites, mobile apps, and digital campaigns that deliver consistent brand messaging.",
      image: "https://static.wixstatic.com/media/74e377_934f344dc82849889c116d4307709f7b~mv2.png/v1/fill/w_581,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tummoc%20Banner%20Image.png",
      features: ["Web Design", "Mobile Experience", "Social Media", "Digital Campaigns"]
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
                <div className="portfolio-card slim-card">
                  <div className="card-image-container slim-container">
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

      {/* Swiper Slider Section */}
      <section className="swiper-slider-section">
        <Container fluid className="px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="brand-swiper"
          >
            {swiperSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide-content">
                  <Row className="g-0 h-100">
                    {/* Left Column - Text Content */}
                    <Col lg={6} md={12} className="text-column">
                      <div className="slide-text-content">
                        <div className="slide-subtitle">{slide.subtitle}</div>
                        <h2 className="slide-title">{slide.title}</h2>
                        <p className="slide-description">{slide.description}</p>
                        <div className="slide-features">
                          {slide.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="feature-item">
                              <span className="feature-icon">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="slide-cta">
                          <button className="slide-cta-button">Learn More</button>
                        </div>
                      </div>
                    </Col>
                    {/* Right Column - Image */}
                    <Col lg={6} md={12} className="image-column">
                      <div className="slide-image-container">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="slide-image"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="swiper-button-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination"></div>
        </Container>
      </section>

      {/* Three Column Section */}
      <section className="three-column-section">
        <Container>
          <Row className="g-4">
            {/* 1st Column - ABOUT THE SERVICE */}
            <Col lg={4} md={6} xs={12} className="mb-4">
              <div className="service-about">
                <h2 className="service-about-title">ABOUT THE SERVICE</h2>
              </div>
            </Col>
            
            {/* 2nd Column - Brand Consultancy */}
            <Col lg={4} md={6} xs={12} className="mb-4">
              <div className="service-content">
                <h3 className="service-title">Brand Consultancy</h3>
                <p className="service-description">
                  Elevate your brand's identity and strategy with our comprehensive brand consultancy services. From market analysis to brand positioning, we provide tailored solutions to enhance brand equity and foster meaningful connections with your target audience{expandedCards.brandConsultancy ? ' Our strategic approach encompasses deep market research, competitive intelligence, and brand architecture development.' : ''}
                  <strong className="inline-read-more" onClick={() => toggleCard('brandConsultancy')}>{expandedCards.brandConsultancy ? ' Read Less' : ' Read More'}</strong>
                </p>
              </div>
            </Col>
            
            {/* 3rd Column - Additional Service */}
            <Col lg={4} md={6} xs={12} className="mb-4">
              <div className="service-content">
                <h3 className="service-title">Service Design</h3>
                <p className="service-description">
                  Create exceptional service experiences that delight your customers and build lasting relationships. Our service design approach combines user research, journey mapping, and experience optimization to deliver consistent, high-quality interactions{expandedCards.serviceDesign ? <><strong className="inline-read-more" onClick={() => toggleCard('serviceDesign')}> Read Less</strong></> : <><strong className="inline-read-more" onClick={() => toggleCard('serviceDesign')}> Read More</strong></>}
                </p>
                <div className={`expandable-content ${expandedCards.serviceDesign ? 'expanded' : ''}`}>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <Container>
          <div className="clients-header">
            <h2 className="clients-title">CLIENTS</h2>
          </div>
          
          <Row className="g-4 justify-content-center">
            {clientLogos.map((client, index) => (
              <Col lg={3} md={6} xs={6} className="mb-4">
                <div className="logo-container"
                  onMouseEnter={() => handleLogoHover(index)}
                  onMouseLeave={() => setHoveredLogo(null)}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                  />
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