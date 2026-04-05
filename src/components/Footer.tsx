import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/Chetanmohane' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
    { name: 'Instagram', icon: '📸', href: 'https://instagram.com' },
    { name: 'Gmail', icon: '📧', href: 'mailto:Chetanmohane27@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow" />
      
      <div className="container footer-container">
        {/* Footer Top - Call to Action */}
        <div className="footer-cta glass-card">
          <div className="cta-content">
            <h2 className="cta-title">Let's build something <span className="gradient-text">extraordinary</span></h2>
            <p className="cta-desc">I'm currently available for new projects and collaborations.</p>
          </div>
          <a href="#contact" className="btn-primary cta-btn">
            <span>🚀</span> Start a Project
          </a>
        </div>

        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Chetan</span>
              <span className="logo-bracket"> /&gt;</span>
            </div>
            <p className="brand-desc">
              A passionate Full Stack Developer specializing in crafting high-performance MERN applications with premium user experiences.
            </p>
            <div className="social-badge-grid">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-badge"
                  aria-label={link.name}
                >
                  <span className="badge-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-ul">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    <span className="link-arrow">→</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Column */}
          <div className="footer-col expertise-col">
            <h3 className="footer-col-title">Expertise</h3>
            <ul className="footer-ul">
              <li><span className="expertise-tag">MERN Stack Development</span></li>
              <li><span className="expertise-tag">Graphic Designing</span></li>
              <li><span className="expertise-tag">Digital Marketing</span></li>
              <li><span className="expertise-tag">UI/UX Design</span></li>
              <li><span className="expertise-tag">Performance Optimization</span></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Get in Touch</h3>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📧</span>
              <a href="mailto:Chetanmohane27@gmail.com" className="footer-contact-link">Chetanmohane27@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <p>Bhopal, MP</p>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="copyright">
            © {year} <span className="gradient-text font-bold">Chetan Mohane</span>. All rights reserved.
          </div>
          <div className="footer-credits">
            Built with <span className="heart-pulse">❤️</span> using React + TypeScript
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button 
        className={`scroll-to-top ${showScroll ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="scroll-icon">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
