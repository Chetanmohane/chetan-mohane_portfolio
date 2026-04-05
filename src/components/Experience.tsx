import React from 'react';
import './Experience.css';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  org: string;
  period: string;
  desc: string;
  tags: string[];
}

const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    org: 'BeanGate IT Solutions Pvt. Ltd.',
    period: 'Jan 2026 – Present',
    desc: 'Promoted to full-time developer after a successful internship. Working on end-to-end web applications, real-time features, and scalable server-side systems using MERN stack.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Postman'],
  },
  {
    type: 'work',
    title: 'MERN Stack Developer Intern',
    org: 'BeanGate IT Solutions Pvt. Ltd.',
    period: 'July 2025 – Jan 2026',
    desc: 'Completed a 6-month intensive internship. Developed real-time projects and gained practical experience in application deployment, as recognized by the "Exceptional" performance rating.',
    tags: ['MERN Stack', 'Socket.io', 'REST API', 'JavaScript'],
  },
  {
    type: 'work',
    title: 'Volunteer Experience',
    org: 'IISF-ISF (India International Science Festival)',
    period: 'Volunteer',
    desc: 'Contributing to the mission of science promotion and awareness through active participation in international level events.',
    tags: ['Volunteer', 'Science', 'Event Management'],
  },
  {
    type: 'work',
    title: 'Sales & Marketing Expert',
    org: 'Freelance / Own Business',
    period: '2023 – Present',
    desc: 'Experienced in online selling across platforms like Flipkart, Meesho, Amazon, and Instagram. Expert in exhibition offline sales and Meta Ads.',
    tags: ['Sales', 'Meta Ads', 'E-commerce', 'Strategy'],
  },
  {
    type: 'work',
    title: 'Graphic Designer & SEO',
    org: 'Digital Solutions',
    period: '2023 – 2024',
    desc: 'Specialized in Graphic Design, Social Media Design, and SEO to help businesses grow their digital presence.',
    tags: ['Graphic Design', 'SEO', 'Marketing'],
  },
  {
    type: 'education',
    title: 'Bachelor of Technology (CSE)',
    org: 'Sagar Institute of Research & Technology (RGPV University)',
    period: '2022 – 2026',
    desc: 'Pursuing B.Tech in Computer Science & Engineering. Focused on MERN stack, data structures, and advanced software engineering.',
    tags: ['Computer Science', 'Engineering', 'Algorithms'],
  },
  {
    type: 'education',
    title: 'Higher Secondary School',
    org: 'MP Board',
    period: '2018 – 2020',
    desc: 'Completed HSC in Science stream with focus on Mathematics and Physics. Developed foundational problem-solving skills.',
    tags: ['Science', 'Mathematics', 'Physics'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="exp-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My professional journey and educational background.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, idx) => (
            <div key={idx} className={`timeline-item ${item.type}`}>
              <div className="timeline-dot">
                {item.type === 'work' ? '💼' : '🎓'}
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div>
                    <span className={`timeline-type-badge ${item.type}`}>
                      {item.type === 'work' ? 'Work' : 'Education'}
                    </span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-org">{item.org}</p>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-desc">{item.desc}</p>
                <div className="project-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
