import { useState } from 'react';
import Logo from './Logo';
import './Hero.css';

export default function Hero() {
  const [hoverSubmit, setHoverSubmit] = useState(false);
  const [hoverTrack, setHoverTrack] = useState(false);

  return (
    <section className="hero">
      <div className="hero-background">
        {/* Placeholder for background image */}
        <img
          src="/placeholder-hero-bg.jpg"
          alt="Campus Background"
          className="hero-image"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-down">
          Campus Pulse
        </h1>

        <div className="hero-logo-container" data-aos="fade-up" data-aos-delay="200">
          <Logo />
        </div>

        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
          Your Voice for a Better Campus
        </p>

        <p className="hero-description" data-aos="fade-up" data-aos-delay="500">
          Amplify your concerns, Get things done
        </p>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
          <button
            className={`btn-primary ${hoverSubmit ? 'active' : ''}`}
            onMouseEnter={() => setHoverSubmit(true)}
            onMouseLeave={() => setHoverSubmit(false)}
          >
            <span className="btn-icon">✉</span>
            Submit Complaint
            <span className="btn-glow"></span>
          </button>

          <button 
            className={`btn-secondary ${hoverTrack ? 'active' : ''}`}
            onMouseEnter={() => setHoverTrack(true)}
            onMouseLeave={() => setHoverTrack(false)}
          >
            <span className="btn-icon">📊</span>
            Track Status
            <span className="btn-glow"></span>
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}
