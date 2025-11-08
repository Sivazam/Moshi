import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  const sections = [
    {
      title: "WHO WE ARE",
      subtitle: "The Communication Company",
      content: "Founded in 2014, Moshi Moshi is a creative agency that doesn't believe in definitions. We are storytellers, innovators, and digital pioneers who transform ideas into extraordinary experiences.",
      highlights: ["Founded 2014", "Creative Agency", "Digital Pioneers"]
    },
    {
      title: "WHAT WE DO",
      subtitle: "Extraordinary Solutions",
      content: "We craft compelling narratives and innovative digital experiences that connect brands with their audiences in meaningful ways. From strategy to execution, we deliver results that matter.",
      highlights: ["Brand Strategy", "Digital Experience", "Results-Driven"]
    },
    {
      title: "WHY CHOOSE US",
      subtitle: "Beyond Ordinary",
      content: "We don't follow trends, we create them. Our team of creative thinkers and technical experts work together to deliver solutions that push boundaries and exceed expectations.",
      highlights: ["Trend Setters", "Expert Team", "Boundary Pushing"]
    }
  ];

  const experienceCards = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "BRAND STRATEGY",
      description: "We develop comprehensive brand strategies that resonate with your target audience and drive meaningful engagement across all touchpoints."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "DIGITAL DESIGN",
      description: "Creating stunning visual experiences that capture attention and communicate your brand message effectively in the digital landscape."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "CONTENT CREATION",
      description: "Crafting compelling stories and content that connects with your audience and builds lasting relationships with your brand."
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "SOCIAL MEDIA",
      description: "Strategic social media management that builds community, drives engagement, and converts followers into loyal customers."
    },
    {
      image: "https://images.unsplash.com/photo-1559028006-44a26fcd5f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "WEB DEVELOPMENT",
      description: "Building responsive, high-performance websites that deliver exceptional user experiences and drive business growth."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "MARKETING SOLUTIONS",
      description: "Data-driven marketing strategies that deliver measurable results and help your business achieve its growth objectives."
    }
  ];

  return (
    <>
      {/* Hero Section with Natural Sticky Behavior */}
      <div className="about-hero-section">
        <Container fluid className="p-0">
          <Row className="g-0">
            {/* Left Column - Video with Extended Height for Sticky */}
            <Col lg={6} className="d-none d-lg-block">
              <div className="video-sticky-container">
                <div className="video-column">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                  >
                    <source
                      src="https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay Content */}
                  <div className="video-overlay">
                    <div className="video-content">
                      <h1 className="video-title">MOSHI MOSHI</h1>
                      <p className="video-subtitle">THE COMMUNICATION COMPANY</p>
                    </div>
                  </div>
                </div>
                {/* Spacer to allow natural scroll after 2 sections */}
                <div className="video-spacer"></div>
              </div>
            </Col>

            {/* Right Column - Simple Black Background Sections */}
            <Col lg={6} className="content-column">
              {sections.map((section, index) => (
                <div key={index} className="content-section">
                  <div className="content-wrapper">
                    <h2 className="content-title">{section.title}</h2>
                    <h3 className="content-subtitle">{section.subtitle}</h3>
                    
                    <p className="content-text">{section.content}</p>
                    
                    <div className="content-highlights">
                      {section.highlights.map((highlight, idx) => (
                        <div key={idx} className="highlight-item">
                          <span className="highlight-dot"></span>
                          <span className="highlight-text">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mobile Layout - Stacked */}
      <div className="mobile-about-section d-lg-none">
        {/* Mobile Video Section */}
        <div className="mobile-video-section">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="mobile-background-video"
          >
            <source
              src="https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          
          <div className="mobile-video-overlay">
            <h1 className="mobile-video-title">MOSHI MOSHI</h1>
            <p className="mobile-video-subtitle">THE COMMUNICATION COMPANY</p>
          </div>
        </div>

        {/* Mobile Content Sections */}
        <div className="mobile-content-container">
          {sections.map((section, index) => (
            <div key={index} className="mobile-content-section">
              <div className="mobile-content-wrapper">
                <h2 className="mobile-content-title">{section.title}</h2>
                <h3 className="mobile-content-subtitle">{section.subtitle}</h3>
                
                <p className="mobile-content-text">{section.content}</p>
                
                <div className="mobile-content-highlights">
                  {section.highlights.map((highlight, idx) => (
                    <div key={idx} className="mobile-highlight-item">
                      <span className="mobile-highlight-dot"></span>
                      <span className="mobile-highlight-text">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OUR STORY Section */}
      <section className="our-story-section">
        <Container>
          <Row className="justify-content-start">
            <Col xs={12}>
              <h1 className="our-story-title">OUR STORY</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Story Content - First Row: Left Image, Right Text */}
      <section className="story-content-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-lg-1">
              <div className="story-image-container">
                <img
                  src="https://static.wixstatic.com/media/74e377_22a0791693d240caaa5ee44b5ec7a19b~mv2.gif"
                  alt="Our Story Beginning"
                  className="story-image img-fluid"
                />
              </div>
            </Col>
            <Col lg={6} className="order-lg-2">
              <div className="story-text-container">
                <p className="story-text">
                  It began with two 20 year olds, one bike, some hard selling, some logical ideas that made people relook at the way marketing can be done. It was in the year 2014.
                </p>
                <p className="story-text">
                  Today Ajay and Rishav are 28 and are often found pulling each other's leg, and mostly not agreeing up on some creative route. Sometimes playing silly on each other. And still believing complex business problems can be solved with simple logical solutions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Story Content - Second Row: Left Text, Right Image */}
      <section className="story-content-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-lg-1 order-2">
              <div className="story-text-container">
                <p className="story-text">
                  It began with two 20 year olds, one bike, some hard selling, some logical ideas that made people relook at the way marketing can be done. It was in the year 2014.
                </p>
                <p className="story-text">
                  Today Ajay and Rishav are 28 and are often found pulling each other's leg, and mostly not agreeing up on some creative route. Sometimes playing silly on each other. And still believing complex business problems can be solved with simple logical solutions.
                </p>
              </div>
            </Col>
            <Col lg={6} className="order-lg-2 order-1">
              <div className="story-image-container">
                <img
                  src="https://static.wixstatic.com/media/74e377_22a0791693d240caaa5ee44b5ec7a19b~mv2.gif"
                  alt="Our Journey"
                  className="story-image img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* THE SANNA EXPERIENCE Section */}
      <section className="sanna-experience-section">
        <Container>
          <Row className="justify-content-start">
            <Col xs={12}>
              <h1 className="sanna-experience-title">THE SANNA EXPERIENCE</h1>
              <p className="sanna-experience-description">
                We create extraordinary digital experiences that transform brands and captivate audiences. 
                Our innovative approach combines cutting-edge technology with creative storytelling to deliver 
                results that exceed expectations and drive meaningful engagement.
              </p>
            </Col>
          </Row>
          
          {/* Experience Cards */}
          <Row className="g-4 mt-4">
            {experienceCards.map((card, index) => (
              <Col lg={4} md={6} xs={12} key={index} className="mb-5">
                <div className="experience-card">
                  <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="card-image-container">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="card-image"
                    />
                    <div className="card-overlay">
                      <div className="card-content">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Name Origin Section */}
      <section className="name-origin-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-lg-1">
              <div className="name-origin-image-container">
                <img
                  src="https://static.wixstatic.com/media/74e377_385825158f8543bf872ee602b7f15b37~mv2.gif"
                  alt="Name Origin Story"
                  className="name-origin-image img-fluid"
                />
              </div>
            </Col>
            <Col lg={6} className="order-lg-2">
              <div className="name-origin-text-container">
                <h2 className="name-origin-title">BUT, WHERE DID THE NAME COME FROM?</h2>
                <p className="name-origin-description">
                  "Moshi Moshi", it's the Japanese way of saying 'Hello'. There is no big inspirational story here. Just a funny one. Our founders were 20. Still in their 2nd year of their undergrad program at Christ University. They wanted to call their start-up to be called "Ballyhoo".
                </p>
                <p className="name-origin-description">
                  But no one told them about trademarking.
                </p>
                <p className="name-origin-description">
                  So after college, when the trademark was needed to open a bank account for the startup. Ballyhoo was taken. Bank account had to be opened on THE day. No new name resonated with them or was available. Whole day passed.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  
        {/* Final Story Section */}
      <section className="final-story-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10} xs={12}>
              <div className="final-story-content">
                <p className="final-story-text">
                  Almost giving up on the hopes of finding an interesting name, the boys laid on their terrace floor of their first office, until one of them recalled a line from a movie they had watched the previous night. Rishav said, "Moshi Moshi" and Ajay rejoined with "Say Hello to the World". Guess what, the domain name was available and booked at that instant. Who else is happy Ballyhoo wasn't available.
                </p>
                <p className="final-story-text">
                  Thank God the movie Zindagi Na Milegi Dobara.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;