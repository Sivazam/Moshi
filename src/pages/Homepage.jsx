// src/pages/Homepage.jsx
import React, { useEffect } from 'react';
import './Homepage.css';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturesSection from '../components/FeaturesSection';
import SliderSection from '../components/SliderSection';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import VideoSection from '../components/VideoSection';
import RumoursSection from '../components/RumoursSection';

function Homepage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Video Section - Header is handled by Layout */}
      <div className="hero-video-section">
        {/* Fullscreen Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          {/* Replace with your actual video URL */}
          <source
            src="https://video.wixstatic.com/video/74e377_d5741f90ce204460b6eebbbf1b664dfc/1080p/mp4/file.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Optional: Hero Content (Headline, CTA, etc.) */}
        {/* <div className="hero-content">
          <h1 className="hero-title">Transform Your Digital Presence</h1>
          <p className="hero-subtitle">Data-driven strategies that deliver real results.</p>
        </div> */}
      </div>

      {/* Rest of the page sections */}
      
      <FeaturesSection />
      <SliderSection />
      <Services />
      <OurWork />
      <VideoSection />
      <RumoursSection />
    </>
  );
}

export default Homepage;