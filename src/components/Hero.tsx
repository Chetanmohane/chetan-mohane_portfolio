import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.png';
import './Hero.css';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'MERN Stack Expert',
    'Full Stack Developer',
    'Graphic Designer',
    'Digital Marketing Expert',
    'React Specialist',
    'Node.js Engineer',
  ];
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const current = roles[roleIndex.current];
      if (!isDeleting.current) {
        setTypedText(current.substring(0, charIndex.current + 1));
        charIndex.current++;
        if (charIndex.current === current.length) {
          isDeleting.current = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        setTypedText(current.substring(0, charIndex.current - 1));
        charIndex.current--;
        if (charIndex.current === 0) {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      setTimeout(type, isDeleting.current ? 60 : 100);
    };
    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Chetan</span>
            <br />
            Mohane
          </h1>

          <div className="hero-role">
            <span className="role-text">{typedText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-desc">
            I craft exceptional digital experiences with modern web technologies.
            Passionate about building scalable, performant, and beautiful applications.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary" id="view-projects-btn"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>🚀</span> View Projects
            </a>
            <a href="#contact" className="btn-secondary" id="contact-btn"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>💬</span> Let's Talk
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Chetanmohane" target="_blank" rel="noopener noreferrer" className="social-link" id="github-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/chetan-mohane-b0736b221/" target="_blank" rel="noopener noreferrer" className="social-link" id="linkedin-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:Chetanmohane27@gmail.com" className="social-link" id="email-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="orbit orbit-1">
              <div className="orbit-dot" style={{ '--delay': '0s' } as React.CSSProperties}><span>⚛️</span></div>
            </div>
            <div className="orbit orbit-2">
              <div className="orbit-dot" style={{ '--delay': '-2s' } as React.CSSProperties}><span>🟢</span></div>
            </div>
            <div className="orbit orbit-3">
              <div className="orbit-dot" style={{ '--delay': '-4s' } as React.CSSProperties}><span>🔷</span></div>
            </div>
            <div className="hero-avatar-ring">
              <img src={profileImg} alt="Chetan Mohane - Full Stack Developer" className="hero-avatar" />
            </div>
          </div>

          <div className="tech-badge badge-react">React.js</div>
          <div className="tech-badge badge-node">Node.js</div>
          <div className="tech-badge badge-ts">TypeScript</div>
          <div className="tech-badge badge-mongo">MongoDB</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
