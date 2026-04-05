import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-label">Who Am I</span>
            <h2 className="section-title">
              Passionate Developer &{' '}
              <span className="gradient-text">Problem Solver</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              I'm a Full Stack Developer with a passion for creating seamless digital experiences.
              I specialize in the MERN stack and love building applications that make a difference.
            </p>
            <p className="about-desc">
              With experience in modern web technologies like React, TypeScript, Node.js, and MongoDB,
              I bridge the gap between elegant design and solid engineering. I've built everything from
              real-time streaming platforms to e-commerce solutions and educational tools.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <strong>Goal-Oriented</strong>
                  <p>Always focused on delivering solutions that meet real user needs</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <div>
                  <strong>Performance First</strong>
                  <p>Building fast, scalable applications that can handle scale</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎨</span>
                <div>
                  <strong>Design Conscious</strong>
                  <p>Crafting beautiful UIs that users love to interact with</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a
                href="/Chetan_Mohane_Resume.pdf"
                className="btn-primary"
                id="download-resume-btn"
                target="_blank"
                download="Chetan_Mohane_Resume.pdf"
              >
                <span>📄</span> Download CV
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="about-card glass-card">
              <div className="card-header">
                <span className="card-icon">👨‍💻</span>
                <h3>Quick Facts</h3>
              </div>
              <div className="facts-list">
                {[
                  { label: 'Name', value: 'Chetan Mohane' },
                  { label: 'Role', value: 'Full Stack Developer' },
                  { label: 'Experience', value: '2+ Years' },
                  { label: 'Location', value: 'Bhopal, MP 🇮🇳' },
                  { label: 'Education', value: 'B.Tech CSE (SIRT, RGPV)' },
                  { label: 'Availability', value: 'MERN & Marketing Roles' },
                ].map(({ label, value }) => (
                  <div key={label} className="fact-row">
                    <span className="fact-label">{label}</span>
                    <span className="fact-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fun-facts">
              <div className="fun-fact-card glass-card">
                <span className="fun-number gradient-text">100+</span>
                <span className="fun-text">GitHub Commits</span>
              </div>
              <div className="fun-fact-card glass-card">
                <span className="fun-number gradient-text">∞</span>
                <span className="fun-text">Cups of Coffee</span>
              </div>
              <div className="fun-fact-card glass-card">
                <span className="fun-number gradient-text">0</span>
                <span className="fun-text">Bugs Ignored 😄</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
