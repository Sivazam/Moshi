import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar, FaRocket, FaShieldAlt } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    { icon: <FaStar size={40} color="orange" />, title: "Premium Quality" },
    { icon: <FaRocket size={40} color="orange" />, title: "Fast Performance" },
    {
      icon: <FaShieldAlt size={40} color="orange" />,
      title: "Secure & Reliable",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        padding: "40px 0",
      }}
    >
      <Container>
        <Row className="justify-content-start">
          {features.map((feature, index) => (
            <Col
              key={index}
              xs={12}  // full width on mobile
              sm={6}   // 2 per row on small tablets
              md={4}   // 3 per row on desktop
              className="d-flex justify-content-start mb-4"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  color: "#fff",
                  borderRadius: "12px",
                  padding: "20px 30px",
                  gap: "15px",
                  minWidth: "250px",
                  maxWidth: "300px",
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {feature.icon}
                <h5 style={{ 
                  margin: 0, 
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {feature.title}
                </h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;