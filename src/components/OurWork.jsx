import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const OurWork = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const scrollPositionRef = useRef(0); // Store scroll position in ref

  const projects = [
    { 
      id: 1, 
      name: 'moneycontrol', 
      category: 'Promotional Video',
      type: 'CAMPAIGNS',
      videoUrl: 'https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4'
    },
    { 
      id: 2, 
      name: 'RBiH', 
      category: 'Website Development', 
      type: 'WEBSITE',
      videoUrl: 'https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4'
    },
    { 
      id: 3, 
      name: 'MINISTRY OF AYUSH', 
      category: 'Promotional Video', 
      type: 'CAMPAIGNS',
      videoUrl: 'https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4'
    },
    { 
      id: 4, 
      name: 'SA AKI', 
      category: 'PR Repositioning', 
      type: 'PR',
      videoUrl: 'https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4'
    },
    { 
      id: 5, 
      name: "Haldiram's", 
      category: 'Digital Marketing', 
      type: 'DIGITAL',
      videoUrl: 'https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4'
    },
  ];

  // Duplicate projects for seamless scrolling
  const scrollingProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const scrollContainer = sliderRef.current;
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
  }, [isHovered]);

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
            SERVICES
          </h2>
        </div>

        {/* Slider Container */}
        <div 
          className="position-relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Auto-scrolling Projects Slider */}
          <div 
            ref={sliderRef}
            style={{
              display: 'flex',
              transition: isHovered ? 'transform 0.5s ease' : 'none',
              gap: '30px',
              willChange: 'transform'
            }}
          >
            {scrollingProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                style={{
                  minWidth: '300px',
                  maxWidth: '300px',
                  height: '300px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                className="project-card"
              >
                {/* Default State - Project Info */}
                <div 
                  className="project-info"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '30px',
                    zIndex: 2,
                    transition: 'opacity 0.3s ease'
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
                    {project.name}
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
                    {project.category}
                  </p>
                </div>

                {/* Video - Hidden by default, shown on hover */}
                <video
                  src={project.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1
                  }}
                  className="project-video"
                />

                {/* Hover overlay */}
                <style jsx>{`
                  .project-card:hover .project-info {
                    opacity: 0;
                  }
                  .project-card:hover .project-video {
                    opacity: 1;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurWork;