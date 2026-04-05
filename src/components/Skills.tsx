import React, { useState } from 'react';
import './Skills.css';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js', icon: '⚛️', level: 90, category: 'Frontend' },
  { name: 'TypeScript', icon: '🔷', level: 85, category: 'Frontend' },
  { name: 'JavaScript', icon: '🟡', level: 92, category: 'Frontend' },
  { name: 'HTML & CSS', icon: '🎨', level: 95, category: 'Frontend' },
  { name: 'Next.js', icon: '▲', level: 75, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', level: 80, category: 'Frontend' },
  // Backend
  { name: 'Node.js', icon: '🟢', level: 85, category: 'Backend' },
  { name: 'Express.js', icon: '🚀', level: 88, category: 'Backend' },
  { name: 'REST APIs', icon: '🔌', level: 90, category: 'Backend' },
  // Database
  { name: 'MongoDB', icon: '🍃', level: 85, category: 'Database' },
  { name: 'MySQL', icon: '🐬', level: 70, category: 'Database' },
  // Design & Marketing
  { name: 'Adobe Photoshop', icon: '🎨', level: 90, category: 'Design' },
  { name: 'Adobe Illustrator', icon: '🖋️', level: 85, category: 'Design' },
  { name: 'Canva', icon: '🖌️', level: 95, category: 'Design' },
  { name: 'UI/UX Design', icon: '✨', level: 88, category: 'Design' },
  { name: 'SEO & Marketing', icon: '📈', level: 92, category: 'Marketing' },
  { name: 'Social Media Ads', icon: '📱', level: 85, category: 'Marketing' },
  { name: 'Meta Ads', icon: '🎯', level: 95, category: 'Marketing' },
  { name: 'IntelliJ IDEA', icon: '💻', level: 88, category: 'Tools' },
  { name: 'Postman', icon: '📮', level: 85, category: 'Tools' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Design', 'Marketing', 'Tools'];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies I've worked with and mastered over the years.
          </p>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              id={`skill-tab-${cat.toLowerCase()}`}
              className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill) => (
            <div key={skill.name} className="skill-card glass-card">
              <div className="skill-top">
                <div className="skill-icon-wrap">
                  <span className="skill-icon">{skill.icon}</span>
                </div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level-text">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
