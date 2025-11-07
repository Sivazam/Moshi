import React, { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  const scrollPositionRef = useRef(0); // Store scroll position in ref

  const services = [
    { id: 1, name: 'moneycontrol', category: 'Promotional Video', type: 'CAMPAIGNS' },
    { id: 2, name: 'RBiH', category: 'Website Development', type: 'WEBSITE' },
    { id: 3, name: 'MINISTRY OF AYUSH', category: 'Promotional Video', type: 'CAMPAIGNS' },
    { id: 4, name: 'SA AKI', category: 'PR Repositioning', type: 'PR' },
    { id: 5, name: "Haldiram's", category: 'Digital Marketing', type: 'DIGITAL' },
  ];

  const filters = ['All', 'BRAND CONSULTANCY', 'CAMPAIGNS', 'CONTENT', 'DIGITAL', 'PR', 'WEBSITE'];

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(service => service.type === activeFilter);

  // Duplicate services for seamless scrolling
  const scrollingServices = [...filteredServices, ...filteredServices, ...filteredServices];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;

    const scroll = () => {
      if (!isHovered) {
        scrollPositionRef.current -= 1; // Use ref to store position
        if (Math.abs(scrollPositionRef.current) >= scrollContainer.scrollWidth / 3) {
          scrollPositionRef.current = 0;
        }
        scrollContainer.style.transform = `translateX(${scrollPositionRef.current}px)`;
      }
      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered, filteredServices]);

  return (
    <section style={{
      backgroundColor: '#0a0a0a',
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      padding: '40px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container>
        {/* Title */}
        <div className="mb-5">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '2rem',
            letterSpacing: '8px',
            textAlign: 'left'
          }}>
            OUR WORK
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap gap-3 mb-5" style={{ justifyContent: 'flex-start' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '10px 20px',
                border: activeFilter === filter ? '2px solid #ffffff' : '2px solid rgba(255,255,255,0.3)',
                backgroundColor: activeFilter === filter ? '#ffffff' : 'transparent',
                color: activeFilter === filter ? '#000000' : '#ffffff',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseOver={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Auto-scrolling Cards Container */}
        <div 
          style={{
            overflow: 'hidden',
            width: '100%',
            position: 'relative'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '30px',
              transition: isHovered ? 'transform 0.5s ease' : 'none',
              willChange: 'transform'
            }}
          >
            {scrollingServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                style={{
                  minWidth: '300px',
                  maxWidth: '300px',
                  height: '200px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  filter: isHovered ? 'grayscale(100%)' : 'grayscale(0%)',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#2a2a2a';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.filter = 'grayscale(100%)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'grayscale(0%)';
                }}
              >
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: '1.2'
                }}>
                  {service.name}
                </h3>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#aaaaaa',
                  margin: 0,
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  lineHeight: '1.3'
                }}>
                  {service.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;