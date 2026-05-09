import type { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Mustafa Waheed Khan</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Software Developer & AI Enthusiast
          </p>
          <p className="hero-description">
            Passionate about building scalable SaaS applications and cutting-edge system solutions.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for an image or graphic */}
          <div className="image-placeholder">MWK</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
